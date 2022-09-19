class calculadora {
    numeroUm = 50
    numeroDois = 25

    somar(){
        console.log("SOMA - " , this.numeroUm + this.numeroDois)
    }

    subtracao(){
        console.log("SUBTRACAO - " , this.numeroUm - this.numeroDois)
    }

    multiplicacao(){
        console.log("MULTIPLICAÇÃO - " , this.numeroUm * this.numeroDois)
    }

    divisao(){
        console.log("DIVISÃO - " , this.numeroUm / this.numeroDois)
    }

}

let calcular = new calculadora();
calcular.somar()
calcular.subtracao()
calcular.multiplicacao()
calcular.divisao()


