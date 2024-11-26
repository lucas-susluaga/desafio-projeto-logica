/*# 1️⃣ Desafio Classificador de nível de Herói

*O Que deve ser utilizado*

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome *{nome}* está no nível de *{nivel}*"
*/

let xpHeroi = 4321
let nomeHeroi = "Kaike"
let rankHeroi = ""

while (xpHeroi!=null){

    if (xpHeroi<=1000){
        rankHeroi = "Ferro"
    } else if (xpHeroi>1000 && xpHeroi <=2000) {
        rankHeroi = "Bronze"
    } else if (xpHeroi>2000 && xpHeroi <=5000) {
        rankHeroi = "Prata"
    } else if (xpHeroi>5000 && xpHeroi <=7000) {
        rankHeroi = "Ouro"
    } else if (xpHeroi>7000 && xpHeroi <=8000) {
        rankHeroi = "Platina"
    } else if (xpHeroi>8000 && xpHeroi <=9000) {
        rankHeroi = "Ascendente"
    } else if (xpHeroi>9000 && xpHeroi <=10000) {
        rankHeroi = "Imortal"
    } else if (xpHeroi>10001) {
        rankHeroi = "Radiante"
    }
    break;
}

console.log("O Herói " + nomeHeroi + "está no nível de " + rankHeroi)