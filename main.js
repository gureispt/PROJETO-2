const form = document.getElementById('form-activity');

// Renderiza as imagens
const imgAproved = '<img src="./images/aprovado.png" alt="Emoji festa" />';
const imgReproved = '<img src="./images/reprovado.png" alt="Emoji festa" />';

// Armazena atividades e notas
const activitys = [];
const notes = [];

// Renderiza os spans
const spanAproved = '<span class="resultado aprovado">Aprovado</span>';
const spanReproved = '<span class="resultado reprovado">Reprovado</span>';

const noteMin = parseFloat(prompt('Digite a nota mínima:'));

let lines = ''
// Evento principal onde são chamadas todas as funções
form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
    updateFinalAverage();
    updateFinalAverage();
})
// Função para adicionar linhas na tabela
function addLine(){
    const inputNameActivity = document.getElementById('name-activity');
    const inputNoteActivity = document.getElementById('note-activity');

    if(activitys.includes(inputNameActivity.value)){
        alert(`A ${inputNameActivity.value} já existe!`)
    }else{
        activitys.push(inputNameActivity.value);
        notes.push(parseFloat(inputNoteActivity.value));
    
        let line = '<tr>';
        line += `<td>${inputNameActivity.value}</td>`;
        line += `<td>${inputNoteActivity.value}</td>`;
        line += `<td>${inputNoteActivity.value >= noteMin ? imgAproved : imgReproved }</td>`;
        line += '</tr>';
        lines += line;
    }
    inputNameActivity.value = '';
    inputNoteActivity.value = '';
}
// Função que atualiza a tabela
function updateTable(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}
// Função que atualiza a média e adiciona na tabela
function updateFinalAverage(){
    const finalAverage = calcFinalAverage();

    document.getElementById('final-average').innerHTML = finalAverage;
    document.getElementById('result').innerHTML = finalAverage >= noteMin ? spanAproved : spanReproved;
}
// Função que calcula a média
function calcFinalAverage(){
    let sumNotes = 0;

    for(let i = 0; i < notes.length; i++){
        sumNotes += notes[i];
    }

    const result = sumNotes / notes.length;
    return result.toFixed(2);
}