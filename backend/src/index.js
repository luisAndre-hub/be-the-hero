const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
*/

/**
 * Metodo HTTP:
 * 
 * GET:Buscar/listar uma informação do back-end
 * POST:Criar uma informação no back-end
 * PUT:Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipo de parâmetros:
 * 
 * Query  Params: Parametros nomeados enviados na rota apos "?" (Filtro, Paginação)
 * Routes Params : Parametros Utilizados para identificar recursos
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL:MySQL, SQLite, PostgretSQL, Oracle, Microsft SQL Server
  * NoSQL:MongoDB, CouchDB, etc
  */

 /**
  * Driver:SELECT * FROM users
  * Query Builder: table('users').select('*').where() 
  */

app.listen(3333);  