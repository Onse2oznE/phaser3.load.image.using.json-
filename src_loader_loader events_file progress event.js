var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'image', key: 'bear', url: 'assets/pics/alex-bear.png' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.add.image(400, 300, 'bear').setScale(2.5);

    var progress = this.add.graphics();

    this.load.on('fileprogress', function (file, value) {

        if (file.key === 'goldrunner')
        {
            progress.clear();
            progress.fillStyle(0xffffff, .9);
            progress.fillRect(120 - (value * -0), 400 , value*550,100);
        }

    });

    this.load.on('complete', function () {

        progress.destroy();

    });

    this.load.audio('goldrunner', 'assets/audio/Scyphe-Goldrunner_(Maccie_Pimp_Me Up_Remix).mp3');
}

function create ()
{
    var music = this.sound.add('goldrunner');

    music.play();
}
