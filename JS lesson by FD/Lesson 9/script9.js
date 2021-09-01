// && Mantiqiy "VA" Operatori


let date = new Date()

let hour = date.getHours();
let minute = date.getMinutes();
console.log('Hour: ', hour, ', Minute: ', minute);



// || Mantiqiy "YOKI" Operatori

// console.log(true || false);

let isOffiseOpen = (hour >= 9 || minute >=0 ? 'Open' : 'Close');

let isOffiseClosed = !isOffiseOpen;
// console.log(isOffiseOpen)
console.log('Offis ochiq: ', isOffiseOpen)
console.log('Offis yopiq: ', isOffiseClosed)
