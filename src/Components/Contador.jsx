import React,{useState} from 'react'

const Contador = () => {
  const [contar,setContar]=useState(0);
  const aumentar = ()=>setContar(contar+1);
  const disminuir = ()=>setContar(contar-1);
  return (
    <>
    <h1>
      El valor del contador es: {contar} 
    </h1>
    <button onClick={aumentar}>
      +
    </button>
        <button onClick={disminuir}>
      -
    </button>
    
    
    </>
  )
}

export default Contador