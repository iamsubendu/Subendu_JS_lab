function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;

  this.getQuestionByindex = function () {
    return this.questions[this.questionIndex];
  };

  this.loadQuestions = function () {
    if (this.questionIndex === this.questions.length) {
      this.showScores();
    } else {
      this.questionElemn = document.getElementById('question');
      this.questionElemn.innerText = this.getQuestionByindex().text;

      let choices = this.getQuestionByindex().choices;
      for (let i = 0; i < choices.length; i++) {
        let ele = document.getElementById('btn' + i);
        ele.innerText = choices[i];
        this.handleOptionBtn('btn' + i, choices[i]);
      }

      this.showProgress();
    }
  };

  this.showScores = function () {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('progress').style.display = 'none';
    let score = document.getElementById('score');
    score.innerText = `You scored ${this.score} out of ${
      this.questions.length
    }. Score Percentage: ${(this.score / 10) * 100} %`;
    let reload = document.getElementById('reload');
    reload.style.display = 'block';
    reload.onclick = function () {
      window.location.reload();
    };
  };

  this.calculateScore = function (answer) {
    if (this.getQuestionByindex().answer == answer) {
      this.score++;
    }
  };

  this.showProgress = function () {
    let progress = document.getElementById('progress');
    progress.innerText = `Question ${this.questionIndex + 1} of ${
      questions.length
    }`;
  };

  this.handleOptionBtn = function (btnId, choice) {
    let btn = document.getElementById(btnId);
    let self = this;
    //using self to pass refernce of this
    btn.onclick = function () {
      //so  we can use this in this scope
      self.calculateScore(choice);
      self.questionIndex++;
      self.loadQuestions();
    };
  };
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

let questions = [
  new Question(
    'Which company developed JavaScript?',
    ['Microsoft', 'Sun Microsystems', 'Netscape', 'Oracle'],
    'Netscape'
  ),
  new Question(
    'Which of the following is a JavaScript framework?',
    ['Django', 'Angular', 'Flask', 'Rails'],
    'Angular'
  ),
  new Question(
    'How do you write "Hello World" in an alert box?',
    [
      'alertBox("Hello World");',
      'alert("Hello World");',
      'msg("Hello World");',
      'msgBox("Hello World");',
    ],
    'alert("Hello World");'
  ),
  new Question(
    'Which of the following is not a reserved word in JavaScript?',
    ['interface', 'throws', 'program', 'short'],
    'program'
  ),
  new Question(
    'What is the output of typeof null in JavaScript?',
    ['object', 'null', 'undefined', 'function'],
    'object'
  ),
  new Question(
    'Which symbol is used for comments in JavaScript?',
    ['<!-- -->', '//', '/* */', 'Both B and C'],
    'Both B and C'
  ),
  new Question(
    'What will be the output of: console.log("1" + 2 + 3);',
    ['123', '6', 'NaN', 'Error'],
    '123'
  ),
  new Question(
    'Which function is used to parse a string to an integer in JavaScript?',
    ['parseInt()', 'Integer()', 'parseFloat()', 'getInt()'],
    'parseInt()'
  ),
  new Question(
    'Which method adds a new element to the end of an array?',
    ['pop()', 'push()', 'shift()', 'unshift()'],
    'push()'
  ),
  new Question(
    'Which of the following is not a JavaScript data type?',
    ['String', 'Boolean', 'Undefined', 'Float'],
    'Float'
  ),
];

let quiz = new Quiz(questions);
quiz.loadQuestions();
