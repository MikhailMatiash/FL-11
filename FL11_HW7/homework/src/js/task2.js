let go = true;
while (go) {
let start = confirm('Do you want to play a game?');
let prize = 0;
if (!start) {
    alert('You did not become a billionaire, but can.');
    play = false;
} else {
        let possiblePrize = 100;
        let constPrize = 100;
        let max = 9;
        let randomNumber;
        const life = 3;
        const step = 4;
        const stepPrize = 2;
        for (let i = 0; i < life;) {
            if (i === 0) {
                randomNumber = Math.floor(Math.random() * max);
            }
            let userNumber = parseInt(prompt(`
    Choose a roulette pocket number from 0 to ${max - 1}
    Attemts left: ${life-i}
    Total prize: ${prize}$
    Possible prize on current attempt: ${possiblePrize}$
            `));
            if (userNumber === randomNumber && userNumber !== '') {
                max += step;
                prize += possiblePrize;
                start = confirm(`Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue? `);
                possiblePrize = possiblePrize * stepPrize;
                constPrize *= stepPrize;
                possiblePrize = constPrize;
                i = 0;
            } else {
                if (i === stepPrize) {
                    prize = 0;
                }
                possiblePrize = possiblePrize / stepPrize;
                i++;
            }
            if (!start) {
                break;
            }
            if (!userNumber) {
                prize = 0;
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
    }
}
