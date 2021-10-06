import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.spritesheet(
      "player1",
      "src/assets/characters/Dr-Frankenstien-down.png",
      {
        frameWidth: 72,
        frameHeight: 96,
      }
    );
  }

  create() {
    this.createPlayer();
  }

  update() {
    //
  }

  createPlayer() {
    this.player = this.physics.add.sprite(250, 250, "player1");

    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player1"),
      frameRate: 7,
      repeat: -1,
    });

    this.player.anims.play("player_anim");
  }
}

export default MainScene;
