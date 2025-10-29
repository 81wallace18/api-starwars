// Script de inicialização do MongoDB
// Este script será executado quando o container MongoDB iniciar pela primeira vez

db = db.getSiblingDB('starwars');

// Criar um usuário para o banco de dados starwars
db.createUser({
  user: 'starwars_user',
  pwd: 'starwars_password',
  roles: [
    {
      role: 'readWrite',
      db: 'starwars'
    }
  ]
});

// Inserir alguns dados iniciais (opcional)
db.films.insertMany([
  {
    title: "Uma Nova Esperança",
    description: "A princesa Leia é capturada pelo Império, mas Luke Skywalker e Han Solo a resgatam.",
    image_url: "https://example.com/episode4.jpg",
    trailer_url: "https://example.com/episode4_trailer.mp4"
  },
  {
    title: "O Império Contra-Ataca",
    description: "Os rebeldes são derrotados em Hoth, enquanto Luke aprende com Yoda.",
    image_url: "https://example.com/episode5.jpg",
    trailer_url: "https://example.com/episode5_trailer.mp4"
  },
  {
    title: "O Retorno de Jedi",
    description: "Luke enfrenta Darth Vader e o Imperador na batalha final.",
    image_url: "https://example.com/episode6.jpg",
    trailer_url: "https://example.com/episode6_trailer.mp4"
  }
]);

print('Banco de dados starwars inicializado com sucesso!');