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