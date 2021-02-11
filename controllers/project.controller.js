const { request, response } = require( 'express' );

const Project = require( '../models/project.model' );

const getProjects = async( req = request, res = response ) => {
  const projects = await Project.find();

  res.json({
    msg: 'Todos los proyectos',
    projects
  }); 
}

const postProject = async( req = request, res = response ) => {
  const body = req.body;
  const project = new Project( body );

  await project.save();

  res.json({
    msg: 'Proyecto Creado',
    project
  }); 
}

const putProject = ( req = request, res = response ) => {
  res.json({
    msg: 'put Projects - Controller'
  }); 
}

const deleteProject = ( req = request, res = response ) => {
  res.json({
    msg: 'delete Projects - Controller'
  }); 
}

module.exports = {
  getProjects,
  postProject,
  putProject,
  deleteProject
}

