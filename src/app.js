import {Renderer} from './renderer';
import {Point} from './point';

global.app = function () {
    let canvas = document.getElementById('canvas'),
        width = canvas.width,
        height = canvas.height,
        renderer = new Renderer(canvas),
        pointsCount = 100,
        radius = 10;

    for (let i = 0; i < pointsCount; i++) {
        let x = Math.random() * (width - radius) + radius,
            y = Math.random() * (height - radius) + radius,
            point = new Point(x, y, radius);

        renderer.add(point);
    }

    renderer.start();
};
