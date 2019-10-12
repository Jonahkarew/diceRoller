$('#d2Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d2Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 2 ) + 1
        result += addition
    }
    $('#d2Result').text(result)
    console.log(result)
})

$('#d4Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d4Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 4 ) + 1
        result += addition
    }
    $('#d4Result').text(result)
    console.log(result)
})

$('#d6Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d6Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 6 ) + 1
        result += addition
    }
    $('#d6Result').text(result)

    console.log(result)
})

$('#d8Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d8Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 8 ) + 1
        result += addition
    }
    $('#d8Result').text(result)
    console.log(result)
})

$('#d10Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d10Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 10 ) + 1
        result += addition
    }
    $('#d10Result').text(result)
    console.log(result)
})

$('#d12Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d12Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 12 ) + 1
        result += addition
    }
    $('#d12Result').text(result)
    console.log(result)
})

$('#d20Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d20Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 20 ) + 1
        result += addition
    }
    $('#d20Result').text(result)
    console.log(result)
})

$('#d100Form').on('submit', function(event){
    event.preventDefault();
    
    let result = 0;
    let userInput = $('#d100Number').val()
    // console.log(userInput)
    

    for(i=0; i < userInput; i++){
        let addition = Math.floor(Math.random() * 100 ) + 1
        result += addition
    }
    $('#d1001Result').text(result)
    console.log(result)
})