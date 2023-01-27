
console.log('ATIVIDADE 1')

const listaNumeros = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]

const numerosImpares = listaNumeros.filter((numero) => numero%2 == 1)
console.log(numerosImpares)


console.log('ATIVIDADE 2')
const listaNumeros2 = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]

const total = listaNumeros2.reduce((acumulador, proximo) =>
    acumulador + proximo
,0)

console.log(total)


console.log('ATIVIDADE 3')

class Pessoa {
    nome: string;
    idade: number;
    salario: number | undefined;

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }
}

const listaPessoas = [
    new Pessoa("luana", 15,500),
    new Pessoa("pablo", 58, 200),
    new Pessoa("pedro", 23, 600),
    new Pessoa("ricardo", 4, 850),
    new Pessoa("juca", 10, 1200)
]

const menorQue23 = listaPessoas.filter((pessoa) => pessoa.idade < 23)
console.log('menor que 23', menorQue23)

console.log('ATIVIDADE 4')
const menorQue30 = listaPessoas.filter((pessoa) => pessoa.idade < 30)
const soma = menorQue30.reduce((acumulador, proximo) => acumulador + proximo.idade ,0)
const media = soma / menorQue30.length

console.log("Media", media)

console.log('ATIVIDADE 5')
const salarioMenor = listaPessoas.filter((pessoa) => pessoa.salario! < 1027)
const idade = salarioMenor.forEach((pessoa) => {
    return pessoa.idade, pessoa.nome
})


console.log("Media", media)



/*console.log('ATIVIDADE 6')

class Aluno {
    nome: string;
    idade: number;
    nota: number;
    status?: string;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.nota = 0;
    }

    alterarNota(nota: number) {
        this.nota = nota;
    }

    alterarStatus(statusAluno : string) {
        this.status = statusAluno;
    }
}

const listaAlunos = [
    new Aluno ('Luana', 14),
    new Aluno ('Carlos', 15),
    new Aluno ('Pedro', 13),
    new Aluno ('Marcos', 14),
    new Aluno ('Luna', 14),
    new Aluno ('Joana', 16),
    new Aluno ('Lucas', 15),
]

const gabarito = ['A', 'A', 'B', 'C', 'A', 'C', 'B', 'C','A', 'B']

const options = ['A', 'B', 'C']
let nota = 0;

listaAlunos.forEach((aluno, index) => {
    let respostas = []
    for (let index = 0; index < gabarito.length; index++) {
        const sorteio = Math.floor(Math.random() * 3);
        respostas.push(options[sorteio])

        options[sorteio] == gabarito[index] ? nota += 1 : nota
    }

    aluno.alterarNota(nota)

    if(nota >= 6){
        aluno.alterarStatus('Aprovado')
        return
    }

    aluno.alterarStatus('Reprovado')
})

const alunosAprovados = listaAlunos.filter((aluno) => aluno.status == 'Aprovado')
const alunosReprovados = listaAlunos.filter((aluno) => aluno.status == 'Reprovado')

const somaNotas = listaAlunos.reduce((soma, proximo) => soma + proximo.nota, 0)
const mediaTurma = somaNotas / listaAlunos.length


const melhorAluno = listaAlunos.sort((a1, a2) => a2.nota - a1.nota)[0]
const piorAluno = listaAlunos.sort((a1, a2) => a2.nota - a1.nota)[listaAlunos.length -1]

console.log("== ALUNOS APROVADOS ==")
alunosAprovados.forEach((aluno) => 
    console.log('NOME: ' + aluno.nome + ' - ' + 'Nota: ' + aluno.nota)
)


console.log("== ALUNOS REPROVADOS ==")
alunosReprovados.forEach((aluno) => 
    console.log('NOME: ' + aluno.nome + ' - ' + 'Nota: ' + aluno.nota)
)


console.log("== MÉDIA DA TURMA ==")
console.log(mediaTurma.toFixed(0))


console.log("== MELHOR ALUNO ==")
console.log('Nome: ' + melhorAluno.nome + ' - ' + 'Nota: ' + melhorAluno.nota)


console.log("== PIOR ALUNO ==")
console.log('Nome: ' + piorAluno.nome + ' - ' + 'Nota: ' + piorAluno.nota)*/

