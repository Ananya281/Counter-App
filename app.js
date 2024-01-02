const countValue = document.getElementById('counter');

function increment(){
    // get the vlue from UI
    //countValue.innerText se hmme jo value milegi vo string ki form mei milegi jisko hmme number ki form mei change krna hoga jiske liye method hota hai parse
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};