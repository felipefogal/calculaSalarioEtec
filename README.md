# 💰 Calcula Salário ETEC

Aplicação desenvolvida em **Node.js** para realizar o cálculo do salário bruto de um professor da ETEC a partir da quantidade de horas trabalhadas e do valor da hora-aula informado pelo usuário.

---

## 📋 Sobre o Projeto

Este projeto foi criado com o objetivo de praticar conceitos básicos de:

- JavaScript
- Node.js
- Entrada de dados pelo terminal
- Operações matemáticas
- Manipulação de números com `parseFloat`
- Interação com o usuário utilizando o módulo `readline`

O programa solicita:

1. Quantidade de horas trabalhadas;
2. Valor da hora-aula;

Em seguida calcula:

- Salário base;
- Valor referente ao DSR (Descanso Semanal Remunerado);
- Salário bruto final.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- JavaScript (ES6)
- Módulo nativo `readline`

---

## 📁 Estrutura do Projeto

```text
calculaSalarioEtec/
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)

Verifique a instalação:

```bash
node -v
npm -v
```

---

### Clonar o Projeto

```bash
git clone <url-do-repositorio>
```

Acesse a pasta:

```bash
cd calculaSalarioEtec
```

---

### Executar a Aplicação

Utilizando o script configurado no `package.json`:

```bash
npm run calcular_salario
```

Ou diretamente:

```bash
node index.js
```

---

## 🖥️ Exemplo de Execução

```text
Calcula Salário Etec

Digite o número de horas trabalhadas:
20

Digite o valor da hora trabalhada:
25

Salário base sem DSR: 2925
O salário bruto é: 3412.5
```

---

## 🧮 Lógica do Cálculo

O sistema realiza os seguintes cálculos:

### 1. Salário Base

```javascript
salarioBase = (horas * valorHora * 4.5) * 1.3
```

Onde:

- `horas` = quantidade de horas trabalhadas
- `valorHora` = valor da hora-aula
- `4.5` = média de semanas por mês
- `1.3` = acréscimo de 30%

---

### 2. DSR (Descanso Semanal Remunerado)

```javascript
DSR = salarioBase / 6
```

---

### 3. Salário Bruto

```javascript
salarioBruto = salarioBase + DSR
```

---

## 📄 Código Principal

Trecho responsável pelo cálculo:

```javascript
const salarioBase =
  (parseFloat(horas) * parseFloat(valorHora) * 4.5) * 1.3;

const salarioBaseMaisDSR = salarioBase / 6;

const salarioBruto = salarioBase + salarioBaseMaisDSR;
```

---

## 🎯 Objetivos Educacionais

Este projeto auxilia no aprendizado de:

- Entrada de dados pelo terminal
- Funções de callback
- Conversão de tipos
- Operações matemáticas
- Estrutura básica de aplicações Node.js

---

## 🔮 Melhorias Futuras

- Validação de entradas inválidas
- Formatação monetária em Real (R$)
- Separação da lógica de negócio em funções
- Implementação de testes automatizados
- Interface gráfica
- Exportação dos resultados para PDF

---

## 👨‍💻 Autor

Felipe Garcia Fogal