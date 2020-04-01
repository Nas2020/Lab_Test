const os = require('os');
const usrInfo = new os.userInfo();


module.exports = {
    systemInfo: function(){
        console.log(`Operating System Info: CPU Architecture: ${os.arch()} - Host Name: ${os.hostname()} - OS Type: ${os.type()}`);
    },
    userInfo : function(){
        console.log(`User Info: User Name: ${usrInfo.username} - Home dir: ${usrInfo.homedir}`);
    }
}