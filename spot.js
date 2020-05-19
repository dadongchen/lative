(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('5'))
        .then(() => engine.shake())
        .then(() => engine.toText('2'))
        .then(() => engine.shake())
        .then(() => engine.toText('0'))
        .then(() => engine.shake())
        .then(() => engine.toText('happy :)'))
        .then(() => engine.shake())
        .then(() => engine.toText('to julie'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
