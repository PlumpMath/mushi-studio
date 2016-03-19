class Point {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.anchorX = this.x + radius;
        this.anchorY = this.y + radius;
    }
}
export {Point};
