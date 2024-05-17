import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

const NuevaTarea = ({ agregarTarea }) => {
  const handleClick = () => {
      const nombreTarea = prompt('Ingresar nueva tarea');
      if (nombreTarea) {
          agregarTarea(nombreTarea);
      }
  }
  return (
    <div>
      <Button variant="primary" onClick={handleClick}>Agregar Tarea</Button>
    </div>

  )
}

NuevaTarea.propTypes = {
    agregarTarea: PropTypes.func.isRequired,
};

export default NuevaTarea
