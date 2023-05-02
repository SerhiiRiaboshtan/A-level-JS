//import logo from './logo.svg';
import ClockFace from './ClockFace.png'
import ClockFace_H from './ClockFace_H.png'
import ClockFace_M from './ClockFace_M.png'
import ClockFace_S from './ClockFace_S.png'


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
  return (
      <div>
          <input value={text} style={text.length<min || text.length>max?{color:'red'}:{color:'black'}} onChange={
            e => setText(e.target.value)
          }/> 
      </div> 
  )
}

const LoginForm = ({onLogin}) => {
  const[login, setLogin]=useState('')
  const[password, setPassword]=useState('')
  return (
    <div>
      <p>Логин:</p> <input value={login} onChange={e => setLogin(e.target.value)}/>
      <p>Пароль:</p><input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
      <div>
        <button onClick={login.length>2 && password.length>2?()=>onLogin(login, password):()=>{return null}}>Start</button>
      </div>
    </div>
  )
}

const PasswordConfirm = ({min}) => {
  const [input1, setPass1] = useState('')
  const [input2, setPass2] = useState('')
  return (
      <div>
          <input value={input1} type='password' onChange={
            e => setPass1(e.target.value)
          }/>
          <br/>
          <input value={input2} type='password' onChange={
            e => setPass2(e.target.value)
          }/>
          {input1.length>=min && input2.length>=min?input1===input2?<p>Identical passwords</p>:<p>Passwords length are Ok</p>:<p>'qqq'</p>}  
      </div> 
  )
}

function getTimeString(seconds){
  const hour=Math.floor(seconds/3600);
  const min=Math.floor((seconds-hour*3600)/60);
  const sec=seconds-hour*3600-min*60;
  return(<p>{hour}:{min>9?min:'0'+min}:{sec>9?sec:'0'+sec}</p>);
}
const Timer=({seconds}) => {
  const [count, setCount] = useState(seconds)
  const [work, setW] = useState(1)
  useEffect(() => {
    const intervalId = setInterval(() => {  
      setCount(count => (count>0?count-work: count))
    }, 1000)
    return ()=> {
      clearInterval(intervalId)
    }
  },[work])
  return (
    <> 
      <div>
        {getTimeString(count)}
      </div>
      <button onClick={() => setW(work =>work?0:1) }>
        {work?'Pause':'Run'}
      </button>
    </>
  ) 
}

const TimerControl=() => {
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [needStart, setStart] = useState(false)
  return (
    <div>
      <div>HH:<input value={hour} type='number' onChange={
            e => setHour(e.target.value<24 && e.target.value>=0?e.target.value:hour)
          }/></div>
      <div>MM:<input value={min} type='number' onChange={
            e => setMin(e.target.value<60 && e.target.value>=0?e.target.value:min)
          }/></div>
      <div>SS:<input value={sec} type='number' onChange={
            e => setSec (e.target.value<60 && e.target.value>=0?e.target.value:sec)
          }/></div>
      <button onClick={()=> setStart(needStart=>!needStart)}>Start</button>
      {needStart?<Timer seconds={(3600*hour+60*min+1*sec)}/>:<></>} 
    </div>
  )
}

const SecondsTimer = ({seconds}) => <h2>{seconds}</h2>
const TimerContainer = ({seconds , refresh, render}) => {
  const FunctionRender=render
  const [count, setCount] = useState(seconds)
  useEffect(() => {
    const startTime=performance.now()
    const intervalId = setInterval(() => {  
      setCount(count-Math.floor((performance.now()-startTime)/1000))
    }, refresh)
    return ()=> {
      clearInterval(intervalId)
    }
  },[])
  return (
    <FunctionRender seconds={count}/>
  )
}

const TimerNew = ({seconds}) => {
  return (
    <div>
        {getTimeString(seconds)}
      </div>
  )
}

const Watch = ({seconds}) => {
  const secondsNorm=seconds-Math.floor(seconds/43200)*43200//нормализуем секунды на входе 12*60*60=43200 
  const hour=(secondsNorm/3600)
  const min=((secondsNorm-Math.floor(hour)*3600)/60)
  const sec=(secondsNorm-Math.floor(hour)*3600-Math.floor(min)*60);
  return (
    <div >
      <img className='Clock' src={ClockFace} alt=""  />
      <img className='Clock' Style={`transform: rotate(${hour*30}deg)`} src={ClockFace_H} alt=""/>
      <img className='Clock' Style={`transform: rotate(${min*6}deg)`} src={ClockFace_M} alt=""/>
      <img className='Clock' Style={`transform: rotate(${sec*6}deg)`} src={ClockFace_S} alt=""/>
    </div>  
  )
}

const TimerControl2=() => {
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [needStart, setStart] = useState(false)
  return (
    <div>
      <div>HH:<input value={hour} type='number' onChange={
            e => setHour(e.target.value<24 && e.target.value>=0?e.target.value:hour)
          }/></div>
      <div>MM:<input value={min} type='number' onChange={
            e => setMin(e.target.value<60 && e.target.value>=0?e.target.value:min)
          }/></div>
      <div>SS:<input value={sec} type='number' onChange={
            e => setSec (e.target.value<60 && e.target.value>=0?e.target.value:sec)
          }/></div>
      <button onClick={()=> setStart(needStart=>!needStart)}>Start</button>
      {needStart?<Watch seconds={(3600*hour+60*min+1*sec)}/>:<></>} 
    </div>
  )
}

const Clock=()=>{
  const [seconds, setSec] = useState(0)
  useEffect(()=>{
    const intervalId = setInterval(() => {  
      const currentDate=new Date()
      setSec(currentDate.getSeconds()+currentDate.getMinutes()*60+currentDate.getHours()*3600)
  }, 100)
  })
  return(
    <>
      <Watch seconds={seconds}/>
      <TimerNew seconds={seconds}/>
    </>
  )
}

const App=({logoText})=> 
    <div className="App">
      <header className="App-header">
        <>
          <p style={{color:'red'}}>HW task 1 Spoiler</p>
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

          <p style={{color:'red'}}>HW task 2 RangeInput</p>
          <RangeInput min={2} max={10}/>
          <br/>

          <p style={{color:'red'}}>HW task 3 LoginForm</p>
          <LoginForm onLogin={(l, p)=>console.log(l,p)}/>
          <br/>

          <p style={{color:'red'}}>HW task 4 PasswordConfirm</p>
          <PasswordConfirm min={2} />
          <br/>
                  
          <p style={{color:'red'}}>HW task 5 Timer</p>
          <Timer seconds={10}/>
          <br/>

          <p style={{color:'red'}}>HW task 6 TimerControl</p>
          <TimerControl/>
          <br/>

          <p style={{color:'red'}}>HW task 7 TimerContainer</p>
          <TimerContainer seconds={100} refresh={100} render={SecondsTimer}/>
          <br/>

          <p style={{color:'red'}}>HW task 8 LCD</p>
          <TimerContainer seconds={100} refresh={100} render={TimerNew}/>
          <br/> 
        
          <p style={{color:'red'}}>HW task 9 Watch</p>
          <Watch seconds={360000}/>
          <br/>

          <p style={{color:'red'}}>HW task 10 TimerControl + TimerContainer</p>
          {/* <TimerControl2/> */}
          <br/>
          </>
          {/* <p style={{color:'red'}}>HW task ? Часики</p>
          <Clock/> */}
      </header>
    </div>


export default App;
