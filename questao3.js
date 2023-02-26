async function calcularFaturamento() {
  const response = await fetch("dados.json");
  const json = await response.json();
  const dados = Object.values(json);
  console.log(dados);

  let menor = 0;
  let maior = 0;
  let soma = 0;

  dados.forEach((dado) => {
    if (dado.valor < menor) {
      menor = dado.valor;
    }
    if (dado.valor > maior) {
      maior = dado.valor;
    }
    soma += dado.valor;
  });

  let media = soma / dados.length;
  let diasAcimaDaMedia = 0;

  dados.forEach((dado) => {
    if (dado.valor > media) {
      diasAcimaDaMedia++;
    }
  });
  return {
    menorValor: menor,
    maiorValor: maior,
    diasAcimaDaMedia: diasAcimaDaMedia,
  };
}

const resposta = calcularFaturamento().then((resultado) => {
  console.log(resultado);
});
