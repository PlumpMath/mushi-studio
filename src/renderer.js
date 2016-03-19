class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.points = [];
    }

    add(point) {
        this.points.push(point);
    }

    renderStep() {
        this.currentTime = (new Date()).getTime();

        let render = this.renderStep.bind(this),
            deltaTime = this.currentTime - this.previousTime;

        this.previousTime = this.currentTime;

        this.points.forEach((point) => {
            // console.log("this.previousTime = ", this.previousTime);
            // console.log(point);
        });

        window.requestAnimationFrame(render)
    }

    start() {
        let render = this.renderStep.bind(this);

        this.previousTime = (new Date()).getTime();

        window.requestAnimationFrame(render);
    }
}

export {Renderer};
