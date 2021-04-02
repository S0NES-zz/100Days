let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

questions.forEach(question => {
    question.addEventListener("click", ()=>{
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active");
        }else{
            question.parentNode.classList.add("active");
        }
    });
});