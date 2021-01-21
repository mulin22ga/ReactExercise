export function * load () {
  try {
    const result = yield window
      .fetch(
        'http://localhost:3000/items',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(Response => Response.json())
    return result
  } catch (e) {
    console.error(e)
    throw e
  }
}

export function * save (data) {
  try {
    yield window
      .fetch(
        'http://localhost:3000/items/save',
        {
          method: 'PUT',
          body: JSON.stringify({ data }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => console.log('Success:', response))
  } catch (e) {
    console.error(e)
    throw e
  }
}
