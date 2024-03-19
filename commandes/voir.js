const {zokou}=require("../framework/zokou")
const {getContentType}=require("@whiskeysockets/baileys")



zokou({nomCom:"vv",categorie:"General",reaction:"🤩"},async(dest,zk,commandeOptions)=>{

const {ms,msgRepondu,repondre}=commandeOptions;


if(!msgRepondu){return repondre("*Mentionne a view once media* .");}


if(msgRepondu.viewOnceMessageV2)
{
      if(msgRepondu.viewOnceMessageV2.message.imageMessage)
       {
         var image =await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.imageMessage)
        var texte = msgRepondu.viewOnceMessageV2.message.imageMessage.caption
    
     await zk.sendMessage(dest,{image:{url:image},caption:𝐏𝐨𝐰𝐞𝐫𝐝 𝐛𝐲 𝐐𝐮𝐞𝐞𝐧 𝐏𝐢𝐮},{quoted:ms})
      }else if(msgRepondu.viewOnceMessageV2.message.videoMessage){

    var video = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.videoMessage)
var texte =msgRepondu.viewOnceMessageV2.message.videoMessage.caption


await zk.sendMessage(dest,{video:{url:video},caption:𝐏𝐨𝐰𝐞𝐫𝐝 𝐛𝐲 𝐐𝐮𝐞𝐞𝐧 𝐏𝐢𝐮},{quoted:ms})

}
}else
{
   return repondre("this message is not on view once .")
}



})
