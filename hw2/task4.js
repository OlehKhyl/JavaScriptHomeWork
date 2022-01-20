function f(dayNumber) {
    if (typeof dayNumber !== 'number') {
        throw new Error('тип параметра не число');
    }
        switch(dayNumber) {
            case 1:
                return 'Понедельник';
                break;
            case 2:
                return 'Вторник';
                break;
            case 3:
                return 'Среда';
                break;
            case 4:
                return 'Четверг';
                break;
            case 5:
                return 'Пятница';
                break;
            case 6:
                return 'Суббота';
                break;
            case 7:
                return 'Воскресенье';
                break;
            default:
                throw new Error('Значение должно быть от 1 до 7');
    }
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));