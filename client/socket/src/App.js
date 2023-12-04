import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket=io.connect('http://localhost:3001')
function App() {

  const [input,sinput]=useState('')
  const [mssg,smmsg]=useState('')
  useEffect(()=>{
    socket.on('receive',(data)=>{
      
      smmsg(data)
      console.log(mssg)
     // sm(data)
    })
  },[socket])

  function sendmssg(){
    console.log('send mssg')
    socket.emit('send',{input})
  }
  
  return (
    <div className="App">
        {
          mssg
        }
     
        <input placeholder="Write something..." onChange={(e)=>{
          sinput(e.target.value)
        }}></input>
        <button onClick={sendmssg}>Click me</button>
    </div>
  );
}

export default App;
