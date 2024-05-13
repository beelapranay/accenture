//Dont change or delete the try/catch block

function checkAlliteration(){
	try{
    var charVal = document.getElementById("char").value;
    var alliterVal = document.getElementById("alliter").value;
    var text = "";
    var noOfWords = getCount(alliterVal);
    
    if(noOfWords < 3) {
        text = "Invalid number of words";
        document.getElementById("result").innerHTML = text;
        return;
    } else if(!validateSentence(alliterVal)) {
        text = "Invalid sentence";
        document.getElementById("result").innerHTML = text;
        return;
    } else {
        var score = getScore(alliterVal, charVal);
        text = "Your score is " + score;
        document.getElementById("result").innerHTML = text;
    }
    
    return false;
    }catch(err){
        document.getElementById("result").innerHTML="Function checkAlliteration: "+err;
    }
}

function getCount(str){
    try{
    // Calculates the number of words in str returns the count
        var strs = str.split(" ");
        return strs.length;
    }catch(err){
        document.getElementById("result").innerHTML="Function getCount: "+err;
    }
}

function validateSentence(str){
    try{
    // When any word of str starts with a vowel, return false; else, return true
        var strs = str.split(/\s+/);
        var vowels = ['a','e','i','o','u'];
        
        for(var i = 0; i < strs.length; i++) {
            var firstChar = strs[i].charAt(0).toLowerCase();
            if(vowels.includes(firstChar)) {
                return false;
            }
        }
        return true;
    }catch(err){
        document.getElementById("result").innerHTML="Function validateSentence: "+err;
    }
}


function getScore(str,char){
    try{
    // Compare the first letter of every word from str with char, calculate and return the score
        var strs = str.split(/\s+/);
        var correctCount = 0;
        var score = 0;
        
        for(var i = 0; i < strs.length; i++){
            if(strs[i].charAt(0).toLowerCase() === char.toLowerCase()) {
                correctCount++;
                if(correctCount <= 3) {
                    score = 2;
                } else {
                    score += 2;
                }
            } else {
                score = 0;
            }
        }
        return score;
    }catch(err){
        document.getElementById("result").innerHTML="Function getScore: "+err;
    }
}