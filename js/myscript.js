for (let i = 0; i < 101 ; i++) {
    
    let divElement = document.createElement("div");
    const boxContainer = document.getElementById("my-box-container");
    boxContainer.append(divElement);
    boxContainer.classList.add("row");
    
    divElement.classList.add("my-box");
    boxContainer.classList.add("d-flex", "flex-wrap", "gy-2", "gx-4", "justify-content-center");


    if( ((i % 3) == 0) && ((i % 5) != 0) ){
    
        const buttonGreen = document.getElementById("my-btn-green");
        buttonGreen.addEventListener("click", function(){

            /* boxContainer.append(divElement); */
            divElement.classList.add("my-box-green", "text-center");
            divElement.innerHTML = ("fizz");
        });

    } else if (((i % 5) == 0)   && ((i % 3) != 0)) {
        
        const buttonRed = document.getElementById("my-btn-red");
        buttonRed.addEventListener("click", function(){

           /*  boxContainer.append(divElement); */
            divElement.classList.add("my-box-red", "text-center");
            divElement.innerHTML = ("buzz");
        });

    } else if (( (i % 3) == 0) && ( (i % 5) == 0) ){
        const buttonBlue = document.getElementById("my-btn-blue");
        buttonBlue.addEventListener("click", function(){

           /*  boxContainer.append(divElement); */
            divElement.classList.add("my-box-blue", "text-center");
            divElement.innerHTML = ("fizzbuzz");

        });
        

    } else {

        const buttonBlack = document.getElementById("my-btn-black");
        buttonBlack.addEventListener("click", function(){

            divElement.classList.add("my-box-black", "text-center", "text-white");
            divElement.innerHTML = ("indivisibile");
        });
        
    }
}




