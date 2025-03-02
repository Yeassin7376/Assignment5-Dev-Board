const buttons = document.querySelectorAll(".complete-btn");
for(button of buttons){
    button.addEventListener("click", function(event){
        console.log(event.target);
        // console.log(event.target.parentNode.parentNode.parentNode);
        console.log(event.target.parentNode.parentNode.parentNode.children[1].innerText);
    })
}