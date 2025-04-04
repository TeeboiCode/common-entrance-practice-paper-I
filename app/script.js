const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#btn_start");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
let quizCard = document.querySelector("#quiz_card");
let countdownText = document.getElementById("countdownText");
let countdownNum = document.getElementById("countdownNum");
let countdownTime = document.querySelector(".tym");
let questions = document.querySelector("#question");
let optionAnswerBtn = document.querySelector("#answer-option");
let complete = document.querySelector("#complete");
let correctScore = document.querySelector(".correct-score");
let totalQuestion = document.querySelector(".total-question");
let totalQuestion2 = document.querySelector(".total-question2");
let nextQuestion = document.querySelector(".next-question");
let replayBtn = document.querySelector(".replay-btn");
let quitBtn = document.querySelector(".quit-btn");
let questionNextNum = document.querySelector(".questionNextNum");
let percentageScore = document.querySelector(".percentage-score");
let percentageContainer = document.querySelector("#percentage");
const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const nameContainer = document.querySelector("#nameContainer");
let playerName = "";

// form
let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstNameInput");
let lastName = document.querySelector("#lastNameInput");
let isEventDisabled;

// setting setTimeout for preloading
stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      nameContainer.classList.remove("hidden");
      // startBtn.classList.remove("hidden");
    }, 2000);
  });
}

// name submit
playerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your name!",
    });
    return;
  }

  nameContainer.classList.add("hidden");
  startBtn.classList.remove("hidden");

  Swal.fire({
    icon: "success",
    title: `Welcome ${playerName}!`,
    text: "Click Start Quiz when you're ready to begin.",
    confirmButtonText: "OK",
  });
});

function saveQuizResult(score) {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  const newResult = {
    name: playerName,
    score: correctPicked,
    total: quizQuestions.length,
    percentage: ((correctPicked / quizQuestions.length) * 100).toFixed(1),
    date: new Date().toLocaleDateString(),
  };

  results.push(newResult);

  results.sort((a, b) => b.percentage - a.percentage);

  localStorage.setItem("quizResults", JSON.stringify(results));

  // window.location.href = "results.html";
}

// adding Event Listener to start btn
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

// Start Quiz
continueBtn.addEventListener("click", continueGo);

function continueGo() {
  countdownContainer.classList.remove("hidden");
  quizRulesCard.classList.add("hidden");

  let countdown = 3;
  countdownText.textContent = "Get ready... The game starts in ";
  countdownNum.textContent = "3";

  const interval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      countdownText.textContent = `Get ready... The game starts in `;
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startCountDown();
      //   const goInterval = setInterval(() => {

      //   }, 500);
    }
  }, 1000);
}

// Exit Button
exitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      // window.close();
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

// Next question counting down
let isClicked = false;
function startCountDown() {
  countingDown = 30;

  countdownTime.innerHTML = countingDown;

  let countingDownInterval = setInterval(() => {
    countingDown--;
    // console.log(countingDown);

    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      // isClicked = false;
      clearInterval(countingDownInterval);
      load();
      // next();
      return;
    } else if (isClicked) {
      isClicked = false;
      clearInterval(countingDownInterval);
      next();
      return;
    }
  }, 2000);
}

// ======================
// ======================
// Questions
// ======================
// ======================

