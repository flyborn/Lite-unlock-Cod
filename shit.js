                     //КОДЕР
var person = [];
var person = prompt('Введите значение'); //ВНОСИМ В МАССИВ
console.log(person);
var split = person.split('');            //РАЗБИРАЕМ НА ЗНАЧЕНИЯ
console.log(split);
var unicod = split.map(function(item){
    var str = item.charCodeAt(0);        //ПЕРЕВОДИМ В ЮНИКОД
    return str;
});
console.log(unicod);
var newCod = unicod.map(function(n){
    return (n * 3);                      //ШИФРУЕМ ИЗМЕНЕНИЕМ
})
console.log(newCod);
var shifr = newCod.map(function(item){
    return String.fromCharCode(item);    //ВЫВОДИМ ИЗМЕНЕНИЯ 
})
var allIn = shifr.join('');             //ВЫВОДИМ В СТРОКУ
console.log(shifr);
console.log(allIn);
alert('Ваш код  ' + allIn);
                      //ДЕКОДЕР(та же процедура только наоборот)
var unlock = [];
var unlock = prompt('Введите код');
var deb = unlock.split('');
var krya = deb.map(function(item){
    var str = item.charCodeAt(0);
    return str;
});
var forsCod = krya.map(function(n){
    return (n / 3);
})
var des = forsCod.map(function(item){
    return String.fromCharCode(item);
});
var forse = des.join('');
alert('Ваш код  ' + forse);