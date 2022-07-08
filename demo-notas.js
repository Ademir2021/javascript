const AlunoNotas = (notasAluno) => {
    var i = 0, soma = 0, notas = notasAluno.length;
    while (i < notas) {
        soma = soma + notasAluno[i++];
}
    return soma / notas;
}

let n1 = 6.8, n2 = 7.5, n3 = 8.7, n4 = 9.2, n5 = 10 ;

var notasAluno = [n1, n2, n3, n4, n5];
var mediaFinal = AlunoNotas(notasAluno);
console.log(mediaFinal);
