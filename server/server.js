const express= require('express')
const cors=require("cors")
const bodyparser=require("body-parser")
const SpotifyWebApi=require('spotify-web-api-node')
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.post("/refresh",(req, res)=>{
    const refreshToken = req.body.refreshToken
    const spotifyApi= new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId:"344e2726b64c4af1a80cf9657157f6d4",
        clientSecret:"f81f909b5b3744029232ce0f073f4c32",
        refreshToken
    });
    spotifyApi.refreshAccessToken().then(
        (data)=>{
            res.json({
                accessToken:data.body.accessToken,
                expiresIn:data.body.expiresIn,
            })
        }).catch(()=>{
         res.sendStatus(400)
        })
})
app.post("/login", (req, res)=>{
    const code = req.body.code
    const spotifyApi= new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId:"344e2726b64c4af1a80cf9657157f6d4",
        clientSecret:"f81f909b5b3744029232ce0f073f4c32",
    })

    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken:data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn:data.body.expires_in,
        })
    }).catch((error)=>{
        console.log(error)
        res.sendStatus(400)
    })
})
const PORT = 5000
app.listen(PORT, () => {
    console.log("Server Running at Port = 5000");
  });