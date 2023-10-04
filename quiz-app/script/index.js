const quizList = [
    {
        title : "Who sang the title song for the latest Bond film, No Time to Die?",
        options : [
            {
                option : "Adele",
                answer : false
            },
            {
                option : "Sam Smith",
                answer : false
            },
            {
                option : "Billie Eilish",
                answer : true
            },
            {
                option : "2pac",
                answer : false
            },
        ]
    },
    {
        title : "Which flies a green, white, and orange (in that order) tricolor flag?",
        options : [
            {
                option : "Ireland",
                answer : true
            },
            {
                option : "Ivory Coast",
                answer : false
            },
            {
                option : "Italy",
                answer : false
            },
            {
                option : "iran",
                answer : false
            },
        ]
    },
    {
        title : "Where was the first example of paper money used?",
        options : [
            {
                option : "China",
                answer : true
            },
            {
                option : "Turkey",
                answer : false
            },
            {
                option : "Greece",
                answer : false
            },
            {
                option : "iran",
                answer : false
            },
        ]
    },
    {
        title : "Which of the following languages has the longest alphabet?",
        options : [
            {
                option : "Greek",
                answer : false
            },
            {
                option : "Russian",
                answer : true
            },
            {
                option : "Arabic",
                answer : false
            },
            {
                option : "persian",
                answer : false
            },
        ]
    }
]

const score = {
    rightAnswer : 0,
    totalQuestion : () => quizList.length
}

console.log(score.totalQuestion())

const questionDiv = document.getElementById("questions")
const quizButton = document.getElementById('quizButton')

let i = 0

function showResult () {

    const nextBtn = `<button id="nextBtn" onclick="goNext ()">Next</button>`
    const playBtn = `<button id="nextBtn" onclick="playAgain ()">Play again!</button>`

    if (i < 3) {
        quizButton.innerHTML = nextBtn
    } 
    else if (i > 3) {
        quizButton.innerHTML = playBtn
        questionDiv.classList.add('changeText')
        questionDiv.innerHTML = `<span>Result of you quiz : ${score.rightAnswer}/${score.totalQuestion()}</span>`
    }
}

showResult ()

function playAgain () {
    i = 0
    showResult ()
    createQuestion ()
}

function createQuestion () {
    
    let questionHtml =
    `
    <h1>Simple Quiz</h1>
    <hr>
    <p>${quizList[i].title}</p>
    <ul>
       ${
            quizList[i].options.map((item) => (
                `<li data-state="${item.answer}">${item.option}</li>`
            )).join('')
       } 
    </ul>
    `
    questionDiv.innerHTML = questionHtml
}

createQuestion ()
addEvent ()

function goNext () {
    i++
    showResult ()
    if (i < 4) {
        createQuestion ()
        addEvent ()
    }
    console.log(i)
}

function getTrueElement () {
    const allLi = document.querySelectorAll('li')
    const arry = [...allLi]
    return arry.filter((item) => item.dataset.state === "true")
}

function checkAnswer (event ,answer) {
    if (answer === "true") {
        score.rightAnswer++
        event.target.classList.add('correct')
    } else if (answer === "false") {
        event.target.classList.add('incorrect')
        const [correctLi] = getTrueElement()
        correctLi.classList.add('correct')
    }
    const allLi = document.querySelectorAll('li')
    const arry = [...allLi] 
    arry.forEach((item) => {
        item.removeEventListener('click' , handleClick)
        item.classList.add('not-allowed')
    })
}

function handleClick (event) {
    const answer = event.target.dataset.state
    checkAnswer (event ,answer)
}

function addEvent () {
    const allLi = document.querySelectorAll('li')
    const arry = [...allLi] 
    arry.forEach((item) => {
        item.addEventListener('click' , handleClick)
    })
}

  