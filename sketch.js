var data;
var canvas;
var bgColor;
var div;
var inp;
var cuteFont;

function preload(){
  //file containting json data
    cuteFont = loadFont('assets/CuteFont-Regular.ttf');
    data = loadJSON('sample.json');

}

function setup(){
  // div = createDiv('Acrostic Yahoo Answer Poem').size(350, 50);
  // div.position(10, 30);
  // div.style('font-size', '30px');

  canvas = createCanvas(displayWidth, displayHeight);
  canvas.background(116, 255, 32);
  textSize(30);
  textFont(cuteFont);
  inp = createInput();
  inp.size(200, 20);
  inp.position(10, 215);

  //submission button
  button = createButton('Submit');
  button.size(100, 25);
  button.position(225, 215);
  var letters;
  for(let i = 0; i < data.length; i++){
    letters += data[i]
  }
  // text(aWords[int(random(0,aWords.length))], 10, 30);
  button.mousePressed(genPoem);

}

function genPoem(){
canvas.background(116, 255, 32);
  let rand = int(random(0,8));
  var name = inp.value();
  let resetKey = 'r';
  let alignOrder = 125;

  console.log('pressed it!');
  for(let i = 0; i < name.length; i++){
    for(var key in data){
      if(name[i] == key){//check for matches
        if(data[key][rand] == null){
          let msg = name[i].toUpperCase() + ' = 1 year off your life';
          text(msg, 10, alignOrder);

        } else{

          let mod = data[key][rand];
          text(key.toUpperCase() + mod.slice(1), 10, alignOrder);
        }
      }
    }
    alignOrder = alignOrder + 35;

  }


}
function keyPressed(){
  if(key == 1){
    clear();
  }
  //return false;
}
function draw(){
//nothinggggggg?
}
