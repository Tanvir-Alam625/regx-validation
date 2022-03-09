const emailValid = ()=>{
    const input = document.getElementById('input-field');
    const inputValue = input.value.toLowerCase();
    const  pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const  pattern1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(!pattern1.test(inputValue)){
        console.log('your are not sure');
        setTimeout(showMessage(true), 300)
        // showErrorMessage();
    }else{
        setTimeout(removeMessage, 300)
        // removeErrorMessage();
    }
    input.value = '';

}
// error message show up 
const message = document.getElementById('message');
const errorId = document.getElementById('error');
const showMessage=(isValid)=>{
    errorId.style.visibility = 'visible';
    errorId.style.width = '200px'
    if(isValid){
        message.innerText = 'Your Email is Valid';
        errorId.style.background = 'green';
    }else{
        message.innerText = 'Your Email is not Valid';
        errorId.style.background = 'red';
    }
}
const removeMessage=()=>{
    message.innerText = '';
    errorId.style.width = '0px'
    errorId.style.visibility = 'hidden';

}
