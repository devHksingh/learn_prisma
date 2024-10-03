import { app } from './src/app'
import { config } from './src/config/config'

const startSever = async ()=>{

    const port = config.port

    app.listen(port,()=>{
        console.log(`Server is Listening on port: ${port}`)
    })
}

startSever()