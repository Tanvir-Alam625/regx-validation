const emailValid = ()=>{
    const input = document.getElementById('input-field');
    const inputValue = input.value.toLowerCase();
    const  pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const  pattern1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(!pattern1.test(inputValue)){
        console.log('your are not sure');
        document.getElementById('message').innerText = 'Enter the Valid Email'
    }else{
        document.getElementById('message').innerText = ''
        
    }
    input.value = '';

}
