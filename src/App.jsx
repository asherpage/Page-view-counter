import './App.css';
import { useState,useEffect } from 'react';
import Pageviewcounter from './components/Pageviewcounter';
function App() {
  const [count,setCount] = useState(0)
  function init(){
    if(localStorage.getItem("count")){
      setCount(localStorage.getItem("count"))
      console.log(count)
    }else{
      localStorage.setItem("count",0)
      setCount(localStorage.getItem("count"))
    }
  }
  useEffect(()=>{
    init()
    localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
    setCount(localStorage.getItem("count"))
  },[])
    
  return (
    <div className="App">
      <Pageviewcounter count={count}/>
    </div>
  );
}

export default App;