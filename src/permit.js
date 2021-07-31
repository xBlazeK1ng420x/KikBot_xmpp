
let jids = [
    "skidlalo_wv0@talk.kik.com", "loggers_g35@talk.kik.com", "king",
   ],
    perm = (current) => {
    for (let i = 0; i < jids.length; i++) {
        const jid = jids[i];
        if(current == jid){
            return true;
        }
        
    }
    return false;
}

module.exports = {jids: jids, perm: perm};
