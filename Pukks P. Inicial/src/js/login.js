fetch('../php/login.php')
  .then(response => {
    console.log(response)
    return response.json
  })
  .catch(error => console.log(error))