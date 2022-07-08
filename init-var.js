var x = 0;

const f = () => {
  var x = y = 1; // x é declarado localmente,y não é!
}
f();

console.log(x, y); // 0, 1
// x é uma variável global como experado
// y vazou para fora da função!