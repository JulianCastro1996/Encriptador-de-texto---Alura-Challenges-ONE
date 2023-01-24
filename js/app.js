

const textarea= document.getElementById("textarea");
const btnEncriptar= document.getElementById("encriptar");
const btnDesencriptar= document.getElementById("desencriptar");
const btnCopiar= document.getElementById("copy");
const emptyMsg= document.getElementById("emptyMsg");
const msg= document.getElementById("msg");
const result= document.getElementById("result");

const rules=[["e","enter"],
["i","imes"],
["a","ai"],
["o","ober"],
["u","ufat"],
];


function mostrarMsg(){
    if(!emptyMsg.classList.contains("none")){
        emptyMsg.classList.toggle("none");
        msg.classList.toggle("none");      
    }
}
function encriptar(text){
    rules.forEach(rule => {
        if(text.includes(rule[0])){
            text=text.replaceAll(rule[0],rule[1]);
        }
    });
    return text;
}
function desencriptar(text){
    let rulesReverse= rules.slice();
    rulesReverse=rulesReverse.reverse();
    rules.forEach(rule => {
        if(text.includes(rule[1])){
            text=text.replaceAll(rule[1],rule[0]);
        }
    });
    return text;
}
function encriptarAction(){
    let data=textarea.value.toLowerCase();
    if(data != ""){
        mostrarMsg();
        let resultado= encriptar(data);
        result.innerHTML= resultado;
        textarea.value="";
    }
}
function desencriptarAction(){
    let data=textarea.value.toLowerCase();
    if(data != ""){
        mostrarMsg();
        let resultado= desencriptar(data);
        result.innerHTML= resultado;
        textarea.value="";
    }
}
function copyOnClipBoard(){
    navigator.clipboard.writeText(result.innerHTML)
    alert("copiado!!");

}
