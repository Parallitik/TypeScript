"use strict";
const getStartPoint = () => {
    const startPoint = process.argv[2];
    if (startPoint)
        return (+startPoint);
    if (startPoint === undefined)
        return undefined;
};
const checkTypePoint = () => {
    let startPoint = getStartPoint();
    if (startPoint) {
        return startPoint;
    }
    else {
        console.log('Вы ввели неверные параметры, необходимо ввести цифру');
        return 0;
    }
};
const endPoint = 0;
let timerPoint = checkTypePoint();
const getFullMsg = (num) => {
    return `Осталось ${num} секунд!`;
};
const timer = setInterval(() => {
    if (timerPoint > 0) {
        console.log(getFullMsg(timerPoint));
        timerPoint -= 1;
    }
    else {
        timerEnd();
    }
}, 1000);
const timerEnd = () => {
    clearInterval(timer);
    console.log('Время вышло');
};
