let stiksBalance = 20;

while (stiksBalance > 1) {
    const humanStiks = +prompt(`Всего ${stiksBalance} палочек, выберите сколько: 1, 2 или 3`);

    if (humanStiks < 1 || humanStiks > 3 || isNaN(humanStiks)) {
        alert('Некорректный ввод. Выберите число от 1 до 3.');
        continue;
    }

    stiksBalance -= humanStiks;

    if (stiksBalance <= 0) {
        alert('Вы проиграли! Компьютер выиграл.');
        break;
    }

    alert(`Отлично, осталось ${stiksBalance} палочек, далее ход компьютера!`);

    const computerProgress = Math.floor(Math.random() * 3) + 1;
    stiksBalance -= computerProgress;

    if (stiksBalance <= 0) {
        alert('Компьютер проиграл!');
        break;
    }

    alert(`Компьютер выбрал ${computerProgress}, осталось ${stiksBalance} палочек, далее ваш ход!`);
}