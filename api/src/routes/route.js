const express = require('express');
const router = express.Router();

const model = require('../controller/3dModels.controller');

router.get('/3dModel', model.all);
router.get('/3dmodel_description', model.allDes);
router.put('/3dmodel_description/:id', model.update);
router.delete('/3dModel/:id', model.delete);
router.use((req, res) => {
    res.status("404").send({message: "This entry point does not exist !"})
});

module.exports =router;