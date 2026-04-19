

const orangePrice = 3;
let amount = +prompt('сколько апельсинов хотите купить?');
let code = prompt('есть ли у вас промокод?');
function calculatePrice(amount, code){
    switch (code){
        case 'SAVE10':
            return orangePrice * amount * 0.9 + '$'
        case 'FREE':
            return "it's free for you today!"
    default: 
        return orangePrice * amount + '$'
}};

alert(calculatePrice(amount, code));