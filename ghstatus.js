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
        console.log(statusMap.keys());
        for(const x in statusMap.keys()){
            console.log("here");
            if (document.getElementById(x.replace(" ", "")) != null){
                document.getElementById(x.replace(" ", "")).innerHTML = statusMap[x];
            }
        }
    });
}
CheckStatus();
