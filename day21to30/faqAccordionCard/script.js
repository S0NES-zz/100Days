let questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", ()=>{
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active");
        }else{
            question.parentNode.classList.add("active");
        }
    });
});