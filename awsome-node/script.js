import fs from 'fs';



fs.readFile('./hello.txt', (err, data) => { //서버를만들때 readfile 을 만드는게 밑에 sync 보다 훨씬 빠르다 이걸 이용하는걸 추천 
    console.time('funchallenge')
    if (err) {
        console.log("errrrrrrrrrrrrrrrr");
    }
    console.log('1', data.toString('utf-8'));
    console.timeEnd('funchallenge');
})



const file = fs.readFileSync('./hello.txt');

console.log('2', file.toString());


fs.appendFile('./hello.txt', ' This is what i appended!', err => {
    if (err) {
        console.log(err);
    }
})


fs.writeFile('bye.txt', 'Sad to see you go ㅠㅠ', err => {
    console.log(err)
})


// DELETE 

// fs.unlink('./bye.txt', err => {
//     if (err) { console.log(err) }
//     console.log('Inception');
// });

