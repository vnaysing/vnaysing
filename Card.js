// MOVEMENT ANIMATION TO HAPPEN

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// MOVING ANIMATION EVENT
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 17;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 17;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// ANIMATION IN

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
});

// ANIMATION OUT
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease-in-out';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});