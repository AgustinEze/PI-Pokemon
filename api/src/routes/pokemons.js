const { default: axios } = require('axios');
const { Router } = require('express');
const {Pokemon, Type} = require('../db');

const router = Router();

const MAX_POKES = 20

// luis
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', async (req, res, next)=>{ 
    const {id, image, name, hp, type, 
        attack, defense, speed, height, 
        weight}=req.body
    try{const newPokemon = await Pokemon.create(
        {id, name, hp,
        attack, defense,
        speed, height, weight, image
    });

    type.length? newPokemon.addTypes(type.map(t=>t*1)):newPokemon.addTypes(10001)
    
    res.status(200).send('Creacion OK')
    }catch(err){
        console.log(err)
        res.status(400).send('Error de creacion') 
    }
})
////////////////////////////////////


////////////////////////////////////
router.get('/',async (req, res, next)=>{
    const {name}=req.query;
    if(name){
        try{
            let pokeDb =await Pokemon.findOne({where:{name}, include:[Type]})
            if(pokeDb) return res.send([pokeDb])
            let pokeApi= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            return res.send ([{
                id: pokeApi.data.id,
                name: pokeApi.data.name,
                image: pokeApi.data.sprites.other.dream_world.front_default,
                //hp: pokeApi.data.stats.filter(st=>st.stat.name==='hp')[0].base_stat,
                //attack: pokeApi.data.stats.filter(st=>st.stat.name==='attack')[0].base_stat,
                //defense: pokeApi.data.stats.filter(st=>st.stat.name==='defense')[0].base_stat,
                //speed: pokeApi.data.stats.filter(st=>st.stat.name==='speed')[0].base_stat,
                //heigth: pokeApi.data.height, 
                //weight: pokeApi.data.weight,
                type: pokeApi.data.types.map(t=>t.type.name)
            }])
      
        }catch(err){
            console.log("err")
            return res.status(404).send('No se encontro')
        }    
    }
    //not query
    try{
        const pokemonDb = await Pokemon.findAll({include:{model: Type},attributes:['id', 'name', 'image', 'attack']})

        let pokemonUrl =await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKES}`)
        pokemonUrl = pokemonUrl.data.results.map(poke => poke.url)
        pokemonData = await Promise.all(pokemonUrl.map(async(url)=> await axios.get(url)))
 
        const pokemonApi = pokemonData.map((dataPoke)=>{
            return {
            id: dataPoke.data.id,
            name: dataPoke.data.name,
            image: dataPoke.data.sprites.other.dream_world.front_default,
            //hp: dataPoke.data.stats.filter(st=>st.stat.name==='hp')[0].base_stat,
            attack: dataPoke.data.stats.filter(st=>st.stat.name==='attack')[0].base_stat,
            //defense: dataPoke.data.stats.filter(st=>st.stat.name==='defense')[0].base_stat,
            //speed: dataPoke.data.stats.filter(st=>st.stat.name==='speed')[0].base_stat,
            //heigth: dataPoke.data.height, 
            //weight: dataPoke.data.weight,
            type: dataPoke.data.types.map(t=>t.type.name)
        }})
        return res.send([...pokemonDb,...pokemonApi])
    }catch(err){
        console.log(err)
        res.status(400).send('Error')
    }     
})

router.get('/:idPokemon',async (req, res, next)=>{
    let {idPokemon}= req.params;
    try{
        const pokeDb = await Pokemon.findByPk(idPokemon, {include:{model: Type}})
        if(pokeDb) return res.send(pokeDb)
        const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        return res.send ({
            id: pokeApi.data.id,
            name: pokeApi.data.name,
            image: pokeApi.data.sprites.other.dream_world.front_default,
            hp: pokeApi.data.stats.filter(st=>st.stat.name==='hp')[0].base_stat,
            attack: pokeApi.data.stats.filter(st=>st.stat.name==='attack')[0].base_stat,
            defense: pokeApi.data.stats.filter(st=>st.stat.name==='defense')[0].base_stat,
            speed: pokeApi.data.stats.filter(st=>st.stat.name==='speed')[0].base_stat,
            height: pokeApi.data.height, 
            weight: pokeApi.data.weight,
            type: pokeApi.data.types.map(t=>t.type.name)
        }) 
    }catch(err){
        console.log(err)
        return res.status(404).send('No se encontro')
    }
})



module.exports = router;