var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    var progress = this.add.graphics();

    this.load.on('progress', function (value) {

        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(20, 270, 720 * value, 60);

    });

    this.load.on('complete', function () {

        progress.destroy();

    });

    //  Now let's load a huge stack of files!

    this.load.setPath('assets/sprites/');

    this.load.image('128x128');
    this.load.image('128x128-v2');
    this.load.image('a');
    this.load.image('advanced_wars_land');
    this.load.image('advanced_wars_tank');
    this.load.image('amiga-cursor');
    this.load.image('aqua_ball');
    this.load.image('arrow');
    this.load.image('arrows');
    this.load.image('asteroids_ship');
}

function create ()
{
    var keys = this.textures.getTextureKeys();

    for (var i = 0; i < keys.length; i++)
    {
        var x = Phaser.Math.Between(50,700);
        var y = Phaser.Math.Between(50, 500);

        this.add.image(x, y, keys[i]);
    }
}
