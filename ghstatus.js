const request = require('request');
request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    //console.log(body);
    console.log(body['components'][0]['name']);
    console.log(body['components'][0]['status']);
});
