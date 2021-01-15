let count = 0;

const value = document.querySelector("#value");

const button = document.querySelectorAll(".btn");

button.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const style = e.currentTarget.classList;
            if (style.contains("btn-danger")){
                count--;
            }
            else if(style.contains("btn-success")){
                count++;
            }
            else{
                count=0;
            }
            if(count>0){
                value.style.color="198754";
            }
            if(count<0){
                value.style.color="dc3545";
            }
            if(count>0){
                value.style.color="1a1a1a";
            }

            value.textContent=count;
            
        });
    });