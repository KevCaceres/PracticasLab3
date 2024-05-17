
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const BorrarTarea = ({ borrarTarea, index }) => {
  const handleClick = () => {
    borrarTarea(index);
  };

  return (
    <div className='boton-borrar'>
      <Button variant="danger" onClick={handleClick} >Borrar</Button>
    </div>
  );
};

BorrarTarea.propTypes = {
  borrarTarea: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default BorrarTarea;
