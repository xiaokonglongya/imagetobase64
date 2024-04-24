const { defineStore } = require('pinia')

export const useUtoolStore = defineStore('utools', () => {
  const sessionToken = ref('')
  const getSessionToken = () => {
    utools.fetchUserServerTemporaryToken().then((res) => {
      sessionToken.value = res.token
    })
  }
  return {
    sessionToken,
    getSessionToken
  }
})
