// Função Fibonacci

function fibonacci(x) {
  if (x === 0 ) {
    return `${x} pertence a Fibonacci`;
  } else if ( x === 1 ) {
      x = x + 1;
      return `${x} pertence a fibonacci`;
    } else if ( x >= 2) {
      let a = 0;
      let b = 1;
      while (b < x) {
        let troca = b;
        b = a + b;
        a = troca;
      }
      if (b === x) {
        return `${x} pertence a fibonacci`;
      } else {
        return `${x} não pertence a fibonacci`; 
      } 
    }   
}

const resultado = (fibonacci(10));
console.log(resultado);
