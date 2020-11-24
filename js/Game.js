class Game{

constructor(){

}
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
  }


  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
        manThing = createSprite(200,displayHeight-230,50,50);
      manThing.scale = 0.2;
      manThing.addImage(man);

      
    }


}


play(){
  form.hide();

  edges = createEdgeSprites();

manThing.collide(edges[3]);
manThing.bounceOff(edges[0]);
manThing.bounceOff(edges[1]);
manThing.bounceOff(edges[2]);
manThing.bounceOff(edges[3]);

  console.log(manThing.y);


  Player.getPlayerInfo();
  
  if(allPlayers !== undefined){
   background(jungle);
   


 

    //key is down

    if(keyIsDown(87) && manThing.y >112){
     // manThing.velocityY = -9;
     // manThing.velocityX = 0;
      manThing.y = manThing.y - 5;

     } 
     
     
         if(keyIsDown(68)){
      // manThing.velocityX = 9;
     //  manThing.velocityY = 0;
     manThing.x = manThing.x + 5;
      }
     
     
          if(keyIsDown(83)){
      // manThing.velocityY = 9;
     //  manThing.velocityX = 0;
     manThing.y = manThing.y + 5;
      } 
     
     
          if(keyIsDown(65)){
      // manThing.velocityX = -9;
      // manThing.velocityY = 0;
      manThing.x = manThing.x -5;
       } 
 ///////////////////////////////////////////



 
 if (frameCount % 100 === 0) {
  var cloud = createSprite(displayWidth,displayHeight-200,40,10);
cloud.addImage(coin);

  cloud.y = Math.round(random(displayWidth-1000,displayHeight-500));
  
  cloud.scale = 0.5;
  cloud.velocityX = -3;
  
   //assign lifetime to the variable
  cloud.lifetime = displayWidth/3;
  cloudsGroup.add(cloud);
 
}


if(cloudsGroup.isTouching(manThing)){
  cloudsGroup.destroyEach();
  score = score+1;
 }
 



//if(keyDown("space") && trex.y >= 359){
 // trex.velocityY = -12 ;  }

drawSprites();

  }

  //drawSprites();
}



  }