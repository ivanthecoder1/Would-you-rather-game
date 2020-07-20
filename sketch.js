let state = 1;
let questionNumber = 1;
let score = 0;
let ratherImage;
let ninja;
let pirate; 
let poor;
let rich;
let normal;
let baby;
let terminator;
let zombie;
let loli;
let old;
let royal;
let pimp;
let meow;
let talk;
let sing;
let dance;
let poop;
let foot;
let when;
let how;
let minority;
let majority;
let one;
let two;

function preload() {
    ratherImage = loadImage('images/rather.webp')
    ninja = loadImage('images/naruto.jpg');
    pirate = loadImage('images/shanks.jpg');
    poor = loadImage('images/poor.jpg');
    rich = loadImage('images/rich.jpg')
    normal = loadImage('images/normal.jpg');
    baby = loadImage('images/opposite.jpg');
    terminator = loadImage('images/terminator.jpg')
    zombie = loadImage('images/zombie.jpg')
    loli = loadImage('images/loli.jpg');
    old = loadImage('images/old.jpg');
    royal = loadImage('images/royal.jpg');
    pimp = loadImage('images/pimp.jpg');
    meow = loadImage('images/meow.jpg')
    talk = loadImage('images/talk.jpg');
    sing = loadImage('images/sing.jpg')
    dance = loadImage('images/dance.jpg');
    foot = loadImage('images/foot.jpg');
    poop = loadImage('images/poop.jpg');
    when = loadImage('images/when.jpg');
    how = loadImage('images/how.jpg');
    minority = loadImage('images/minorities.jpg');
    majority = loadImage('images/majority.jpg');
    one = loadImage('images/1.jpg');
    two = loadImage('images/2.jpg')


}
function setup() {
    createCanvas(800, 500);
    background(225, 254, 233);
    question1 = new Question("Would you rather be a pirate or ninja?", 50, 80, 2, '78');
    // ninja wins by 78
    question2 = new Question("Would you rather live until 80 in poverty or live until 40 in riches?", 50, 80, 2);
    // riches win by 66
    question3 = new Question("Would you rather live life normally or be reincarnated into a baby of the opposite sex with your memories? ", 10, 80, 2);
    // reborn wins 77
    question4 = new Question("Would you rather try to surive the Terminator or a zombie apocalyse?", 50, 80, 2);
    // zombies win by 65
    question5 = new Question("Would you rather date someone that always looks 12 or someone that always looks 80 ?", 50, 80, 1);
    // 12 wins by 92
    question6 = new Question("Would you rather dress like royalty or as a pimp?", 50, 80, 1);
    // royal wins by 68
    question7 = new Question("Would you rather only be able to meow but live 9 lives or talk but live once?", 50, 80, 2);
    // talk once wins by 73
    question8 = new Question("Would you rather sing everything you say or dance all your movements?", 50, 80, 1);
    // sing wins by 56
    question9 = new Question("Would you rather eat a human foot or a plate of poop?", 50, 80, 1);
    // human foot wins by 75
    question10 = new Question("Would you rather know when you die or how you die?", 50, 80, 2);
    // how wins by 56
}
function draw() {
   // start screen
    if (state == 1) {
        noStroke();
        background(225, 254, 233);
        image(ratherImage, 70, 50, 450, 450);
        // option boxes
        fill(0, 0, 255);
        fill(0, 255, 150)
        rect(600, 100, 200, 100);
        fill(0, 255, 255)
        rect(600, 300, 200, 100);
        textSize(22);
        fill(0)
        text('Play', 670, 150);
        fill(0, 0, 255);
        text('How to Play', 610, 350);
    } 
    // how to play screen
    else if (state == 2) {
        background(225, 254, 233);
        fill(0);
        textSize(22);
        text("Your objective is to either play normally or try to get in the majority", 60, 60);
        text("Press 1 to select option 1 or press 2 to select option 2", 60, 100);
        text("Option 1 is the first part of the question and option 2 is the second part", 60, 140);
        text("After selecting your choice, you're given a point if you were in the majority", 60, 180);
        text("but if you were in the minority, you get no points", 60, 220);
        text("After answering, press the up arrow to proceed to the next question", 60, 260);
        text("Press backspace to go back", 60, 300);
    }
    // answering screen
    else if (state == 3) {
        background(255, 254, 233);
        // option boxes
        // displays a specific question based on question number
        if (questionNumber == 1) {
            background(225, 254, 233);
            question1.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(pirate, 0, 200, 400, 400);
            image(ninja, 400, 200, 400, 400);
            fill(0, 0, 255);
            text("Score: " + score, 120, 100);    
            text("Results: " + question1.result1, 120, 130); 
        }
        else if (questionNumber == 2) {
            background(225, 254, 233);
            question2.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(poor, 0, 200, 400, 400);
            image(rich, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);  
            text("Results: " + question2.result1, 120, 130);   
        }
        else if (questionNumber == 3) {
            background(225, 254, 233);
            question3.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(normal, 0, 200, 400, 400);
            image(baby, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);  
            text("Results: " + question3.result1, 120, 130);   
        }
        else if (questionNumber == 4) {
            background(225, 254, 233);
            question4.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(terminator, 0, 200, 400, 400);
            image(zombie, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);    
            text("Results: " + question4.result1, 120, 130); 
        }
        else if (questionNumber == 5) {
            question5.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(loli, 0, 200, 400, 400);
            image(old, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);    
            text("Results: " + question5.result1, 120, 130); 
        }
        else if (questionNumber == 6) {
            question6.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(royal, 0, 200, 400, 400);
            image(pimp, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);   
            text("Results: " + question6.result1, 120, 130);  
        }
        else if (questionNumber == 7) {
            question7.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(meow, 0, 200, 400, 400);
            image(talk, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);    
            text("Results: " + question7.result1, 120, 130); 
        }
        else if (questionNumber == 8) {
            question8.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(sing, 0, 200, 400, 400);
            image(dance, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);   
            text("Results: " + question8.result1, 120, 130);  
        }
        else if (questionNumber == 9) {
            question9.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(foot, 0, 200, 400, 400);
            image(poop, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);  
            text("Results: " + question9.result1, 120, 130);   
        }
        else if (questionNumber ==  10) {
            question10.show();
            image(one, 130, 150, 50, 50);
            image(two, 550, 150, 50, 50);
            image(when, 0, 200, 400, 400);
            image(how, 400, 200, 400, 400);
            text("Score: " + score, 120, 100);    
            text("Results: " + question10.result1, 120, 130); 
        }
        else if (questionNumber == 11) {
            if (score > 5) {
                state = 4;
            }
            else if (score <= 5) {
                state = 5;

            }
        }
    }
    // game result screen
    // win screen
    else if (state == 4) {
        background(225, 254, 233);
        fill(255, 0, 0);
        textSize(22);
        text("You're in the majority so I guess you win but not really", 80, 80);
        text("Your score: " + score, 100, 120)
        text("Refresh to play again if you want to", 100, 150);
        image(majority, 100, 165, 400, 400);
    }
    // lose screen
    else if (state == 5) {
        background(225, 254, 233);
        fill(255, 0, 0);
        textSize(22);
        text("You're in the minority so I guess you lose but not really", 80, 80);
        text("Your score: " + score, 100, 120)
        text("Refresh to play again if you want to", 100, 150);
        image(minority, 100, 165, 400, 400);
    }
}
 function mouseClicked() {
     if (state == 1) {
         if (mouseX > 600 && mouseX < 800 && mouseY > 100 && mouseY < 200) {
             state = 3;
         }
         if (mouseX > 600 && mouseX < 800 && mouseY > 300 && mouseY < 400) {
            state = 2;
        }

     }
}

// game command
function keyPressed() {
    if (keyCode == UP_ARROW) {
        questionNumber += 1;
    }
    if (keyCode == 8) {
        state = 1;
    }
    if (keyCode == 49) {
        choice = 1;
        if (questionNumber == 1 && question1.once == true) {
            question1.once = false;
            question1.score(choice);
            question1.result(choice);
        }
        else if (questionNumber == 2 && question2.once == true) {
            question2.once = false;
            question2.score(choice);
            question2.result(choice);
        }
        else if (questionNumber == 3 && question3.once == true) {
            question3.once = false;
            question3.score(choice);
            question3.result(choice);
        }
        else if (questionNumber == 4 && question4.once == true) {
            question4.once = false;
            question4.score(choice);
            question4.result(choice);
        }
        else if (questionNumber == 5 && question5.once == true) {
            question5.once = false;
            question5.score(choice);
            question5.result(choice);
        }
        else if (questionNumber == 6 && question6.once == true) {
            question6.once = false;
            question6.score(choice);
            question6.result(choice);
        }
        else if (questionNumber == 7 && question7.once == true) {
            question7.once = false;
            question7.score(choice);
            question7.result(choice);
        }
        else if (questionNumber == 8 && question8.once == true) {
            question8.once = false;
            question8.score(choice);
            question8.result(choice);
        }
        else if (questionNumber == 9 && question9.once == true) {
            question9.once = false;
            question9.score(choice);
            question9.result(choice);
        }
        else if (questionNumber == 10 && question10.once == true) {
            question10.once = false;
            question10.score(choice);
            question10.result(choice);
        }

    }
    else if (keyCode == 50) {
        choice = 2;
        if (questionNumber == 1 && question1.once == true) {
            question1.once = false;
            question1.score(choice);
            question1.result(choice);
        }
        else if (questionNumber == 2 && question2.once == true) {
            question2.once = false;
            question2.score(choice);
            question2.result(choice);
        }
        else if (questionNumber == 3 && question3.once == true) {
            question3.once = false;
            question3.score(choice);
            question3.result(choice);
        }
        else if (questionNumber == 4 && question4.once == true) {
            question4.once = false;
            question4.score(choice);
            question4.result(choice);
        }
        else if (questionNumber == 5 && question5.once == true) {
            question5.once = false;
            question5.score(choice);
            question5.result(choice);
        }
        else if (questionNumber == 6 && question6.once == true) {
            question6.once = false;
            question6.score(choice);
            question6.result(choice);
        }
        else if (questionNumber == 7 && question7.once == true) {
            question7.once = false;
            question7.score(choice);
            question7.result(choice);
        }
        else if (questionNumber == 8 && question8.once == true) {
            question8.once = false;
            question8.score(choice);
            question8.result(choice);
        }
        else if (questionNumber == 9 && question9.once == true) {
            question9.once = false;
            question9.score(choice);
            question9.result(choice);
        }
        else if (questionNumber == 10 && question10.once == true) {
            question10.once = false;
            question10.score(choice);
            question10.result(choice);
        }
    }
}
class Question {
    constructor(q, x, y, a) {
        this.q = q;
        this.x = x; 
        this.y = y;
        this.answer = a;
        this.once = true;
        this.result1 = '...';
        
    }
    show() {
        textSize(14);
        text(this.q, this.x, this.y);
    }
    score(choice) {
        if (this.answer == choice) {
            score += 1;
        }
        else {
            score;  
        }
    }
    result(choice) {
        if (this.answer == choice) {
            this.result1 = 'In the majority';
        }
        else {
            this.result1 = 'In the minority';
        }
    }
}