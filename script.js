const pages = document.querySelectorAll('.page');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const counter = document.getElementById('page-counter');
let current = 0;


function typeWriter(element) {
    const text = element.innerHTML; 
    const rawText = element.innerText; 
    element.innerHTML = ''; 
    element.style.display = 'block';  

    let i = 0;
    
    const speed = 15; 

    function type() {
        if (i < rawText.length) {
          
            element.innerHTML = rawText.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        } else {
           
            element.innerHTML = text;
        }
    }
    type();
}

function updatePages() {
    pages.forEach((page, index) => {
        if (index === current) {
            page.classList.add('active');
           
            typeWriter(page); 
        } else {
            page.classList.remove('active');
        }
    });

    if (counter) {
        counter.innerText = `Страница ${current + 1} из ${pages.length}`;
    }

    btnPrev.disabled = (current === 0);
    btnNext.disabled = (current === pages.length - 1);
}


btnNext.addEventListener('click', () => {
    if (current < pages.length - 1) {
        current++;
        updatePages();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

btnPrev.addEventListener('click', () => {
    if (current > 0) {
        current--;
        updatePages();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});


const cover = document.getElementById('book-cover');
const startBtn = document.getElementById('start-reading');

startBtn.addEventListener('click', () => {
    cover.classList.add('cover-hidden');
    setTimeout(() => {
        cover.style.display = 'none';
        updatePages(); 
    }, 1000);
});


function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 700);