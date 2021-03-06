const axios = require('axios')

const ytdl = (mode, link) => new Promise((resolve, reject) => {
    if (typeof link === 'undefined') { reject('Insira o link do YouTube corretamente.') }
    switch(mode) {
        case 'mp3':
            var url = `https://alfians-api.herokuapp.com/api/yta?url=${link}`
            axios.get(url)
                .then(res => {
                    const { title: judul, filesize: size, result: hasil } = res.data
                    resolve({ judul, size, hasil })
                })
        case 'mp4':
            var url = `https://alfians-api.herokuapp.com/api/ytv?url=${link}`
            axios.get(url)
                .then(res => {
                    const { title: judul, filesize: size, result: hasil } = res.data
                    resolve({ título, tamanho, resultado })
                })
        default:
            break
    }
})

module.exports = ytdl
