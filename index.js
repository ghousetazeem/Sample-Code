// Secret message application using javascript
document.querySelector("form").addEventListener("submit", event =>{
    // Preventing default value of the submit
    event.preventDefault();

    // Making the form comes one by one doing this
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-link").classList.remove("hide");

    // Taking the value of the input and encoding it into base64
    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);

    // Creating the link through window location and encoded value of the input
    const linkInput = document.querySelector("#link-input");
    linkInput.value  = `${window.location}#${encrypted}`;
    linkInput.select();

});

// here we are traking hash from the window location and replacing the # with empty string
// And we are encoding the message with atob function
const { hash } = window.location;
const message = atob(hash.replace("#",""));
// If there is a message
if (message){
    // Then the message form will be hided
    document.querySelector("#message-form").classList.add("hide");
    // And the message show removes the hide and show the message
    document.querySelector("#message-show").classList.remove("hide");
    // Then we are pasting the value of message in h3 and displaying it in the message show form
    document.querySelector("h3").innerHTML = message;
}