const quizQuestions = [
  // 50 questions for Paper I (Mathematics, Quantitative, General Science, etc.)
  {
    id: 1,
    question: "What is the value of 144 ÷ 12?",
    options: ["10", "11", "12", "13"],
    correct: "12",
  },
  {
    id: 2,
    question: "Which of these is a source of energy?",
    options: ["Chair", "Sun", "Book", "Plastic"],
    correct: "Sun",
  },
  {
    id: 3,
    question: "Calculate: 35 × 12",
    options: ["350", "420", "520", "120"],
    correct: "420",
  },
  {
    id: 4,
    question:
      "What is the name of the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
    correct: "Photosynthesis",
  },
  {
    id: 5,
    question: "Which fraction is equivalent to 0.25?",
    options: ["1/5", "1/4", "1/3", "1/2"],
    correct: "1/4",
  },
  {
    id: 6,
    question: "Which of these is NOT a state of matter?",
    options: ["Solid", "Liquid", "Gas", "Energy"],
    correct: "Energy",
  },
  {
    id: 7,
    question: "What is the perimeter of a square with side length 9cm?",
    options: ["36cm", "81cm", "18cm", "27cm"],
    correct: "36cm",
  },
  {
    id: 8,
    question: "Which of these animals is a mammal?",
    options: ["Snake", "Fish", "Frog", "Bat"],
    correct: "Bat",
  },
  {
    id: 9,
    question: "If 3x + 7 = 22, what is the value of x?",
    options: ["3", "5", "7", "15"],
    correct: "5",
  },
  {
    id: 10,
    question: "What is the main function of the lungs?",
    options: ["Pumping blood", "Filtering blood", "Gas exchange", "Digestion"],
    correct: "Gas exchange",
  },
  {
    id: 11,
    question: "Calculate the area of a rectangle with length 8m and width 5m.",
    options: ["13m²", "26m²", "40m²", "80m²"],
    correct: "40m²",
  },
  {
    id: 12,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    id: 13,
    question: "What is 3/4 of 20?",
    options: ["5", "15", "12", "16"],
    correct: "15",
  },
  {
    id: 14,
    question: "Which force pulls objects toward the center of the Earth?",
    options: ["Magnetic force", "Friction", "Gravity", "Electric force"],
    correct: "Gravity",
  },
  {
    id: 15,
    question: "Round 327 to the nearest ten.",
    options: ["320", "330", "300", "400"],
    correct: "330",
  },
  {
    id: 16,
    question: "What is the chemical formula for water?",
    options: ["H₂O", "CO₂", "O₂", "NaCl"],
    correct: "H₂O",
  },
  {
    id: 17,
    question: "Find the missing number in the sequence: 2, 4, 8, 16, ___",
    options: ["24", "32", "20", "18"],
    correct: "32",
  },
  {
    id: 18,
    question: "Which of these is NOT a renewable energy source?",
    options: ["Solar", "Wind", "Coal", "Hydroelectric"],
    correct: "Coal",
  },
  {
    id: 19,
    question: "What is the value of 5² - 3²?",
    options: ["16", "25", "9", "16"],
    correct: "16",
  },
  {
    id: 20,
    question: "What is the smallest unit of life?",
    options: ["Tissue", "Cell", "Organ", "Atom"],
    correct: "Cell",
  },
  {
    id: 21,
    question: "Express 7/8 as a decimal.",
    options: ["0.75", "0.825", "0.875", "0.775"],
    correct: "0.875",
  },
  {
    id: 22,
    question: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon dioxide",
  },
  {
    id: 23,
    question: "What is the value of 3 + 2 × 4?",
    options: ["11", "20", "14", "8"],
    correct: "11",
  },
  {
    id: 24,
    question: "The human body has how many pairs of chromosomes?",
    options: ["21", "22", "23", "24"],
    correct: "23",
  },
  {
    id: 25,
    question:
      "If a shirt costs $12 and is on sale for 25% off, what is the sale price?",
    options: ["$8", "$9", "$10", "$3"],
    correct: "$9",
  },
  {
    id: 26,
    question: "Which of these is a good conductor of electricity?",
    options: ["Rubber", "Wood", "Copper", "Plastic"],
    correct: "Copper",
  },
  {
    id: 27,
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: ["10", "12", "24", "2"],
    correct: "12",
  },
  {
    id: 28,
    question: "Which layer of the Earth is the thinnest?",
    options: ["Core", "Mantle", "Crust", "Inner core"],
    correct: "Crust",
  },
  {
    id: 29,
    question: "What is the next number in the pattern: 1, 4, 9, 16, ___?",
    options: ["20", "25", "36", "49"],
    correct: "25",
  },
  {
    id: 30,
    question: "What is the process called when a liquid changes to a gas?",
    options: ["Condensation", "Evaporation", "Freezing", "Melting"],
    correct: "Evaporation",
  },
  {
    id: 31,
    question: "Which number is a prime number?",
    options: ["15", "21", "9", "29"],
    correct: "29",
  },
  {
    id: 32,
    question: "What organ pumps blood throughout the body?",
    options: ["Lungs", "Liver", "Heart", "Kidney"],
    correct: "Heart",
  },
  {
    id: 33,
    question: "Calculate: 5/8 + 1/4",
    options: ["3/4", "7/8", "6/8", "4/8"],
    correct: "7/8",
  },
  {
    id: 34,
    question: "Which of these is NOT a nutrient?",
    options: ["Protein", "Carbohydrate", "Cholesterol", "Vitamin"],
    correct: "Cholesterol",
  },
  {
    id: 35,
    question:
      "If a car travels at 60 km/h, how far will it travel in 1.5 hours?",
    options: ["90 km", "40 km", "120 km", "30 km"],
    correct: "90 km",
  },
  {
    id: 36,
    question: "What type of angle measures exactly 90 degrees?",
    options: ["Acute", "Right", "Obtuse", "Straight"],
    correct: "Right",
  },
  {
    id: 37,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    correct: "Mercury",
  },
  {
    id: 38,
    question: "What is 15% of 80?",
    options: ["8", "12", "15", "20"],
    correct: "12",
  },
  {
    id: 39,
    question: "Which of these animals is cold-blooded?",
    options: ["Dog", "Cat", "Lizard", "Elephant"],
    correct: "Lizard",
  },
  {
    id: 40,
    question: "What is the volume of a cube with sides of length 3cm?",
    options: ["9cm³", "18cm³", "27cm³", "6cm³"],
    correct: "27cm³",
  },
  {
    id: 41,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gl", "Gd", "Au"],
    correct: "Au",
  },
  {
    id: 42,
    question: "Simplify: (3 × 4) + (7 × 2)",
    options: ["22", "26", "29", "34"],
    correct: "26",
  },
  {
    id: 43,
    question: "Which body system is responsible for fighting diseases?",
    options: ["Digestive", "Respiratory", "Immune", "Circulatory"],
    correct: "Immune",
  },
  {
    id: 44,
    question: "What is the sum of the angles in a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correct: "180°",
  },
  {
    id: 45,
    question: "Which of these is a compound machine?",
    options: ["Lever", "Inclined plane", "Bicycle", "Pulley"],
    correct: "Bicycle",
  },
  {
    id: 46,
    question: "What is the greatest common factor (GCF) of 24 and 36?",
    options: ["6", "12", "18", "24"],
    correct: "12",
  },
  {
    id: 47,
    question: "Which of these is NOT a phase of the moon?",
    options: ["New moon", "Full moon", "Half moon", "Blue moon"],
    correct: "Half moon",
  },
  {
    id: 48,
    question: "Factorize: x² - 9",
    options: ["(x+3)(x-3)", "(x+9)(x-1)", "(x+9)(x-9)", "(x+3)(x+3)"],
    correct: "(x+3)(x-3)",
  },
  {
    id: 49,
    question: "What part of a plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correct: "Leaf",
  },
  {
    id: 50,
    question: "If 4y - 3 = 9, what is the value of y?",
    options: ["2", "3", "4", "6"],
    correct: "3",
  },
];


