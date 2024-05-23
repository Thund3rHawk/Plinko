export interface Sink {
    x: number;
    y: number;
    height: number;
    width: number;
    text?: number;
}

export function Sink(): Sink[] {
    const sink: Sink[] = [];
    const height = 560;
    for (let i = 1; i <= 15; i++) {
        const xPos = 395 - 40 * (i - 14 / 2);
        sink.push({x:xPos, y:height, height:26, width:30});
    }
    return sink;
}