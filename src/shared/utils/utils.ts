export function formatDate(dateTimeString = '') {
    const date = new Date(dateTimeString)
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }
    return date.toLocaleDateString(undefined, options)
  }

  export function formatNumber(number: number) {
    // Convert number to string and split into array of characters
    const numberString = String(number)
    const chars = numberString.split('')
  
    // Insert space every three characters from the end
    let formattedNumber = ''
    let counter = 0
    for (let i = chars.length - 1; i >= 0; i--) {
      formattedNumber = chars[i] + formattedNumber
      counter++
      if (counter === 3 && i !== 0) {
        formattedNumber = ' ' + formattedNumber
        counter = 0
      }
    }
  
    return formattedNumber
  }