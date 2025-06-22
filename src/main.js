"use strict";
function multiplicação(a, b) {
    return a * b;
}
console.log(multiplicação(10, 5));
class Conhecidos {
    constructor(nome) {
        this.nome = nome;
    }
}
class Amigo extends Conhecidos {
    dizOi() {
        this.nome = `Olá ${this.nome}`;
    }
}
const amigo1 = new Amigo("Claiton");
const amigo2 = new Amigo("Padilha");
const amigo3 = new Amigo("Gabriel");
const amigo4 = new Amigo("Richard");
const amigos = [amigo1, amigo2, amigo3, amigo4];
function colocarOla(lista) {
    lista.forEach(amigo => amigo.dizOi());
}
colocarOla(amigos);
console.log(amigos);
