function convert() {
    // const signature = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const input = document.getElementById("input-word").value;
    const salt = document.getElementById("salt-input").value;

    var inpArr = input.split(''); // converts input to an array, stores into inpArr

    var output = [] // output is a new blank array

    

    for (i = 0; i < inpArr.length; i++) { // runs loop with input word array one by one character
        var conV = inpArr[i].charCodeAt(0); // converts input to ASCII
        var outSign = parseInt(conV) + parseInt (salt) // adds salt no to the ascii

        let EncryptText = String.fromCharCode(outSign); // convert outSign number to respective string value from ascii
        output.push(EncryptText);  // pushes each ascii as an array element
    }
    outputStr = output.join('') // converts the output array into a string, ('') joins the array elements converts to a single word
    console.log(outputStr)
    console.log(typeof outputStr)

    const bConvert = window.btoa(outputStr); // convert output to base64

    document.querySelector('#output-hash').innerHTML = bConvert; // prints the output encrypted word

    if (salt<1){
        document.querySelector('#output-hash').innerText = "Please add a Key number 1 to 5"
    }
}


function reverse(){
    const inputRev = document.getElementById("input-rev").value;
    const saltRev = document.getElementById("salt-rev").value;

    const bReverse = window.atob(inputRev); // reverse first from base64 to text salted

    var revArr = bReverse.split('');
    var revOutput = []

    for (j = 0; j < revArr.length; j++) { // runs loop with reverse input word array one by one character
        var revConV = revArr[j].charCodeAt(0);
        var revOutSign = parseInt(revConV) - parseInt(saltRev); // minuses the salt added while encryption
        let decryptText = String.fromCharCode(revOutSign); // converts the ascii to text
        revOutput.push(decryptText) // pushes final output to an array
    }
    revOutputStr = revOutput.join('') 
    console.log(revOutputStr)
    console.log(typeof revOutputStr)

    document.querySelector('#output-rev').innerHTML = revOutputStr; // shows the decrypted text

    if (saltRev<1){
        document.querySelector('#output-rev').innerText = "Please add a Key number 1 to 5"
    }
}