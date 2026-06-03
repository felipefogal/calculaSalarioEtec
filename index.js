console.log("Calcula Salário Etec\n");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o número de horas trabalhadas: \n", (horas) => {
  readline.question("Digite o valor da hora trabalhada: \n", (valorHora) => {
    const salarioBase = ((parseFloat(horas) * parseFloat(valorHora) * 4.5) * 1.3);
    console.log(`Salário base sem DSR: ${salarioBase}`);
    const salarioBaseMaisDSR = parseFloat(salarioBase / 6);
    const salarioBruto = salarioBase + salarioBaseMaisDSR;
    console.log(`O salário bruto é: ${salarioBruto}`);
    readline.close();
  });
});