let remainingQuestion = [...quizQuestions];
// console.log(remainingQuestion);

let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
totalQuestion2.textContent = quizQuestions.length;

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));
  askedQuestionIndex.push(randomIndex);

  return randomIndex;
}

displayQuestion();
function displayQuestion() {
  if (askedQuestionIndex.length === remainingQuestion.length) {
    quizCard.classList.add("hidden");
    preload.style.display = "flex";
    setTimeout(() => {
      preload.classList.add("hidden");
      complete.classList.remove("hidden");
    }, 3000);

    // Calculate scores
    const correctPercentage = (
      (correctPicked / remainingQuestion.length) *
      100
    ).toFixed(1);
    correctScore.textContent = correctPicked;
    totalQuestion.textContent = quizQuestions.length;
    percentageScore.textContent = correctPercentage;

    if (correctPercentage >= 70) {
      percentageContainer.style.color = "#00cc00";
    } else if (correctPercentage >= 50) {
      percentageContainer.style.color = "#cca300";
    } else {
      percentageContainer.style.color = "#e62e00";
    }

    console.log("Complete!" + correctPercentage);
    console.log("Wrong Answers: " + wrongPicked);
    console.log("Correct Answers: " + correctPicked);

    // Save results
    saveQuizResult();

    return;
  }

  let randomOptionIndex = [0, 1, 2, 3];
  randomOptionIndex.sort(() => Math.random() - 0.5);
  randomOptionIndex.forEach((num) => {
    num;
  });

  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];
  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.textContent = option;
    button.classList.add("answer-option");
    optionAnswerBtn.appendChild(button);
    button.textContent = currentQuestion.options[randomOptionIndex[i]];

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (isEventDisabled) {
        if (button.textContent === currentQuestion.correct) {
          correctAns();
          correctPicked++;
        } else {
          correctAns();
          wrongPicked++;
          button.classList.add("wrong");
        }
        isEventDisabled = false;
      }
    });
  });

  let optionAnswerBtnNew = document.querySelectorAll(".answer-option");
  // ====================
  // Correct Function
  // ====================
  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
    isClicked = true;
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
  console.log(askedQuestionIndex);
}

function next() {
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  load();
});

function load() {
  displayQuestion();
  startCountDown();
  nextBtn.classList.add("hidden");
}

replayBtn.addEventListener("click", () => {
  // complete.classList.add("hidden");
  window.location.reload();
});

// Quit Button
quitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to quit the game?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ttaJavaScript.html";
    }
  });
});
