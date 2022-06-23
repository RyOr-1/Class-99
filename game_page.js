var player1Score = 0
var player2Score = 0

var qstTurn = "player1"
var awsTurn = "player2"

var player1Name = localStorage.getItem("player1Name")
var player2Name = localStorage.getItem("player2Name")

var word, aws;

document.getElementById("player1Name").innerHTML = player1Name + ": "
document.getElementById("player2Name").innerHTML = player2Name + ": "

document.getElementById("player1Score").innerHTML = player1Score
document.getElementById("player2Score").innerHTML = player2Score

document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1Name
document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name

function sendWord() {
    var getWord = document.getElementById("word").value
    word = getWord.toLowerCase()

    char1 = word.charAt(1)

    var halfLenght = Math.floor(word.length / 2)
    char2 = word.charAt(halfLenght)

    char3 = word.charAt(word.length - 1)

    removeChar1 = word.replace(char1, "_")
    removeChar2 = removeChar1.replace(char2, "_")
    removeChar3 = removeChar2.replace(char3, "_")

    console.log(removeChar3)

    var questionWord = "<h4 id='wordDisplay'>" + removeChar3 + "</h4>"

    var inputBox = "<input type='text' id='answerBox'><br><br>"

    var checkBtn = "<button onclick='check()' class = 'btn btn-primary'>Check</button>"

    var output = questionWord + inputBox + checkBtn

    document.getElementById("output").innerHTML = output

    document.getElementById("word").value = ""

}

function check() {
    var getAws = document.getElementById("answerBox").value
    aws = getAws.toLowerCase()
    console.log(aws)
    console.log(word)

    if (word == aws) {
        if (qstTurn == "player1") {
            player1Score = player1Score + 1
            document.getElementById("player1Score").innerHTML = player1Score
        }
        else {
            player2Score = player2Score + 1
            document.getElementById("player2Score").innerHTML = player2Score
        }

    }

    if (qstTurn == "player1") {
        qstTurn = "player2"
        awsTurn = "player1"

        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player2Name
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player1Name
    }
    else {
        awsTurn = "player2"
        qstTurn = "player1"

        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1Name
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name
    }

    document.getElementById("output").innerHTML  = ""
}