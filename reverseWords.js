let str = "the quick brown fox jumps over the lazy dog";
function reverseWords(str) {
    let arr = str.split(' ');
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output = output + arr[i] + ' ';
    }
    return (output.slice(0,output.length-1));
}
console.log(reverseWords(str));