
// // Configuration de la connexion
// const pool = mariadb.createPool({
//   host: 'localhost',
//   user: 'todo_user',     // Nom d'utilisateur MariaDB
//   password: 'password123', // Mot de passe MariaDB
//   database: 'todo_app',   // Nom de la base de données
//   connectionLimit: 5      // Limite de connexions simultanées
// });

// // Exporter la connexion
// module.exports = pool;


// const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//   host: 'localhost', // ou l'adresse de ton serveur MySQL
//   user: 'root',      // utilisateur MySQL
//   password: '',      // mot de passe MySQL
//   database: 'todo_app'
// });

// module.exports = pool;


const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: '',
  user: 'todo_user',     // Nom d'utilisateur MariaDB
  password: 'password123', // Mot de passe MariaDB
  database: 'todo_app',   // Nom de la base de données
  connectionLimit: 5      // Limite de connexions simultanées
});

module.exports = pool;