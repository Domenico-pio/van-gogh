//movimenti galleria

var i=0;
var play=true;
document.addEventListener("keydown", comando);

function comando(evento){

  switch (evento.keyCode) {
    case 37:      //sinistra
      girasx();
      break;
    case 39:    //destra
      giradx();
      break;
    default:

  }
}

function giradx(){
  //window.alert("i="+i);
  if(play){
    play=false;
    switch (Math.abs((i+10)%10)) {
      case 0:
        //window.alert(" case0d ");
        document.getElementById("angolo1").style.animation="2s linear 1 forwards rotazionesx";
        document.getElementById("angolo1").addEventListener("webkitAnimationEnd", start);
        break;
      case 1:
        //window.alert(" case1d ");
        document.getElementById("angolo2").style.transform="translateX(100%)";
        document.getElementById("angolo2").style.display="block";
        document.getElementById("angolo2").style.animation="2s linear 1 forwards slidesx";
        document.getElementById("angolo1").style.animation="2s linear 1 forwards slideangsx";
        document.getElementById("angolo2").addEventListener("webkitAnimationEnd", start);

        break;
      case 2:
        //window.alert(" case2d ");
        document.getElementById("angolo3").style.transform="rotate3d(0,0,0,0deg),translateX(100%)";
        document.getElementById("angolo3").style.display="block";
        document.getElementById("angolo3").style.animation="2s linear 1 forwards slideang2sx";
        document.getElementById("angolo2").style.animation="2s linear 1 forwards slide2sx";
        document.getElementById("angolo3").addEventListener("webkitAnimationEnd", start);
        break;
      case 3:
        //window.alert(" case3d ");
        document.getElementById("angolo3").style.animation="2s linear 1 forwards rotazionesx";
        document.getElementById("angolo3").addEventListener("webkitAnimationEnd", start);
        break;
      case 4:
        //window.alert(" case4d ");
        document.getElementById("angolo4").style.transform="rotate3d(0,0,0,0deg),translateX(100%)";
        document.getElementById("angolo4").style.display="block";
        document.getElementById("angolo4").style.animation="2s linear 1 forwards slideang2sx";
        document.getElementById("angolo3").style.animation="2s linear 1 forwards slideangsx";
        document.getElementById("angolo4").addEventListener("webkitAnimationEnd", start);
        break;
      case 5:
        //window.alert(" case5d ");
        document.getElementById("angolo4").style.animation="2s linear 1 forwards rotazionesx";
        document.getElementById("angolo4").addEventListener("webkitAnimationEnd", start);
        break;
      case 6:
        //window.alert(" case6d ");
        document.getElementById("angolo5").style.transform="translateX(100%)";
        document.getElementById("angolo5").style.display="block";
        document.getElementById("angolo5").style.animation="2s linear 1 forwards slidesx";
        document.getElementById("angolo4").style.animation="2s linear 1 forwards slideangsx";
        document.getElementById("angolo5").addEventListener("webkitAnimationEnd", start);
        break;
      case 7:
        //window.alert(" case7d ");
        document.getElementById("angolo6").style.transform="translateX(100%)";
        document.getElementById("angolo6").style.display="block";
        document.getElementById("angolo6").style.animation="2s linear 1 forwards slidesx";
        document.getElementById("angolo5").style.animation="2s linear 1 forwards slide2sx";
        document.getElementById("angolo6").addEventListener("webkitAnimationEnd", start);
        break;
      case 8:
        //window.alert(" case8d ");
        document.getElementById("angolo6").style.animation="2s linear 1 forwards rotazionesx";
        document.getElementById("angolo6").addEventListener("webkitAnimationEnd", start);
        break;
      case 9:
        //window.alert(" case9d ");
        document.getElementById("angolo1").style.transform="rotate3d(0,0,0,0deg),translateX(100%)";
        document.getElementById("angolo1").style.display="block";
        document.getElementById("angolo1").style.animation="2s linear 1 forwards slideang2sx";
        document.getElementById("angolo6").style.animation="2s linear 1 forwards slideangsx";
        document.getElementById("angolo1").addEventListener("webkitAnimationEnd", start);
        break;
      default:
      //window.alert(+" "+i);
    }

  i=i+1;
  }
}

