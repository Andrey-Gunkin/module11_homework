// Напишите функцию countDown(n), которая получает число {n} в 
//качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа. 
//Например, countDown(3) напечатает: 3 2 1.

export function countDown(n) {
    if (isNaN(n)) {
        return 'Error';
    } 
        let result = "";
        for (let i = n; i > 0; i--) {
            result += i;
        }
        return result;
    
   
}