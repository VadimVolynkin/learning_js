console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')



// setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
// }, 2000)


// }, 2000)


const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        
        const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }   
    resolve(backendData)
    }, 2000)
})


p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        data.modified = true
        resolve(data)
    }, 2000)
    }).then((clientData) => {
        console.log('Data received', clientData)
        clientData.fromPromise = true
        return clientData
    }).then(data => {
      console.log('Modified Data:', data)
    }).catch(err => console.error('Error', err))
    .finally(() => console.log('Finally'))
})



const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))
sleep(5000).then(() => console.log('After 5 seconds'))



Promise.all([sleep(2000), sleep(3000), sleep(4000)]).then(() => console.log('All promise'))

Promise.race([sleep(2000), sleep(3000), sleep(4000)]).then(() => console.log('Race promise'))



