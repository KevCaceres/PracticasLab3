import './Promedio.css';
import PropTypes from "prop-types";

const Promedio = ({ datoss }) => {
const promNet = datoss.reduce((acum, ingreso) => acum + ingreso.income, 0) / datoss.length;
 
  return (
    <div>
        <p>El promedio de ingreso neto entre todas las marcas es: {promNet.toFixed(3)}</p>
    </div>
  )
};

Promedio.propTypes = {
    datoss: PropTypes.array,
};


export default Promedio;