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

    document.querySelector('#output-hash').innerHTML = outputStr; // prints the output encrypted word
}


function reverse(){
    const inputRev = document.getElementById("input-rev").value;
    const saltRev = document.getElementById("salt-rev").value;

    var revArr = inputRev.split('');
    var revOutput = []

    for (j = 0; j < revArr.length; j++) { // runs loop with reverse input word array one by one character
        var revConV = revArr[j].charCodeAt(0);
        var revOutSign = parseInt(revConV) - parseInt(saltRev); // minuses the salt added while encryption
        let decryptText = String.fromCharCode(revOutSign); // converts the ascii to text
        revOutput.push(decryptText) // pushes final output to an array
    }
    revOutputStr = revOutput.join('') 
    document.querySelector('#output-rev').innerHTML = revOutputStr; // shows the decrypted text
}