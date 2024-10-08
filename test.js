const isVerified ='0' ;

// if(isVerified == true){
//     console.log('user is verified')
// }
// else{
//     console.log('user is not verfied')
// }

// console.log(`${isVerified === true? :}`)

function getTimeString (time){
    //get hour and rest seconds
    const hour = parseInt(time/3600);
    let remaingSecond = time % 3600
    let remaingMinit = parseInt(remaingSecond / 60)
    remaingSecond  = remaingSecond  % 60;
    return `${hour} hour ${remaingMinit} minit ${remaingSecond} second ago`
}

console.log(getTimeString(33333))