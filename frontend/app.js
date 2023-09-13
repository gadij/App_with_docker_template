fetch('http://localhost:3001/')
.then((response) => {
    console.log(response)
    return response.text()
})
.then((data) => {
    const output = `data from server: ${data}`
    const ele = document.getElementById('root')
    ele.innerHTML = output
})