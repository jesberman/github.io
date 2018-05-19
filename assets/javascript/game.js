
    //variable that tracks the number of "wins" the player gets.  It begins at 0.
    var wins = 0;

    //variable that tracks the number of "losses" the player receives.  It begins at 0.
    var losses = 0;

    //variable that tracks how many more times the player can guess before a loss occurs.  It begins at 9.
    var guessesLeft = 9;


    //an array that stores the different guesses the player makes during a round
    var userGuesses = [];

    //an array that stores the different letters that may be the right answer
    var computerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    //a function that accomplishes several different tasks, including:
    document.onkeyup = function(event) {
        //when a key on the keyboad is pressed, it logs the key as the variable "userChoice" and converts it to lower case
        var userChoice = event.key.toLowerCase();
        //when a key on the keyboard is pressed, the code chooses a random letter from the variable "computerLetter" and uses it as the secret answer 
        var compChoice = computerLetter[Math.floor(Math.random()*computerLetter.length)];
        //takes the different guesses the user makes and pushes them into the aray "userGuesses"
        userGuesses.push(userChoice);

        //keeps track in the console of the keys the user presses and the variable the computer chooses for the correct answer 
        console.log("userChoice=" + userChoice);
        console.log("compChoice="+ compChoice);



        //beginning of an if/else statement, telling the computer to check if the variable "userChoice" is equal to the variable "compChoice"
        if (userChoice == compChoice) {

            //tells the computer that, if the two values are equal, to increase the value of the "wins" variable by 1
            wins=wins+1;
            //tells the computer to send an alert to the user, informing them that they have won the round
            alert("Great guess!!  You\'ve won a match!");
            //resets the variable "guessesLeft" to 9
            guessesLeft = 9;
            //erases the users previous guesses, returning the variable to its original state
            userGuesses.length = 0;
            //tells the computer that, if the variable "guessesLeft" reaches 0, to run the following code:
        } else if (guessesLeft == 0) {
            //tells the computer to increase the value of the "losses" variable by 1
            losses = losses+1;
            //Tells the computer to inform the user that they have lost the round
            alert("Uh oh!  Sorry, but you didn\'t guess the rigth letter.  Try again?");
            //resets the variable "guessesLeft" to 9
            guessesLeft = 9;
            //erases the users previous guesses, returning the variable to its original state
            userGuesses.length = 0;
        }
        //tells the code that, if the variables "userChoice" and "compChoice" are not equal, to run the following code:
        else if (userChoice !== compChoice){
        //tells the code to reduce the value of the variable "guessesLeft" by 1
            guessesLeft--;
        }  
        //creates the variable "html," which will later be used to replace the pages original html with a new one that displays the users progress
        var html = "<h1>The Psychic Game</h1>" +

        "<p>Guess what letter I'm thinking of</p>" +

        "<p>Wins: " + 
        
        wins +

        "</p>" +

        "<p>Losses: " +


        losses +

        "</p>" +

        "<p>Guesses Left: " +

        guessesLeft +

        "</p>" +


        "<p>Your Guesses So Far: " +

        userGuesses +

        "</p>" ;

        //replaces the html's body id "main" with the variable "html"
        document.querySelector("#main").innerHTML = html;






    }


