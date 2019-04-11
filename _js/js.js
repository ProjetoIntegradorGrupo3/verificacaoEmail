
function validacaoEmail(field) {
nome = field.value.substring(0, field.value.indexOf("@"));
conta = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
if ((nome.length >=1) &&
    (conta.length >=3) && 
    (nome.search("@")==-1) && 
    (conta.search("@")==-1) &&
    (nome.search(" ")==-1) && 
    (conta.search(" ")==-1) &&
    (conta.search(".")!=-1) &&      
    (conta.indexOf(".") >=1)&& 
    (conta.lastIndexOf(".") < conta.length - 1)) {
document.getElementById("mensagem").innerHTML="Email válido";
alert("Email valido");
}
else{
document.getElementById("mensagem").innerHTML="<font color='red'>Email inválido </font>";
alert("Email invalido");
}
}
