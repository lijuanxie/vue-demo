export const storage = {
  set (key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(window.localStorage.getItem(key))
  },
  remove (key) {
    return window.localStorage.removeItem(key)
  }
}

