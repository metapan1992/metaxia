var wrongletter = 1;
var audio1 = new Audio("click.wav");
var audio2 = new Audio("gameover.wav");
var wr = [];

// Τυχαία επιλογή λέξης από τον πίνακα
var words = ["bed", "chair", "welcome", "ocean", "table", "extremely", "beautiful", "wonderful", "door", "boisterous", "luminous", "exquisite", "spontaneous", "bewildered", "furtive", "jubilant", "melancholy", "quizzical", "reclusive", "zealous", "ardent", "euphoric", "frivolous", "inquisitive", "nostalgic", "resilient", "somber", "tranquil", "whimsical"];

var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);

// Πίνακας με τα γράμματα της τυχαίας λέξης
var char = randomWord.split("");

// Για κάθε γράμμα της τυχαίας λέξης προσθέτω μια παύλα
for (var x = 0; x < char.length; x++) {
  document.querySelector(".word").innerHTML += "<i class='lt fa-solid fa-minus fa-2x'></i>";
}

var remainingDashes = char.length;

// Επιλέγω όλα τα κουμπιά και για κάθε ένα προσθέτω έναν event listener
var letter = document.querySelectorAll("button");




for (var i = 0; i < letter.length; i++) {
  letter[i].addEventListener("click", function() {
    audio1.play();
    // Εάν το γράμμα (button) που πάτησα υπάρχει στον πίνακα με τα γράμματα της λέξης (char)
    if (char.includes(this.textContent)) {
      for (var z = 0; z < char.length; z++) {
        if (this.textContent == char[z]) {
          // Αντικαθιστώ την παύλα με το γράμμα
          var newElement = document.createElement("i");
          newElement.classList.add("font");
          newElement.textContent = this.textContent;
          document.querySelectorAll("i")[z].replaceWith(newElement);
          remainingDashes--;
        }
      }
      if (remainingDashes == 0) {
        setTimeout(lastLetter, 1000);
      }
    } else { 
      if (!wr.includes(this.textContent)) {
        wr.push(this.textContent);
        document.querySelector(".wrongletters").innerHTML += this.textContent + " ";
      }
      document.querySelector(".hang").setAttribute("src", wrongletter+".png");
      wrongletter++;
      if (remainingDashes == 0) {
        setTimeout(lastLetter, 1000);
      } else if (wrongletter === 8) {
        setTimeout(gameOver, 1000);
      }
    }
  })
}















    function lastLetter(){
        alert("Congratulations, you guessed the word!");
        setTimeout(function() {
          location.reload(true);
        }, 2000);
    }

    function gameOver(){
        audio2.play();
      
        setTimeout(function() {
            location.reload(true);
          }, 3000);
    }
    



