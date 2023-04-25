import {  
  forestSound,
  rainSound,
  coffeeSound,
  fireSound,
  kitchenTimer
} from './elements.js'

export default function Playsound() {
  forestSound.loop = true
  rainSound.loop = true
  coffeeSound.loop = true
  fireSound.loop = true
  forestSound.volumeSlider = 0.5
  rainSound.volumeSlider = 0.5
  coffeeSound.volumeSlider = 0.5
  fireSound.volumeSlider = 0.5

  function forestPlay() {
    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()
  }
  function rainPlay() {
    rainSound.play()
    forestSound.pause()
    coffeeSound.pause()
    fireSound.pause()
  }
  function coffeePlay() {
    coffeeSound.play()
    forestSound.pause()
    rainSound.pause()
    fireSound.pause()
  }
  function firePlay() {
    fireSound.play()
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    forestPlay,
    rainPlay,
    coffeePlay,
    firePlay,
    timeEnd
  }
}
