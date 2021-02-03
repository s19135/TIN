import express from 'express'
import path from 'path'
const PORT = 3000
const app = express()
const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.get('/hello', ((req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'hello.html'))
}))

app.get('/form', ((req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'form.html'))
}))

app.post('/formdata', ((req, res) => {
    let dict = []
    req.on('data', chunk => dict.push(chunk))
    req.on('end', () => {
        let data = Buffer.concat(dict).toString().split('data=')
        //console.log(data.toString());
        res.render('formdata', {
            firstname: data[1].toString().replace('&', '').toString(),
            lastname: data[2].toString().replace('&','').toString(),
            login: data[3].toString().replace('&', '').toString()
        })
    })
}))
app.get('/jsondata', ((req, res) => {
    res.render('jsondata', { isGet: true })
}))

app.post('/jsondata', ((req, res) => {
    let dict = []
    req.on('data', chunk => dict.push(chunk))
    req.on('end', () => {
        let data = Buffer.concat(dict).toString().split('data=')
        data[0] = data[1].toString().replace('&', '').toString()
        data[1] = data[2].toString().replace('&', '').toString()
        data[2] = data[3].toString().replace('&', '').toString()
        res.render('jsondata', {
            data: data,
            isGet: false
        })
    })
}))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})