var inputTarefa = document.getElementById("input-tarefa")
var btnaddtarefa = document.getElementById("btn-add-tarefa")
var listatarefa = document.getElementById("lista-tarefas")
var idtarefa = 0;
var coin = document.getElementById("coin")


var audio = new Audio('audio/mario.mp3');
setTimeout(toca, 2000)
function toca(){
    audio.play()
}

var botao = new Audio("audio/moeda.mp3");





btnaddtarefa.addEventListener("click", ()=>{
    if (inputTarefa.value != ""){
        idtarefa++;
        var li = document.createElement("li");
        li.id = idtarefa;
        li.innerHTML = `<span>${inputTarefa.value}</span> <a href="#" onclick="removertarefa(event)"><img class="lixeira-icone" name=${idtarefa} src="imagens/lixeira2.png"></a>`;
        listatarefa.appendChild(li);
        inputTarefa.value = "";
        botao.play();
        coin.style.animation = "moedasobe 0.5s";
        setTimeout(()=>{coin.style.animation = ""}, 350)
    }
    else{
        alert("digite uma tarefa")
    }
    
});

function removertarefa(event){
    var elementoParaRemover = document.getElementById(event.target.name)
    elementoParaRemover.remove();
}

