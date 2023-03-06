const decreaseBtn   = document.getElementById('decrease')
const increaseBtn   = document.getElementById('increase')
const sizeEl        = document.getElementById('size')
const colorEl       = document.getElementById('color')
const clearEl       = document.getElementById('clear')
const canvas        = document.getElementById('canvas')
const ctx           = canvas.getContext('2d')

let size = 15
let isPressed = false
let color = 'black'
let x = undefined
let y = undefined

canvas.onmousedown = () => {
    isPressed = true
 
    x = e.offsetX
    y = e.offsetY
}

canvas.onmouseup = () => {
    isPressed = false

    x = undefined
    y = undefined
}

canvas.onmousemove = (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawCircle(x2, y2)
        drawline(x, y, x2, y2)
        x = x2
        y = y2
    }
}

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    // ctx.stroke()
    ctx.fill()
}
function drawline(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

increaseBtn.onclick = () => {
    size += 5

    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
}
decreaseBtn.onclick = () => {
    size -= 5

    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
}

colorEl.onchange = (e) => {
    color = e.target.value
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

clearEl.onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     drawCircle(50, 50)

//     requestAnimationFrame(draw)
// }

// draw()