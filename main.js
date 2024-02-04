const setwd = ["This tire needs some air Won't you have some cake",
    "Could you get me some tea He hired some new workers.",
    "I got some sand in my eye.I have some English books.",
    "I'd like some more coffee. She bought him some candy.",
    " Some snakes are poisonous. Will you have some coffee?",
    "Won't you have some fruit? Would you like some salad?",
    "You will succeed some day Could I have some more tea? "
]

const msg = document.getElementById("msg");

const word = document.getElementById("textarea")

const btn = document.getElementById("btn")




let startTime, endTime;

word.disabled = true;

function playGame() {
    let randomeNumber = Math.floor(Math.random() * setwd.length);
    msg.innerText = setwd[randomeNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endplay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000)

    let totalstr = word.value;
    let wordC = wordCount(totalstr);

    let speed = Math.round((wordC / totalTime) * 60);

    let finalmsg = "you Typed total at " + speed + " words per minutes";

    finalmsg += compreWord(msg.innerText, totalstr);

    msg.innerText = finalmsg;


}
const compreWord = (str1, str2) => {
    let word1 = str1.split(" ")
    let word2 = str2.split(" ")

    let count = 0;

    word1.forEach(function(item, index) {
        if (item == word2[index]) {
            count++;
        }
    })
    let errword = (word1.length - count);
    return (count + " word are correct out of " + word1.length + " word and the total number of erros are " + errword)
}

const wordCount = (str) => {
    return str.split(' ').filter(function(num) {
        return num != ''
    }).length;
}

btn.addEventListener('click', function() {
    if (this.innerText == 'Start') {
        word.disabled = false;
        word.value = ''
        playGame();

    } else if (this.innerText == "Done") {
        word.disabled = true;
        btn.innerText = "Start";
        endplay();
    }
    console.log(this.innerText)
});
console.log("jahjj")