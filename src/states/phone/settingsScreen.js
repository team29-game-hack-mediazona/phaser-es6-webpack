import Phaser from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('settingsBg', './assets/images/settings-bg.png')
  }

  create () {
    this.settingsBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'settingsBg')
    centerGameObjects([this.settingsBg])
    BackButton.prevButton(this.game, this.state, 'MainPhoneScreen')
    BackButton.closeButton(this.game, this.state, 'MainPhoneScreen')
  }
}
