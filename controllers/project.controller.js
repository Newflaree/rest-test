const { request, response } = require( 'express' );

const getProjects = ( req = request, res = response ) => {
  res.json({
    msg: 'get Projects - Controller'
  }); 
}

const postProject = ( req = request, res = response ) => {
  res.json({
    msg: 'post Projects - Controller'
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

