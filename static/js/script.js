const form = document.querySelector("#search-form");
const input = document.querySelector("#pokemon-query");
const button = form.querySelector("button");
const statusMessage = document.querySelector("#status");
const resultCard = document.querySelector("#pokemon-result");
const image = document.querySelector("#pokemon-image");
const imageFallback = document.querySelector("#image-fallback");

function showList(element, values) {
  element.textContent = values.length ? values.join(", ") : "Não informado";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const identifier = input.value.trim();

  if (!identifier) {
    statusMessage.textContent = "Informe o nome ou número de um Pokémon.";
    statusMessage.className = "status error";
    resultCard.hidden = true;
    return;
  }

  button.disabled = true;
  statusMessage.textContent = "Buscando Pokémon…";
  statusMessage.className = "status";
  resultCard.hidden = true;

  try {
    const response = await fetch(`/api/pokemon/${encodeURIComponent(identifier)}`);
    const pokemon = await response.json();
    if (!response.ok) throw new Error(pokemon.error || "Não foi possível buscar o Pokémon.");

    document.querySelector("#pokemon-number").textContent = `Nº ${pokemon.number}`;
    document.querySelector("#pokemon-name").textContent = pokemon.name;
    showList(document.querySelector("#pokemon-types"), pokemon.types);
    document.querySelector("#pokemon-height").textContent = `${(pokemon.height / 10).toFixed(1)} m`;
    document.querySelector("#pokemon-weight").textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;
    showList(document.querySelector("#pokemon-abilities"), pokemon.abilities);

    image.hidden = !pokemon.image;
    imageFallback.hidden = Boolean(pokemon.image);
    if (pokemon.image) {
      image.src = pokemon.image;
      image.alt = `Ilustração de ${pokemon.name}`;
      image.onerror = () => { image.hidden = true; imageFallback.hidden = false; };
    }
    resultCard.hidden = false;
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = error.message;
    statusMessage.className = "status error";
  } finally {
    button.disabled = false;
  }
});
