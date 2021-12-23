const models = require('../models/3dmodels');

/**
 * get all 3dMdoels
 * @param {*} req 
 * @param {*} res 
 */
exports.all = async(req, res) => {
    models
    .findAll()
    .then((models)=>{
        res.status(200).send({
            count: models.length,
            models
        })
    })
    .catch((err)=>{
        res.status(500).send({ err })
    })
    
}

exports.allDes = async(req, res) => {
    res.status(200).send({ "3dmodel_descriptions":"ALL descriptions" })
}

/**
 * Update a description of a 3DModel
 * @param {*} res 
 * @param {*} req 
 */
exports.update = async(res, req)=> {
    res.status(200).send({"3dmodel_description":"Update"})
}

/**
 * Delete a 3d model
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = async(req, res) => {
    res.status(200).send({ "3dmodel":"Delete" })
}