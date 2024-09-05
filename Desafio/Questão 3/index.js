const faturamento = require('../Questão 3/faturamento.json')



const valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0)

const menorFaturamento = Math.min(...valores)
const maiorFaturamento = Math.max(...valores)
const mediaMensal = valores.reduce((acc, v) => acc + v, 0) / valores.length
const diasAcimaDaMedia = valores.filter(v => v > mediaMensal).length

console.log(`Menor faturamento: ${menorFaturamento}`)
console.log(`Maior faturamento: ${maiorFaturamento}`)
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`)
