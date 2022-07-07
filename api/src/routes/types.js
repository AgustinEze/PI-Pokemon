const { Router } = require('express');
const { default: axios } = require('axios');
const {Type} = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async (req, res, next)=>{
    try{let allTypes = await Type.findAll();
        if(!allTypes.length){
            allTypes = await axios.get('https://pokeapi.co/api/v2/type');

            let urls = allTypes.data.results.map(type =>{
                return type.url});
            allTypes = await Promise.all(urls.map(async url =>await axios.get(url)))
            
            allTypes = allTypes.map(res=>{
                const{id, name}=res.data
                return {id,name}
            })

            allTypes.forEach(async type => {
                await Type.create(type)
            });
        }
        return res.json(allTypes)
    }
    catch(err){
        console.log(err);
        res.status(400).send('Error types');
    }
})

module.exports = router;