"use client"
import React, { useEffect, useRef } from 'react'

const GameCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect (()=>{
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx){
                ctx.fillStyle = '#000';
                ctx.fillRect (0,0,800, 800);
            }
        }
    },[]);

  return (
    <>
        <canvas ref = {canvasRef} width= {800} height = {800}></canvas>
    </>
  )
}

export default GameCanvas