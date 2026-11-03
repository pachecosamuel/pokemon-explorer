# PROJECT_SPEC.md — Pokémon Explorer

## 1. Visão geral
**Objetivo:** aplicação web pequena para pesquisar Pokémon por nome ou número, consultando a PokéAPI por um backend Python com Flask. O projeto será usado em um desafio técnico para seleção de tutores Python.

## 2. Princípios
- Simplicidade, legibilidade e boa estrutura.
- Implementar somente o escopo aprovado.
- Sem banco de dados, autenticação ou deploy.
- Sem React, Streamlit ou frameworks CSS.
- Projeto fácil de executar e explicar didaticamente.

## 3. Tecnologias
| Tecnologia | Responsabilidade |
|---|---|
| Python | Linguagem e lógica do servidor |
| Flask | Aplicação web e rotas |
| Requests | Consulta HTTP à PokéAPI |
| HTML | Estrutura da interface |
| CSS | Estilização simples e responsiva |
| JavaScript | Envio da pesquisa e atualização da interface |
| PokéAPI | Fonte externa de dados |

Documentação: https://pokeapi.co/

## 4. Arquitetura e fluxo
1. O usuário informa nome ou número na página.
2. JavaScript envia uma requisição ao endpoint interno do Flask.
3. Flask valida a entrada.
4. O backend consulta a PokéAPI usando `requests`.
5. O backend seleciona os campos necessários e devolve JSON.
6. JavaScript atualiza a ficha ou apresenta uma mensagem de erro.

Rotas:
- `GET /` — renderiza a página principal.
- `GET /api/pokemon/<identifier>` — consulta por nome ou número.

O navegador não consulta a PokéAPI diretamente.

## 5. Requisitos funcionais
| ID | Requisito | Critério de aceite |
|---|---|---|
| RF01 | Pesquisar Pokémon | Aceita nome ou número. |
| RF02 | Consultar API externa | Backend consulta PokéAPI com Requests. |
| RF03 | Exibir resultado | Mostra nome, número, imagem, tipos, altura, peso e habilidades. |
| RF04 | Tratar Pokémon inexistente | Exibe mensagem amigável. |
| RF05 | Validar entrada | Pesquisa vazia não gera consulta externa. |
| RF06 | Interface simples | Página organizada e responsiva. |

## 6. Requisitos não funcionais
- Código legível e organizado por responsabilidade.
- Timeout na chamada externa.
- Tratamento de erros HTTP e falhas de conexão.
- Não expor stack traces ao usuário.
- Dependências declaradas em `requirements.txt`.
- Instruções de instalação e execução no `README.md`.
- Não incluir ambiente virtual ou cache no Git.

