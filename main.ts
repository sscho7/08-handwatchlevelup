input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    if (second < 59) {
        second += 1
    } else {
        second = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
let second = 0
let hours = 0
let minutes = 0
let ampm = false
let time = ""
minutes = 0
hours = 0
let adjust = 0
second = 0
basic.forever(function () {
    adjust = hours
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + Math.idiv(minutes, 10)
    time = "" + time + minutes % 10
    time = "" + time + ":"
    time = "" + time + Math.idiv(second, 10)
    time = "" + time + second % 10
    basic.showString(time)
})
basic.forever(function () {
    basic.pause(1000)
    if (second < 59) {
        second += 1
    } else {
        second = 0
        if (minutes < 59) {
            minutes += 1
        } else {
            minutes = 0
            if (hours < 23) {
                hours += 1
            } else {
                hours = 0
            }
        }
    }
})
