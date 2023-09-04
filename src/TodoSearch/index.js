import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react';
function TodoSearch() {

  const {searchValue,setSearchValue}=React.useContext(TodoContext)

    return(
      <input className="TodoSearch" type='text' value={searchValue} placeholder={"Busca TODOs"} onChange={(event)=>{setSearchValue(event.target.value)}} />
    )
  }

  export{TodoSearch} 