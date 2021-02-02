let namesArray = ["Bill", "Ana", "Josephine", "Elena"]; 

let namesLengthArray = [];


function mapToArrayElementsLength(array) {
    for (let x = 0; x < array.length; x++) {
        let wordsInNum = array[x].length;
        namesLengthArray.push(wordsInNum);
    }

}

mapToArrayElementsLength(namesArray);


console.log(namesLengthArray);