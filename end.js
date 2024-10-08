const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => { 
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;


});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES); // Limit to maximum high scores

    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Inform the user that their high score is saved
    alert("Your high score is saved! You can check it on the high scores page.");

    // Redirect to the quiz.html page
    window.location.assign("quiz.html");
};