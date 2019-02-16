
var i=-1;
function giradx(){
i=i+1;
  switch (i) {
    case 0:
      document.getElementById("muro1").style.animation="slide3d 2s linear forwards running";

      break;
    case 1:
      document.getElementById("angolo1").style.animation="slide2d2 2s linear forwards running";
      document.getElementById("angolo2").style.animation="slide2d2 2s linear forwards running";
      break;
    case 2:
      document.getElementById("muro3").style.animation="slide3d 2s linear forwards running";
      break;
    case 3:
      document.getElementById("angolo2").style.animation="slide2d3 2s linear forwards running";
      document.getElementById("muro5").style.animation="slide2d 2s linear forwards running";
      break;
    case 4:
      document.getElementById("angolo3").style.animation="slide2d2 2s linear forwards running";
      document.getElementById("muro5").style.animation="slide2d3 2s linear forwards running";
      break;
    case 5:
      document.getElementById("muro6").style.animation="slide3d 2s linear forwards running";
      break;
    case 6:
      //window.alert("case 6");
      document.getElementById("angolo4").style.animation="slide2d2 2s linear forwards running";
      document.getElementById("angolo3").style.animation="slide2d3 2s linear forwards running";
      break;
    case 7:
    //window.alert("case 7");
      document.getElementById("muro8").style.animation="slide3d 2s linear forwards running";
      /*document.getElementById("muro1").style.animation="slide3dr 2s linear forwards running";*/
      break;
    case 8:
      //window.alert("case 8");
      document.getElementById("angolo4").style.animation="slide2d3 2s linear forwards running";
      document.getElementById("muro10").style.animation="slide2d 2s linear forwards running";
    /*
      document.getElementById("muro2").style.transform="rotate3d(0, 1, 0, -90deg) translate3d(100%, 0px, 0px )";
      document.getElementById("angolo1").style.transform="translate(200%,0%)";
      */
      break;

    default:
      {
      //window.alert(i);
        i=-1;
      window.location.reload();
      }
  }


}
function girasx(){

  switch (i) {
    case 0:
      document.getElementById("muro1").style.animation="slide3dr 2s linear  forwards running";
      break;
    case 1:
    document.getElementById("angolo1").style.animation="slide2d2r 2s linear forwards running";
    document.getElementById("angolo2").style.animation="slide2d2r 2s linear forwards running";
      break;
    case 2:
      document.getElementById("muro3").style.animation="slide3dr 2s linear  forwards running";
      break;
    case 3:
      document.getElementById("muro5").style.animation="slide2dr 2s linear  forwards running";
      document.getElementById("angolo2").style.animation="slide2d3r 2s linear forwards running";
      break;
    case 4:
      document.getElementById("angolo3").style.animation="slide2d2r 2s linear forwards running";
      document.getElementById("muro5").style.animation="slide2d3r 2s linear forwards running";
        break;
    case 5:
      document.getElementById("muro6").style.animation="slide3dr 2s linear forwards running";
      break;
    case 6:
      document.getElementById("angolo4").style.animation="slide2d2r 2s linear forwards running";
      document.getElementById("angolo3").style.animation="slide2d3r 2s linear forwards running";
      break;
    case 7:
      document.getElementById("muro8").style.animation="slide3dr 2s linear forwards running";
      break;
    case 8:
      document.getElementById("angolo4").style.animation="slide2d3r 2s linear forwards running";
      document.getElementById("muro10").style.animation="slide2dr 2s linear forwards running";
      break;
    default:
      {
      //window.alert(i);
        
      }
      
  }
  i=i-1;
}

function up1() {
  //window.alert("up");
  document.getElementById("descrizione1").style.animation="up 2s linear forwards running";
}
function down1() {
  //window.alert("down");
  document.getElementById("descrizione1").style.animation="down 2s linear forwards running";

}
function up2() {
  //window.alert("up");
  document.getElementById("descrizione2").style.animation="up 2s linear forwards running";
}
function down2() {
  //window.alert("down");
  document.getElementById("descrizione2").style.animation="down 2s linear forwards running";

}
function up3() {
  //window.alert("up");
  document.getElementById("descrizione3").style.animation="up 2s linear forwards running";
}
function down3() {
  //window.alert("down");
  document.getElementById("descrizione3").style.animation="down 2s linear forwards running";

}
function up4() {
  //window.alert("up");
  document.getElementById("descrizione4").style.animation="up 2s linear forwards running";
}
function down4() {
  //window.alert("down");
  document.getElementById("descrizione4").style.animation="down 2s linear forwards running";

}
function up5() {
  //window.alert("up");
  document.getElementById("descrizione5").style.animation="up 2s linear forwards running";
}
function down5() {
  //window.alert("down");
  document.getElementById("descrizione5").style.animation="down 2s linear forwards running";

}
function up6() {
  //window.alert("up");
  document.getElementById("descrizione6").style.animation="up 2s linear forwards running";
}
function down6() {
  //window.alert("down");
  document.getElementById("descrizione6").style.animation="down 2s linear forwards running";

}
function up7() {
  //window.alert("up");
  document.getElementById("descrizione7").style.animation="up 2s linear forwards running";
}
function down7() {
  //window.alert("down");
  document.getElementById("descrizione7").style.animation="down 2s linear forwards running";

}
function up8() {
  //window.alert("up");
  document.getElementById("descrizione8").style.animation="up 2s linear forwards running";
}
function down8() {
  //window.alert("down");
  document.getElementById("descrizione8").style.animation="down 2s linear forwards running";

}
function up9() {
  //window.alert("up");
  document.getElementById("descrizione9").style.animation="up 2s linear forwards running";
}
function down9() {
  //window.alert("down");
  document.getElementById("descrizione9").style.animation="down 2s linear forwards running";

}
function up10() {
  //window.alert("up");
  document.getElementById("descrizione10").style.animation="up 2s linear forwards running";
}
function down10() {
  //window.alert("down");
  document.getElementById("descrizione10").style.animation="down 2s linear forwards running";

}
