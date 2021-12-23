const db = require('../helper/DatabaseHelper');

const result = [
    {
        id : 'id',
        propeties: ['model_name', 'model_discrtiption']
    }
] 

const findAll = () =>{
    return db
    .fetch(
        'id as id',
        'model_name as madel_name',
        'model_discrtiption'
    ).then((result) =>
    console.log(result));

}

module.exports = {findAll}