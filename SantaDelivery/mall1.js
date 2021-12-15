class mall1 extends Phaser.Scene {

    constructor() {
        super('mall1');
        window.holdpresent = 0
        
        // Put global variable here
    }


    init(data) {
       this.playerPos = data.playerPos;
      }

    preload() {

      // Step 1, load JSON
      this.load.tilemapTiledJSON("mall1","assets/shoppingMall_1.json");

      //Step 2 : Preload any images here, nickname, filename
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
        console.log('*** mall1 scene');
        console.log("life: ", window.heart);



    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:"mall1"});
    
    // collect sound
    this.collectItemSnd=this.sound.add("collectItemSnd")

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
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


    let tilesArray = [ variousTiles, variousTiles2, variousTiles3, variousTiles4,
                       variousTiles5, variousTiles6, winterTiles, winterTiles2,
                       winterTiles3, winterTiles4, winterTiles5]

    // Step 5  Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);

    this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);

    this.objectLayer_2 = map.createLayer("objectLayer_2", tilesArray, 0, 0);

    this.doorLayer = map.createLayer("doorLayer", tilesArray, 0, 0);

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


    this.player = this.physics.add.sprite(636, 142, 'front');
   
    //enable debug
    window.player = this.player; 

    this.player.setCollideWorldBounds(true); // do not go out of this map

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    
    // set collider
    this.objectLayer.setCollisionByExclusion(-1, true)
    this.objectLayer_2.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player, this.objectLayer);
    this.physics.add.collider(this.player, this.objectLayer_2);

    // collect item
    this.present = this.physics.add.sprite(231,311, 'present');

    // collect action
    this.physics.add.overlap( this.player,this.present,this.holditem, null, this );

    

    } /////////////////////////////end of create/////////////////////////////////////////

    update() {

    // hold present
    if (window.holdpresent1 == 1 ) {
       
        this.present.x = this.player.x+50
        this.present.y = this.player.y
       

      }


    // check for mall1 exit
    if ( 
        this.player.x > 609 && 
        this.player.x < 670 && 
        this.player.y > 101 && 
        this.player.y < 118
        ) {
  
          this.world();
  
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

    }

    // Function to jump to world
    world(player, tile) {
    console.log("world function");
     
     let playerPos = {};
     playerPos.x = 954;
     playerPos.y = 2890;
     playerPos.dir = "front";
     

    this.scene.start("world", { playerPos: playerPos });
     }


    // Function to hold present
    holditem(player){
    console.log("hold item")

    window.holdpresent1 = 1
    this.collectItemSnd.play();

     }


    

} //////////// end of class world ////////////////////////
