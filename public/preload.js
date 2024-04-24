function saveBase64ImageAsync(filePath, base64) {
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '')
  const dataBuffer = Buffer.from(base64Data, 'base64')
  return new Promise((resolve, reject) => {
    require('fs').writeFile(filePath, dataBuffer, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

window.services = {
  saveBase64ImageAsync: (outputPath, base64) => {
    return saveBase64ImageAsync(outputPath, base64)
  }
}
