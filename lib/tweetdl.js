require('dotenv').config()
const axios = require('axios')


const tweetdl = (link) => {
    return new Promise((resolve, reject) => {
        if (typeof link === 'undefined') { rejeitar('por favor entre no link.') }
        var url = `https://mhankbarbar.herokuapp.com/api/twit?url=${link}&apiKey=${process.env.MANGBARBAR_KEY}`
        axios.get(url)
            .then(res => {
                const { filesize: size, result: hasil } = res.data
                resolve({ size, hasil })
             })
    })
}

module.exports = tweetdl
