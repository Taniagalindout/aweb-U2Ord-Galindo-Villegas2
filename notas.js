var vista={
    nota: "",
    muestra:""
};

function almacenar(){    
    vista.nota=document.getElementById("nota").value;
    vista.muestra=document.getElementById("muestra").value;
 actnota();
    }
    
    
    function acnota(){
        document.getElementById("muestra").innerHTML=vista.nota;
    }
