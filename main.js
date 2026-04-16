// 🟢🟢🟢-новая тема
// 🟡🟡-новый пример механизма из темы
// 🔴-дополнительный вариант решения внутри механизма
                                                            
                                                            // functions   🟢🟢🟢
                                                            //функции
//🟡🟡
// function getName(){
//     return 'max'
// }
//🟡🟡
// const getNume = () => 'Vlad'//стрелочная функция
//🟡🟡
// const getPrice = (name) =>{
//     if(name === 'Mersedes') return 100000
//     if(name === 'Lada') return 10000

//     return null
// }
// console.log('$' ,getPrice('Lada'))




                                                            // conditions & ternary operator  🟢🟢🟢  
                                                            //условия if/else
//🟡🟡
// function getStatus(age){
//     if(age<14) return 'children'
//     if(age<20) return 'teenager'
//     if(age<50) return 'adult'

//     return 'old'
// }
//🟡🟡
// function getStatus(age){
//     if(age<14) {
//         return 'children'
//     }
//     else if(age<20) {
//         return 'teenager'
//     }
//     else if(age<50) {
//         return 'adult'
//     }

//     else{
//         return 'old'

//     }
// }
//🟡🟡
// const getStatus = (age) => age <14 ? 'children':age <20 ? 'teenager':age <55 ? 'adult' :'old'

// console.log(getStatus(55))




                                                                                    //switc/сase    🟢🟢🟢
                                                                                    //по сути помогает сократить конструкцию с if, даются случаи и на них наличие идет проверка через данные условия
//🟡🟡
// function getPrice(model){
//     switch (model){
//         case 'Mersedes'://конкретный случай
//         case 'Alfa Romeo'://но так же, добавив после случая второй случай, мы даем им один исход//🔴
//             return '$100 000'//исходы
//         case 'BMW':
//             return '$80 000'
//         case 'Mclaren':
//             return '$500 000'
//     default: //должен быть всегда
//         return null
//     }
// }
// console.log(getPrice('BMW'))



                                                                                        //DOM   🟢🟢🟢
//🟡🟡
// const headingElem = document.getElementById('heading')
// headingElem.style.backgroundColor='lightblue' //старый метод, обращение по id
//🟡🟡
// const headingElem = document.querySelectorAll('h1')
// headingElem.forEach(item =>{
//     item.style.backgroundColor = 'lightblue'
//     item.style.color = 'white'
//     // item.innerHTML = '<i>этот текст заменяет предыдущий</i>'//изменяет все содержимое текста
//     item.append(', а это уже просто добавление к уже имеющемосю тексту')//🔴
// })  //метод обращения по тегу( так же можно обратиться к классуб добавив точку перед его названием)


                                                                                        //Array methods 🟢🟢🟢
                                                                                        //массивы
                                                               
const studentsName = ['Max', 'Vlad', 'Elena']; 
const students = [{
    name: 'Max',
    age:23
},{
    name: 'Vlad',
    age:22
},{
    name: 'Elena',
    age:20
}]                                                                   
//🟡🟡     просто вывод списка                                      //🔴\/тут добавляется штука, выводящая массив в стобик
// console.log(studentsName.map((name, index) => `${index +1}. ${name}`).join('\n'));
//🟡🟡  фильтрация списка по условию
// console.log(students.filter((student) => student.age > 20).map(student => student.name).join('\n'));  
// 🟡🟡  варианты добавления новых значений в массив
// students.push({//🔴тут вместо push можно написать unshift,тогда элемент добавится в начало списка
//     name: 'Bob',
//     age:25
// })
// console.log(students)
//🟡🟡 slice, вводится промежуток от какого до какого элемента внутри массива нужно сделать "скриншот",
//именно он, потому - что сам массив от этого не меняясь дает выволить данные, если в "координатах"
// указать одно число, то отрезок будет считаться от него и до конца массива
// console.log(students.slice(0, 1))
//🟡🟡     поиск конкретного элемента
console.log(students.find(student => student.name === 'Max'))