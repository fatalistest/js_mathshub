// Игра на проверку вычислений
const gameElements = document.getElementById("num-game").children;
const title = gameElements[0];
const userTask = gameElements[1];
const userAnswer = gameElements[2];
const btnGame = gameElements[3];

const getRandomNumInRange = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(0);
}

const getTask = () => {
    const randomNum1 = getRandomNumInRange(0, 100);
    const randomNum2 = getRandomNumInRange(0, 100);
    const operator = Math.random() > 0.5 ? "+" : "-";
    const task = `${randomNum1} ${operator} ${randomNum2}`;
    gameState.rightAnswer = eval(task);
    return task;
}

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!";
        userAnswer.value = "";
        userTask.innerText = getTask();
        userAnswer.hidden = false;
        btnGame.innerText = "Проверить!";
        gameState.taskInProcess = true;
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value;
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer;
        title.innerText = isRight ? "Вы правы" : "Вы ошиблись";
        btnGame.innerText = "Начать заново";
        gameState.taskInProcess = false;
    }
}