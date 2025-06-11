window.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter') {
        checkGrade()
    }
})

let songFail = new Audio("Audio/failure.mp3")
let songGradeE = new Audio("Audio/fail.mp3")
let songGradeD = new Audio("Audio/Average.mp3")
let songGradeC = new Audio("Audio/Credit.mp3")
let songGradeB = new Audio("Audio/Good.wav")
let songGradeA = new Audio("Audio/Excellence.wav")

function checkGrade() {
    if (scoreInput.value >= 0 && scoreInput.value < 40) {
        show.innerHTML = 'F - Fail💀'
        songFail.play()
    } else if (scoreInput.value >= 40 && scoreInput.value < 45) {
        show.innerHTML = 'E - Pass😏'
        songGradeE.play()
    } else if (scoreInput.value >= 45 && scoreInput.value < 50) {
        show.innerHTML = 'D - Average🙄'
        songGradeD.play()
    }else if (scoreInput.value >= 50 && scoreInput.value < 60) {
        show.innerHTML = 'C - Good😉'
        songGradeC.play()
    }else if (scoreInput.value >= 60 && scoreInput.value < 75) {
        show.innerHTML = 'B - Very Good😊'
        songGradeB.play()
    }else if (scoreInput.value >= 75 && scoreInput.value <=100) {
        show.innerHTML = 'A - Excellent👍'
        songGradeA.play()
    }else if (scoreInput.value > 100) {
        show.innerHTML = 'Invalid input❗'
    }else if (scoreInput.value < 0) {
        show.innerHTML = 'Invalid input❗'
    }else if ( scoreInput.value === '') {
        show.innerHTML = 'Enter a Score'
    }
}



// let food = 'Rice and Eran'
// let drink = 'Hollandia'
// let animal = 'Beef'
// let restaurant = true;


// if(restaurant == true) {
//     if(food == 'Rice and Eran' && drink == 'Hollandia' && animal == 'Chicken') {
//         console.log('Buy 4 plates');
//     }
// } else {
//     console.log('Haywhy will starve');
// }