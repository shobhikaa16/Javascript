const form = document.querySelector('form')
// this usecase will give you empty if we do here
//    const height = parseFloat(document.querySelector('#height').value)



// stopping the results sending to the server because we dont want to send tot he server
form.addEventListener('submit',function(e){
    e.preventDefault() // for stopping submit

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    
    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML= "Please give a valid height"
    }else if (weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML= "Please give a valid weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2) 
        // show it in result
        results.innerHTML = `<span>${bmi}</span>`;
    }

})