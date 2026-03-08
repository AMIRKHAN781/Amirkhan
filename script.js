const pages = document.querySelectorAll('.page');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const counter = document.getElementById('page-counter'); // Добавили счетчик
let current = 0;

function updatePages() {
    pages.forEach((page, index) => {
        if (index === current) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Обновляем текст счетчика: "Страница 1 из 5"
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

updatePages();
const cover = document.getElementById('book-cover');
const startBtn = document.getElementById('start-reading');

startBtn.addEventListener('click', () => {
    cover.classList.add('cover-hidden');
    // Чтобы страница не дергалась, можно добавить задержку удаления из DOM
    setTimeout(() => {
        cover.style.display = 'none';
    }, 1000);
});
