import Phaser from "phaser";
import { Client } from "boardgame.io/client";

import MainScene from "./Scenes/MainScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
};

new Phaser.Game(config);
