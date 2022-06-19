const { Router } = require('express');
const {Pokemon} = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', async (req, res, next)=>{
    const {id, image, name, hp, types, 
        attack, defense, speed, height, 
        weight}=req.body
    const newPokemon = await Pokemon.create(
        {id, name, hp,
        attack, defense,
        speed, height, weight})

    res.send(newPokemon)
})

router.get('/',async (req, res, next)=>{
    const {name}=req.query;
    if(name){    
        return res.send(`soy get pokemons query ${name}`)
    }
    return res.send('soy get pokemons');
})

router.get('/:idPokemon',async (req, res, next)=>{
    const {idPokemon}= req.params;
    if(idPokemon){
        return res.send(`soy get pokemons params ${idPokemon}`)
    }
})



module.exports = router;