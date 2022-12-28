
const reviews = [
    {
        picture: "img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        name: "Christina McKenzie",
        job: "Web Designer",
        description: "My name is Christina, and I've been a web designer for 10 years.",
    },
    {
        picture: "img/jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
        name: "Jackie Smith",
        job: "Intern",
        description: "My name is Jackie, and I've been an intern for 3 months."
    },
    {
        picture: "img/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg",
        name: "John Malone",
        job: "Web Developer",
        description: "My name is John, and I've been a web developer for 7 years."
    },
    {
        picture: "img/julian-wan-WNoLnJo7tS8-unsplash.jpg",
        name: "Jeff Morris",
        job: "Boss",
        description: "My name is Jeff, and I've been the boss for 2 years."
    }
]

const reviewContainer = document.querySelector('.review-container');
const reviewPic = document.querySelector('.review-pic');
const reviewh2 = document.querySelector('.review-h2');
const reviewh3 = document.querySelector('.review-h3');
const reviewP = document.querySelector('.review-p');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const randomButton = document.querySelector('.random-button');

let reviewIndex = 0;

window.addEventListener('DOMContentLoaded', function() {
    showReview(reviews[reviewIndex]);
})

nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);
randomButton.addEventListener('click', randomReview);

function showReview() {
    reviewPic.src = reviews[reviewIndex].picture;
    reviewh2.textContent = reviews[reviewIndex].name;
    reviewh3.textContent = reviews[reviewIndex].job;
    reviewP.textContent = reviews[reviewIndex].description;

}

function nextReview() {
    reviewIndex++;
    if (reviewIndex > reviews.length - 1) {
        reviewIndex = 0;
        showReview();
    } else {
        showReview();
    }
}

function prevReview() {
    reviewIndex--;
    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1;
        showReview();
    } else {
        showReview();
    }
}

function randomReview() {
    reviewIndex = Math.floor(Math.random() * reviews.length);
    showReview();
}



