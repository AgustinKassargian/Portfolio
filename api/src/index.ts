
// █─█ █▀█ █▀█ █▀█ █─█
// █▀█ █▀█ █▀▀ █▀▀ ─█─
// • • • • • • • • • •
// █▀▀ █▀█ █ █▀▄ █▀█ █─█
// █▀▀ ██▀ █ █─█ █▀█ █─█
// █── █─█ █ █▄▀ █─█ ─█

import app from './app'
import "dotenv/config";
require('./db');
app.listen(app.get("port"),()=>{
    console.log(`listen on port ${app.get("port")}`)
})