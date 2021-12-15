class intro2 extends Phaser.Scene {
    constructor() {
      super("intro2");
  
      // Put global variable here
    }
  
    preload() {
      // Preload all the assets here
      
      // Preload any images here
      this.load.image('intro2', 'assets/gamePlay.png');

  
    }
  
    create() {
      console.log("*** intro2 scene");
  
      this.add.image(0,0,'intro2').setOrigin(0,0);
      console.log("This is gamePlay Scene")


      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro3 scene");
  
          let playerPos = {};
          playerPos.x = 700;
          playerPos.y = 2895;
          playerPos.dir = "back";
          
     
          this.scene.start("intro3", { playerPos: playerPos });
         
        },
        this
      );
      
    }
  }