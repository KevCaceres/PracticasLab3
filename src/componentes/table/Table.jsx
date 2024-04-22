import './Table.css';
import PropTypes from "prop-types";
import { Table } from 'react-bootstrap';



const Table1 = ({datos}) => {

    return (
        <div >
            <Table  className='Table'>
                <thead>
                    <tr>
                        <th className='Thead'>Marca</th>
                        <th className='Thead'>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((marca, index) => (
                        <tr key={index}>
                            <td className = "Tbody">{marca.brand}</td>
                            <td className = "Tbody">{marca.income}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

Table1.propTypes = {
    datos: PropTypes.array,
};

export default Table1;