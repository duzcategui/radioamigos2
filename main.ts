input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    music.playTone(receivedNumber, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    music.playTone(262 + 0, music.beat(BeatFraction.Whole))
    radio.sendNumber(262 + 0)
})
radio.setGroup(9)
basic.forever(function () {
	
})
