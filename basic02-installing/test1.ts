
function greeter(person: string) {
    return 'hello World '+ person;
}

let user = 'Sudipto';
document.body.textContent = greeter(user);

/**============================= */

interface Pointlike {
    x: number;
    y: number;
  }
  
  interface Named {
    name: string;
  }
  
  function logPoint(point: Pointlike) {
      console.log("x = "+point.x+ ", y = " +point.y);
  }
  
  function logName(x: Named) {
    console.log('Hello :', +x.name);
  }
  
  const obj = {
    x: 0,
    y: 0,
    name: "Origin"
  };
  
  logPoint(obj);
  logName(obj);
  
  class Empty {}
  
  function fn (arg: Empty) {
    console.log(' hello world');
  }
  
  fn({ k: 10 });
  
  
  // Function syntax includes parameter names
  let fst_: <T, U>(a: T, b: U) => T = (a, b) => a;
  
  //  Object literal type syntax closely mirrors object literal value syntax:
  
  let o: { n: number; xs: object[] } = { n: 1, xs: [] };
  
  // Boxed types
  (1).toExponential();
  
  const anys = [];
  // anys.push(1);
  // anys.push('hello');
  // anys.push({ anything: 'goes' });
  
  // anys.map(anys[1]);
  
  // Structural typing
  
  // @strict: false
  let o1 = { x: 'hello', extra: 1 };
  // let o2: { x: string } = 0;
  
  type One = { p: string };
  
  interface Two {
    p: string;
  }
  
  class Three {
    p = 'hello';
  }
  
  let x: One = { p: 'hello' };
  let two: Two = x;
  two = new Three();
  
  function start(
    arg: string | string[] | (() => string) | { s: string }
  ): string {
    if (typeof arg === 'string') {
      return commonCase(arg);
    } else if(Array.isArray(arg)) {
      return arg.map(commonCase).join(',');
    } else if(typeof arg === 'function') {
      return commonCase(arg());
    } else {
      return commonCase(arg.s);
    }
  
  
    function commonCase(s: string): string {
      // finally convert a string to another string
      return s;
    }
  }
  
  console.log(start('hello'));
  
  //  Unit types
  declare function pad(s: string, n: number, direction: "left" | "right"): string;
  
  pad('hello', 10, 'left');
  

  const message = 'HEllo';

  console.log(message.toLocaleLowerCase());