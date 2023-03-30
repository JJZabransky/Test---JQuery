const genBtn = document.getElementById('genBtn');
const likeBtn = document.getElementById('likeBtn');
const dslikeBtn = document.getElementById('dislikeBtn');
let jokeTxt = document.getElementById('jokeText');
const likedListBtn = document.getElementById('likedListBtn');
const dislikedListBtn = document.getElementById('dislikedListBtn');
const likedJokes = [];
const dislikedJokes = [];

likeBtn.style.visibility = 'hidden';
dslikeBtn.style.visibility = 'hidden';
likedListBtn.style.visibility = 'hidden';
dislikedListBtn.style.visibility = 'hidden';

genBtn.addEventListener('click', Connect);
likeBtn.addEventListener('click', Like);
dslikeBtn.addEventListener('click', Dislike);
likedListBtn.addEventListener('click', LikedList);
dislikedListBtn.addEventListener('click', DislikedList);

function Connect() {
    $.ajax({
        type: "GET",
        url: "https://v2.jokeapi.dev/joke/Any",
        success: function(response) {
            console.log("Server is up");
            if(response.joke == undefined) {
                
            } 
            else
            {
                jokeTxt.innerHTML = response.joke;
            }
            likeBtn.style.visibility = 'visible';
            dslikeBtn.style.visibility = 'visible';
            likedListBtn.style.visibility = 'visible';
            dislikedListBtn.style.visibility = 'visible';
        },
        error: function(error) {
            console.log("Server is down");
        }
    });
}

function Like() {
    likedJokes.push(response.joke);
}

function Dislike() {
    dislikedJokes.push(response.joke);
}

function DislikedList() {

}

function LikedList() {

}