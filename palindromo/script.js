//solução n: 1
function verificaPalindromo(string) {
    if(!string) return "Essa string inexistente";

    return string.split("").reverse().join("") === string;
}

let myVar = false;

console.log(verificaPalindromo("ovo"))

//solução n:2
function verificaPalindromo2(string) {
    if(!string) return "String é inexistente";

    for(let i = 0; i < string.length / 2; i ++){
        if(string[i] !== string.length -1 - i){
            return false;
        }
    }
    return true;
}