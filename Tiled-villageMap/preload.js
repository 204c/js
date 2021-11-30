class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {
    // Preload all the assets here
    
    // Preload any images here

    // intro
    this.load.image('intro', 'assets/introScene.png');

    // collect item ( present )
    this.load.image('present', 'assets/present.png');

    // main character ( santa )
    this.load.atlas('front', 'assets/santa-front.png', 'assets/santa-front.json');
    this.load.atlas('back', 'assets/santa-back.png', 'assets/santa-back.json');
    this.load.atlas('left', 'assets/santa-left.png', 'assets/santa-left.json');
    this.load.atlas('right', 'assets/santa-right.png', 'assets/santa-right.json');
     
    // enemy ( deer )
    this.load.atlas('deer', 'assets/deer.png', 'assets/deer.json')

  }

  create() {
    console.log("*** preload scene");

    this.add.image(0,0,'intro').setOrigin(0,0);
    console.log("This is introScene")

    // main character ( santa )
    this.anims.create({
      key: 'front',
      frames: [
        { key: 'front', frame: 'santa-front-02'},
        { key: 'front', frame: 'santa-front-04'},
        { key: 'front', frame: 'santa-front-01'},
        { key: 'front', frame: 'santa-front-03'},
      ],

      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'back',
      frames: [
        { key: 'back', frame: 'santa-back-06'},
        { key: 'back', frame: 'santa-back-08'},
        { key: 'back', frame: 'santa-back-05'},
        { key: 'back', frame: 'santa-back-07'},
      ],
      
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'left',
      frames: [
        { key: 'left', frame: 'santa-left-02'},
        { key: 'left', frame: 'santa-left-03'},
        { key: 'left', frame: 'santa-left-04'},
        { key: 'left', frame: 'santa-left-01'},
      
      ],
      
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: [
        { key: 'right', frame: 'santa-right-02'},
        { key: 'right', frame: 'santa-right-03'},
        { key: 'right', frame: 'santa-right-04'},
        { key: 'right', frame: 'santa-right-01'},
       
      ],
      
      frameRate: 10,
      repeat: -1
    })
  
  
  
    // enemy ( deer )

    this.anims.create({
      key: 'deer',
      frames: [
        { key: 'deer', frame: 'deer-02'},
        { key: 'deer', frame: 'deer-03'},
        { key: 'deer', frame: 'deer-01'},
       
       
      ],

      frameRate: 10,
      repeat: -1
    })

      

    

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

    //this.music.play()
    //window.music = this.music

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
