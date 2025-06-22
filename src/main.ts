function multiplicação (a:number, b:number):number {
    return a * b;
}
console.log(multiplicação(10,5));

class Conhecidos  {
    nome:string;

    constructor (nome:string){
        this.nome = nome;
    }
}


class Amigo extends Conhecidos {
    dizOi(): void {
        this.nome = `Olá ${this.nome}`
    }
}

const amigo1 = new Amigo("Claiton");
const amigo2 = new Amigo("Padilha");
const amigo3 = new Amigo("Gabriel");
const amigo4 = new Amigo("Richard");

const amigos: Amigo[] = [amigo1,amigo2,amigo3,amigo4];

function colocarOla(lista:Amigo[]): void {
    lista.forEach(amigo => amigo.dizOi());
}

colocarOla(amigos);
console.log(amigos);