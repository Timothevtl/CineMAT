
//movie arrow slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if(itemNumber - (4 + clickCounter) > 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else if(itemNumber - (4 + clickCounter) == 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-50}px)`;
        }
        else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });
});


//night mode toggle
const ball =  document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container, .sidebar, .left-menu-icon, .toggle, footer, h2, a, h4");

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
});


function scrollDown(){
    window.scrollTo(0, document.body.scrollHeight);
}

function scrollUp(){
    window.scrollTo(document.body.scrollHeight,0);
}

function scrollAffiche(){
    window.scrollTo(0,330);
}

function scrollClassic(){
    window.scrollTo(0,1350);
}

function navigate(){
    window.open('https://www.youtube.com/watch?v=tkOuQiO-Vzg&ab_channel=bref.');
}

function reservation(){
    window.open('http://192.168.1.232:5500/booking.html');
}
