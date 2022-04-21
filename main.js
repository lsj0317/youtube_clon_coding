const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => { // 버튼에 클릭이벤트 추가
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});