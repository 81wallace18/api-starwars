# Star Wars API

Uma API RESTful para gerenciar filmes de Star Wars, construída com Node.js, Express e MongoDB.

## Configuração com Docker Compose

Este projeto inclui configuração completa com Docker Compose para facilitar o desenvolvimento.

### Pré-requisitos

- Docker instalado
- Docker Compose instalado

### Como executar

1. Clone este repositório:
```bash
git clone <url-do-repositorio>
cd api-starwars
```

2. Execute os containers com Docker Compose:
```bash
docker-compose up -d
```

3. Verifique se os containers estão rodando:
```bash
docker-compose ps
```

4. Acesse a API em http://localhost:3000

### Estrutura dos Containers

- **API**: Roda na porta 3000
- **MongoDB**: Roda na porta 27017

### Banco de Dados

O MongoDB será configurado automaticamente com:
- Banco de dados: `starwars`
- Usuário admin: `admin` / `password`
- Usuário do aplicativo: `starwars_user` / `starwars_password`
- Dados iniciais de filmes serão inseridos automaticamente

### Endpoints da API

- `GET /` - Lista todos os filmes
- `POST /` - Cria um novo filme
- `PUT /:id` - Atualiza um filme pelo ID
- `DELETE /:id` - Remove um filme pelo ID

### Exemplo de uso

#### Criar um novo filme
```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "O Despertar da Força",
    "description": "Uma nova ameaça surge para a galáxia...",
    "image_url": "https://example.com/episode7.jpg",
    "trailer_url": "https://example.com/episode7_trailer.mp4"
  }'
```

#### Listar todos os filmes
```bash
curl http://localhost:3000/
```

### Desenvolvimento Local

Se preferir rodar localmente sem Docker:

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente no arquivo `.env`

3. Execute a aplicação:
```bash
node src/index.js
```

### Parar os containers

```bash
docker-compose down
```

Para remover também os volumes (dados do banco):
```bash
docker-compose down -v