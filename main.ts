input.onButtonPressed(Button.A, function () {
    playerSprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    playerSprite.change(LedSpriteProperty.X, 1)
})
let playerSprite: game.LedSprite = null
playerSprite = game.createSprite(2, 4)
let appleSprite = game.createSprite(randint(0, 4), 0)
appleSprite.turn(Direction.Right, 90)
appleSprite.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    basic.pause(500)
    appleSprite.move(1)
    if (appleSprite.isTouching(playerSprite)) {
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, 0)
    }
})
basic.forever(function () {
    if (appleSprite.get(LedSpriteProperty.Y) == 4) {
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, randint(0, 0))
    }
})
