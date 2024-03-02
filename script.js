// console.log("Hey");
// let p = document.getElementById("menu-btn");
// p.addEventListener("onclick",function(){
//     // p.classList.add("active");
//     console.log("Ravikant");
//     document.getElementById("menu-and").style.right="0";
// })
// let q = document.getElementById("menu-close");
// q.addEventListener("onclick",function(){
//     q.classList.remove("active");
// })
// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Toggle mobile navigation menu
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close');
    const menuAnd = document.getElementById('menu-and');

    menuBtn.addEventListener('click', function () {
        menuAnd.classList.toggle('active');
    });

    menuCloseBtn.addEventListener('click', function () {
        menuAnd.classList.remove('active');
    });

    // Countdown Timer for registration section
    const countdownDate = new Date('2023-12-18 00:00:00').getTime();

    const updateCountdown = function () {
        const currentDate = new Date().getTime();
        const timeDifference = countdownDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.querySelectorAll('.date')[0].textContent = days;
        document.querySelectorAll('.date')[1].textContent = hours;
        document.querySelectorAll('.date')[2].textContent = minutes;
        document.querySelectorAll('.date')[3].textContent = seconds;
    };

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

});