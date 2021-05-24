let idx =  1;
const text= document.querySelector('p')
const msg = "I love programming when the codes works ";

setInterval(writeText, 100);

function writeText(){
    text.innerText = msg.slice(0, idx)
    idx++;
    if(idx > msg.length){
        idx = 1;
    }
}