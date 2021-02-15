
document.getElementById("show-score").addEventListener("click", function runHscore(){
    var showHS = localStorage.getItem(response);
    var displayHighscore = document.querySelector("#score-list")
    var nodify = document.createTextNode(showHS);
    hScoreLi.appendChild(nodify);
    displayHighscore.appendChild(hScoreLi)
    console.log(nodify)
}) 