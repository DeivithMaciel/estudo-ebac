function Animal(nome) {
    this.nome = nome;
    this.dizPresenca = function() {
        console.log(this.nome);
    }
    this.dizRaca = function() {
        console.log("da raça " + this.raca)
    }
    this.dizRemedios = function() {
        console.log(this.getRemedios() + " remédios nescessários.")
    }
}

function Cachorro(nome, raca, remedios) {
    this.raca = raca;
    let _remedios = remedios;

    this.getRemedios = function() {
        return _remedios
    }

    this.setRemedios = function(valor) {
        if (typeof valor === 'number') {
            _remedios = valor;
        }
    }

    this.aumento = function () {
        const novaContidade = remedios * 1.5;
        _remedios = novaContidade
    }

    Animal.call(this, nome);
}

function Pastor_alemao(nome){
    Cachorro.call(this, nome, "Pastor-alemão", 2);

    this.aumento = function() {
        const novaContidade = this.getRemedios() * 1.5;
        this.setRemedios(novaContidade);
    }
}

function Pitbull(nome) {
    Cachorro.call(this, nome, "Pitbull", 4);

    this.aumento = function() {
        const novaContidade = this.getRemedios() * 2;
        this.setRemedios(novaContidade);
    }
}

const cachorro1 = new Cachorro("Chamusco", "Vira-lata", 4);
const cachorro2 = new Pastor_alemao("Miucha");
const cachorro3 = new Pitbull("R2-D2");

console.log("---------")

cachorro1.dizPresenca();
cachorro1.dizRaca();
cachorro1.dizRemedios();

console.log("---------")

cachorro2.dizPresenca();
cachorro2.dizRaca();
cachorro2.dizRemedios();

console.log("---------")

cachorro3.dizPresenca();
cachorro3.dizRaca();
cachorro3.dizRemedios();