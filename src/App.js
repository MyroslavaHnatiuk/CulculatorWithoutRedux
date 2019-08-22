 import React, { useState } from 'react';
 import './App.css';
 import Button from './Button';

 let  App = () => {
  const [input, setInput] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('')

   const addToInput = (val) => {
    val && setInput(input + val)
   }


  const addDemical = (val) => {
    if(input.indexOf('.') === -1){
      addToInput(val)
    }
  }
  const addFromKeyBoard = (e) => {
    if(e.target.value.trim() !== '') {
     addToInput(e.target.value)
    }
  }
  const addZeroInput = (val) => {
     addToInput(val.toString())
   
 }

const addOperator = (e) => {
  setOperator(e);
  setPreviousNumber(input);
  setInput('');
}

const equal = () => {
  setInput(eval(previousNumber + operator + input))
}

const clearInput = () => {
  setInput('');
}
 
  const buttons = [
    {
      item: 7,
      handler: addToInput
    }, 
    {
      item: 8,
      handler: addToInput
    },
    {
      item: 9,
      handler: addToInput
    },
    {
      item: '/',
      handler: addOperator.bind(null, '/')
    },
    {
      item: 4,
      handler: addToInput
    },
    {
      item: 5,
      handler: addToInput
    },
    {
      item: 6,
      handler: addToInput
    },
    {
      item: '*',
      handler: addOperator.bind(null, '*')
    },
    {
      item: 1,
      handler: addToInput
    },
    {
      item: 2,
      handler: addToInput
    },
    {
      item: 3,
      handler: addToInput
    },
    {
      item: '+',
      handler: addOperator.bind(null, '+')
    },
    {
      item: '.',
      handler: addDemical
    },
    {
      item: 0,
      handler: addZeroInput
    },
    {
      item: '=',
      handler: equal
    },
    {
      item: '-',
      handler: addOperator.bind(null, '-')
    }]

   return (
     <div className="app">
       <div className="block-component">
       <div className="row">
       <input  typy="number" className="input" value={input} onChange={addFromKeyBoard}/>
       </div>
         <div className='row'>
            {buttons.map(
            (button, index) => 
              <Button key={index} handleClick={button.handler}>{button.item}</Button>
            )} 
         </div>
         <div className="row">
         <button 
          className="button clear"
          onClick={()=> {clearInput()}}>
              Clear
          </button>
         </div>
      
       </div>
     </div>
   );
 };
 export default App;