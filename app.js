
function roll_dice() {

    const num_dice = document.getElementById("number").value;
    const dice_result = document.getElementById("dice_result");
    const dice_image = document.getElementById("dice_image");
    const values = [];
    const images = [];

    for (let i = 0; i < num_dice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src ="dice_image/${value}.png" width =80px, alt="Dice ${value}">`);
    }

    dice_result.textContent = `Dice: ${values.join(', ')}`;
    dice_image.innerHTML = images.join("");
}