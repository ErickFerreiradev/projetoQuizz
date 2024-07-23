// Variáveis
const question = document.querySelector('#question')
const answersBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']
let points = 0
let actualQuestion = 0

// Perguntas

const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]
  
  // Substituição do quizz para a primeira pergunta
  function init(){
    //cria a primeira pergunta;
    createQuestion(0)
  }

  //cria uma pergunta
  function createQuestion(i){

    //Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll('button')

    oldButtons.forEach(function(btn){
        btn.remove()
    })

    //Alterar o texto da pergunta
    const questionText = question.querySelector('#question-text')
    const questionNumber = question.querySelector('#question-number')

    questionText.textContent =  questions[i].question
    questionNumber.textContent = i + 1

    //Insere as alternativas
    questions[i].answers.forEach(function(answer, i){

        // Cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true)

        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')
        
        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        console.log(answerTemplate)
    })

  }

  //Inicialização do quizz
  init()