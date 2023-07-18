module.exports = {'CheckStatus':CheckStatus};

function CheckStatus(){
    const statusMap = new Map();
    const request = require('request');
    request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
        //console.log(body);
        for(const x in body['components']){
            //console.log(body['components'][x]['name']);
            //console.log(body['components'][x]['status']);
            const name = body['components'][x]['name'];
            const status = body['components'][x]['status'];
            statusMap.set(name, status);
        }
        console.log(statusMap);
        for(const x of statusMap.keys()){
            if (document.getElementById(x.replace(" ", "")) != null){
                document.getElementById(x.replace(" ", "")).innerHTML = statusMap.get(x);
            }
        }
    });
    const d = new Date();
    const today = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear()
    const currTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    console.log(today + " " + currTime);
    document.getElementById('time').innerHTML = "Last Refresh: " + today + " " + currTime;
}
CheckStatus();
