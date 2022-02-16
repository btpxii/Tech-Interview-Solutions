let str = "the quick brown fox jumps over the lazy dog";
function VCCount(str) {
    let v = ['a','e','i','o','u'];
    let c = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let vCount = 0;
    let cCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (c.indexOf(str[i]) != -1) {
            cCount++;
        }
        else if (v.indexOf(str[i]) != -1) {
            vCount++;
        }
    }
    return ('Vowels = ' + vCount + ', Consonants = ' + cCount);
}
console.log(VCCount(str));