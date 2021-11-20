// getting 100 buttons
const btn1 = document.querySelector('button')
for (let i = 1; i <= 100; i++) {
    const btn = document.createElement('button')
    btn1.insertAdjacentElement('afterend', btn)
}


// getting 100 h1s
const h1 = document.querySelector('h1')
for (let i = 1; i < 50; i++) {
    const new_h1 = document.createElement('h1')
    new_h1.innerText = "Click Me!"
    h1.insertAdjacentElement('afterend', new_h1)
}


// getting random color
function get_random_color() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}



const all_Btn = document.querySelectorAll('button')

// changing the color of the button

// for (let button of all_Btn) {
//     button.innerText = "Click!"
//     button.addEventListener('click', function() {
//         this.style.backgroundColor = get_random_color()
//         this.style.color = get_random_color()
//     })
// }

for (let button of all_Btn) {
    button.innerText = "Click!"
    button.addEventListener('click', colorize)
}



const h1s = document.querySelectorAll('h1')

// changing the color of the h1
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}



function colorize() {
    // this 
    this.style.backgroundColor = get_random_color()
    this.style.color = get_random_color()
}