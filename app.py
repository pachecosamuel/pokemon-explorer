"""Small Flask application for searching Pokémon through the PokéAPI."""

from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/{}"
REQUEST_TIMEOUT_SECONDS = 5


@app.get("/")
def index():
    """Render the search page."""
    return render_template("index.html")


@app.get("/api/pokemon/<identifier>")
def get_pokemon(identifier):
    """Look up a Pokémon by name or Pokédex number."""
    identifier = identifier.strip().lower()
    if not identifier:
        return jsonify(error="Informe o nome ou número de um Pokémon."), 400

    try:
        response = requests.get(
            POKEAPI_URL.format(identifier), timeout=REQUEST_TIMEOUT_SECONDS
        )
        if response.status_code == 404:
            return jsonify(error="Pokémon não encontrado. Confira o nome ou número."), 404
        response.raise_for_status()
        data = response.json()
    except requests.Timeout:
        return jsonify(error="A consulta demorou demais. Tente novamente."), 504
    except requests.ConnectionError:
        return jsonify(error="Não foi possível conectar à PokéAPI. Tente novamente."), 502
    except requests.RequestException:
        app.logger.exception("PokéAPI request failed")
        return jsonify(error="Não foi possível consultar a PokéAPI."), 502
    except ValueError:
        app.logger.exception("PokéAPI returned invalid JSON")
        return jsonify(error="A PokéAPI retornou uma resposta inválida."), 502

    sprites = data.get("sprites") or {}
    result = {
        "name": data.get("name", " desconhecido").replace("-", " ").title(),
        "number": data.get("id"),
        "image": (sprites.get("other", {}).get("official-artwork", {}).get("front_default")
                  or sprites.get("front_default")),
        "types": [item["type"]["name"] for item in data.get("types", [])],
        "height": data.get("height"),
        "weight": data.get("weight"),
        "abilities": [item["ability"]["name"].replace("-", " ").title()
                      for item in data.get("abilities", [])],
    }
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
