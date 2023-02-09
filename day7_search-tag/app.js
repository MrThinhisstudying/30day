var content = document.querySelector('.content ')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove-all')
var tags = ['Nodejs', 'Reactjs']

function rerender() {
    content.innerHTML = ''

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=
            `<li>
            ${tag}
            <i class = "fa-solid fa-xmark" onclick ="removeTag(${i})"> </i> 
            </li>`
    }
    content.appendChild(input)
    input.focus()
}

function removeTag(index) {
    tags.splice(index, 1)
    rerender()
}

rerender()
input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        rerender()

    }
})

removeAll.addEventListener('click', function() {
    tags = []
    rerender();
})