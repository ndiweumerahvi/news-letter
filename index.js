const form = document.querySelector(".container1 form");


// OR  const form = document.querySelector(".field-container form");


const input = document.querySelector(".container1 form input");

// OR  const form = document.querySelector(".field-container form input");

var subscribeContainer = document.querySelector(".container");

var thankContainer = document.querySelector(".container3");

var dismiss = document.querySelector("#dismiss");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // input.forEach(input => {
      
            if(input.type=='email'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');

                    thankContainer.classList.remove("hidden");
                    subscribeContainer.classList.add("hide");

                    dismiss.addEventListener('click', () => {
                        thankContainer.classList.add("hidden");
                        subscribeContainer.classList.remove("hide");
                        location.reload()
                    });

                }else{
                    input.parentElement.classList.add('error');
                }
                
            
         
        }
    
    // })
});

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }