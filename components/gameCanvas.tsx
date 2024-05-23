"use client"
import { Ball } from '@/game/classes/ball';
import React, { useEffect, useRef } from 'react'

const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect (()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx) ctx.fillStyle = '#000';
        ctx?.fillRect (0,0,800, 800);  
        const obstacle = [];
        const gravity = 9.8;
        function draw(){
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
                const height = 560;
                ctx.fillStyle = 'green';
                for (let i=1;i<=15;i++){
                    const xPos = 395 - 40*(i-14/2);
                    ctx.fillRect (xPos, height, 26, 30);
                }        
            } 
        }

        function update(){

        }


        draw ();
        sink();
        update();

    },[]);

    function addBall (){
        alert ("Ball Added");
    };
  return (
    <div className='flex justify-between'>
        <button onClick={addBall} className='bg-green-600 px-10 text-black h-10 mx-4'>Add Ball</button>
        <canvas ref = {canvasRef} width= {800} height = {800}></canvas>
    </div>
  )
}

export default Game