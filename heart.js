const canvas = document.querySelectorAll('body > table:nth-child(6) > tbody:nth-child(5) > tr');

function pixelSet(pixel, className) {
    const pixelClassList = pixel.classList;
    // if (className === '') {
    //     pixel.className = "";
    // } else if (!pixelClassList.contains(className)) {
    //     pixel.className = "";
    //     pixelClassList.add(className);
    // } else {
    //     return;
    // }
    pixel.className = "";
    if (className && !pixelClassList.contains(className)) {
        pixelClassList.add(className);
    }
}

function screenSet(canvas, className) {
    for (let i = 0; i < canvas.length; i++) {
        const row = Array.from(canvas[i].querySelectorAll('td')).slice(5);

        for (let j = 0; j < row.length; j++) {
            const pixel = row[j];
            pixelSet(pixel, '');
            pixelSet(pixel, className);
        }
    }
}

function screenRefresh(canvas, contentClass) {
    for (let i = 0; i < contentClass.length; i++) {
        const row = Array.from(canvas[i].querySelectorAll('td')).slice(5);

        for (let j = 0; j < contentClass[i].length; j++) {
            const pixel = row[j];
            pixelSet(pixel, contentClass[i][j]);
        }
    }
}

// screenRefresh(canvas, [
//     ['score_first', 'score_first'],
//     ['score_first', 'score_first']
// ]);

const art = [
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_first', 'score_first', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_first', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_first', 'score_incorrect', '', '', 'score_incorrect', 'score_incorrect', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_first', 'score_incorrect', '', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_first', 'score_incorrect', '', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct','score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_incorrect', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first', 'score_incorrect', 'score_first'],
    ['score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_correct', 'score_first'],
]

screenSet(canvas, 'score_correct');
screenRefresh(canvas, art);

// score_correct: hijau, score_first: hijau tua, score_incorrect: merah.