window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    header.classList.toggle('rolagem-site',window.scrollY > 5)
})