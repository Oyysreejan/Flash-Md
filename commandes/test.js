"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello This is  *PIU-MD* \n\n ' + "The Following is *PIU-MD Repo.*";
    let d = ' Undifferentiated';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/0a91cb33f9944d1fa9352.png';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *PIU-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *OYY PIU*'
      let varmess=z+d
      var img='https://telegra.ph/file/0a91cb33f9944d1fa9352.png'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:PIU QUEEN});
}  */ 
