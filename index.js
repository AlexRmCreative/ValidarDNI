ComprobarDNI = () => {
    let validLetter = 'TRWAGMYFPDXBNJZSQVHLCKE';
    imgStates = {
        correct: "Icon_Check.png",
        incorrect: "Icon_Cross.png",
        unknown: "Icon_QuestionMark.png"
    }
    imageState = document.getElementById('state');
    DNInum = (document.getElementById('DNI').value).toString();
    DNIletter = DNInum[DNInum.length - 1].toUpperCase();
    DNInum = parseInt(DNInum.slice(0, -1));

    if(DNIletter == validLetter[DNInum % 23])
    {
        imageState.src = imgStates.correct;
    }
    else{
        imageState.src = imgStates.incorrect;
    }
}

