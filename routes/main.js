__path = process.cwd()
bla = __path

require("../routes/api")
var express = require('express');
var router = express.Router();
var fs = require('fs')

var chatGPTAPI = require('@danitech/chatgpt-api');
var { models } = chatGPTAPI;
var { chatGPT3, chatGPT35, chatGPT4 } = models;

var db = require(__path + '/database/db');
var axios = require('axios')
var mumaker = require('mumaker')
var jpeg = require('jpeg-js')
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
const { search } = require('yt-search');
var multer = require('multer')
var Ddos = require('ddos')
var TinyUrl = require('tinyurl');
var BitlyClient = require('bitly').BitlyClient
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var { igstory} = require('../modulos/scrape.js');
var { fromBuffer } = require('file-type')
var gerarnick = require('../modulos/gerarnick.js')
var { mediafireDl } = require('../modulos/mediafire.js');
var buffer = require('../modulos/upload.js')
var exec = require('child_process');
var { Maker } = require('imagemaker.js')
var { pinterestVideoV2 } = require('../lib/pinterest.js') 
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('../modulos/funcoes.js')
var trans = require('@vitalets/google-translate-api')
const {savefrom} = require('../modulos/savefrom.js')
var xfar = require('xfarr-api')
const cors = require('cors')
const { wikimedia } = require("../lib/ScrapersNS/wikimedia.js")
const { wall } = require("../lib/ScrapersNS/scraper.js")
var { color } = require('../modulos/color.js')
const { fbdown } = require("../modulos/facebook.js")
const {  facebook } = require('../modulos/downloader')
const { gis } = require('../modulos/gimage')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('../lib/youtubev2.js')
var { nerding, gpwhatsapp, apkmody, pornhubsrc, uptodown, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('../lib/scraper.js')
var { igstalk } = require('../lib/scrape.js')
var { pensadorSearch, wallpaper2 } = require('../lib/scrapperlinda.js')
var { tiktok2, FacebookMp4 } = require('../lib/teste.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo } = require('../modulos/scraper/pesquisas.js')
var { kwai } = require('../lib/kwai.js')
var { InArtificial, CorretorOpenAi } = require('../lib/scrapper-vip.js')
var { getVideosPlaylist } = require('../lib/playlist.js')
var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('../modulos/scraper/noticias.js')
var { memesDroid } = require('../modulos/scraper/aleacrapper.js')
var { ringtone } = require('../modulos/scraper/ringtone.js')
var { LetradaMusica } = require('../lib/letraMusic.js')
const { aiovideodl, umma, ytPlay_3} = require('../lib/scraper-2.js');
const { randomGrupos } = require('../lib/groups-random.js');
const { EncoderApi } = require('../lib/functions.js');
var { mercadoLivreSearch2 } = require('../lib/scrapperlinda.js')
const { ytPlayMp3 } = require('../lib/ytmp3.js');
const { igdl } = require('../lib/igdl.js') 
const cfonts = require("cfonts")
const moment = require("moment-timezone");
const { performance } = require('perf_hooks');
const os = require('os')
const { RequestsAdd } = require(bla + '/lib/totalreq.js');
const { pornhub } = require('../lib/pornhub.js');
const { xvideos } = require('../lib/xvideos.js');
const { xnxxsearch } = require('../lib/xnxx.js');
const yts = require('yt-search');
var { ytSearch } = require('../modulos/yt.js')
const path = require("path");
const { dirname } = require('path');
var __dirname = dirname(__filename);

const { ytDonlodMp3, ytDonlodMp4,} = require('../lib/youtube.js')
const { PlayAudio, PlayVideo, ytSearch2} = require('../lib/youtubefofs.js')

const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('../functions.js');





criador = 'GLEYSON-BOTS'



var key = JSON.parse(fs.readFileSync("./model/keys.json"));
const users = JSON.parse(fs.readFileSync("./model/usuarios.json"));

async function listkeys(apikey, req) {
var i4 = key.map(i => i?.apikey)?.indexOf(apikey)
if(i4 >= 0) {
key[i4].request -= 2;
fs.writeFileSync("./model/keys.json", JSON.stringify(key, null, 2));
; 
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = users.map(i => i.key).indexOf(apikey);
if(i3 < 0 && !users.map(i => i.IP).includes(IP?.split(":")[3])){
users.push({key: apikey, IP: [IP?.split(":")[3]]})
fs.writeFileSync("./model/usuarios.json", JSON.stringify(users, null, 2));
} else if(i3 >= 0 && !users[i3]?.IP.includes(IP?.split(":")[3])) {
users[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("./model/usuarios.json", JSON.stringify(users, null, 2));
}}} 






//routers das páginas
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/captcha', (req, res) => {
   res.sendFile(__path + '/views/captcha.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/404', (req, res) => {
    res.sendFile(__path + '/views/404.html')
})
router.get('/addkey', (req, res) => {
  res.sendFile(__path + '/views/add-apikey.html')
})
 router.get('/delkey', (req, res) => {
   res.sendFile(__path + '/views/del-apikey.html')
 })
 router.get('/verificar-key', (req, res) => {
   res.sendFile(__path + '/views/ver-key.html')
 })
//TERMINIO DAS ROUTERS DAS PÁGINAS

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            nomebot: 'LhannaBot',
        }
    }
    res.json(config)
})


