function searchWord(){
    const word = document.getElementById('inputElement').value;
    const text = document.getElementById('txtArea').value;
    const check = document.getElementById('check');
    const result = document.getElementById('result');
    let pattern = verificationCase(check, word);    //Função para verificar se é case insensitive
    
    if(pattern.test(text)){     //Verifica se a palavra está no texto
        console.log(text.match(pattern));   //Mostra um array com a palvra no console
        result.innerHTML = "'" + word + "'" + ' first occurrence in position ' + text.search(pattern) + '<br>'
        + text.match(pattern).length + ' occurrences in text';
    }else{
        result.innerHTML = 'Not founded';   //Caso a palavra não conste no texto
    }   

    document.getElementById('inputElement').value = '';    //Devolve um valor vazio para o input
}

function verificationCase(check, word){     //Verifica se é case insensitive
    if(check.checked) return new RegExp(word, 'gim');
    else return new RegExp(word, 'g');
}

