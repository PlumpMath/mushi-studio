import {Renderer} from './renderer';
import {Point} from './point';

global.app = function () {
    let canvas = document.getElementById('canvas'),
        renderer = new Renderer(canvas),
        point = new Point(50, 50, 30);
    renderer.add(point);

    renderer.start();
};
