const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "public";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('India/Kolkata');

// Create a date and time in EAT
const temps = moment().format('00:00:00');
const date = moment().format('00/00/0000');

  let infoMsg =  `
╭────✧𝐏𝐈𝐔-𝐌𝐃✧────◆
│🌠 *Préfix* : ${s.?}
│🌠 *User* : ${s.queen_Piu}
│🌠 *Mode* : ${public}
│🌠 *Commands* : ${cm.length} 
│🌠 *Date* : ${10}
│🌠 *Time* : ${12:00Am} 
│🌠 *Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│🌠 *Platform* : ${os.platform()}
│🌠 *Developer* : QUEEN PIU
│🌠 *Version* : 𝐯0.0.00
╰─────✧The-GOAT✧─────◆ \n\n`;

  let menuMsg=`  

*𝐏𝐈𝐔-𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 :*
◇                             ◇
`;

    for (const cat in coms) {
        menuMsg += `*╭────☢️* *${cat}* *☢️⊷*`;
        for (const cmd of coms[cat]) {
            menuMsg += `
 *|☬* ${cmd}`;
        }
        menuMsg += `
*╰═════════════⊷* \n`
    }

    menuMsg += `
◇            ◇
*————— ★ —————*

  *𝐐𝐮𝐞𝐞𝐧 𝐏𝐢𝐮*                                         
*╰═════════════⊷*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝐏𝐢𝐮-𝐌𝐝*, développé par 𝐏𝐢𝐮" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*𝐐𝐮𝐞𝐞𝐧 𝐏𝐢𝐮*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
