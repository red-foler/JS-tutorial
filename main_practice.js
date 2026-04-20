let cart = [{
    name: 'пирожок',
    price: 50
    },{
    name: 'яблоко',
    price: 10
    },{
    name: 'вода',
    price: 40
    },{
    name: 'лимонад',
    price: 80
    }];





let totalSum = 0;
let myBasket = [];

while (true) {
    let input = prompt('Введите товар или "СТОП"').toLowerCase().trim();

    if (input === 'стоп') break; 

    let found = false;

    for (let product of cart) {
        if (product.name === input) {
            myBasket.push(product);
            totalSum = totalSum + product.price;
            alert('Добавлено: ' + product.name); // Этот алерт сработает СРАЗУ
            found = true;
            break; 
        }
    }

    if (!found) {
        alert('Такого товара нет!'); // Этот тоже СРАЗУ
    }
}

// РАСЧЕТ ИТОГА (срабатывает только после слова СТОП)
let totalPrice = totalSum;

if (totalSum >= 1000) {
    totalPrice = totalSum * 0.85;
} else if (totalSum >= 500) {
    totalPrice = totalSum * 0.9;
}

alert('Итого к оплате: ' + totalPrice + ' руб.');












    // let totalSum = 0;
    // let myBacsket =[];

    // while (true){
    //     let input = prompt('Введите название товара, (или напишите "СТОП")').toLowerCase().trim();

    //     if(input === 'стоп'){
    //         break
    //     }
    //     let found = false;
    //     for (let product of cart){
    //     if (product.name === input){
    //         myBacsket.push(product);
            
    //     alert('Товар добавлен в корзину');
    //     found = true;
    //     break;}}


    //     if (!found){
    //         alert('Извините, такого товара нет в наличии.')
    //     }}
    //     let totalPrice = totalSum;
    
    // if(totaPrice >= 500){
    //     totalPrice = totalSum*0.85;
    // }

    // alert('Итого к оплате: '+totalPrice+'руб.')