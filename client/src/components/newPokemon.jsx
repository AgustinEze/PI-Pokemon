import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getTypes, postNewPokemon } from '../store/actions';

export const NewPokemon = ()=>{
    let dispatch=useDispatch();
    let types = useSelector(store=>store.types)

    const [pokemon, setPokemon]=useState({
        image:'',
        name:'',
        type:[],
        hp:null,
        attack:null,
        defense:null,
        height:null,
        weight:null,
        speed:null
    })
    const [error, setError]=useState({
        //image: false,
        name:null,
        //type:false,
        hp:null,
        attack:null,
        defense:null,
        height:null,
        weight:null,
        speed:null
    })

    function handleCheck(e){
        if (e.target.checked) {
            setPokemon({
              ...pokemon,
              type: [...pokemon.type, Number(e.target.value)],
            });
          } else {
            setPokemon({
              ...pokemon,
              type: pokemon.type.filter((t) => t !== Number(e.target.value)),
            });
          }
        validatePokemon('type')
    }
    
    function validatePokemon(key){
        console.log(key)
        if(key==='name'){
            if(pokemon[key]<3)
                setError({...error, name:true})
            else{setError({...error,name: false})}
        }
        else if(key==='image'){
            if (typeof(pokemon[key])!=='string')
                setError({...error, image:true})
        }
        else if(key==='type'){
            if(pokemon[key].length<1)
                setError({...error, type:true})
            else setError({...error, type:false})
        }
        else{
            if(pokemon[key]<1)
                setError({...error, [key]:true})
                else setError({...error, [key]:false})
        }
        console.log(error)
    }

    function handleSubmit(e){

        e.preventDefault()
        if(Object.values(error).every(err => err===false)){
            dispatch(postNewPokemon(pokemon))
            alert("El nuevo pokemon fue creado")
        }else(alert("Revisar formulario"))
    }

    function onChange(e){
        if(e.target.name==='name'){
            setPokemon({...pokemon,[e.target.name]:e.target.value})
            validatePokemon(e.target.name)
        }else if(e.target.name==='image'){
            setPokemon({...pokemon,[e.target.name]:e.target.value})
            validatePokemon(e.target.name)
        }else{
            setPokemon({...pokemon,[e.target.name]:Number(e.target.value)})
            validatePokemon(e.target.name)
        }
    }
    return(
        <div className='form'>
            <Link to='/pokemons'>
                <button>Volver </button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label>Image  
                 <input name='image' onChange={e=>onChange(e)}></input>
                </label>

                <label>Name  
                 <input name='name' onChange={e=>onChange(e)}></input>
                 {error.name?(<h4 className="error"><small>Nombre invalido</small></h4>) : false}
                </label>

                <label>Type</label>  
                {types.map((type, i) => {
                    return (
                    <div key={i}>
                        <label>
                        <input
                            type="checkbox"
                            name={type.name}
                            id={i}
                            value={type.id}
                            onChange={e=>handleCheck(e)}
                        />
                        {type.name}
                        </label>
                        <br />
                    </div>
                    );
                })}
                

                <label>Health points 
                 <input name='hp' onChange={e=>onChange(e)}></input>
                 {error.hp?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <label>Attack  
                 <input name='attack' onChange={e=>onChange(e)}></input>
                 {error.attack?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <label>Defense  
                 <input name='defense' onChange={e=>onChange(e)}></input>
                 {error.defense?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <label>Speed 
                 <input name='speed' onChange={e=>onChange(e)}></input>
                 {error.speed?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <label>Height  
                 <input name='height' onChange={e=>onChange(e)}></input>
                 {error.height?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <label>Weight  
                 <input name='weight' onChange={e=>onChange(e)}></input>
                 {error.weight?(<h4 className="error"><small>Debe ser mayor a diez</small></h4>) : false}
                </label>

                <button type='submit' onChange={e=>onChange(e)}>Add Pokemon</button>
            </form>
        </div>
    )
}