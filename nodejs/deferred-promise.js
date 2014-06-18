
var EventEmitter = process.EventEmitter;

function Promise () {

}

Promise.prototype = EventEmitter.prototype;
Promise.constructor = Promise;

function Deferred () {

}
