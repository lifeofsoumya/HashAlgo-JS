function convert() {
    // const signature = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const input = document.getElementById("input-word").value;
    const salt = document.getElementById("salt-input").value;

    var inpArr = input.split(''); // converts input to an array, stores into inpArr

    var output = [] // output is a new blank array

    for (i = 0; i < inpArr.length; i++) { // runs loop with input word array one by one character
        var outSign = inpArr[i].charCodeAt(0) + salt; // converts input to ASCII and adds salt no to the ascii
        output.push(outSign); // pushes each ascii as an array element
    }
    outputStr = output.join() // converts the output array into a string

    document.querySelector('#output-hash').innerHTML = outputStr; // prints the output encrypted word
}


function reverse(){
    var salt = document.getElementById("salt-rev").value;
}