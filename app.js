
let mass = +prompt('Масса человека в кг.');
console.log(`Масса ${mass} кг.`);

let height = +prompt('Рост человека в метрах.');
console.log(`Рост ${height} м.`);

let index = mass / (height ** 2);
console.log(`Индекс: ${index}`);

if(index>0 && index<=16){
    console.log('Выраженный дефицит массы тела')
}

if(index>16 && index<=18.5){
    console.log('Недостаточная (дефицит) масса тела')
}

if(index>18.5 && index<=25){
    console.log('Норма')
}

if(index>25 && index<=30){
    console.log('Избыточная масса тела (предожирение)')
}

if(index>30 && index<=35){
    console.log('Ожирение 1 степени')
}

if(index>35 && index<=40){
    console.log('Ожирение 2 степени')
}

if(index>40){
    console.log('Ожирение 3 степени')
}
