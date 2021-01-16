const counter = document.querySelector('h1#counter')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const likes = document.querySelector('.likes')
const submit = document.querySelector('#submit')
const commentForm = document.querySelector('#comment-form')
const comments = document.querySelector('.comments')
let intervalCounter = setInterval(intervalID, 1000)
let clicked = true

let count = 0;
let number = 1;

function intervalID() {
    if (clicked) {
    count ++;
    counter.innerHTML = count;
    }
}

plus.addEventListener('click', function() {
    count += 1;
    counter.innerHTML = count;

})

minus.addEventListener('click', function() {
    count -= 1;
    counter.innerHTML = count;
})

heart.addEventListener('click', function() {
    let subLikes = document.createElement('li')
    subLikes.innerText = `${count} has been liked ${number} time`
    likes.appendChild(subLikes)
})

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newComment = document.querySelector('#comment-input').value
    const comment = document.createElement('p')
    comment.innerText = newComment
    comments.appendChild(comment)

})

pause.addEventListener('click', function() {
    clearInterval(intervalID);
    if(clicked === true) {
        pause.innerHTML = "resume"
        clicked = false
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submit.disabled = true 
    
    }
    else {
        pause.innerHTML = "pause"
        clicked = true
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submit.disabled = false 
    }
})

