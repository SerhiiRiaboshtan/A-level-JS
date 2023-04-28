//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

const Spoiler = ({header="+", open, children}) => {
    const [open1, setSpoiler]=useState(open)
    return (
        <div onClick={()=>setSpoiler(!open1)}>
          {header}{(open1)&&children}
        </div>
    )
}
const RangeInput = ({min, max }) => {
  const [text, setText] = useState('')
  console.log(min, max)
  return (
      <div>
          {/* <h1>{text.length}</h1> */}
          <input value={text} style={text.length<min || text.length>max?{color:'red'}:{color:'black'}} onChange={
            e => setText(e.target.value)
            
          }/> 
          {/* <h1>{text.toUpperCase()}</h1> */}
          {/* <h1>{text.slice(0,5)}</h1> */}
      </div> 
  )
}

const App=({logoText})=> 
    <div className="App">
      <header className="App-header">
        <p style={{color:'red'}}>HW task 1</p>
        <Spoiler header={<h1>Заголовок</h1>} open>
          Контент 1
          <p>
            лорем ипсум траливали и тп.
          </p>
        </Spoiler>
        <Spoiler>
          <h2>Контент 2</h2>
          <p>
            лорем ипсум траливали и тп.
          </p>
        </Spoiler> 
        <br/>
        <p style={{color:'red'}}>HW task 2</p>
        <RangeInput min={2} max={10}/> 
      </header>
    </div>


export default App;
