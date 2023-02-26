function inverter(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString = novaString + string[i];
  }
  return novaString;
}

string = 'Eu sei usar JavaScript';

const stringInvertida = inverter(string);
console.log(stringInvertida)
 