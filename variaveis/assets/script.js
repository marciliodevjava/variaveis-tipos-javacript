// var tem a função hosting que a var pode ser declarada abaixo do codigo mas o javascript sobe ela, ja a let tem que se declarada antes
numberOne = 1;
console.log(numberOne + 2);
var numberOne;

// const

var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João'){
    var firstName = 'Pedro';
    let lastName = 'Silva';   
}

console.log(firstName, lastName);