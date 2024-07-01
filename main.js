const { gets, print,arrayLength } = require('./dados');

const N =arrayLength();
let maiorNumeroPar=0;
let menorNumeroImpar=1;

for (let i = 0; i < N; i++) {
    const numero = parseInt(gets(i));
    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar ) {
          maiorNumeroPar = numero;
        }
      }
    else{
        if(numero < menorNumeroImpar){
            menorNumeroImpar=numero;
        }
        
    }
      // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
    }
           
    // TODO: Imprima as saídas conforme o enunciado deste desafio.

print('Maior número par: '+maiorNumeroPar);
print('Menor número impar: '+menorNumeroImpar);

