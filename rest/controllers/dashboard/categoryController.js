// checker controller routes
var express = require('express');
var router = express.Router();
var csrf = require('csurf'); 
const csrfProtection = csrf();
const categoryService = require('../../services/categoryService');

// uploading Middleware 
// Multer Js a

const { upload } = require('../../middlewares/uploadImage');


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


router.get( '/types',


csrfProtection, 

categoryService.showTypes


);

router.get( '/types/edit',

csrfProtection, 

categoryService.showOneType


);

router.get( '/class',


csrfProtection, 

categoryService.showClasses


);
router.get( '/class/edit',


csrfProtection, 

categoryService.showOneClass


);


router.get( '/variants',

csrfProtection, 

categoryService.showVariants

);
router.get( '/variants/edit',

csrfProtection, 

categoryService.showOneVariant

);
// separate and add category 

////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// Store CREATE ROUTES  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////

router.post( '/types/add',

validationBody(schemas.addTypeSchema),

csrfProtection, 

categoryService.addTypes

)

router.post( '/types/edit',

validationBody(schemas.addTypeSchema),

csrfProtection, 

categoryService.addTypes

)


router.post( '/class/add',

validationBody(schemas.addClassSchema),

csrfProtection, 

categoryService.addClass

)
router.post( '/class/edit',

validationBody(schemas.addClassSchema),

csrfProtection, 

categoryService.updateOneClass

)


router.post( '/variants',

validationBody(schemas.addVariantSchema),

csrfProtection, 

categoryService.addVariant

)
router.post( '/variants/edit',

validationBody(schemas.addVariantSchema),

csrfProtection, 

categoryService.updateOneVariant

)




////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// EDIT Color  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////

router.post( '/types/delete',

csrfProtection, 

categoryService.deleteOneType

)
router.post( '/class/delete',

csrfProtection, 

categoryService.deleteOneClass

)
router.post( '/variant/delete',

csrfProtection, 

categoryService.deleteOneClass

)

//---------------------------
// Update Color Route 
//---------------------------



//---------------------------
// Delete Color Route 
//---------------------------

////////////////////////////////////////////////
////////////////////////////////////////////////
// +++ /// Search  // ++++// //////
////////////////////////////////////////////////
////////////////////////////////////////////////
//---------------------------
// Types Search 
//---------------------------

router.post('/types/searchResult',

csrfProtection,


categoryService.searchShowType

); 


//---------------------------
// Class Search 
//---------------------------

router.post('/class/searchResult',

csrfProtection,


categoryService.searchShowClass

); 


//---------------------------
// Variant Search 
//---------------------------

router.post('/variants/searchResult',

csrfProtection,


categoryService.searchShowVariant

); 


module.exports = router;