//Övning 1

function getLength (str) {
    console.log(str.length)
}

getLength('How long is string string?');

getLength('How about this one...?');

//Övning 2

function getYear (year) {
    console.log(year.substring(0,4))
}

getYear('2018-04-05');

getYear('2019-06-09');

function getMonth (month) {
    let thisMonth = month.substring(5,7);
    return thisMonth;
}

getMonth('2018-04-05');

console.log( getMonth('2018-04-05') );

//Övning 3 

function getSum (numberOne, numberTwo, operator) {
    let result = 0;
    if (operator === '+') {
        result = numberOne + numberTwo;    
    }
    else if (operator === '-') {
        result = numberOne - numberTwo;  
    }
    else if (operator === '*') {
        result = numberOne * numberTwo;  
    }
    else if (operator === '/') {
        result = numberOne / numberTwo;  
    }
    return result;
}

console.log(getSum(9,3,'/'));
console.log(getSum(15,3,'*'));

//Övning 4

for (let i=0; i<3; i++)  {
    let slump = Math.floor(Math.random() * 3)
    if (slump===0) {
        console.log('sten')
    }
    else if (slump===1) {
        console.log('sax')
    }
    else if (slump===2) {
        console.log('påse')
    }
}

// Lägg till promt för att mata in sten, sax eller påse

//Math.floor(Math.random() * 3)

