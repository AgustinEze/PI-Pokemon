import React from 'react'
import { useSelector } from 'react-redux'

export function Settings(){
    let types = useSelector(store=>store.types)
    
    function handleCheck(){

    }
    return(
        <div>
            <fieldset>
                <legend>Filter By</legend>
                <label>Type</label>
                {types.map((type, i) => {
                    return (
                    <div key={i}>
                        <label>
                        <input
                            type="checkbox"
                            name={type.name}
                            id={`chbx${i}`}
                            value={type.id}
                            onChange={handleCheck}
                        />{" "}
                        {type.name}
                        </label>
                        <br />
                    </div>
                    );
                })}
                
                <label>Created by</label>
                    <select>
                        <option>All</option>
                        <option>User</option>
                        <option>Existing</option>
                    </select>
            </fieldset>
            <fieldset>
                <legend>Sort By</legend>
                <label>Name</label>
                    <input type="radio" name='name-asc-des'/>Asc
                    <input type="radio" name='name-asc-des'/>Des
                <label>Attack</label>
                    <input type="radio" name='attack-asc-des'/>Asc
                    <input type="radio" name='attack-asc-des'/>Des
            </fieldset>
            <fieldset>Page

            </fieldset>
            <fieldset>
                Restore all
            </fieldset>
        </div>
    )
}