import { gravity } from "../constants";

export class Ball {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private color: string;
    private width: number;
    private height: number;

    constructor (
        x: number,
        y: number,
        color: string,
        width: number,
        height: number,
        vx: number,
        vy: number,
        ctx: CanvasRenderingContext2D
    ){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.vx = vx;
        this.vy = vy;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        this.ctx.strokeStyle = this.color;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    update (){
        this.vy += gravity;
        this.x += this.vx
        this.y += this.vy
    }
}