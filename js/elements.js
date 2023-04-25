const body = document.querySelector('body')
const span = document.querySelectorAll('span')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonsWrapper = document.querySelectorAll('.buttons path')
const buttonPlay = document.querySelector('.buttonPlay')
const buttonStop = document.querySelector('.buttonStop')
const buttonMore = document.querySelector('.buttonMore')
const buttonMinum = document.querySelector('.buttonMinum')

const buttonForest = document.querySelector('.buttonForest')
const buttonRain = document.querySelector('.buttonRain')
const buttonCoffee = document.querySelector('.buttonCoffee')
const buttonFire = document.querySelector('.buttonFire')
const buttonLight = document.querySelector('.lightMode')
const buttonDark = document.querySelector('.darkMode')

const allBg = document.querySelectorAll('.backgroundFill')
const allSymbol = document.querySelectorAll('.symbolFill')
const allRect = document.querySelectorAll('.volumes svg rect')
const slider = document.querySelectorAll('.volumeSlider')

const forestBg = document.querySelector('.buttonForest .backgroundFill')
const forestRect = document.querySelector('.buttonForest .volumes svg rect')
const forestSymbol = document.querySelector('.buttonForest .symbolFill')
const forestSliderWeb = document.querySelector('.buttonForest .test')
const divForest = document.querySelector('.divForest')

const rainBg = document.querySelector('.buttonRain .backgroundFill')
const rainRect = document.querySelector('.buttonRain .volumes svg rect')
const rainSymbol = document.querySelector('.buttonRain .symbolFill')
const rainSliderWeb = document.querySelector('.buttonRain .test')
const divRain = document.querySelector('.divRain')

const coffeeBg = document.querySelector('.buttonCoffee .backgroundFill')
const coffeeRect = document.querySelector('.buttonCoffee .volumes svg rect')
const coffeeSymbol = document.querySelector('.buttonCoffee .symbolFill')
const coffeeSliderWeb = document.querySelector('.buttonCoffee .test')
const divCoffee = document.querySelector('.divCoffee')

const fireBg = document.querySelector('.buttonFire .backgroundFill')
const fireRect = document.querySelector('.buttonFire .volumes svg rect')
const fireSymbol = document.querySelector('.buttonFire .symbolFill')
const fireSliderWeb = document.querySelector('.buttonFire .test')
const divFire = document.querySelector('.divFire')

const styles = document.querySelectorAll('.test')

const rainVolume = document.querySelector('.buttonRain .divRain .volumeSlider')
const forestVolume = document.querySelector('.buttonForest .divForest .volumeSlider')
const coffeeVolume = document.querySelector('.buttonCoffee .divCoffee .volumeSlider')
const fireVolume = document.querySelector('.buttonFire .divFire .volumeSlider')

const forestSound = new Audio('./audio/Floresta.wav')
const rainSound = new Audio('./audio/Chuva.wav')
const coffeeSound = new Audio('./audio/Cafeteria.wav')
const fireSound = new Audio('./audio/Lareira.wav')
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinum,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
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
  body,
  span,
  buttonsWrapper,
  forestRect,
  rainRect,
  coffeeRect,
  fireRect,
  allBg,
  allSymbol,
  allRect,
  slider,
  styles,
  forestSliderWeb,
  fireSliderWeb,
  rainSliderWeb,
  coffeeSliderWeb,
  divCoffee,
  divFire,
  divForest,
  divRain,
  forestSound,
  rainSound,
  coffeeSound,
  fireSound,
  kitchenTimer,
  forestVolume,
  rainVolume,
  fireVolume,
  coffeeVolume
}
