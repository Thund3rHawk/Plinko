export interface Obstacle {
    x: number;
    y: number;
    radius: number;
}


export const obstacles = (): Obstacle[] => {
    const obstacles: Obstacle[] = [];
    const row = 16;
    let height = 150;
    for (let i = 2; i < row; i++) {
        let cnt = 1;
        for (let j = 0; j <= i; j++) {
            const xPos = 400 - 40 * (cnt - i / 2);
            obstacles.push({x:xPos, y:height, radius: 5});
            cnt++;
        }
        height += 30;
    }
    return obstacles;
}