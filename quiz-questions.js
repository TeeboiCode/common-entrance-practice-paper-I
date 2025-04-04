const paperIQuestions = [
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

const paperIIQuestions = [
  // 50 questions for Paper II (English, Verbal Reasoning, General Paper, etc.)
  {
    id: 1,
    question: "Choose the correct past tense: She ___ to the market yesterday.",
    options: ["go", "goes", "gone", "went"],
    correct: "went",
  },
  {
    id: 2,
    question: "What is the opposite of 'early'?",
    options: ["fast", "late", "quick", "slow"],
    correct: "late",
  },
  {
    id: 3,
    question: "Choose the correctly spelled word:",
    options: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"],
    correct: "Accommodate",
  },
  {
    id: 4,
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Kano", "Abuja", "Port Harcourt"],
    correct: "Abuja",
  },
  {
    id: 5,
    question: "Choose the correct plural form of 'child':",
    options: ["Childs", "Childes", "Children", "Childish"],
    correct: "Children",
  },
  {
    id: 6,
    question: "Complete the analogy: Hand is to Glove as Foot is to ___.",
    options: ["Leg", "Sock", "Shoe", "Toe"],
    correct: "Shoe",
  },
  {
    id: 7,
    question: "Which of these is a proper noun?",
    options: ["Boy", "Happy", "Nigeria", "Fast"],
    correct: "Nigeria",
  },
  {
    id: 8,
    question: "Who was the first President of Nigeria?",
    options: [
      "Nnamdi Azikiwe",
      "Tafawa Balewa",
      "Olusegun Obasanjo",
      "Yakubu Gowon",
    ],
    correct: "Nnamdi Azikiwe",
  },
  {
    id: 9,
    question: "Choose the correct word: The dog wagged ___ tail.",
    options: ["it's", "its", "it", "it is"],
    correct: "its",
  },
  {
    id: 10,
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    correct: "Portuguese",
  },
  {
    id: 11,
    question: "Which word means 'a large group of stars'?",
    options: ["Planet", "Galaxy", "Meteor", "Comet"],
    correct: "Galaxy",
  },
  {
    id: 12,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific",
  },
  {
    id: 13,
    question: "Select the correct pronoun: ___ went to the party last night.",
    options: ["Me", "Him", "I", "Myself"],
    correct: "I",
  },
  {
    id: 14,
    question: "Which of these African countries was never colonized?",
    options: ["Kenya", "Ghana", "Ethiopia", "Nigeria"],
    correct: "Ethiopia",
  },
  {
    id: 15,
    question: "What does the prefix 'un-' mean?",
    options: ["Again", "Not", "Before", "After"],
    correct: "Not",
  },
  {
    id: 16,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correct: "Nile",
  },
  {
    id: 17,
    question:
      "Choose the correct article: ___ honest person will tell the truth.",
    options: ["A", "An", "The", "No article needed"],
    correct: "An",
  },
  {
    id: 18,
    question: "What country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Korea", "Japan", "Taiwan"],
    correct: "Japan",
  },
  {
    id: 19,
    question: "Choose the word that does NOT belong in the group:",
    options: ["Apple", "Orange", "Carrot", "Banana"],
    correct: "Carrot",
  },
  {
    id: 20,
    question: "Who wrote 'Things Fall Apart'?",
    options: [
      "Wole Soyinka",
      "Chinua Achebe",
      "Chimamanda Adichie",
      "Ben Okri",
    ],
    correct: "Chinua Achebe",
  },
  {
    id: 21,
    question: "What is the correct comparative form of 'good'?",
    options: ["Gooder", "Better", "More good", "Goodest"],
    correct: "Better",
  },
  {
    id: 22,
    question:
      "What is the imaginary line that divides the Earth into Northern and Southern Hemispheres?",
    options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
    correct: "Equator",
  },
  {
    id: 23,
    question: "Identify the adverb: She sang ___ at the concert.",
    options: ["beautiful", "beauty", "beautify", "beautifully"],
    correct: "beautifully",
  },
  {
    id: 24,
    question: "Which of these is NOT one of Nigeria's neighboring countries?",
    options: ["Benin", "Niger", "Cameroon", "Ghana"],
    correct: "Ghana",
  },
  {
    id: 25,
    question: "Choose the correct word: We must ___ our homework by tomorrow.",
    options: ["finish", "finishes", "finishing", "finished"],
    correct: "finish",
  },
  {
    id: 26,
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound", "Yen"],
    correct: "Pound",
  },
  {
    id: 27,
    question: "Choose the word with the same meaning as 'brave':",
    options: ["Cowardly", "Fearful", "Courageous", "Timid"],
    correct: "Courageous",
  },
  {
    id: 28,
    question: "Which continent is the largest by land area?",
    options: ["North America", "Europe", "Africa", "Asia"],
    correct: "Asia",
  },
  {
    id: 29,
    question: "Select the correct punctuation: 'What time is it___'",
    options: [".", "!", "?", ","],
    correct: "?",
  },
  {
    id: 30,
    question: "What is the main religion practiced in India?",
    options: ["Buddhism", "Islam", "Christianity", "Hinduism"],
    correct: "Hinduism",
  },
  {
    id: 31,
    question:
      "Choose the word that means 'to look at written words and understand them':",
    options: ["Write", "Speak", "Read", "Listen"],
    correct: "Read",
  },
  {
    id: 32,
    question: "Which of these is a renewable resource?",
    options: ["Coal", "Oil", "Natural gas", "Solar energy"],
    correct: "Solar energy",
  },
  {
    id: 33,
    question: "Identify the tense: 'He has been working all day.'",
    options: [
      "Simple present",
      "Present continuous",
      "Present perfect",
      "Present perfect continuous",
    ],
    correct: "Present perfect continuous",
  },
  {
    id: 34,
    question: "What is the name of Nigeria's national football team?",
    options: [
      "Black Stars",
      "Super Eagles",
      "Indomitable Lions",
      "Teranga Lions",
    ],
    correct: "Super Eagles",
  },
  {
    id: 35,
    question: "Choose the correctly punctuated sentence:",
    options: [
      "John said come here.",
      "John said, 'come here.'",
      "John said, 'Come here.'",
      "John said 'come here'",
    ],
    correct: "John said, 'Come here.'",
  },
  {
    id: 36,
    question: "What is the second most populous country in the world?",
    options: ["United States", "Indonesia", "India", "China"],
    correct: "India",
  },
  {
    id: 37,
    question: "Choose the correct preposition: The book is ___ the table.",
    options: ["in", "at", "on", "by"],
    correct: "on",
  },
  {
    id: 38,
    question: "Which of these countries is NOT a member of the United Nations?",
    options: ["Vatican City", "Japan", "Canada", "Australia"],
    correct: "Vatican City",
  },
  {
    id: 39,
    question: "What is the antonym of 'artificial'?",
    options: ["Real", "Fake", "Natural", "Manmade"],
    correct: "Natural",
  },
  {
    id: 40,
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correct: "Leonardo da Vinci",
  },
  {
    id: 41,
    question: "Choose the correct homophone: The farmer grew ___ in his field.",
    options: ["maize", "maze", "mais", "mase"],
    correct: "maize",
  },
  {
    id: 42,
    question: "What is the most widely spoken language in the world?",
    options: ["Spanish", "English", "Mandarin", "Hindi"],
    correct: "Mandarin",
  },
  {
    id: 43,
    question: "Which word is a conjunction?",
    options: ["Run", "Quickly", "Beautiful", "Because"],
    correct: "Because",
  },
  {
    id: 44,
    question:
      "What is the name of the desert that covers much of Northern Africa?",
    options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
    correct: "Sahara",
  },
  {
    id: 45,
    question: "Choose the correctly spelled word:",
    options: ["Neccessary", "Necesary", "Necessary", "Neccesary"],
    correct: "Necessary",
  },
  {
    id: 46,
    question: "Which country has the largest population in Africa?",
    options: ["Egypt", "Ethiopia", "South Africa", "Nigeria"],
    correct: "Nigeria",
  },
  {
    id: 47,
    question: "What is the study of the Earth's physical features called?",
    options: ["Geology", "Biology", "Geography", "Astronomy"],
    correct: "Geography",
  },
  {
    id: 48,
    question:
      "Choose the verb in this sentence: 'The tall tree swayed in the wind.'",
    options: ["Tall", "Tree", "Swayed", "Wind"],
    correct: "Swayed",
  },
  {
    id: 49,
    question: "What is the day before Tuesday called?",
    options: ["Sunday", "Monday", "Wednesday", "Thursday"],
    correct: "Monday",
  },
  {
    id: 50,
    question: "Which of these is a compound word?",
    options: ["Happy", "Beautiful", "Sunshine", "Quickly"],
    correct: "Sunshine",
  },
];

// Export the questions
export { paperIQuestions, paperIIQuestions };
