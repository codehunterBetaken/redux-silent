export default function compose(...funcs:Array<Function>) {
  if(funcs.length ===1) {
    return funcs[0]
  }

  //compose(f1,f2,f3)
//第一次迭代后的返回值
// (...args) => f1(f2(...args))  等价于
// function fn(...args) { 
//     return f1(f2(...args));
// }
//第二次迭代后的返回值
// return (...args) => fn(f3(...args))   等价于
// return (...args) => f1(f2(f3(...args)));    等价于
// function fn(f3(...args)) {
//     return f1(f2(f3(...args)));
// }
  return funcs.reduce(
    (a:Function,b:Function) => (...args:any[]) => a(b(...args))
  )
  
}