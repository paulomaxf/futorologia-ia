# futorologia-iafuturologia-ia/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuração de deploy automático na Vercel
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts        # Rota da API (Next.js)
│   └── page.tsx                # Página principal
├── components/
│   ├── MatchAnalysis.tsx       # Componente de resultados
│   └── TeamStats.tsx           # Estatísticas dos times
├── lib/
│   ├── apiFootball.ts          # Integração com API de futebol
│   └── openai.ts               # Integração com OpenAI
├── public/
│   ├── soccer-icon.png         # Ícone do app
│   └── loading.gif             # Animação de carregamento
├── .env.example                # Modelo de variáveis de ambiente
├── .gitignore                  # Ignora node_modules e .env
├── next.config.js              # Configuração do Next.js
├── package.json                # Dependências e scripts
├── README.md                   # Documentação do projeto
└── tailwind.config.js          # Configuração do TailwindCSS
