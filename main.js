const genBtn = document.getElementById('genBtn');
const likeBtn = document.getElementById('likeBtn');
const dslikeBtn = document.getElementById('dislikeBtn');
let jokeTxt = document.getElementById('jokeText');

likeBtn.style.visibility = 'hidden';
dslikeBtn.style.visibility = 'hidden';

genBtn.addEventListener('click', Connect);
likeBtn.addEventListener('click', Like);
dslikeBtn.addEventListener('click', Dislike);

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
        },
        error: function(error) {
            console.log("Server is down");
        }
    });
}

function Like() {

}

function Dislike() {

}

