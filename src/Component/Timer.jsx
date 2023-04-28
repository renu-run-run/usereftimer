import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

export const Timer = () => {
    const [timer, setTimer] = useState(0);
    let timerId = useRef(null);
    let h2Ref = useRef(null);
    let startButton = useRef(null);

    useEffect(()=>{
    if(timer === 0 ){
        h2Ref.current.innerText = `Timer value is ${timer}`;
        h2Ref.current.style.color = "black";
    }else{
        h2Ref.current.innerText = `Timer started and value is ${timer}`;
        h2Ref.current.style.color = "green";
    }

    })
    
    // useEffect(() => {
    //     var h2Ref = document.getElementById("timerid");
    //     if(timer === 0){
    //         h2Ref.innerText = `Timer value is ${timer}`;
    //     }else{
    //         h2Ref.innerText = `Timer started  and the value is ${timer}`;
    //     }
    //     }
    // );

    const startTimer = () => {
      startButton.current.disabled = true;
      timerId.current = setInterval(() => {
            
            setTimer((prevTimer) => prevTimer + 1);
            
        }, 1000);
    };
    const stopTimer = () => {
        startButton.current.disabled = false;
        h2Ref.current.style.color = "red";
        clearInterval(timerId.current);
       
    }
    return(
        <>
          <div>
             <h2 id="timerid" ref={h2Ref}>Timer is {timer}</h2>
             <button onClick={startTimer} ref={startButton}>Start</button>&nbsp; &nbsp;
             <button onClick={stopTimer}>Stop</button>
          </div>
        </>
    )
}