const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    alert('Yay! I knew you would say yes! 🎉');
});

noButton.addEventListener('click', () => {
    alert('Oh no! I was hoping for a yes! 😢');
});

let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
document.addEventListener('DOMContentLoaded', () => {
    audio.play();
});

const tenorGifEmbed = document.createElement('script');
tenorGifEmbed.setAttribute('src', 'https://tenor.com/embed.js');
document.body.appendChild(tenorGifEmbed);