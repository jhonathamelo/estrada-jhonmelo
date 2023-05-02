var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada,pontuacao,
vida,estadoJogo

var imageAtor,imageCarro1,imageCarro2,imageCarro3,imageCarro4,imageCarro5,imageCarro6

function preload(){
  imageAtor = loadImage('imagens/ator-1.png')
  
  estrada = loadImage('imagens/estrada.png')  
  
  imageCarro1 = loadImage('imagens/carro-1.png')
  imageCarro2 = loadImage('imagens/carro-2.png')
  imageCarro3 = loadImage('imagens/carro-3.png')
  imageCarro4 = loadImage('imagens/carro-1.png')
  imageCarro5 = loadImage('imagens/carro-2.png')
  imageCarro6 = loadImage('imagens/carro-3.png')
  
}

function setup(){
  createCanvas(600,350)
estadoJogo = 'parado'
 
  montarJogo()
    estadoJogo='parado'
  

}  

function draw(){
  
  

  
  background(estrada)
  
    drawSprites()
  


 
     textSize(15)
  
  text('vida:'+vida,450,25) 
  text('pontuacao:'+pontuacao,4,25)
  
   
  
  if(estadoJogo == 'parado'){
    textSize(20)
text('pressione "ESPAÇO" para iniciar',150,200)  

  
    if(keyDown('SPACE')){
     estadoJogo = "play";
      
     
        carro1.velocityX = -5
  carro2.velocityX = -4
  carro3.velocityX = -7
  carro4.velocityX = -6
  carro5.velocityX = -5
  carro6.velocityX = -8
     
   }
  
  }
  
  
   
  


  
 
if(estadoJogo == 'play'){
  
   if (
ator.isTouching(carro1)||
ator.isTouching(carro2)|| 
ator.isTouching(carro3) ||
ator.isTouching(carro4)||
ator.isTouching(carro5) ||
ator.isTouching(carro6)
){
 fimDeJogo()
  pontuacao =0;
  ator.y = 334
  
}

  
  
  
 
  if(keyDown('up')){
ator.y-= 4
}
 if(keyDown('down')){
ator.y+= 4 
}
 
if (ator.y < 0){
 ator.y = 330
  pontuacao = pontuacao +1
}
  
 if (carro1.x < -20){
  carro1.x = 650
}
 if (carro2.x < -20){
  carro2.x = 650 
 }
  if(carro3.x < -20){
  carro3.x = 650  
}
  if(carro4.x < -20){
  carro4.x = 650   
}
  if(carro5.x < -20){
  carro5.x = 650
}
  if(carro6.x < -20){
  carro6.x = 650  
}
}
  
  
  
  

 if(estadoJogo == 'gameOver'){
 textSize(30) 
text('GAME OVER',110, 220)
   
carro1.remove()  
carro2.remove()  
carro3.remove()  
carro4.remove()     
carro5.remove()     
carro6.remove()     
ator.remove()
 
 }

drawSprites()
}




function fimDeJogo(){
 
  vida = vida - 1
    
     if(vida < 1){
         estadoJogo = 'game0ver' 
     }else{
         estadoJogo = 'parado'  
}
}  



function montarJogo(){
  
  pontuacao = 0;
 vida = 3; 

  
  ator= createSprite(300,334,20,20)
ator.addImage(imageAtor)
ator.scale = 0.2
  
 carro1 = createSprite(650,50,20,20)
 carro1.addImage(imageCarro1)
 carro1.scale = 0.4
 carro2 = createSprite(650,100,20,20)
 carro2.addImage(imageCarro2)
 carro2.scale = 0.4
 carro3 = createSprite(650,150,20,2)
 carro3.addImage(imageCarro3)
 carro3.scale = 0.4
 carro4 = createSprite(650,200,20,20)
 carro4.addImage(imageCarro4)
 carro4.scale = 0.4
 carro5 = createSprite(650,250,20,20)
 carro5.addImage(imageCarro5)
 carro5.scale = 0.4
 carro6 = createSprite(650,300,20,20)
 carro6.addImage(imageCarro6)
 carro6.scale = 0.4
  
  
}