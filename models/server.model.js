const express = require( 'express' );
const cors = require( 'cors' );

const { dbConnection } = require( '../database/config.db' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.projectPath = '/api/projects'

    // Conectar a base de datos
    this.dbConnect();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  } 

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use( cors() );

    // Parse JSON
    this.app.use( express.json() );

    // Public
    this.app.use( express.static( 'public' ) );
  }

  routes() {
    this.app.use( this.projectPath, require( '../routes/project.route' ) );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( 'Listening on port: ', this.port );
    });
  }
}

module.exports = Server;
