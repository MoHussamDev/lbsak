// checker controller routes
var express = require('express');
var router = express.Router();
var csrf = require('csurf'); 
const csrfProtection = csrf();
const reviewService = require('../../services/reviewService');

// uploading Middleware 
// Multer Js 



// Validation Middleware 
// Joi Js
const {

validationBody, 

schemas } = require('../../helpers/validators');

// Authenticte Middlewares 
const {

idAdmin,

sameEmail,

preUsedEmail,

authMiddleware } = require('../../middlewares/authenticator');


/// Auth Use MiddleWares 



router.use(   authMiddleware ,   idAdmin   );




////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// Store READ ROUTES  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////




//---------------------
// Read Store Requests 
//--------------------


router.get( '/',


csrfProtection, 

reviewService.showAllReviews


);

router.get( '/deleted',


csrfProtection, 

reviewService.showDeletedProducts


);


router.get( '/product',


csrfProtection, 

reviewService.reviewOneProduct


);



// separate and add category 

////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// Store CREATE ROUTES  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////

router.post( '/product/accept',


csrfProtection, 

reviewService.acceptProduct


);

router.post( '/delete',


csrfProtection, 

reviewService.deleteProduct


);


////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// EDIT Color  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////


//---------------------------
// Update Color Route 
//---------------------------


//---------------------------
// Delete Color Route 
//---------------------------



//---------------------------
// Color Search 
//---------------------------




module.exports = router;