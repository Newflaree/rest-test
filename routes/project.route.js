const { Router } = require( 'express' );

const { 
  getProjects,
  postProject,
  putProject,
  deleteProject
} = require( '../controllers/project.controller' );

const router = new Router();

router.get( '/projects', );
router.post( '/projects', );
router.put( '/projects', );
router.delete( '/projects', );


module.exports = router;

