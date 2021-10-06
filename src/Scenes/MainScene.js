import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("logo", "src/assets/logo.png");
  }

  create() {
    this.logo = this.add.image(250, 250, "logo");
  }

  update() {
    //
  }
}

export default MainScene;
