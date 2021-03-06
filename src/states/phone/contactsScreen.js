import Phaser, { Button } from 'phaser'
import { centerGameObjects } from '../../utils'
import BackButton from '../../components/BackButton'

export default class extends Phaser.State {
  init () { }
  preload () {
  }

  create () {
    this.contactsBg = this.add.sprite(0, 0, 'contactsBg')

    this.ringMomButton = new Button(this.game, 550, 454, 'ringMomButton', () => {
      this.game.objects.rings.push('mom')
      this.game.points = this.game.points - 10
      this.state.start('ContactsRingingScreen')
    })
    this.ringAdvocatButton = new Button(this.game, 550, 596, 'ringAdvButton', () => {
      this.game.objects.rings.push('adv')
      this.game.points += 20
      this.state.start('ContactsRingingScreen')
    })
    this.game.add.existing(this.ringMomButton)
    this.game.add.existing(this.ringAdvocatButton)
    BackButton.addButton(this.game, this.state, 'MainPhoneScreen', 'back')
    BackButton.addButton(this.game, this.state, 'Game', 'close')
  }
}
