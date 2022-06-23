const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '=']

let firstValue = ''
let secondValue = ''
let symbol = ''

for (let button of controlButtons) {
    button.addEventListener('click', () => {
      const { innerText: btnValue } = button
      const btnValueIsSymbol = allSymbols.includes(btnValue)

    //   Used to add negative value to initial input
      if  (firstValue && btnValueIsSymbol) {
        symbol = btnValue
      }
    //   Used to find value of first input without symbol
      else if (!symbol) firstValue += btnValue
    //   input of symbol initiates second value
      else if (symbol) secondValue += btnValue

      
      display.innerText += btnValue
    })
  }