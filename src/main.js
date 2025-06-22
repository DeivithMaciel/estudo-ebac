class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Luna', 5);
const aluno2 = new Aluno('Rafaela', 8);
const aluno3 = new Aluno('Padilha', 2);
const aluno4 = new Aluno('Claiton', 9);
const aluno5 = new Aluno('Timmy', 7);

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function filtrarAlunos(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAcimaDaMedia = filtrarAlunos(alunos);

console.log(alunosAcimaDaMedia);