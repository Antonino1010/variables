let pic: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    let word = 0
    basic.showString("" + (word))
})
input.onButtonPressed(Button.AB, function () {
    pic = game.createSprite(69, 69)
})
input.onButtonPressed(Button.B, function () {
    let fav_ = 0
    basic.showNumber(fav_)
})
basic.forever(function () {
	
})
