"use client"
import React, { useEffect, useRef } from 'react'

const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect (()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx) ctx.fillStyle = '#000';
        ctx?.fillRect (0,0,800, 800);  
        
        
        function obstacles(){
            if (ctx){
                const row = 16;
                ctx.fillStyle = 'white';
                let height = 150;                
                for (let i=2;i<row;i++){
                    let cnt = 1;
                    for (let j=0;j<=i;j++){                        
                        const xPos = 400 - 40*(cnt-i/2);
                        ctx.roundRect (xPos,height, 10, 10, 5);                       
                        ctx.fill();
                        cnt ++;
                    }
                    height += 30;
                }
            } 
        }

        function sink(){
            if (ctx){
                const height = 570;
                ctx.fillStyle = 'red';
                for (let i=1;i<=15;i++){
                    const xPos = 400 - 40*(i-14/2);
                    ctx.fillRect (xPos, height, 26, 30);
                }        
            } 
        }

        obstacles ();
        sink();


    },[]);

    function addBall (){
        alert ("Ball Added");
    };
  return (
    <div className='flex justify-between'>
        <canvas ref = {canvasRef} width= {800} height = {800}></canvas>
        <button onClick={addBall} className='bg-green-600 px-10 text-black h-10 mx-4'>Add Ball</button>
    </div>
  )
}

export default Game