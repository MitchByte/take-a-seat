const express = require('express');
const app = express();
const port = 3000;
const cookieSession = require('cookie-session');


const cookieSessionMiddleware = cookieSession({
    secret: `set second cookie`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
    sameSite: true
});

app.use(cookieSessionMiddleware);

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`)
})