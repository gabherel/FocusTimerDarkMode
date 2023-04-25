import {
  body,
  span,
  buttonsWrapper,
  allBg,
  allSymbol,
  allRect,
  slider,
  styles
} from './elements.js'

export default function () {
  function buttonLightMode() {
    body.style.backgroundColor = '#121214'
    span.forEach(element => {
      element.style.color = '#FFFFFF'
    })
    buttonsWrapper.forEach(element => {
      element.style.fill = '#C4C4CC'
    })
    allBg.forEach(element => {
      element.style.fill = '#29292E'
    })
    allSymbol.forEach(element => {
      element.style.fill = '#C4C4CC'
    })
    allRect.forEach(element => {
      element.style.fill = '#FFFFFF'
    })
    styles.forEach(element => {
      element.innerHTML =
        '.volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}'
    })

    console.log('aqui tem', slider)
  }

  function buttonDarkMode() {
    body.style.backgroundColor = '#FFFFFF'
    span.forEach(element => {
      element.style.color = '#323238'
    })
    buttonsWrapper.forEach(element => {
      element.style.fill = '#323238'
    })
    allBg.forEach(element => {
      element.style.fill = '#E1E1E6'
    })
    allSymbol.forEach(element => {
      element.style.fill = '#323238'
    })
    allRect.forEach(element => {
      element.style.fill = '#323238'
    })
    styles.forEach(element => {
      element.innerHTML =
        '.volumeSlider::-webkit-slider-thumb {background-color: #323238;}'
    })
  }

  function soundActiveDark(button, bg, symbol, rectCircle) {
    button.classList.add('ativou')
    bg.style.fill = '#0A3442'
    symbol.style.fill = '#FFFFFF'
    rectCircle.style.fill = '#FFFFFF'
  }

  function soundOffDark(button, bg, symbol, rectCircle) {
    button.classList.remove('ativou')
    bg.style.fill = '#29292E'
    symbol.style.fill = '#C4C4CC'
    rectCircle.style.fill = '#FFFFFF'
  }

  function ativadoDark() {
    allBg.style.fill = '#0A3442'
    allSymbol.forEach(element => {
      element.style.fill = '#FFFFFF'
    })
    allRect.forEach(element => {
      element.style.fill = '#FFFFFF'
    })
    styles.forEach(element => {
      element.innerHTML =
        '.volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}'
    })
  }

  function ativadoLight() {
    allBg.style.fill = '#02799D'
    allSymbol.forEach(element => {
      element.style.fill = '#FFFFFF'
    })
    allRect.forEach(element => {
      element.style.fill = '#FFFFFF'
    })
    styles.forEach(element => {
      element.innerHTML = '.volumeSlider::-webkit-slider-thumb {background-color: #FFFFFF;}'
    })
  }

  function soundActive(button, bg, symbol, rectCircle) {
    button.classList.add('ativou')
    bg.style.fill = '#02799D'
    symbol.style.fill = '#FFFFFF'

    rectCircle.style.fill = '#FFFFFF'
  }

  function soundOff(button, bg, symbol, rectCircle) {
    button.classList.remove('ativou')
    bg.style.fill = '#E1E1E6'
    symbol.style.fill = '#323238'

    rectCircle.style.fill = '#323238'

  }

  return {
    soundActive,
    soundOff,
    soundActiveDark,
    soundOffDark,
    buttonLightMode,
    buttonDarkMode,
    ativadoDark,
    ativadoLight
  }
}
