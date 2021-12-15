class intro4 extends Phaser.Scene {
    constructor() {
      super({
        key: "intro4",
      });
  
      // Put global variable here
  
    }
  
    preload() {
      this.load.image("intro4","assets/rules2.png");
  
    }
  
    create() {
  
      console.log("*** intro4 scene");

      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'intro4').setOrigin(0, 0);

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, jump to gamePlay
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
          let playerPos = {};
          playerPos.x = 700;
          playerPos.y = 2895;
          playerPos.dir = "back";
          this.scene.start( "world",{playerPos : playerPos});
  
        },
  
        this
      );
  
    }
  
  }