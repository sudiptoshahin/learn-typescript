function greeter(person) {
    return 'hello World ' + person;
}
var user = 'Sudipto';
document.body.textContent = greeter(user);
function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log('Hello :', +x.name);
}
var obj = {
    x: 0,
    y: 0,
    name: "Origin"
};
logPoint(obj);
logName(obj);
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function fn(arg) {
    console.log(' hello world');
}
fn({ k: 10 });
// Function syntax includes parameter names
var fst_ = function (a, b) { return a; };
//  Object literal type syntax closely mirrors object literal value syntax:
var o = { n: 1, xs: [] };
// Boxed types
(1).toExponential();
var anys = [];
anys.push(1);
anys.push('hello');
anys.push({ anything: 'goes' });
// anys.map(anys[1]);
// Structural typing
// @strict: false
var o1 = { x: 'hello', extra: 1 };
var Three = /** @class */ (function () {
    function Three() {
        this.p = 'hello';
    }
    return Three;
}());
var x = { p: 'hello' };
var two = x;
two = new Three();
function start(arg) {
    if (typeof arg === 'string') {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(',');
    }
    else if (typeof arg === 'function') {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        // finally convert a string to another string
        return s;
    }
}
console.log(start('hello'));
pad('hello', 10, 'left');
var message = 'HEllo';
console.log(message.toLowerCase());
