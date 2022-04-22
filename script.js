const titles = document.querySelectorAll('.container')

titles.forEach(function(title) {
    title.addEventListener('mouseover', function(e) {
        const demo = e.currentTarget.childNodes[3].innerHTML;
        const indieTitle = document.getElementById('title-two');
        indieTitle.innerHTML = demo;
        console.log(demo);
    })
})
