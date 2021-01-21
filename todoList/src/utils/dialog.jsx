export function * showConfirmDialog (message) {
  return yield new Promise((resolve) => {
    const result = window.confirm(message)
    resolve(result)
  }).catch(e => console.error(e))
}

export function * showAlertDialog (message) {
  window.alert(message)
}
