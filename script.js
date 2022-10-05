const toggleBtn = document.querySelectorAll('.faqCard__b');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('open')
    })
})


toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})