basic.forever(function () {
    let Light_Level = 0
    if (Light_Level > 128) {
        basic.showString("Light Level is over 128")
    } else {
        basic.showIcon(IconNames.No)
    }
})
