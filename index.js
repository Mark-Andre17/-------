let random = Math.floor(Math.random()*1000);
    console.log(random);
while (true) {
    let guess = prompt('Введите число от 0 до 1000: ');
    console.log('Вы ввели:', guess);
    if (guess === 'q'){
        break;
    }
    if (isNaN(guess)){
        alert('Вы ввели не число!');
    }
    else if ( random > parseInt(guess)){
        alert('Чуть больше, попробуй еще раз.');
    }
    else if ( random < parseInt(guess)){
        alert('Чуть меньше, попробуй еще раз.');
    }
    else if ( random === parseInt(guess)){
        alert('Да ты экстрасенс');
        break;
    }
}