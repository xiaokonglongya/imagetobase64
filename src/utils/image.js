/**
 * 是否为图片Url
 */
export function isImageUrl(url) {
  const reg = /^(http|https):\/\/([\w.]+\/?)\S*/
  return reg.test(url)
}

/**
 * 加载网络图片
 * @param {string} url 图片地址
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

/**
 * 获取图片的base64编码
 */
export function getBase64Image(img) {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  return canvas.toDataURL()
}
/**
 * 获取文件的base64
 */
export function getBase64(file) {
  console.log(`🦖   ~ getBase64 ~ file:`, file)
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
