const Cat = require('./example.js')


Cat.findById( '5cc30c650c4eb7aac2014fe9' ).then(cat=> {
    console.log('all the cats that are not sleeping', cat)

    cat.sleeping = !cat.sleeping; 
    cat.age += 10000;    
    cat.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });

})



Cat.updateMany({},   
    { 
        $inc: {salary: 4200}, 
        $set: {sleeping: false} 
    },
    {
        upsert:true
    })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))

