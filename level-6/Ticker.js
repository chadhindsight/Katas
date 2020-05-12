//Dispay text on a screen with a fixed width
const ticker = (text, width, tick) => {
    // Get space to repeat on both left and right sides
    let space = ' '.repeat(width);
    text = space + text + space;
    tick = tick % (text.length - width);
    return text.substring(tick, tick + width);
}