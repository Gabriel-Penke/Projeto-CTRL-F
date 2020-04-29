function searchWord(){
    const word = document.getElementById('inputElement').value;
    const text = document.getElementById('txtArea').value;
    const check = document.getElementById('check');
    const result = document.getElementById('result');
    let pattern = verificationCase(check, word);
    
    if(pattern.test(text)){
        console.log(text.match(pattern));
        result.innerHTML = "'" + word + "'" + ' first occurrence in position ' + text.search(pattern) + '<br>'
        + text.match(pattern).length + ' occurrences in text';
    }else{
        result.innerHTML = 'Not founded';
    }   

    document.getElementById('inputElement').value = '';    
}

function verificationCase(check, word){
    if(check.checked) return new RegExp(word, 'gim');
    else return new RegExp(word, 'g');
}

