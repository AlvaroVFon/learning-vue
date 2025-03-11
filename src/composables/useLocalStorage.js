function useLocalStorage() {
  function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  function remove(key) {
    localStorage.removeItem(key)
  }

  return { set, get, remove }
}

export { useLocalStorage }
