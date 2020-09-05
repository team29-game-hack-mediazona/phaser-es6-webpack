import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
    this.load.image('laptopBg', './assets/images/room-bg.png')
    this.load.image('laptopBrowser', './assets/images/laptop-vk-logout.png')
    this.load.image('logout', './assets/images/logout-button.png')
  }

  create () {
    this.laptopBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopBg')
    this.laptopBrowser = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'laptopBrowser')
    centerGameObjects([this.laptopBg, this.laptopBrowser])

    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'close')
  }
}
