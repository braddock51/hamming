let sbk = [];
let nbk = [];
let binaryNumbStr;

function reverseString(str) {
    return str.split("").reverse().join("");
}

function convertDecToBin(dec) {
    dec = (dec >>> 0).toString(2);
    if(dec.length < 8) {
        
        dec = reverseString(dec)
        for (let i = dec.length; i<8; i++) {
            dec += '0';
        
        }
        dec = reverseString(dec);
       
        return dec;

    }

    return dec;

}

function getBinaryClick(){
    const decInput = document.querySelector('.dec-number');
    let binaryNumber = document.querySelector('.binary-number');
    binaryNumbStr = convertDecToBin(decInput.value);
    
    binaryNumber.innerHTML = `Binary: ${binaryNumbStr}`;

    tableInputs();
     
}

function handleControlBits(binaryNumb) {
    let c = [];
    binaryNumb = reverseString(binaryNumb);

    c[0] = parseInt(binaryNumb[0])  + parseInt(binaryNumb[1]) + parseInt(binaryNumb[3]) + parseInt(binaryNumb[4])+ parseInt(binaryNumb[6]);
    

    c[1] = parseInt(binaryNumb[0]) + parseInt(binaryNumb[2]) + parseInt(binaryNumb[3]) + parseInt(binaryNumb[5]) + parseInt(binaryNumb[6]);
    

    c[2] = parseInt(binaryNumb[1]) + parseInt(binaryNumb[2]) + parseInt(binaryNumb[3]) + parseInt(binaryNumb[7]);
    

    c[3] = parseInt(binaryNumb[4]) + parseInt(binaryNumb[5]) + parseInt(binaryNumb[6]) + parseInt(binaryNumb[7]);
    

    for (let i = 0; i < 4; i++) {
        if(c[i] % 2 === 0) {
            c[i] = 0;
        }else {
            c[i] = 1;
        }
    }

    
    return c;
}

function tableInputs() {
    let tempBinaryNumb = reverseString(binaryNumbStr);
    let tempInput;
    let paragraph;
    
    for(let i=0; i<8; i++) {
        tempInput = document.querySelector(`.M${i}`);
        tempInput.value = tempBinaryNumb[i];
    }

    sbk = handleControlBits(binaryNumbStr)
    
    
    for(let j=0; j<4; j++) {
        let square = 2**j;
        tempInput = document.querySelector(`.C${square}`);
        tempInput.value = sbk[j];
        paragraph = document.querySelector(`.c${square}`)
        paragraph.innerHTML = `C${square} = ${sbk[j]}`;
    }

    
}

function getNBK() {
    let rNumb = document.querySelector('.r-number').value;
    let tempBinaryNumb = reverseString(binaryNumbStr)
    
    tempBinaryNumb = tempBinaryNumb.split("");
    if(tempBinaryNumb[rNumb] === '0') {
        tempBinaryNumb[rNumb] = '1';
    }else {
        tempBinaryNumb[rNumb] = '0';
    }
    tempBinaryNumb = tempBinaryNumb.reverse().join("");
    

    nbk = handleControlBits(tempBinaryNumb);

    for(let j=0; j<4; j++) {
        let square = 2**j;
        
        paragraph = document.querySelector(`.cc${square}`)
        paragraph.innerHTML = `C${square} = ${nbk[j]}`;
    }


}




