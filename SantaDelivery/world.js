class world extends Phaser.Scene {
  constructor() {
    super("world");
  }

  // incoming data from scene below
  init(data) {
    this.playerPos = data.playerPos;
   
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world","assets/worldMap.json");

    //Step 2 : Preload any images here, nickname, filename
    this.load.image("ground", "assets/ground_tileset.png");
    this.load.image("houses", "assets/houses_tileset.png");
    this.load.image("river", "assets/river_texture.png");
    this.load.image("various", "assets/various_tileset.png");
    this.load.image("various2", "assets/various_tileset2.png");
    this.load.image("various3", "assets/various_tileset3.png");
    this.load.image("various4", "assets/various_tileset4.png");
    this.load.image("various5", "assets/various_tileset5.png");
    this.load.image("various6", "assets/various_tileset6.png");
    this.load.image("winter", "assets/winter_tileset.png");
    this.load.image("winter2", "assets/winter_tileset2.png");
    this.load.image("winter3", "assets/winter_tileset3.png");
    this.load.image("winter4", "assets/winter_tileset4.png");
    this.load.image("winter5", "assets/winter_tileset5.png");

   
   
  }

  create() {
    console.log("*** world scene");
    console.log("life: ", window.heart);

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:"world"});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let groundTiles = map.addTilesetImage("ground_tileset", "ground");
    let housesTiles = map.addTilesetImage("houses_tileset", "houses");
    let riverTiles = map.addTilesetImage("river_texture", "river");
    let variousTiles = map.addTilesetImage("various_tileset", "various");
    let variousTiles2 = map.addTilesetImage("various_tileset2", "various2");
    let variousTiles3 = map.addTilesetImage("various_tileset3", "various3");
    let variousTiles4 = map.addTilesetImage("various_tileset4", "various4");
    let variousTiles5 = map.addTilesetImage("various_tileset5", "various5");
    let variousTiles6 = map.addTilesetImage("various_tileset6", "various6");
    let winterTiles = map.addTilesetImage("winter_tileset", "winter");
    let winterTiles2 = map.addTilesetImage("winter_tileset2", "winter2");
    let winterTiles3 = map.addTilesetImage("winter_tileset3", "winter3");
    let winterTiles4 = map.addTilesetImage("winter_tileset4", "winter4");
    let winterTiles5 = map.addTilesetImage("winter_tileset5", "winter5");
    
    let tilesArray = [ groundTiles, housesTiles, riverTiles, variousTiles, 
      variousTiles2, variousTiles3, variousTiles4,variousTiles5, variousTiles6, 
      winterTiles, winterTiles2,winterTiles3, winterTiles4, winterTiles5]

    // Step 5  Load in layers by layers
    this.groundLayer = map.createLayer(
    "groundLayer",tilesArray, 0, 0);

    this.roadLayer = map.createLayer(
    "roadLayer",tilesArray, 0, 0);
    
    this.riverLayer = map.createLayer(
    "riverLayer",tilesArray, 0, 0);

    this.housesLayer = map.createLayer(
    "housesLayer",tilesArray, 0, 0);

    this.groundtextureLayer = map.createLayer(
    "groundtextureLayer",tilesArray, 0, 0);

    this.objectLayer = map.createLayer(
    "objectLayer", tilesArray, 0, 0);

    this.snowLayer = map.createLayer(
    "snowLayer", tilesArray, 0, 0);

   // health hearts
  this.heart1 = this.add.image(50, 40, "heart").setScale(0.4).setScrollFactor(0).setVisible(false);
  this.heart2 = this.add.image(100, 40, "heart").setScale(0.4).setScrollFactor(0).setVisible(false);
  this.heart3 = this.add.image(150, 40, "heart").setScale(0.4).setScrollFactor(0).setVisible(false);
 
 if (window.heart == 3) {
  this.heart1.setVisible(true);
  this.heart2.setVisible(true);
  this.heart3.setVisible(true);
  } else if (window.heart == 2) {
  this.heart1.setVisible(true);
  this.heart2.setVisible(true);
  } else if (window.heart == 1) {
  this.heart1.setVisible(true);
  } 
    
  this.physics.world.bounds.width = this.groundLayer.width;
  this.physics.world.bounds.height = this.groundLayer.height; 
  
  // gingerbread appear after dropped present
   if (window.task1 == 1){
    this.gingerbread1 = this.add
    .sprite(500, 50, "gingerbread")
    .setScale(0.6)
    .setScrollFactor(0)
    .setVisible(true);
   }

   if (window.task2 == 1){
    this.gingerbread2 = this.add
    .sprite(550, 50, "gingerbread")
    .setScale(0.6)
    .setScrollFactor(0)
    .setVisible(true);
   }

   if (window.task3 == 1){
    this.gingerbread3 = this.add
    .sprite(600, 50, "gingerbread")
    .setScale(0.6)
    .setScrollFactor(0)
    .setVisible(true);
   }

   // Receive position from init()
    this.player = this.physics.add.sprite(
    this.playerPos.x,
    this.playerPos.y,
    this.playerPos.dir,
  );

  //enable debug
  window.player = this.player; 

    this.player.setCollideWorldBounds(true); // do not go out of this map

  // collect item ( present)
    this.present = this.physics.add.sprite(-10,-10, 'present');
    this.present2 = this.physics.add.sprite(-10,-10, 'present2');
    this.present3 = this.physics.add.sprite(-10,-10, 'present3');


    
  // enemy
    this.deer = this.physics.add.sprite(368, 2180, 'deer').play("deer");
    this.deer2 = this.physics.add.sprite(464, 1319, 'deer').play("deer");
    this.deer3 = this.physics.add.sprite(1168, 1307, 'deer').play("deer");
    this.deer4 = this.physics.add.sprite(304, 1731, 'deer').play("deer");
    this.deer5 = this.physics.add.sprite(1007, 459, 'deer').play("deer");
    this.deer6 = this.physics.add.sprite(336, 412, 'deer').play("deer");

  // enemy tween
    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight,
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight2,
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight3,
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight4,
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight5,
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight6,
      callbackScope: this,
      loop: false,
    });

    this.physics.add.overlap(
      this.player,
      this.deer,
      this.minusHealth1,
      null,
      this
    );

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    
    // set collider
    this.roadLayer.setCollisionByExclusion(-1, true);
    this.riverLayer.setCollisionByExclusion(-1, true);
    this.housesLayer.setCollisionByExclusion(-1, true);
    this.objectLayer.setCollisionByExclusion(-1, true);
    
    this.physics.add.collider(this.player, this.roadLayer);
    this.physics.add.collider(this.player, this.riverLayer);
    this.physics.add.collider(this.player, this.housesLayer);
    this.physics.add.collider(this.player, this.objectLayer);

   // enemy overlap
    this.physics.add.overlap(this.player,this.deer,this.deerOverlap,null,this);
    this.physics.add.overlap(this.player,this.deer2,this.deerOverlap,null,this);
    this.physics.add.overlap(this.player,this.deer3,this.deerOverlap,null,this);
    this.physics.add.overlap(this.player,this.deer4,this.deerOverlap,null,this);
    this.physics.add.overlap(this.player,this.deer5,this.deerOverlap,null,this);
    this.physics.add.overlap(this.player,this.deer6,this.deerOverlap,null,this);

  // exit
 
     this.add.text(588, 40, "EXIT", {
     font: "20px Courier",
     fill: "#a90000",
     });
  

  } /////////////////// end of create //////////////////////////////
 

  moveLeftRight() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 272,
        },
        {
          x: 368, //must same with add sprite x
        },
      ],
    });
  }

  moveLeftRight2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 368,
        },
        {
          x: 464,
        },
      ],
    });
  }

  moveLeftRight3() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer3,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 1104,
        },
        {
          x: 1168,
        },
      ],
    });
  }
  
  moveLeftRight4() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer4,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 176,
        },
        {
          x: 304,
        },
      ],
    });
  }

  moveLeftRight5() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer5,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 944,
        },
        {
          x: 1007,
        },
      ],
    });
  }

  moveLeftRight6() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.deer6,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 240,
        },
        {
          x: 336,
        },
      ],
    });
  }
  
  update() {
    
    //win scene and condition
    if ( this.player.x > 560 && this.player.x < 656 &&
      this.player.y < 30 && window.task1 ==1 && window.task2 ==1 && window.task3 ==1 ) {
        this.win();
      }
    

    // hold present
    if (window.holdpresent1 == 1 ) {
      
      
      this.present.x = this.player.x+32
      this.present.y = this.player.y
      

    }
    if (window.holdpresent2 == 1 ) {
       
      this.present2.x = this.player.x+32
      this.present2.y = this.player.y

    }
    if (window.holdpresent3 == 1 ) {
       
      this.present3.x = this.player.x+32
      this.present3.y = this.player.y

    }
    
    // enter mall1
    if ( 
      this.player.x > 940 && 
      this.player.x < 970 && 
      this.player.y > 2864 && 
      this.player.y < 2865
      ) {

        this.mall1();

        }


    // enter room1
    if ( 
      this.player.x > 96 && 
      this.player.x < 133 && 
      this.player.y > 2426 && 
      this.player.y < 2456
      ) {

        this.room1();

        }

    // enter mall2 
    if ( 
      this.player.x > 825 && 
      this.player.x < 878 && 
      this.player.y > 2128 && 
      this.player.y < 2129
      ) {

        this.mall2();

        }

    
    // enter room2 
    if ( 
      this.player.x > 678 && 
      this.player.x < 704 && 
      this.player.y > 1520 && 
      this.player.y < 1521
      ) {

        this.room2();

        }

    
    // enter mall3
    if ( 
      this.player.x > 624 && 
      this.player.x < 674 && 
      this.player.y > 1136 && 
      this.player.y < 1137
      ) {

        this.mall3();

        }
    
    // enter room3
    if ( 
      this.player.x > 927 && 
      this.player.x < 960 && 
      this.player.y > 304 && 
      this.player.y < 305
      ) {

        this.room3();

        }


    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-350);
      this.player.anims.play("left", true); // walk left
    } 
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(350);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-350);
      this.player.anims.play("back", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(350);
      this.player.anims.play("front", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }
   

  } /////////////////// end of update //////////////////////////////

  // Function hit deer and deduct life
  deerOverlap(player,deer) {
    console.log( "deduct life");
    console.log( "deer overlap player");
    window.heart--;
    deer.disableBody (true,true);

    this.cameras.main.shake(200);
   
    if( window.heart == 2){
    this.heart3.setVisible(false)
    } else if ( window.heart ==1 ){
    this.heart2.setVisible(false)
    } else if ( window.heart ==0){
    this.heart1.setVisible(false)
    console.log("you are dead") 
    this.scene.start("gameover"); 
    } 
      }
    
   

  // Function to jump to mall1
  mall1(player, tile) {
    console.log("mall1 function");

    let playerPos = {};
    playerPos.x = 956;
    playerPos.y = 2896;
    playerPos.dir = "front";

    this.scene.start("mall1", { playerPos: playerPos });
  }
  

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
   
    let playerPos = {};
    playerPos.x = 109;
    playerPos.y = 2473;
    playerPos.dir = "front";

    this.scene.start("room1", { playerPos: playerPos });
   
  }

  // Function to jump to mall2
  mall2(player, tile) {
    console.log("mall2 function");

    let playerPos = {};
    playerPos.x = 847;
    playerPos.y = 2143;
    playerPos.dir = "front";

    this.scene.start("mall2", { playerPos: playerPos });
  }

  // Function to jump to room2
  room2(player, tile) {
    console.log("room2 function");

    let playerPos = {};
    playerPos.x = 687;
    playerPos.y = 1543;
    playerPos.dir = "front";

    this.scene.start("room2", { playerPos: playerPos });
  }

  // Function to jump to mall3
  mall3(player, tile) {
    console.log("mall3 function");

    let playerPos = {};
    playerPos.x = 650;
    playerPos.y = 1155;
    playerPos.dir = "front";

    this.scene.start("mall3", { playerPos: playerPos });
  }

  // Function to jump to room3
  room3(player, tile) {
    console.log("room3 function");

    let playerPos = {};
    playerPos.x = 939;
    playerPos.y = 320;
    playerPos.dir = "front";

    this.scene.start("room3", { playerPos: playerPos });
  }

  //win scene
  win() {
    console.log("player win")
    this.scene.start("win")
  }



} //////////// end of class world ////////////////////////
