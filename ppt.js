window.onload = function(){
    let llista = ["pedra", "paper", "tisora"];
    let opcio = document.getElementsByName("opcio");
    let div = document.getElementById("jugada");
    let jugada = document.getElementById("historial");
    let empat = 0;
    let guanyat = 0;
    let perdut = 0;

    function generar() {
        let par1 = llista[Math.floor(Math.random() * llista.length)];
        return par1;
    }
    
    function novaJ(){
        let maquina = generar();
        if (opcio[0].checked){
            if (maquina == "pedra"){div.innerHTML = "L'ordinador ha escollit la mateixa opció. Has empatat el joc"; empat++;}
            else if( maquina == "paper"){div.innerHTML = "L'ordinador ha escollit Paper. Has perdut el joc"; perdut++}
            else if( maquina == "tisora"){div.innerHTML = "L'ordinador ha escollit Tisora. Has guanyat el joc"; guanyat++}
        } 
        if (opcio[1].checked){
            if (maquina == "paper"){div.innerHTML = "L'ordinador ha escollit la mateixa opció. Has empatat el joc"; empat++}
            else if( maquina == "tisora"){div.innerHTML = "L'ordinador ha escollit Tisora. Has perdut el joc"; perdut++}
            else if( maquina == "pedra"){div.innerHTML = "L'ordinador ha escollit Pedra. Has guanyat el joc"; guanyat++}
        }
        if (opcio[2].checked){
            if (maquina == "tisora"){div.innerHTML = "L'ordinador ha escollit la mateixa opció. Has empatat el joc"; empat++}
            else if( maquina == "paper"){div.innerHTML = "L'ordinador ha escollit Paper. Has guanyat el joc"; guanyat++}
            else if( maquina == "pedra"){div.innerHTML = "L'ordinador ha escollit Pedra. Has perdut el joc"; perdut++}
        
        }
        return empat, guanyat, perdut;
        
    }
    document.getElementById("nova").addEventListener("click", function(){novaJ(), jugada.innerHTML=`Partidas empatades:  ${empat}<br> Partidas guanyades: ${guanyat}<br>Partidas perdudes: ${perdut}<br>`});

    function esborrarR(){
        div.innerHTML = "";
    }
    document.getElementById("esborrarR").addEventListener("click", esborrarR);

    function iniciar(){
        empat = 0;
        perdut = 0;
        guanyat = 0;
        jugada.innerHTML="";
    }
    document.getElementById("inic").addEventListener("click", iniciar);


    function esborrarS() {
        let l = document.getElementsByName("opcio");
        for (let i = 0; i < l.length; i++)
            l[i].checked = false;
    }

    document.getElementById("esborrarS").addEventListener("click", esborrarS);
}