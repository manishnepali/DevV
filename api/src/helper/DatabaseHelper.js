async function createTables(pg) {
   await pg.schema.hasTable('user').then(function(exists){
        if (!exists){
            return pg.createTables('users', function(t){
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