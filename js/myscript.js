
/* il click sul tasto my-btn-warning "start"  fa iniziare il ciclo e quindi la stampa dei numeri*/


const buttonStart = document.getElementById("my-btn-warning");
buttonStart.addEventListener("click", function(){

    for (let i = 0; i < 101 ; i++) {

        /* questi sono i dati da inserire senza il verificarsi di condizioni particolari */
        /* assegno alla variabile il nuovo tag creato  */
        let divElement = document.createElement("div");
        /* aggiung le classi all'elemento(tag for html) creato in precedenza */
        divElement.classList.add("my-box", "col-4", "col-lg-2", "my-sahdow", "fw-bold", "text-uppercase");
        /* assegno alla costante l'elemento a cui andranno aggiunti i "div" */
        const boxContainer = document.getElementById("my-box-container");
        /* aggiung i div alla costante assegnata in precedenza */
        boxContainer.append(divElement);
        /* aggiungo classi al container(html) */
        boxContainer.classList.add("row");
        boxContainer.classList.add("d-flex", "flex-wrap", "gy-2", "gx-4", "justify-content-center");

        /* condizionie */
        if( ((i % 3) == 0) && ((i % 5) != 0) ){
            
            /* se la condizione viene verifica cliccando sul tasto my-btn-green 
                visualizzo i box con le classi e i contenuti richiesti
                questo vale per tutte e 3 le condizioni
            */
            const buttonGreen = document.getElementById("my-btn-green");
            buttonGreen.addEventListener("click", function(){
                divElement.classList.add("my-box-green", "text-center");
                divElement.innerHTML = ("fizz");
            });

            /* click sul tasto reset e rimuovo la classe specifica e il contenuto */
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



