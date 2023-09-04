import React from "react"

//Custom Hooks 
function useLocalStorage (itemname, initialValue) {
   //nuevoestadolocalstorage
  
   const [item,setItem] = React.useState(initialValue)
   const [loading,setLoading] = React.useState(true)
   const [error,setError] = React.useState(false)
  
    React.useEffect(()=>{

      setTimeout(() => {
        try {
          // LOCAL STORAGE
          const localStorageItem= localStorage.getItem(itemname)
        
          let parsedItem 
      
            if (!localStorageItem) {
              localStorage.setItem(itemname,JSON.stringify(initialValue))
              parsedItem= initialValue
          
            }else {
          
              parsedItem= JSON.parse(localStorageItem)
              setItem(parsedItem)
            }
      
            setLoading(false)
      
            } catch (error) {
              setError(true)
              setLoading(false)
            }
      }, 1000);

    })

    //FUNCION ACTUALIZADOR ESTADO Y LOCAL STORAGE
  
  const saveItem = (newItem) => {
  
    setItem(newItem)
    localStorage.setItem(itemname,JSON.stringify(newItem))};
  
    return {
      item,
      saveItem,
      loading,error}
    
  }

  export {useLocalStorage}

  // const defaultTodos=[
//  {text:"Cortar Cebolla", completed:true},
//  {text:"Ir al GYM", completed:false},
//  {text:"Estudiar Programacion", completed:false},
//  {text:"Trabajar", completed:false},
//  {text:"Jugar Fortnite", completed:false},
//  {text:"ir a ver cine", completed:false},
//  {text:"salir a pasear", completed:false},
//  {text:"comer una hamburgesa", completed:false},
//  {text:'probar aplicacion',completed:false}
// ]

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))