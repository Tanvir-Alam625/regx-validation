const input = document.getElementById('input-field');
// validation function 
const emailValid = ()=>{
    const inputValue = input.value.toLowerCase();
    const  pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const  pattern1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!pattern1.test(inputValue)){
        setTimeout(showMessage(false), 300)
        setTimeout(removeMessage, 5000)
    }else{
        setTimeout(showMessage(true), 300)
        setTimeout(removeMessage, 5000)
        input.value = '';
    }
}
// message show up 
const message = document.getElementById('message');
const errorId = document.getElementById('error');
const addMail = document.getElementById('mail');
// show message function 
const showMessage=(isValid)=>{
    errorId.style.visibility = 'visible';
    errorId.style.width = '200px';
    if(isValid){
        addMail.innerText = '';
        message.innerText = 'Your Email is Valid';
        input.style.border = '1px solid green';
        errorId.style.background = 'green';
        addMail.innerText = input.value;
    }else{
        addMail.innerText = '';
        input.style.border = '1px solid red';
        message.innerText = 'Your Email is not Valid';
        errorId.style.background = 'red';
    }
}
// remove message function
const removeMessage=()=>{
    message.innerText = '';
    errorId.style.width = '0px'
    errorId.style.visibility = 'hidden';
}
