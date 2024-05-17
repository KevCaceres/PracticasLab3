import PropTypes from 'prop-types'
import BorrarTarea from '../borrarTarea/BorrarTarea';

const Tareas = ({ listaTareas, setListaTareas, borrarTarea }) => {
    const estadoElementos = (index) => { 
        console.log('Clicked')
        setListaTareas(prevElemento => 
            prevElemento.map((elemento, i) =>
            i === index ? {...elemento, estado: !elemento.estado} : elemento 
            )
        );
    };

    return (
        <div>
          {listaTareas.map((elemento, index) => (
            <div
              key={index}
              style={{ 
                fontWeight: elemento.estado ? 'bold' : 'normal',
                textDecoration: elemento.estado ? 'line-through' : 'none'
              }}
              onClick={() => estadoElementos(index)}
            >
              <span >{elemento.nombre}</span>
              <BorrarTarea borrarTarea={borrarTarea} index={index} />
            </div>
          ))}
        </div>
      );
    }
Tareas.propTypes = {
    listaTareas: PropTypes.array.isRequired,
    setListaTareas: PropTypes.func.isRequired,
    borrarTarea: PropTypes.func.isRequired
};

export default Tareas