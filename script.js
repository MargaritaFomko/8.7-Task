let minValue = parseInt(prompt('Минимальное знание числа для игры','-999')); 
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999')); 

if (Number.isNaN(minValue)) {
    minValue = -999; 
};
if (Number.isNaN(maxValue)) {
    maxValue = 999;
};

minValue = minValue < -999 ? -999 : minValue;
maxValue = maxValue > 999 ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); 

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () { // Обработчик кнопки "Больше"
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2); 
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round(Math.random());
            const answerQuestion = (questionRandom === 1) ?
                `Наверное, это число ${answerNumber }?` : 
                `Хм...Может ${answerNumber }?`;
                answerField.innerText = answerQuestion;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { // Обработчик кнопки "Меньше"
    if (gameRun){
        if (minValue === maxValue){
            phraseRandom = Math.round( Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь...\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            questionRandom = Math.round(Math.random());
            answerQuestion = (questionRandom === 1) ?
                `Вы загадали ${answerNumber }?` : 
                `А что насчет числа ${answerNumber }?`;
                answerField.innerText = answerQuestion;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click',  function () { // Обработчик кнопки "Верно"
    if (gameRun){
        phraseRandom = Math.round(Math.random()*3); 
        answerPhrase = (phraseRandom === 1) ? `Я всегда угадываю\n\u{1F60E}` :
                       (phraseRandom === 2) ? `Я уже в твоей голове\n\u{1F47B}` : `Пф...Это было легко`; 
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click',  function () { // Обработчик кнопки "Заново"
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999')); 
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    
    if (Number.isNaN(minValue)) {
        minValue = -999; 
    };
    if (Number.isNaN(maxValue)) {
        maxValue = 999;
    };

    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); 
    orderNumber = 1;
    gameRun = true;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})



