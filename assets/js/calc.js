const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children

let firstValue = ''
let secondValue = ''
let symbol = ''

for (let button of controlButtons) {
    button.addEventListener('click', () => {
      const { innerText: btnValue } = button
      display.innerText += btnValue
  
    })
  }