
var a=0;
var j=0;
function floorgiradx(){
  if (a<0) {a=a+10;}
  window.alert(a);
  switch (Math.abs(a)) {
    case 0:
      document.getElementById("floor").style.animation="floorslide2d2 2s linear forwards running";
      break;
    case 1:
      document.getElementById("floormuro1").style.animation="floorslide3d 2s linear forwards running";
      break;
    case 2:
      document.getElementById("floor").style.animation="floorslide2d 2s linear forwards running";
      break;
    case 3:
      document.getElementById("floor").style.animation="floorslide2d4 2s linear forwards running";
      break;
    case 4:
      document.getElementById("floormuro1").style.animation="floorslide3d2 2s linear forwards running";
      break;
    case 5:
      document.getElementById("floor").style.animation="floorslide2d6 2s linear forwards running";
      break;
    case 6:
      document.getElementById("floormuro1").style.animation="floorslide3d3 2s linear forwards running";
      break;
    case 7:
      document.getElementById("floor").style.animation="floorslide2d7 2s linear forwards running";
      break;
    case 8:
      document.getElementById("floor").style.animation="floorslide2d8 2s linear forwards running";
      break;
    case 9:
      document.getElementById("floormuro1").style.animation="floorslide3d4 2s linear forwards running";
      break;
      case 11:
      document.getElementById("floormuro1").style.animation="floorslide3d 2s linear forwards running";
        break;
    default:
    window.alert(b+" "+a);
  }
  a=(a+1)%10;
  //i=i+1;
}
function floorgirasx(){

  //i=4-((i+4)%4);
  window.alert(a);
  switch (Math.abs((a+10)%10)) {
    case 0:
      window.alert(a+" case0 "+a);//case 0
      document.getElementById("floormuro1").style.animation="floorslide3d4r 2s linear forwards running";
      break;
    case 9:
      document.getElementById("floor").style.animation="floorslide2d8r 2s linear forwards running";
      break;
    case 8:
      window.alert(a+" case8 "+a);//case 0
      document.getElementById("floor").style.animation="floorslide2d7r 2s linear forwards running";
      break;
    case 7:
      window.alert(a+" case2 "+a);//case 3
      document.getElementById("floormuro1").style.animation="floorslide3d3r 2s linear forwards running";
      break;
    case 6:
      window.alert(a+" case6 "+a);//case 3
      document.getElementById("floor").style.animation="floorslide2d6r 2s linear forwards running";
      break;
    case 5:
      window.alert(a+" case2 "+a);//case 2
      document.getElementById("floormuro1").style.animation="floorslide3d2r 2s linear forwards running";
      break;
    case 4:
    window.alert(a+" case4 "+a);//case 3
    document.getElementById("floor").style.animation="floorslide2d4r 2s linear forwards running";
      break;
    case 3:
    window.alert(a+" case3 "+a);//case 3
    document.getElementById("floor").style.animation="floorslide2dr 2s linear forwards running";
      break;
    case 2:
      window.alert(a+" case31 "+a);//case 1
      document.getElementById("floormuro1").style.animation="floorslide3dr 2s linear forwards running";
      break;
    case 1:
      window.alert(a+" case4 "+a);//case4,0
      document.getElementById("floor").style.animation="floorslide2d2r 2s linear forwards running";
      break;
    default:
    window.alert(a+" "+a);
  }
  a=a-1;

}
