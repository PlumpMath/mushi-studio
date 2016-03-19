import {Renderer} from './renderer';
import {Point} from './point';

global.app = function () {
    let canvas = document.getElementById('canvas');
    let renderer = new Renderer(canvas);
    let point = new Point(50, 50);
    renderer.add(point);

    renderer.start();
};
