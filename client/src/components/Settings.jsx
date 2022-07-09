import React from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, restoreFilters } from '../store/actions'
import './Settings.css'

export function Settings(){
    let types = useSelector(store=>store.types)
    let pokemons = useSelector(store=>store.pokemons)
    let dispatch = useDispatch()
    let pokes = [...pokemons]

    const [filterObj, setFilterObj]= useState({
        filter:[],
        created:'all',
        sortByName:'',
        sortByAttack:''
    })
    
    function handleCheck(e){
        if(e.target.checked){
            setFilterObj({
                ...filterObj,
                filter:[...filterObj.filter, (e.target.name)]
            })
        }else{
            setFilterObj({
                ...filterObj,
                filter: filterObj.filter.filter((t) => t !== (e.target.name)),
            })
        }
    }
    function handleCreated(e){
        if(e.target.value==='all'){
            setFilterObj({
                ...filterObj,
                created: 'all'
            })
        }else if(e.target.value==='user'){
            setFilterObj({
                ...filterObj,
                created: 'user'
            })
        }
        else{
            setFilterObj({
                ...filterObj,
                created: 'existing'
            })
        }
    }

    function handleName(e){
        if(e.target.value==='asc'){
            setFilterObj({
                ...filterObj,
                sortByName: 'asc'
            })
        }else if(e.target.value==='des'){
            setFilterObj({
                ...filterObj,
                sortByName: 'des'
            })
        }else{
            setFilterObj({
                ...filterObj,
                sortByName: ''
            })
        }
    }

    function handleAttack(e){
        if(e.target.value==='asc'){
            setFilterObj({
                ...filterObj,
                sortByAttack: 'asc'
            })
        }else if(e.target.value==='des'){
            setFilterObj({
                ...filterObj,
                sortByAttack: 'des'
            })
        }else{
            setFilterObj({
                ...filterObj,
                sortByAttack: ''
            })
        }
    }

    function applyFilters(){
        if(filterObj.created==='all'){
            pokes = [...pokemons]
        }
        else if(filterObj.created === 'user'){
            pokes = pokes.filter(poke=>typeof(poke.id)==='string')
        }
        else{
            pokes = pokes.filter(poke => typeof(poke.id)==='number')
        }

        if(filterObj.filter.length){
            pokes= pokes.filter(poke=>{
                if(!!poke.type){
                    return poke.type.some(t=>filterObj.filter.includes(t))
                }
                /* else {
                    return poke.types.some(t=>filterObj.filter.includes(t.name))
                } */
            })
        }

        if(filterObj.sortByName==='asc'){
            pokes.sort((a,b)=>{
                if (a.name>b.name) return 1
                else if(a.name<b.name) return -1
                else return 0
            })
        }
        if(filterObj.sortByName==='des'){
            pokes.sort((a,b)=>{
                if (a.name>b.name) return -1
                else if(a.name<b.name) return 1
                else return 0
            })
        }

        if(filterObj.sortByAttack==='asc'){
            pokes.sort((a,b)=>{
                if (a.attack>b.attack) return 1
                else if(a.attack<b.attack) return -1
                else return 0
            })
        }
        if(filterObj.sortByAttack==='des'){
            pokes.sort((a,b)=>{
                if (a.attack>b.attack) return -1
                else if(a.attack<b.attack) return 1
                else return 0
            })
        }
    }
    function handleRestore(){
        dispatch(restoreFilters())
    }
    function handleView(){
        applyFilters()
        dispatch(setFilters(pokes))
    }

    return(
        <div className='settings'>
            <fieldset>
                <legend>Filter By</legend>
                <label>Type</label>
                {types.map((type, i) => {
                    return (
                    <div className='typeOption' key={i}>
                        <input
                            type="checkbox"
                            name={type.name}
                            id={i}
                            value={type.id}
                            onChange={handleCheck}
                        />
                        {type.name}
                    </div>
                    );
                })}
                
                <label>Created by</label>
                    <select onChange={e=>handleCreated(e)}>
                        <option value='all'>All</option>
                        <option value='user'>User</option>
                        <option value='existing'>Existing</option>
                    </select>
            </fieldset>

            <fieldset>
                <legend>Sort By</legend>
                <label>Name</label>
                    <div onChange={e=>handleName(e)}>
                        <input type="radio" defaultChecked
                        name='name-asc-des' value='none'/>None
                        <input type="radio"
                        name='name-asc-des' value='asc'/>Asc
                        <input type="radio"
                        name='name-asc-des' value='des'/>Des    
                    </div>

                <label>Attack</label>
                    <div onChange={e=>handleAttack(e)}>
                        <input type="radio" defaultChecked
                        name='attack-asc-des' value='none'/>None
                        <input type="radio" name='attack-asc-des'
                        value='asc'/>Asc
                        <input type="radio" name='attack-asc-des'
                        value='des'/>Des
                    </div>

            </fieldset>

            <fieldset>
                <button onClick={handleView}>View!</button>
                <button onClick={handleRestore}>Restore all filters</button>
            </fieldset>
        </div>
    )
}