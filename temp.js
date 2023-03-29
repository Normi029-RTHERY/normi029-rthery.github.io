
let slideIndex = [1, 1, 1];

let slideId = ["slide-NOT", "slide-errance", "slide-LG"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function changeSlide(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        setTimeout(() => {
            x[i].style.display = "none";
        }, 300);

    }
    x[slideIndex[no] - 1].style.display = "block";
} 