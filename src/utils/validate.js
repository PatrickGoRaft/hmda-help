const _hasContent = inputValue => {
  return inputValue.length > 0
}

const _isCorrectLength = (number, inputValue) => {
  return inputValue.length === number
}

const _regexMatch = (pattern, inputValue) => {
  return inputValue.search(pattern)
}

const validateInput = (validation, inputValue) => {
  let message = null

  const validationLength = validation.length

  for (let i = 0; i < validationLength; i++) {
    if (validation[i].type === 'required') {
      if (!_hasContent(inputValue)) {
        message = 'Required field.'
        break
      }
    }

    if (validation[i].type === 'length') {
      if (!_isCorrectLength(validation[i].value, inputValue)) {
        message = `Must have ${validation[i].value} characters.`
        break
      }
    }

    if (validation[i].type === 'regex') {
      if (_regexMatch(validation[i].value, inputValue) === -1) {
        message = `Must match the ${validation[i].value} pattern.`
        break
      }
    }
  }

  return message
}

const validateAll = (inputs, state) => {
  let error = false
  const inputLength = inputs.length

  for (let i = 0; i < inputLength; i++) {
    if (inputs[i].validation) console.log(inputs[i], state[inputs[i].id])
  }
}

export { validateInput, validateAll }
