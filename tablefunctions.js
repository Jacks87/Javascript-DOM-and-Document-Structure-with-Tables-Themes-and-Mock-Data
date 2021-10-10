//Jackelin Britton
function countdownTimerRun() {
    var currTime = 10;
    //timer for 10 sec left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}

function betterCountdown() {
    //js function is a block of code designed to perform a specific task. In this case we are invoking (calling) betterCountdown
  var currTime = 10;
    //var declares a variable, in this case the variable currTime
  for (var i = 1; i <= 11; i++) {
        //the increment ++ operator adds 1 to the operand
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            //The if/else statement executes a block of code if a specified condition is true
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                //innerHTML sets the HTML contects of an element on a web page
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
                //in this case the 1000 means 1000 milliseconds which is equals to 1 second.
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function whileCount() {
    //the whilecount statement creates a loop
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {      
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                //the document.getElementById returns an element object representing the element whose id property matches the specified string, in this case the countdowntimer.
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}
// we create our functions, one for the start button and one for the stop one.
//to create the start button
//we get the data inside of it linked with the data rows ("").rows [] and specify what row inside of the []
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
}
//.disabled = true will make the start button disable when variable is true
//.disabled = false will make the stop button disable
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

//create functions for each button to play a song
//you name each and add different mp3 file to each function
function playOver() {
    mySound = new sound("over_and_out.mp3");
    mySound.play();
}

function playFrankSinatra() {
    mySound = new sound("Frank Sinatra - Fly Me To The Moon.mp3");
    mySound.play();
}

function playMoby() {
    mySound = new sound("Porcelain.mp3");
    mySound.play();
}

function playCreedence() {
    mySound = new sound("Bad Moon Rising.mp3");
    mySound.play();
}

function playTestYourMight() {
    mySound = new sound("test-your-might.mp3")
    mySound.play();
}

//function sound (src) will make your buttons actually sound since it'll link what we have on HTML
//also we createElement audio
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();

    }

}
function play() {
    //function() we are declaring an action
    var die1 = Math.ceil(Math.random() * 6);
    // var is a variable and in this case is the die1
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2;
    //var sum will do a math from var die1 and var die 2 
    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;
    //document.getElementById is used to get info from an element, in this case from the results of die1 and die2

    if (sum == 7 || sum == 11) {
    //if and else are conditionals
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
    // || means OR is used to perform or operation if anyone of the expression/condition evaluates to true whole thing becomes true.
    // && means AND - if anyone of the expression/condition evaluates to false whole thing is false
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}