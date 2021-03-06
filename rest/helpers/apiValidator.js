const  Joi = require('@hapi/joi');


module.exports  = {
    validationBody: (schemas)=>{
        return (req,res,next)=>{
            const result  = schemas.validate(req.body)
            if (result.error){
                return res.json({error:true,msg:"Validation Error: " + result.error.details[0].message})
            }
            if(!req.value){ req.value= {}}
            req.value['body'] = result.value;
            next()
        }
    },
    validationFunction: (body,schemas)=>{

        const result  = schemas.validate(body);
        
        return result

    
    },
    schemas:{
        loginSchema:Joi.object().keys({
            email:Joi.string().email().required(),
            password:Joi.string().required()
        }),
        productRegular:Joi.object().keys({
            name:Joi.string().required(),
            storeId:Joi.string().required(),
            sku:Joi.string().required(),
            buyPrice:Joi.string().required(),
            sellPrice:Joi.string().required(),
            classId:Joi.string().required(),
            varId:Joi.string().required(),
        }),
        productVarient:Joi.object().keys({
            storeId:Joi.string().required(),
            colorId:Joi.string().required(),
            image:Joi.string().required(),
            filename:Joi.string().required(),
        }),
        productSizeQuantity:Joi.object().keys({
            storeId:Joi.string().required(),
            varientId:Joi.string().required(),
            sizeQuantityId:Joi.string().required(),
            sizeId:Joi.string().required(),
            allQuantity:Joi.string().required(),
        }),
        addQuantity:Joi.object().keys({
            varientId:Joi.string().required(),
            sizeQuantityId:Joi.string().required(),
            newQuantity:Joi.string().required(),
        }),
        addVariant:Joi.object().keys({
            storeId:Joi.string().required(),
            colorId:Joi.string().required(),
            image:Joi.string().required(),
            filename:Joi.string().required(),
        }),
        addSize:Joi.object().keys({
            storeId:Joi.string().required(),
            varientId:Joi.string().required(),
            sizeId:Joi.string().required(),
            allQuantity:Joi.string().required(),
        }),
    }
}