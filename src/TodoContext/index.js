import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext= React.createContext();

function TodoProvaider({children}) {

    // estados
const {item:todos,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',[])


const [searchValue, setSearchValue]=React.useState('')

const [openmodal, setOpenModal]=React.useState(false)


//todocounter
const completedTodos=todos.filter(todo=>!!todo.completed).length
const totalTodos=todos.length

// seachtodo
const searchTodos=todos.filter(todo=>{
  const todoText=todo.text.toLowerCase()
  const searchText=searchValue.toLowerCase()
  return (
    todoText.includes(searchText)
    )

})

//añadir TODO

const addTodo = (text)=>{
  const newTodos=[...todos]
  newTodos.push({text:text,completed:false})
  saveTodos(newTodos)
}


//marcar completados


function completeTodo(text) {
  const newTodos=[...todos]
  const todoIndex= newTodos.findIndex((todo)=>{return todo.text=== text} )
  newTodos[todoIndex].completed = true
  saveTodos(newTodos)
  
}

// eliminar todos
const deleteTodo =(text)=>{
  const newTodos=[...todos]
  const todoIndex= newTodos.findIndex((todo)=>{return todo.text=== text})
  newTodos.splice(todoIndex,1)
  saveTodos(newTodos)
}

    return(

        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            searchTodos,
            completeTodo,
            deleteTodo,
            openmodal,
            setOpenModal,
            addTodo
        }}>

        {children}

        </TodoContext.Provider>
    )
    
}



export {TodoContext,TodoProvaider}