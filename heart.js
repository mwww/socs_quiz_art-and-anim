const canvas = document.querySelectorAll('body > table:nth-child(6) > tbody:nth-child(5) > tr');

function classTranslator(codeToTranslate, classDict) {
    for (const key in classDict) {
        // console.log(codeToTranslate, key)
        if (classDict.hasOwnProperty(codeToTranslate)) {
            return classDict[key];
        }
    }
    return '';
}

function frameTranslator(frameData) {
    const classCodeDict = [
        {
            code: 2,
            className: 'score_correct'
        },
        {
            code: 3,
            className: 'score_first'
        },
        {
            code: 4,
            className: 'score_incorrect'
        },
    ]

    for (let i = 0; i < frameData.length; i++) {
        for (let j = 0; j < frameData[i].length; j++) {
            classCodeDict.forEach(classDict => {
                if (frameData[i][j] === classDict.code) {
                    frameData[i][j] = classDict.className;
                }
            })
        }
    }
    return frameData;
}

function pixelSet(pixel, className) {
    const pixelClassList = pixel.classList;
    pixel.className = "";
    if (className && !pixelClassList.contains(className)) {
        pixelClassList.add(className);
    }
}

function frameSet(canvas, className) {
    for (let i = 0; i < canvas.length; i++) {
        const row = Array.from(canvas[i].querySelectorAll('td')).slice(5);

        for (let j = 0; j < row.length; j++) {
            const pixel = row[j];
            pixelSet(pixel, '');
            pixelSet(pixel, className);
        }
    }
}

function frameRefresh(canvas, contentClass) {
    for (let i = 0; i < contentClass.length; i++) {
        const row = Array.from(canvas[i].querySelectorAll('td')).slice(5);

        for (let j = 0; j < contentClass[i].length; j++) {
            const pixel = row[j];
            pixelSet(pixel, contentClass[i][j]);
        }
    }
}

const art = [
    [2],
    [2],
    [2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3],
    [2, 2, 2, 3, 4, 4, 4, 3, 2, 3, 4, 4, 4, 3],
    [2, 2, 3, 4, 1, 1, 4, 4, 3, 4, 4, 4, 4, 4, 3],
    [2, 2, 3, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 3, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3],
    [2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 3],
    [2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 3],
    [2, 2, 2, 2, 2, 2, 2, 3, 4, 3],
    [2, 2, 2, 2, 2, 2, 2, 2, 3],
]

frameSet(canvas, 'score_correct');

frameRefresh(canvas, frameTranslator(art));