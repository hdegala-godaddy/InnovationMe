
(function permutation(str,prefix){

    if (!str.length){
        console.log(prefix);
    }
    else{
        for (let count = 0; count < str.length; count++){
            let rem = str.substring(0,count) + str.substring(count+1);
            permutation(rem, prefix+ str[count]);
        }
    }
})("aa  def","");


