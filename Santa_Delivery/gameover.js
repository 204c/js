class gameover extends Phaser.Scene {
    constructor() {
      super("gameover");
  
      // Put global variable here
    }
  
    preload() {
      // Preload all the assets here
      
      // Preload any images here
      this.load.image('gameover', 'assets/gameoverScene.png');

  
    }
  
    create() {
      console.log("*** gameover scene");
  
      this.add.image(0,0,'gameover').setOrigin(0,0);
      console.log("This is gameover Scene")

      window.holdpresent1 = 0;
      window.holdpresent2 = 0;
      window.holdpresent3 = 0;
      window.heart = 3;
      window.task1 = 0;
      window.task2 = 0;
      window.task3 = 0;
  
      // Add any sound and music here
      // ( 0 = mute to 1 is loudest )
      window.bgMusic.stop()
      this.gameoverSnd = this.sound.add('gameOverSnd').setVolume(0.8) // 10% volume
  
      this.gameoverSnd.play()
      

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
  
          let playerPos = {};
          playerPos.x = 700;
          playerPos.y = 2895;
          playerPos.dir = "back";
          
     
          this.scene.start("world", { playerPos: playerPos });
          window.bgMusic.play()
        },
        this
      );

    
  
      
    }
  }