function girasx(){
  //window.alert(i);
  if(play){
    play=false;
    switch (Math.abs((i%10)-10)%10) {
      case 0:
        //window.alert(" case0 ");//case 0
        document.getElementById("angolo6").style.transform="rotate3d(0,1,0,90deg),translatez(-100vw)";
        document.getElementById("angolo6").style.display="block";
        document.getElementById("angolo6").style.animation="2s linear 1 forwards slideang2dx";
        document.getElementById("angolo1").style.animation="2s linear 1 forwards slideangdx";
        document.getElementById("angolo6").addEventListener("webkitAnimationEnd", start);
        break;
      case 1:
        //window.alert(" case1 ");
        document.getElementById("angolo6").style.animation="2s linear 1 forwards rotazionedx";
        document.getElementById("angolo6").addEventListener("webkitAnimationEnd", start);
        break;
      case 2:
        //window.alert(" case2 ");//case 0
        document.getElementById("angolo5").style.transform="translateX(-100%)";
        document.getElementById("angolo5").style.display="block";
        document.getElementById("angolo5").style.animation="2s linear 1 forwards slide2dx";
        document.getElementById("angolo6").style.animation="2s linear 1 forwards  slideangdx";
        document.getElementById("angolo5").addEventListener("webkitAnimationEnd", start);
        break;
      case 3:
        //window.alert(" case3 ");//case 3
        document.getElementById("angolo4").style.transform="rotate3d(0,1,0,90deg) translateX(-100%) translateZ(-100vw);";
        document.getElementById("angolo4").style.display="block";
        document.getElementById("angolo4").style.animation="2s linear 1 forwards slideang2dx";
        document.getElementById("angolo5").style.animation="2s linear 1 forwards slidedx";
        document.getElementById("angolo4").addEventListener("webkitAnimationEnd", start);
        break;
      case 4:
        //window.alert(" case4 ");//case 3
        document.getElementById("angolo4").style.animation="2s linear 1 forwards rotazionedx";
        document.getElementById("angolo4").addEventListener("webkitAnimationEnd", start);
        break;
      case 5:
        //window.alert(" case5 ");//case 2
        document.getElementById("angolo3").style.transform="rotate3d(0,1,0,90deg) translateX(-100%) translateZ(-100vw);";
        document.getElementById("angolo3").style.display="block";
        document.getElementById("angolo3").style.animation="2s linear 1 forwards slideang2dx";
        document.getElementById("angolo4").style.animation="2s linear 1 forwards slideangdx";
        document.getElementById("angolo3").addEventListener("webkitAnimationEnd", start);
        break;
      case 6:
        //window.alert(" case6 ");//case 3
        document.getElementById("angolo3").style.animation="2s linear 1 forwards rotazionedx";
        document.getElementById("angolo3").addEventListener("webkitAnimationEnd", start);
        break;
      case 7:
        //window.alert(" case7 ");//case 3
        document.getElementById("angolo2").style.transform="translateX(-100%)";
        document.getElementById("angolo2").style.display="block";
        document.getElementById("angolo2").style.animation="2s linear 1 forwards slide2dx";
        document.getElementById("angolo3").style.animation="2s linear 1 forwards slideangdx";
        document.getElementById("angolo2").addEventListener("webkitAnimationEnd", start);
        break;
      case 8:
        //window.alert(" case8 ");//case 1
        document.getElementById("angolo1").style.transform="rotate3d(0,1,0,90deg) translateX(-100%) translateZ(-100vw)";
        document.getElementById("angolo1").style.display="block";
        document.getElementById("angolo1").style.animation="2s linear 1 forwards slideang2dx";
        document.getElementById("angolo2").style.animation="2s linear 1 forwards slidedx";
        document.getElementById("angolo1").addEventListener("webkitAnimationEnd", start);
        break;
      case 9:
        //window.alert(" case9 ");//case4,0
        document.getElementById("angolo1").style.animation="2s linear 1 forwards rotazionedx";
        document.getElementById("angolo1").addEventListener("webkitAnimationEnd", start);
        break;
      default:
      //window.alert(j+" "+i);
    }
    i=i-1;
  }
}

function start(){
  play=true;
}

//descrizioni

function up(input) {
  switch (input) {
    case 1:
        document.getElementById("didascalia1").style.display="block";
        document.getElementById("descrizione1").style.display="block";
      break;
    case 2:
        document.getElementById("descrizione2").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 3:
        document.getElementById("descrizione3").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 4:
        document.getElementById("descrizione4").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 5:
        document.getElementById("descrizione5").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 6:
        document.getElementById("descrizione6").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 7:
        document.getElementById("descrizione7").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 8:
        document.getElementById("descrizione8").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 9:
        document.getElementById("descrizione9").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    case 10:
        document.getElementById("descrizione10").style.display="block";
        document.getElementById("didascalia1").style.display="block";
      break;
    default:

  }
}

function down(input) {
  switch (input) {
    case 1:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione1").style.display="none";
      break;
    case 2:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione2").style.display="none";
      break;
    case 3:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione3").style.display="none";
      break;
    case 4:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione4").style.display="none";
      break;
    case 5:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione5").style.display="none";
      break;
    case 6:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione6").style.display="none";
      break;
    case 7:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione7").style.display="none";
      break;
    case 8:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione8").style.display="none";
      break;
    case 9:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione9").style.display="none";
      break;
    case 10:
        document.getElementById("didascalia1").style.display="none";
        document.getElementById("descrizione10").style.display="none";
      break;
    default:

  }
}

//zoom
function zoom(h) {
  document.getElementById("myModal").style.display="block";
  document.getElementById("img01").src=h.src;
  document.getElementById("caption").innerHTML= h.alt;
}

function chiudi() {
    document.getElementById("myModal").style.display="none";
  }
