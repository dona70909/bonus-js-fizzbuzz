
const buttonStart = document.getElementById("my-btn-warning");
buttonStart.addEventListener("click", function(){

    for (let i = 0; i < 101 ; i++) {

        let divElement = document.createElement("div");
        divElement.classList.add("my-box", "col-4", "col-lg-2", "my-sahdow");
    
        const boxContainer = document.getElementById("my-box-container");
        boxContainer.append(divElement);
        boxContainer.classList.add("row");
        boxContainer.classList.add("d-flex", "flex-wrap", "gy-2", "gx-4", "justify-content-center");

        if( ((i % 3) == 0) && ((i % 5) != 0) ){
            
            const buttonGreen = document.getElementById("my-btn-green");
            buttonGreen.addEventListener("click", function(){
                divElement.classList.add("my-box-green", "text-center");
                divElement.innerHTML = ("fizz");
            });

            const resetButton = document.getElementById("my-btn-danger");
            resetButton.addEventListener("click", function(){
                divElement.innerHTML = ("");
                divElement.classList.remove("my-box-green");
                
            });
            
        } else if (((i % 5) == 0)   && ((i % 3) != 0)) {
            
            const buttonRed = document.getElementById("my-btn-red");
            buttonRed.addEventListener("click", function(){
                divElement.classList.add("my-box-red", "text-center");
                divElement.innerHTML = ("buzz");
            });

            const resetButton = document.getElementById("my-btn-danger");
            resetButton.addEventListener("click", function(){
                divElement.innerHTML = ("");
                divElement.classList.remove("my-box-red");
                
            });
            
        } else if (( (i % 3) == 0) && ( (i % 5) == 0) ){
            const buttonBlue = document.getElementById("my-btn-blue");
            buttonBlue.addEventListener("click", function(){
                
                divElement.classList.add("my-box-blue", "text-center");
                divElement.innerHTML = ("fizzbuzz");
                
            });

            const resetButton = document.getElementById("my-btn-danger");
            resetButton.addEventListener("click", function(){

                divElement.innerHTML = ("");
                divElement.classList.remove("my-box-blue");
                
            });
            
            
        } else {
            
            const buttonBlack = document.getElementById("my-btn-black");
            buttonBlack.addEventListener("click", function(){
                
                divElement.classList.add("my-box-black", "text-center", "text-white");
                divElement.innerHTML = ("indivisibile");
            });

            const resetButton = document.getElementById("my-btn-danger");
            resetButton.addEventListener("click", function(){

                divElement.innerHTML = ("");
                divElement.classList.remove("my-box-black");
                
            });
            
        }
    }

});











/* reset di ogni  condizione tramite il button reset */
/* const buttonDangerReset = document.getElementById("my-btn-danger");
buttonDangerReset.addEventListener("click", function(){
    divElement.classList.remove("my-box-green", "text-center");
});

const buttonDangerReset = document.getElementById("my-btn-danger");
buttonDangerReset.addEventListener("click", function(){
    divElement.classList.remove("my-box-red", "text-center");
});

const buttonDangerReset = document.getElementById("my-btn-danger");
buttonDangerReset.addEventListener("click", function(){
    divElement.classList.remove("my-box-blue", "text-center");
});

const buttonDangerReset = document.getElementById("my-btn-danger");
buttonDangerReset.addEventListener("click", function(){
    divElement.classList.remove("my-box-black", "text-center", "text-white");
});

*/

