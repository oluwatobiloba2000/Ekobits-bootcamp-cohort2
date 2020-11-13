const https = require('https');
const fs = require('fs');
// get the search keywords from the command line
// fetch the data from the api
// log the result to the console
// if error, log the error

(function searchForJokes(){
    const searchTerm = process.argv[2];
    https.get(`https://icanhazdadjoke.com/search?limit=5&term=${searchTerm}`, {
        headers : {contentType: 'text/plain'}
    }, (res)=>{
        // res.setEncoding('utf-8');
        console.log(res.headers)
        let data;

        res.on('data', dataRecieved => {
            data += dataRecieved;
        })

        res.on('end', ()=>{
            // data = JSON.parse(data);
            console.log(data);
            fs.writeFile('jokes.txt', data, ()=>{
                console.log('Joke saved success');
            })
        })

        res.on('error', ()=>{
            console.log('There is an error');
        })
    })

})()