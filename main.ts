input.onButtonPressed(Button.A, function () {
    turtle.forward(pasos)
})
let pasos = 0
turtle.setPosition(0, 4)
pasos = 0
basic.forever(function () {
    if (pasos == 0) {
        pasos += 1
    } else if (pasos == 1) {
        pasos += 2
    } else if (pasos == 2) {
        pasos += 3
    } else if (pasos == 3) {
        pasos += 4
    } else {
        turtle.turnRight()
    }
})