//INÍCIO DAS ROUTERS


/*//////////DOWNLOADS\\\\\\\\\\*/
//play
router.get('/api/youtube/play', async (req, res, next) =>  {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
zan = await yts(query)
res.json({
status: true,
creator: `@gleyson-bots`,
Title: zan.all[0].title,
Thumb: zan.all[0].image,
Description : zan.all[0].description,
Duration: zan.all[0].timestamp,
Viewer: zan.all[0].views, 
Author : zan.all[0].author.name,
Channel : zan.all[0].author.name,
Link: zan.all[0].url,
})
} catch (err) {
console.log(err)
};
})

//playv2
router.get('/api/youtube/playv2', async (req, res, next) =>  {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const buscarr = await ytPlay_2(query)
res.json({
status: true,
creator: `@gleyson-bots`,
Link: buscarr.url,
resul: buscarr.resultado,
})
} catch (err) {
console.log(err)
};
})

//playv3
router.get('/api/youtube/playv3', async (req, res, next) =>  {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const caçarAudio = await PlayAudio(query)
const caçarVideo = await PlayVideo(query)
res.json({
status: true,
creator: `@gleyson-bots`,
resultadoAudio: {
  titulo: caçarAudio.titulo,
  thumb: caçarAudio.thumb,
  canal: caçarAudio.canal,
  publicado: caçarAudio.publicado,
  views: caçarAudio.views,
  link_src: caçarAudio.download,
},
resultadoVideo: {
  titulo: caçarVideo.titulo,
  thumb: caçarVideo.thumb,
  canal: caçarVideo.canal,
  publicado: caçarVideo.publicado,
  views: caçarVideo.views,
  link_src: caçarVideo.download,
}
})
} catch (err) {
console.log(err)
};
})

//platvideo
router.get('/api/youtube/playvideo', async (req, res, next) =>  {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const caçarVideo = await PlayVideo(query)
res.json({
status: true,
creator: `@gleyson-bots`,
resultado: {
  titulo: caçarVideo.titulo,
  thumb: caçarVideo.thumb,
  canal: caçarVideo.canal,
  publicado: caçarVideo.publicado,
  views: caçarVideo.views,
  link_src: caçarVideo.download,
}
})
} catch (err) {
console.log(err)
};
})

