function shuffleArray(array) 
{
    for (var i = array.length - 1; i > 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var phrases = shuffleArray([
    "How did you get here?",
    "Have you ever divided by zero?",
    "Should I start a new project?",
    "I am working really hard... trust me",
    "Let's hope it's worth the wait",
    "The arcade is coming"]);

var phraseElement = document.getElementById("phrase");
phraseElement.innerText = phrases[0];
