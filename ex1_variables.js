function infoEtudiant(note){
    if(note>=10){
return "Admis"
    }
    else{
        return "Ajournee"
    }
}
const test=infoEtudiant(13)
console.log(test)