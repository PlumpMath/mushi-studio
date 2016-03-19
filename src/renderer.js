class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d'),
        this.points = [];
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    add(point) {
        this.points.push(point);
    }

    renderStep() {
        let render = this.renderStep.bind(this),
            currentTime = (new Date()).getTime(),
            deltaTime = currentTime - this.previousTime;
        this.previousTime = currentTime;

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.points.forEach((point) => {
            this.renderPoint(point, deltaTime);
        });

        window.requestAnimationFrame(render)
    }

    renderPoint(point, deltaTime) {
        let ctx = this.ctx;

        ctx.fillStyle = "green";
        ctx.fillRect(point.anchorX, point.anchorY, point.radius, point.radius);
    }

    start() {
        let render = this.renderStep.bind(this);

        this.previousTime = (new Date()).getTime();

        window.requestAnimationFrame(render);
    }
}

export {Renderer};
