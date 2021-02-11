const { Router } = require( 'express' );

const { 
  getProjects,
  postProject,
  putProject,
  deleteProject
} = require( '../controllers/project.controller' );

const router = new Router();

router.get( '/', getProjects );
router.post( '/', postProject );
router.put( '/', putProject );
router.delete( '/', deleteProject );


module.exports = router;

