var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryimg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery() {

    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }

    galleryimg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

// khoong chay
// - Bam nut 'Esc' khong thoat
document.addEventListener('ketdown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

right.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})