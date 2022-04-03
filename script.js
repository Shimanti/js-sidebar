const sideBtns = document.querySelectorAll(".control")

sideBtns.forEach(btn => btn.addEventListener('click', () => {
    let currentBtn = document.querySelector(".active-btn")
    currentBtn.classList.remove('active-btn')
    btn.classList.add('active-btn')
}))