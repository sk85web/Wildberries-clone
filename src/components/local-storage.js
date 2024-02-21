import { storageKey } from './constants'

function loadFromLocalStorage() {
  const dataFromStorage = localStorage.getItem(storageKey)
  const parseData = !!dataFromStorage
    ? Array.from(JSON.parse(dataFromStorage))
    : []
  const storage = parseData
  return storage
}

export { loadFromLocalStorage }
