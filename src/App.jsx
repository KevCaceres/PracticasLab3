import './App.css';
import Promedio from './componentes/promedio/Promedio';
import Table1 from './componentes/table/Table';

const netIncomes = [
  {brand: "McDonalds", income: 1291283}, 
  {brand: "Burger King", income: 1927361}, 
  {brand: "KFC", income: 1098463}];

function App() {
  
  return (
    <div className='App'>
      <Table1 datos = {netIncomes}/>
      <Promedio datoss = {netIncomes} />
    </div>
  );
}

export default App;