//playmix
router.get('/api/youtube/playmix', async(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
msg:'Cade o parametro query??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
await search(query) 
.then(e => {
res.json({
status:true,
criador:'@gleyson-bots',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

//playmixv2
router.get('/api/youtube/playmix2', async(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
msg:'Cade o parametro query??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
const caçarMusic = await yts(query) 
try {
res.json({
status:true,
criador:'@gleyson-bots',
resultado: caçarMusic,
})
} catch (err) {
res.json({erro:'Erro no Servidor Interno'})
}
})

//ytmp3
router.get('/api/youtube/ytmp3', async (req, res, next) =>  {
url = req.query.url
if(!url)return res.json({status:false, resultado:'Cade o parametro url?'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const buscar = await ytDonlodMp3(url)
res.json({
status: true,
creator: `@gleyson-bots`,
Title: buscar.título,
Thumb: buscar.thumb,
Viewer: buscar.visualizações, 
Link: buscar.link,
})
} catch (err) {
console.log(err)
};
})

//ytmp4
router.get('/api/youtube/ytmp4', async (req, res, next) =>  {
url = req.query.url
if(!url)return res.json({status:false, resultado:'Cade o parametro url?'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const buscar = await ytDonlodMp4(url)
res.json({
status: true,
creator: `@gleyson-bots`,
Title: buscar.título,
Thumb: buscar.thumb,
Viewer: buscar.visualizações, 
Link: buscar.link,
})
} catch (err) {
console.log(err)
};
})

//tiktok
router.get('/api/download/tiktok', async(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cadê o parâmetro: URL'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
tiktok2(url).then(result => {
res.json({
status:true,
criador:'@gleyson-bots',
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

//instamp4
router.get('/api/download/instamp4', async (req, res) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Coloque o parâmetro: url'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
instavideo = await igdl(url)
res.json({
status: true,
criador: `@gleyson-bots`,
resultado: instavideo.resultado[0].link_dl,
})
} catch (err) {
console.log(err)
};
}) 

//facebook
router.get('/api/download/facebook', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
url = req.query.url
 if (!url) return res.json({ status : false, criador : `@gleyson-bots`, mensagem : "Coloque o parametro: url"})
FacebookMp4(url).then(resultado => {
res.json({
status: true,
criador: `@gleyson-bots`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

//soundcloud
router.get('/api/download/soundcloud', async(req, res, next) => {
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
 url = req.query.url
if (!url) return res.json({ status : false, criador : `@gleyson-bots`, mensagem : "Coloque o parametro: url"})
soundl(url).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `@gleyson-bots`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})
 
 //mediafire
 router.get('/api/download/mediafire', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
url = req.query.url
if (!url) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro url?"})
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

/*\\\\\\\\\\FIM///////////*/
/*\\\\\\\\\\PUXADAS////////////*/
router.get('/api/consultas', async (req, res) => {
var type = req.query.type
if(!type)return res.json({ status:false, resultado:'Cade o parametro type??'})
query = req.query.query
if(!query)return res.json({ status:false, resultado:'Cade o parametro query??'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(__path + "./views/404.html")
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(__path + "./views/404.html")
await listkeys(apikey, req);
try {
const consultando = await fetchJson(`http://br1.bronxyshost.com.br:4048/${type}/${query}`)
/*ultando = consultando.resultado
fs.writeFileSync(`./data/consultas/${query}.txt`, 'G L E Y S O N  -  A P I S' + `\n\n${consultando.str}` + '*_USE COM SABEDORIA NÃO SEREMOS RESPONSÁVEIS POR SUAS IRRESPONSABILIDADES_*')*/
res.json({
status: true,
mensagem: 'Aguarde 1 minutos para a próxima consulta',
criador: `@gleyso-bots`,
resultado: consultando.resultado.str,
})
} catch (error) {
return res.status(404).json({ resultado: "Os Módulos Estão em Manutenção - Por Favor Aguarde um Instante\n© Copyright by gleyson-bots 2024", status: 500 });
}
})



//TERMINIO DAS ROUTERS
let xanax = require.resolve(__filename)
fs.watchFile(xanax, () => {
fs.unwatchFile(xanax)
console.log(`ATUALIZANDO A GLEYSON APIS`)
process.exit()
})

module.exports = router
