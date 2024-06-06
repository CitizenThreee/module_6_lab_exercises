import { useState } from 'react'
import './App.css'

function App() {
  const [operation, setOperation] = useState({num1: 0, num2: 0, operator: '+', total: 0})

  function Calculate(newOperation) {
    switch(newOperation.operator){
      case '+':
        newOperation.total = parseInt(newOperation.num1) + parseInt(newOperation.num2);
        break;
      case '-':
        newOperation.total = parseInt(newOperation.num1) - parseInt(newOperation.num2);
        break;
      case 'x':
        newOperation.total = parseInt(newOperation.num1) * parseInt(newOperation.num2);
        break;
      case '/':
        newOperation.total = parseInt(newOperation.num1) / parseInt(newOperation.num2);
    }

    setOperation(newOperation);
  }

  return (
    <>
      <input type="number" value={operation.num1} onChange={(e) => Calculate({num1: e.target.value, num2: operation.num2, operator: operation.operator, total: operation.total})}/>
      <select name="operator" id="operator" value={operation.operator} onChange={(e) => Calculate({num1: operation.num1, num2: operation.num2, operator: e.target.value, total: operation.total})}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={operation.num2} onChange={(e) => Calculate({num1: operation.num1, num2: e.target.value, operator: operation.operator, total: operation.total})}/>
      <p>{' = '}</p>
      {operation.total}
    </>
  )
}

export default App
