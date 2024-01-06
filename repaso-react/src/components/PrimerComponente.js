import React, {useState} from 'react'

export const PrimerComponente = () => {

  // let nombre = "Jose";
  let web = "seafoodmanizales.com";
  let lenguajesdeprogramacion = ["Python","Js","Php","Css","R"];

  const [nombre, setNombre] = useState("Jose M");

  const cambiarNombre=(nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div> 
      <h1>PrimerComponente</h1>
      <p>Este es un componente de prueba</p>
      <p>Me fascina visitar {web}, allí encuentro gran variedad de productos</p>
      <p>Mi nombre es <strong className={nombre.length >= 4 ? 'verde':'rojo' }>{nombre}</strong> y los datos utilizados acá han sido llamados con llaves </p>
      <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="Cambiar el nombre"/>
      <button onClick={e => {console.log("El valor guardado en tu estado es:", nombre);}}> Mostrar valor de estado </button>

      <button onClick={e => cambiarNombre("Jose Full Stack")}> Cambiar Nombre</button>

      <h2> Programming Languages </h2>
      <ul>
        {
          lenguajesdeprogramacion.map((programminglanguage, indice) => {
            return ( <li key = {indice}> 
            {programminglanguage}
            </li>);
          })
        }
      </ul>
    </div>
  )
}
