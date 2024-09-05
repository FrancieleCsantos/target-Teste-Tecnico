function sequencia(numero) {
    let A = 0;
    let B = 1;

    if (numero == A || numero == B) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    let pertenceSequencia = A + B

    while (pertenceSequencia <= numero) {
        if (pertenceSequencia == numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        A = B
        B = pertenceSequencia
        pertenceSequencia = A + B
    }

    return `O número ${numero} não pertence à sequência de Fibonacci.`
}

console.log(sequencia(22))

