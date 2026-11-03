# Pokémon Explorer

Aplicação web simples para pesquisar Pokémon pelo nome ou número usando Flask, Requests e a PokéAPI.

## Pré-requisitos

- Python 3 instalado
- Acesso à internet para consultar a PokéAPI

## Instalação

Na raiz do projeto, crie e ative um ambiente virtual no PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

No macOS ou Linux, os comandos de ativação são:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

## Execução

Com o ambiente virtual ativo:

```bash
python app.py
```

Abra <http://127.0.0.1:5000> no navegador. Pesquise por um nome, como `pikachu`, ou por um número, como `25`.

O navegador chama o endpoint Flask `/api/pokemon/<identifier>`. O backend consulta a PokéAPI com timeout e devolve somente os campos usados pela interface.