## 7. Estrutura de diretórios
```text
pokemon-explorer/
├── app.py
├── requirements.txt
├── README.md
├── PROJECT_SPEC.md
├── .gitignore
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## 8. Responsabilidades
- `app.py`: inicialização Flask, rotas, validação, consulta à PokéAPI e tratamento de erros.
- `templates/index.html`: estrutura da página.
- `static/css/style.css`: aparência e responsividade.
- `static/js/script.js`: pesquisa, chamada ao endpoint, carregamento e atualização da tela.
- `requirements.txt`: dependências Python.
- `README.md`: apresentação, funcionalidades, pré-requisitos, instalação, execução e exemplos.
- `.gitignore`: ambiente virtual, cache e arquivos locais.
- `PROJECT_SPEC.md`: especificação e decisões vigentes.

## 9. Dependências previstas
```text
Flask
requests
```
Registrar no `requirements.txt` as versões efetivamente utilizadas ao final.

## 10. Critérios de aceite técnico
1. Aplicação inicia localmente conforme o README.
2. Flask serve a página inicial.
3. Pesquisa por nome válido retorna dados.
4. Pesquisa por número válido retorna dados.
5. Resultado apresenta nome, número, imagem, tipos, altura, peso e habilidades.
6. Entrada vazia é tratada sem chamada externa.
7. Pokémon inexistente gera mensagem amigável.
8. Falha ou timeout da API não derruba a aplicação.
9. `requirements.txt` permite instalar dependências.
10. README explica instalação, execução e uso.
11. Repositório GitHub contém os arquivos necessários, sem ambiente virtual.

## 11. Plano de execução
### Etapa 1 — Base
- [x] Criar a estrutura inicial de arquivos e diretórios.
- [x] Criar ambiente virtual e instalar Flask e Requests (validação manual relatada).
- [x] Implementar inicialmente a aplicação Flask e a página principal.
- [x] Validar a execução local e consultas à PokéAPI (validação manual relatada).

### Etapa 2 — Backend
- [x] Implementar inicialmente o endpoint de pesquisa.
- [x] Implementar validação do identificador vazio.
- [x] Implementar consulta à PokéAPI com timeout.
- [x] Implementar seleção e devolução dos campos necessários.
- [x] Implementar tratamento de respostas inválidas, erros HTTP e falhas de conexão.
- [x] Validar pesquisa por nome e número, incluindo identificadores válidos e inexistentes (validação manual relatada).
- [ ] Validar falha de conexão e timeout da PokéAPI.

### Etapa 3 — Interface
- [x] Implementar inicialmente o formulário de pesquisa.
- [x] Implementar indicação de carregamento.
- [x] Implementar apresentação dos dados e mensagens de erro.
- [x] Implementar CSS simples com regra responsiva.
- [x] Validar visualmente e manualmente a interface em tamanhos de tela distintos (ferramentas de desenvolvedor do Chrome; validação relatada).

### Etapa 4 — Revisão e entrega
- [x] Testar nome, número, entrada vazia e Pokémon inexistente (validação manual relatada).
- [ ] Testar falhas de conexão e timeout da API.
- [x] Declarar Flask e Requests em `requirements.txt` e criar `.gitignore` para ambiente virtual e cache.
- [x] Escrever README inicial com instalação, execução e uso.
- [ ] Documentar comandos de ativação da venv separadamente para PowerShell, CMD e Git Bash.
- [ ] Conferir repositório público e link de entrega.

### Registro de progresso
- Estrutura inicial do projeto criada.
- Backend e frontend implementados inicialmente, conforme o escopo aprovado.
- Compilação sintática de `app.py` validada com `python -m py_compile app.py`.
- Execução local da página e integração com a PokéAPI por pesquisas válidas e inexistentes foram validadas manualmente pelo usuário.
- Na validação relatada, foram pesquisados Pokémon por sequência numérica até 1025 e por nomes como Pikachu, Charmander, Mewtwo e Bulbasaur.
- O envio do formulário sem valor não iniciou pesquisa e não exibiu mensagem; avaliar mensagem orientativa para esse estado.
- Ao ocorrer erro na busca, o resultado anterior permanece visível; avaliar limpeza ou outra indicação que evite interpretação equivocada.
- Falha de conexão e timeout da PokéAPI continuam pendentes de validação.
- Repositório Git local inicializado; a validação de publicação remota continua pendente.
- O README atual apresenta ativação para PowerShell e macOS/Linux, mas ainda não documenta comandos específicos de CMD e Git Bash.

## 12. Fora do escopo
- Autenticação, usuários ou banco de dados.
- Favoritos, histórico ou comparação.
- Deploy em nuvem.
- React, Streamlit ou frameworks de interface.
- Testes automatizados extensos.

## 13. Regras de colaboração com ferramentas de IA
Antes de modificar o projeto, o agente deve ler este documento. Trabalhar em etapas delimitadas e, ao concluir cada uma, informar:
- Arquivos criados ou alterados.
- Resumo das decisões técnicas.
- Como executar e validar.
- Pendências ou limitações.

Não alterar requisitos, tecnologias ou adicionar funcionalidades sem autorização. Se uma decisão aprovada mudar, atualizar este documento.

## 14. Decisões arquiteturais
- Flask foi escolhido por estar entre as opções do desafio.
- Interface em HTML, CSS e JavaScript simples, servida pelo Flask.
- Requests será utilizado no backend para consultar a PokéAPI.
- Frontend não acessará diretamente a API externa.
- Sem banco de dados, autenticação ou deploy.
- Prioridade para clareza e facilidade de explicação, não complexidade.
