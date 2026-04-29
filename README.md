# LocalInfo‑Back

## Visão Geral  
**LocalInfo‑Back** é o servidor backend do sistema LocalInfo, projetado para gerenciar e disponibilizar informações de locais e contextos geográficos. Ele oferece endpoints REST para registro, consulta e modificação de dados locais, proporcionando suporte a aplicações front‑end que desejam exibir ou manipular essas informações.

## Funcionalidades principais  
- Cadastro e autenticação de usuários  
- Criação, leitura, atualização e exclusão (CRUD) de “locais” ou entidades de informação local  
- Busca e filtragem de locais conforme critérios (por exemplo: cidade, categoria, proximidade geográfica)  
- Integração com banco de dados (ex: MongoDB ou outro) para persistência  
- Configuração via variáveis de ambiente para facilitar deployment  

## Tecnologias utilizadas  
- Node.js (JavaScript)  
- Express  
- MongoDB
- Variáveis de ambiente via arquivo `.env`  
- Estrutura modular com pastas como `src/` para organização do código  

## Estrutura do repositório  
```text
.
├── src/                # Código‑fonte principal
├── .env                 # Variáveis de ambiente (não versionadas)
├── .env.exemple         # Exemplo de arquivo de configuração
├── server.js / index.js # Arquivo de entrada
├── package.json         # Dependências e scripts
└── README.md            # Esta documentação
```

## Contato  
Desenvolvido por **Warllen Barreiros** ([@UarliBS](https://github.com/UarliBS)) e **Gabriel Gomes** ([@gomess99](https://github.com/gomess99)).  
Para dúvidas ou sugestões, abra uma issue ou envie mensagem via GitHub.
