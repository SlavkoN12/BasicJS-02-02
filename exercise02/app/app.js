
let num = 1200;

function getDividableNumbers(num) {
    let dividedNum = [];
    for(let i = 0; i < num; i++){
        if(i % 3 == 0 && i % 7 == 0){
            dividedNum.push(i);
        }
    }
    return dividedNum;
}

let arrayOfNum = getDividableNumbers(num);
console.log(arrayOfNum);