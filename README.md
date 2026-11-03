# Pokémon Explorer

Aplicação web simples para pesquisar Pokémon pelo nome ou número usando Flask, Requests e a PokéAPI.

## Pré-requisitos

- Python 3 instalado
- Acesso à internet para consultar a PokéAPI

## Instalação

Na raiz do projeto, crie o ambiente virtual com Python 3. No Windows, use `py`; no macOS/Linux, use `python3`.

### PowerShell

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

### CMD (Prompt de Comando)

```cmd
py -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
```

### Git Bash

```bash
py -m venv .venv
source .venv/Scripts/activate
python -m pip install -r requirements.txt
```

### macOS/Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

## Execução

Com o ambiente virtual ativo, inicie o servidor:

```bash
python app.py
```

Abra <http://127.0.0.1:5000> no navegador. Pesquise por um nome, como `pikachu`, ou por um número, como `25`.

Abra <http://127.0.0.1:5000> no navegador. Pesquise por um nome, como `pikachu`, ou por um número, como `25`. O navegador chama o endpoint Flask `/api/pokemon/<identifier>`; o backend consulta a PokéAPI com timeout e devolve os campos usados pela interface.
