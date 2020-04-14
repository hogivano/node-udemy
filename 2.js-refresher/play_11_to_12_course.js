//asyn code and promise
//callback asyncronouse
const fetchData = callback => {
    return callback("hendriyan ogivano");
}

setTimeout(() => {
    fetchData(text => {
        console.log(text)
    })
}, 1000)

const fetchDataPromise = () => {
    //promise untuk callback done/error
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Done!!')
        }, 2000)
    })
    return promise
}

fetchDataPromise()
    .then(text => {
        console.log(text)
        return fetchDataPromise()
    })
    .then(text2 => {
        //template literals string menggunakan backticks (`) bisa memanggil variabel 
        // ke dalam string tanpa harus dipisah
        console.log(`${text2} 2`)
    })

console.log('Hi!!')
console.log('Apa kabar?')
