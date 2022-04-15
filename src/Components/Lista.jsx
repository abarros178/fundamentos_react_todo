import { useState } from "react"
import React from 'react'

const Lista = () => {
  const estadoInicial=[
    {  id:1,  name:'Andres'},
    {  id:2,  name:'Camilo'},
    {  id:3,  name:'Barros'},
    {  id:4,  name:'Carmona'}
  ]
  const [lista,setLista]=useState(estadoInicial); 
  return (
    <>
    <h1> Mi nombre completo es: </h1>
    {
      lista.map((item)=><h4 key={item.id}>{item.name}</h4>)
    }

    </>
  )
}

export default Lista