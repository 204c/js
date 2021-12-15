class win extends Phaser.Scene {
    constructor() {
      super("win");
  
      // Put global variable here
    }
  
    preload() {
      // Preload all the assets here
      
      // Preload any images here
      this.load.image('win', 'assets/winScene.png');

  
    }
  
    create() {
      console.log("*** win scene");
  
      this.add.image(0,0,'win').setOrigin(0,0);
      console.log("This is win Scene")

      window.holdpresent1 = 0;
      window.holdpresent2 = 0;
      window.holdpresent3 = 0;
      window.heart = 3;
      window.task1 = 0;
      window.task2 = 0;
      window.task3 = 0;
  
      // Add any sound and music here
      // ( 0 = mute to 1 is loudest )
      this.winGameSnd = this.sound.add('winGameSnd').setVolume(0.8) // 10% volume
  
      this.winGameSnd.play()
      //window.music = this.music

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to preload scene");
  
          let playerPos = {};
          playerPos.x = 700;
          playerPos.y = 2895;
          playerPos.dir = "back";
          
     
          this.scene.start("preload", { playerPos: playerPos });
        },
        this
      );

      
  
      // Add any text in the main page
      // this.add.text(90, 600, "Press spacebar to continue", {
      //   font: "30px Courier",
      //   fill: "#FFFFFF",
      // });
  
      // Create all the game animations here
    }
  }