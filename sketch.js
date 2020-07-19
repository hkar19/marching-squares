let H = 700;
let W = 700;
let backgroundColor = "#ffa639";

let size = 10;

let field =[[]];

function setup() {
  // put setup code here
  createCanvas(H,W);
  background(backgroundColor);
  drawDots();
}

function draw() {
  // put drawing code here
  
}

function drawDots(){
  stroke("#4a39ff");
  // strokeWeight(2);
  for(let i = 0; i<=H/size; i++){
    field.push([]);
    for(let j = 0; j<=W/size;j++){
      field[i][j] = random([0,1]);
      // field[i][j] === 1 ? stroke("#b039ff"):stroke("#39d7ff");
      // point(i*size,j*size);
      if(i >0 && j>0) drawTriangles(i,j);
      // console.log(`i ${i} j ${j} `,field[i][j]);
    }
  }
}

function drawTriangles(i,j){
  let a = field[i-1][j-1];
  let b = field[i][j-1];
  let c = field[i][j];
  let d = field[i-1][j];

  let point1 = [(i-1)*size  ,(j-1)*size];
  let point2 = [(i-0.5)*size,(j-1)*size];
  let point3 = [i*size      ,(j-1)*size];
  let point4 = [(i-1)*size  ,(j-0.5)*size];
  let point5 = [(i-0.5)*size,(j-0.5)*size];
  let point6 = [i*size      ,(j-0.5)*size];
  let point7 = [(i-1)*size  ,j*size];
  let point8 = [(i-0.5)*size,j*size];
  let point9 = [i*size      ,j*size];

  let tA = ()=> triangle(...point1,...point2,...point4);
  let tB = ()=> triangle(...point2,...point4,...point5);
  let tC = ()=> triangle(...point2,...point5,...point6);
  let tD = ()=> triangle(...point2,...point3,...point6);
  let tE = ()=> triangle(...point4,...point7,...point8);
  let tF = ()=> triangle(...point4,...point5,...point8);
  let tG = ()=> triangle(...point5,...point6,...point8);
  let tH = ()=> triangle(...point6,...point8,...point9);

  stroke("#b039ff")
  fill("#b039ff");
  switch (d*8+c*4+b*2+a) {
    case 0: break;
    case 1:
      tA();
      break;
    case 2:
      tD();
      break;
    case 3:
      tA();
      tB();
      tC();
      tD();
      break;
    case 4:
      tH();
      break;
    case 5:
      tA();
      tH();
      break;
    case 6:
      tD();
      tC();
      tG();
      tH();
      break;
    case 7:
      tA(); tB(); tC(); tD(); tF(); tG(); tH();
      break;
    case 8:
      tE();
      break;
    case 9:
      tA(); tB(); tE(); tF();
      break;
    case 10:
      tD(); tE();
      break;
    case 11:
      tA(); tB(); tC(); tD(); tE(); tF(); tG();
      break;
    case 12:
      tE(); tF(); tG(); tH();
      break;
    case 13:
      tA(); tB(); tC(); tE(); tF(); tG(); tH();
      break;
    case 14:
      tB(); tC(); tD(); tE(); tF(); tG(); tH();
      break;
    case 15:
      tA(); tB(); tC(); tD(); tE(); tF(); tG(); tH();
      break;
    default:
      break;
  }

}