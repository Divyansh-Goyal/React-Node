module.exports = (app) => {
    app.get('/sign-up', async (req,res,next) =>{ 
        res.send("Hello")
    });

    app.post('/sign-in', async (req, res, next) => {
        res.send("Hello")
    });

    app.put('/')
}
