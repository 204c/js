var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 20,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, intro1, intro2, intro3, intro4, world, win, gameover, mall1, room1, mall2, room2, mall3, room3 ]
};

var game = new Phaser.Game(config);
window.holdpresent1 = 0;
window.holdpresent2 = 0;
window.holdpresent3 = 0;
window.heart = 3;
window.task1 = 0;
window.task2 = 0;
window.task3 = 0;