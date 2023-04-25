import {
  body,
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinum,
  buttonCoffee,
  buttonForest,
  buttonFire,
  buttonRain,
  forestBg,
  forestSymbol,
  rainBg,
  rainSymbol,
  coffeeBg,
  coffeeSymbol,
  fireBg,
  fireSymbol,
  buttonDark,
  buttonLight,
  forestRect,
  rainRect,
  coffeeRect,
  fireRect,
  forestSliderWeb,
  fireSliderWeb,
  rainSliderWeb,
  coffeeSliderWeb,
  divCoffee,
  divFire,
  divForest,
  divRain,
  forestSound,
  fireSound,
  coffeeSound,
  rainSound,
  forestVolume,
  rainVolume,
  fireVolume,
  coffeeVolume
} from './elements.js'

export default function ({ sound, controls, timer }) {
  if (buttonDark.classList.contains('hide')) {
    console.log('comecou')
    controls.buttonDarkMode()
  }


  buttonForest.addEventListener('click', () => {
    sound.forestPlay()
    if (buttonLight.classList.contains('hide')) {
      console.log('ta dark')
      controls.soundActiveDark(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect,
        forestSliderWeb,
        divForest
      )

      controls.soundOffDark(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect,
        coffeeSliderWeb,
        divCoffee
      )
      controls.soundOffDark(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect,
        fireSliderWeb,
        divFire
      )
      controls.soundOffDark(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect,
        rainSliderWeb,
        divRain
      )
    } else {
      controls.soundActive(buttonForest, forestBg, forestSymbol, forestRect)
      forestSliderWeb.innerHTML =
        '.divForest .volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}'

      controls.soundOff(buttonCoffee, coffeeBg, coffeeSymbol, coffeeRect)

      coffeeSliderWeb.innerHTML =
        '.divCoffee .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'

      controls.soundOff(buttonFire, fireBg, fireSymbol, fireRect)

      fireSliderWeb.innerHTML =
        '.divFire .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect
      )
      rainSliderWeb.innerHTML =
        '.divRain .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
    }
  })

  buttonRain.addEventListener('click', () => {
    sound.rainPlay()
    if (buttonLight.classList.contains('hide')) {
      console.log('ta dark')
      controls.soundActiveDark(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect,
        rainSliderWeb,
        divRain
      )
      controls.soundOffDark(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect,
        coffeeSliderWeb,
        divCoffee
      )
      controls.soundOffDark(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect,
        forestSliderWeb,
        divForest
      )
      controls.soundOffDark(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect,
        fireSliderWeb,
        divFire
      )
    } else {
      controls.soundActive(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect
      )
      rainSliderWeb.innerHTML = ".divRain .volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}"

      controls.soundOff(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect
      )
      coffeeSliderWeb.innerHTML =
      '.divCoffee .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect
      )
      forestSliderWeb.innerHTML =
      '.divForest .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect
      )
      fireSliderWeb.innerHTML =
      '.divFire .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
    }
  })

  buttonCoffee.addEventListener('click', () => {
    sound.coffeePlay()
    if (buttonLight.classList.contains('hide')) {
      console.log('ta dark')
      controls.soundActiveDark(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect
      )
      controls.soundOffDark(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect,
        forestSliderWeb,
        divForest
      )
      controls.soundOffDark(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect,
        fireSliderWeb,
        divFire
      )
      controls.soundOffDark(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect,
        rainSliderWeb,
        divRain
      )
    } else {
      controls.soundActive(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect
      )
      coffeeSliderWeb.innerHTML = ".divCoffee .volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}"
      controls.soundOff(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect
      )
      forestSliderWeb.innerHTML =
      '.divForest .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect
      )
      fireSliderWeb.innerHTML =
      '.divFire .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect
      )
      rainSliderWeb.innerHTML =
      '.divRain .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
    }
  })

  buttonFire.addEventListener('click', () => {
    sound.firePlay()
    console.log('button', buttonFire)
    console.log('bg', fireBg)
    console.log('rectcircle', fireRect)
    console.log('sliderweb', fireSliderWeb)

    if (buttonLight.classList.contains('hide')) {
      console.log('ta dark')
      controls.soundActiveDark(buttonFire, fireBg, fireSymbol, fireRect)
      controls.soundOffDark(buttonCoffee, coffeeBg, coffeeSymbol, coffeeRect)
      controls.soundOffDark(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect,
        forestSliderWeb,
        divForest
      )
      controls.soundOffDark(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect,
        rainSliderWeb,
        divRain
      )
    } else {
      controls.soundActive(
        buttonFire,
        fireBg,
        fireSymbol,
        fireRect,
        fireSliderWeb,
        divFire
      )
      fireSliderWeb.innerHTML = ".divFire .volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}"
      controls.soundOff(
        buttonCoffee,
        coffeeBg,
        coffeeSymbol,
        coffeeRect
      )
      coffeeSliderWeb.innerHTML =
      '.divCoffee .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonForest,
        forestBg,
        forestSymbol,
        forestRect
      )
      forestSliderWeb.innerHTML =
      '.divForest .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
      controls.soundOff(
        buttonRain,
        rainBg,
        rainSymbol,
        rainRect
      )
      rainSliderWeb.innerHTML =
      '.divRain .volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
    }
  })

  buttonPlay.addEventListener('click', function () {
    timer.countdown()
  })

  buttonStop.addEventListener('click', () => {
    timer.reset()
  })

  buttonMore.addEventListener('click', () => {
    timer.moreFive()
  })

  buttonMinum.addEventListener('click', () => {
    timer.minumFive()
  })

  buttonLight.addEventListener('click', () => {
    controls.buttonLightMode()
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    if (
      body.classList.contains('ativou') &&
      buttonLight.classList.contains('hide')
    ) {
      controls.ativadoDark()
    }
  })

  buttonDark.addEventListener('click', () => {
    controls.buttonDarkMode()
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    if (
      body.classList.contains('ativou') &&
      !buttonLight.classList.contains('hide')
    ) {
      controls.ativadoLight()
    }
  })

  forestVolume.addEventListener('input', () => {
    forestSound.volume = forestVolume.value / 100
  })
  rainVolume.addEventListener('input', () => {
    rainSound.volume = rainVolume.value / 100
  })
  fireVolume.addEventListener('input', () => {
    fireSound.volume = fireVolume.value / 100
  })
  coffeeVolume.addEventListener('input', () => {
    coffeeSound.volume = coffeeVolume.value / 100
  })

}
