async function createTables(postgres) {
   await postgres.schema.hasTable('user').then( async function(exists){
        if (!exists){
            return postgres.schema.createTable('models', function(t){
                t.increments('id').primary();
                t.uuid('uuid');
                t.string('model_name', 100);
                t.string('model_discrtiption', 800);
            })
        }
        else{
            console.log('this model already exist')
        }
    })
}

module.exports ={createTables}