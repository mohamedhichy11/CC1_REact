import { useState,useEffect } from "react"
import './calc.css';
import { useDarkMode } from '../contextDark/contextDark';
export default function Calculator(){

  const { isDark } = useDarkMode(); 

  useEffect(() => {
  
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);
    const [exp,Setexp]=useState("")
  const value_input =(e)=>{
    let oldval=exp
     let v=e
     oldval=oldval+v
     Setexp(oldval)
  }
  const clear=()=>{
    Setexp("")
  }
  const calcu =()=>{

    try {
      Setexp(eval(exp))
      
    } catch (error) {
      Setexp("error !")
    }
      
    
  }

  return <div className='containerCalcule'>
        <input type="text" value={exp} className='MytextInput' />
        <div className='WhiteLine'></div>
       <div className='BtnsDiv'>
       <button value={1} onClick={(e) => value_input(e.target.value)} className="mybtnscalcule" >1</button>
        <button value={2} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">2</button>
        <button value={3} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">3</button>
        <button value={"+"} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">+</button><br />
        <button value={4} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">4</button>
        <button value={5} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">5</button>
        <button value={6} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">6</button>
        <button value={"-"} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">-</button><br />
        <button value={7} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">7</button>
        <button value={8} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">8</button>
        <button value={9} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">9</button>
        <button value={"*"} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">*</button>
        <br />
        <button value={"="}  onClick={calcu} id='resultatbtn'>=</button>
        <button value={0} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">0</button>
        <button value={"/"} onClick={(e)=> value_input(e.target.value)} className="mybtnscalcule">/</button>
        <button value={"c"} onClick={clear} id='Clearbtn'>c</button>
       </div>

  </div>
}