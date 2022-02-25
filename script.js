function convert() {
    // const signature = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    var input = document.getElementById("input-word").value;
    var salt = document.getElementById("salt-input").value;

    var inpArr = input.split('');

    for (i = 0; i < inpArr.length; i++) {
        var outSign = inpArr[i].charCodeAt(0) + salt;
        var output = '' + outSign;
        console.log(outSign)
    }
    
    document.querySelector('#output-hash').innerHTML = output;
}