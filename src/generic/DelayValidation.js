const addInputValidationEventWithDelay = (input, validationFunction, errorElement, button, delay) => {
    //debugger;
    let timer;

    input.addEventListener('input', event => {
        clearTimeout(timer);

        const inputValue = event.target.value;
        timer = setTimeout(() => {
            if (inputValue) {
                if(!validationFunction(inputValue)) {
                    errorElement.style.display = 'block';
                    button.disabled = true;
                } else {
                    errorElement.style.display = 'none';
                    button.disabled = false;
                }
            } else {
                errorElement.style.display = 'none';
                button.disabled = false;
            }
        }, delay)
    })
}