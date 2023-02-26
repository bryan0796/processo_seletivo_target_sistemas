const faturamento = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  outros: 19849.53
}

const valores = Object.values(faturamento);
const valorTotal = valores.reduce((acumulador, valor) => {
  return acumulador + valor;
})
console.log(valorTotal);

function percentual(valores, valorTotal) {
  let porcentagemObjeto = {};
  porcentagemObjeto = valores.map((valor) => {
    const porcentagem = (valor * 100) / valorTotal;
    return `${porcentagem.toFixed(3)}'%'`;
  })
  console.log(porcentagemObjeto)
}

percentual(valores, valorTotal);