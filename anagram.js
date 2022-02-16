let str1 = 'listen';
let str2 = 'silent';

function AnagramCheck(str1,str2){
	if (str1.length === str2.length)
        {
            let arr1 = [...str1];
            let arr2 = [...str2];
            for (let i = 0; i < arr1.length ; i++) {
                if (arr2.indexOf(arr1[i]) != -1) {
                    arr2.splice(arr2.indexOf(arr1[i]),1);
                    console.log('deleted ' + arr1[i] + ' from arr2. The new array is ' + arr2);
                }
                else{
                    break;
                }
            }
            if (arr2.length == 0) {
                return true;
            }
        }
    return false;
    }
AnagramCheck(str1,str2);