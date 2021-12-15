class intro1 extends Phaser.Scene {
    constructor() {
      super({
        key: "intro1",
      });
  
      // Put global variable here
  
    }
  
    preload() {
      this.load.image("intro1","assets/storyLine.png");
  
    }
  
    create() {
  
      console.log("*** intro1 scene");

      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'intro1').setOrigin(0, 0);

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, jump to gamePlay
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro2 scene");
          this.scene.start( "intro2");
  
        },
  
        this
      );
  
    }
  
  }