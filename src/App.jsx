import './App.css';
import NuevaTarea from './componentes/nuevaTarea/NuevaTarea';
import Tareas from './componentes/tareas/Tareas';
import { useState } from 'react';

function App() {
  const [listaTareas, setListaTareas] = useState([
    {nombre : "Tarea 1", estado : false},
    {nombre : "Tarea 2", estado : false},
    {nombre : "Tarea 3", estado : false}
    ]);

  const agregarTarea = (tareaNueva) => {
    setListaTareas([...listaTareas, {nombre: tareaNueva, estado: false}]);
  }
  const borrarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_,i) => i !== index);
    setListaTareas(nuevasTareas) 
  }
  return (
    <> 
    <div>
    <h1>Lista de tareas</h1>
      <Tareas listaTareas={listaTareas} setListaTareas={setListaTareas} borrarTarea={borrarTarea} />
      <NuevaTarea agregarTarea={agregarTarea} />
    </div>
    </>
  )
}

export default App
