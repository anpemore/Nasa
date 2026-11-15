function buscar() {

        let coo=parseInt(document.getElementById('coo').value);
        let coo1=parseInt(document.getElementById('coo1').value);

         let parrafo=document.getElementById('parrafo');

       if(isNaN(coo)||isNaN(coo1)){   

          alert("Debe ingresar un numero mayor a cero "+coo) ;
       }   
       else{
          if(coo>coo1){
              document.getElementById('img').src="imG/rotacion1.gif";
              document.getElementById("galaxia").src="img/enana.png";
                   
          }  
          else{            
             document.getElementById('img').src="imG/rotacion.gif";
             document.getElementById('galaxia').src="imG/tierra1.png"
            

             parrafo.textContent = "Imagen de la tierra rotando en su eje de 360";
          }
       }
    
}
function limpiar() {

        document.getElementById('coo').value="";
        document.getElementById('coo1').value="";
        document.getElementById('img').src="";
        document.getElementById('img').src="";
        document.getElementById("grafica").src="";
        parrafo.textContent = " ";
      
    
}



