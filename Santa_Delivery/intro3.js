class intro3 extends Phaser.Scene {
    constructor() {
      super({
        key: "intro3",
      });
  
      // Put global variable here
  
    }
  
    preload() {
      this.load.image("intro3","assets/rules1.png");
  
    }
  
    create() {
  
      console.log("*** intro3 scene");

      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'intro3').setOrigin(0, 0);

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, jump to gamePlay
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro4 scene");
          this.scene.start( "intro4");
  
        },
  
        this
      );
  
    }
  
  }