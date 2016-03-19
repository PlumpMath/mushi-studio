import {Renderer} from './renderer';
import {Point} from './point';

global.app = function () {
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        renderer = new Renderer(ctx),
        point = new Point(50, 50);
    renderer.add(point);

    renderer.start();
};
