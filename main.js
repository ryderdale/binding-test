'use strict';

(() => {
    const dataObj = {
        firstName: ''
    }

    function setData(key, value) {
        dataObj[key] = value; 
        console.log(dataObj);
    }

    const outputDiv = document.getElementById('outputDiv');
    
    function updateInput(event) {
        
        console.log(event.target.value) 
        outputDiv.innerText = event.target.value;
        setData(event.target.id, event.target.value);
    }
    const fnInput = document.getElementById('firstName');
    fnInput.addEventListener('keyup', updateInput)

})();