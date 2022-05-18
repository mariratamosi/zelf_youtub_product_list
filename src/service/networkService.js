export const fetchBuildingProducListData = (filename) => {
  return new Promise((resolve, reject) => {
    fetch(filename, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        resolve(myJson)
      })
      .catch((error) => {
        reject(error)
      })
  })
}