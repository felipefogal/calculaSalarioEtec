console.log("Calcula Salário Etec\n");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Digite o número de horas trabalhadas na semana: \n",
  (horas) => {
    readline.question("Digite o valor da hora trabalhada: \n", (valorHora) => {
      const salarioBase = parseFloat(horas) * parseFloat(valorHora) * 4.5 * 1.3;
      console.log(`Salário base sem DSR: ${salarioBase}`);
      const salarioBaseMaisDSR = parseFloat(salarioBase / 6);
      const salarioBruto = salarioBase + salarioBaseMaisDSR;
      console.log(`O salário bruto sem adicional noturno é: ${salarioBruto}`);
      readline.question(
        "Digite o número de horas trabalhadas após as 22:00 na semana: \n",
        (horasNoturnas) => {
          if (parseFloat(horasNoturnas) === 0) {
            console.log(
              `Não há horas noturnas, o salário bruto é: ${salarioBruto}`,
            );
            readline.close();
            return;
          }
          const adicionalNoturno =
            parseFloat(horasNoturnas) * parseFloat(valorHora) * 0.2 * 4.5;
          const salarioBrutoComAdicionalNoturno =
            salarioBruto + adicionalNoturno;
          console.log(
            `O salário bruto com adicional noturno é: ${salarioBrutoComAdicionalNoturno}`,
          );
          readline.close();
        },
      );
    });
  },
);
