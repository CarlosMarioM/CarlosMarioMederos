 document.getElementById("btn").addEventListener("click", () =>{
    console.log("clicked");
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirm = document.getElementById("confpass").value;

    var url = "https://masterxserver.azurewebsites.net/api/Account/Register"

    console.log(user, email, password, confirm);


    async function postData(url = '', data = {}){
        const response =  fetch (url,
            {
                method : 'POST',
               credentials: 'same-origin',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                     
                },
                redirect: 'follow',
                body : JSON.stringify(data)
            } );
            return response.json();
    }
    
    
    postData(url, {username : user, email : email, password : password, confirmpassword: confirm})
    .then(data => {
        console.log(data);
    })

});

