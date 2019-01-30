document.querySelector('.start-button').addEventListener('click', function () {
    (function () {
        var ansList1 = {
            0: 'John',
            1: 'Armin',
            2: 'Bob'
        };

        var ansList2 = {
            0: 'Yes',
            1: 'No'
        };

        var ansList3 = {
            0: 'Boring',
            1: 'Hard',
            2: 'Fun',
            3: 'Tedious'
        };

        var Questions = function (question, answerList, correctAnswer, number) {
            this.question = question;
            this.answerList = answerList;
            this.correctAnswer = correctAnswer;
            this.number = number;
        }

        Questions.prototype.printQuestion = function () {
            var propValue;
            console.log(this.question);
            for (var propName in this.answerList) {
                propValue = this.answerList[propName];
                console.log(propName + ': ' + propValue);
            }
        }

        Questions.prototype.checkAnswer = function (answer, callback) {
            var sc;
            if (answer === this.correctAnswer) {
                sc = callback(true);
                console.log('Correct answer!');
            
            } else {
                sc = callback(false);
                console.log("Wrong answer. Try again!");
            }

            this.displayScore(sc);
        }

        Questions.prototype.displayScore = function (score) {
            console.log('Your current score is: ' + score);
            console.log('-----------------------------------------------------');
        }

        var question1 = new Questions('What is my name?', ansList1, 1, 0);
        var question2 = new Questions('Do you like JavaScript?', ansList2, 0, 1);
        var question3 = new Questions('How would you describe coding?', ansList3, 2, 2);

        var questionsList = [question1, question2, question3];
    
        function score() {
            var sc = 0;
            return function (correct) {
                if (correct) {
                    sc++;
                }
                return sc;
            }
        }
    
        var keepScore = score();

        function nextQuestion() {
            var num = Math.floor(Math.random() * 3);
            return askQuestion(questionsList[num]);
        }

        var askQuestion = function (questionNum) {
            questionNum.printQuestion();
            var input = prompt("Please select the correct answer (just type the number)");
            if (input !== 'exit') {
                questionNum.checkAnswer(parseInt(input), keepScore);
                nextQuestion();
            }
        }

        // start the program    
        nextQuestion();

    })();
});