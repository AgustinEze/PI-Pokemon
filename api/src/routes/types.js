const { Router } = require('express');
const axios = require('axios')
const {Type} = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async (req, res, next)=>{
    try{let allTypes = await Type.findAll();
        if(!allTypes.length){
            allTypes = await axios.get('https://pokeapi.co/api/v2/type');
            console.log(allTypes.data.results)
        }
        return res.json(allTypes.data.results)
    }
    catch(err){console.log(err)}
    
})

module.exports = router;