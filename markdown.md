# ⚽ Futurologia AI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaulomaxf%2Ffuturologia-ia)
[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://githubbox.com/paulomaxf/futurologia-ia)

Um aplicativo que prevê resultados de partidas de futebol usando inteligência artificial, analisando estatísticas em tempo real.

![Preview](public/screenshot.png)

## 🚀 Como Usar

### Pré-requisitos
- Node.js 18+
- Contas nas APIs:
  - [OpenAI](https://platform.openai.com/) (para análise com GPT)
  - [API-Football](https://www.api-football.com/) (para dados de estatísticas)

### Instalação Local
```bash
# Clone o repositório
git clone https://github.com/paulomaxf/futurologia-ia.git
cd futurologia-ia

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas chaves

# Inicie o servidor
npm run dev