const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'test',
    desc: 'To test the bot',
    Categorie: 'General',
    reaction: '🐐', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    return repondre('*𝐏𝐢𝐮-𝐌𝐝 𝐢𝐬 𝐀𝐥𝐢𝐯𝐞!!!!!!!*\n ```' + powered by + '``` *𝐏𝐢𝐮 𝐐𝐮𝐞𝐞𝐧*```') 
  }
)
 
