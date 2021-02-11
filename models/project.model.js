const { Schema, model } = require( 'mongoose' );

const ProjectSchema = Schema({
  proyecto: {
    type: String,
    required: [ true, 'El proyecto es obligatorio' ]
  },
  subproyecto: {
    type: String,
    required: [ true, 'Debe indicar un subproyecto' ]
  },
  estatus: {
    type: Number,
    default: 0

  },
  timestamp: {
    type: String
  }  
});

ProjectSchema.methods.toJSON = function() {
  const { __v, _id, ...project } = this.toObject();
  return project;
}

module.exports = model( 'Project', ProjectSchema );
