brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.RedPulse)
    brick.showString("Da li je to istina ili se samo salis,", 1)
    brick.showString("Na Balkanu hoces vatru da zapalis", 2)
    brick.showString("Roki Vulovic.", 3)
})