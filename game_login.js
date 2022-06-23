
function login() {
    var player1Name = document.getElementById("play1Name").value   
    var player2Name = document.getElementById("play2Name").value
    
    localStorage.setItem("player1Name", player1Name)
    localStorage.setItem("player2Name", player2Name)

    window.location = "game_page.html"
}