import { Display } from './Display';
import { ButtonPlus } from './ButtonPlus';
import { ButtonMinus } from './ButtonMinus';
import { ButtonZero } from './ButtonZero';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0)
  return (
    <div className='App'>
       <Display counter = {counter}/>
       <ButtonPlus handleClickPlus = {increaseByOne} />
       <ButtonZero handleClickZero = {setToZero} />
       <ButtonMinus handleClickMinus = {decreaseByOne} />
    </div>
  );
}

export default App;
