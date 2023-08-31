var ans;
var j = 0;

var score = -1;

var question = ["",
     "What is the best nation in the world ?",
     "What is the Capital of India?",
     "Who was the Ancient Greek God of the Sun?",
     "Electricity is a flow of ?" ,
     "Which phobia is the fear of being alone ?"
    ];
var options = [
    [],
    ["India", "Pakistan", "America", "Japan"],
    ["New Delhi","Mumbai","Lucknow","Kerala"],
    ["Zeus","Poseidon","Hermes","Apollo"],
    ["Water","Air","Electrons","Atoms"],
    ["Agoraaphobia","Aerophobia","Acrobhobia","Arachnophobia"]
];
var answers = ["op4", "op1","op1","op4","op3","op1"];

function submit() {
    var ele = document.getElementsByName("options");

    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            ans = ele[i].value;
    }

    if (ans === answers[j]) {
        score++;

        // alert("Right");
        j++;

        if (j == question.length) {
            document.getElementById('box').classList.add('hidden');
            document.getElementsByClassName('win')[0].classList.remove('hidden');
            document.getElementById('score').innerHTML = score;
            document.getElementById('score').removeChild('button');
        }
        console.log(question.length)
        var que = document.getElementById("question");
        que.innerHTML = question[j];

        for (var i = 0; i <= 3; i++) {
            document.getElementById(`o${i+1}`).innerHTML = options[j][i];
        }

    } else {
        // alert("Wrong Answer");
        j = 0;
        document.getElementById('box').classList.add('hidden');
        document.getElementsByClassName('lose')[0].classList.remove('hidden');
        document.getElementById('score').innerHTML = score;
        setTimeout(()=>{
            document.location.reload();
        },3000);
    }

}

function getScore() {
    document.getElementById('box').classList.toggle('hidden');
    document.getElementById('score').innerHTML = score;
}

addEventListener("keypress",submit);