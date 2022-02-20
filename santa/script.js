import fs from 'fs';
import { readFile } from 'fs/promises';


//1 - what floor does santa end up on 차근차근 계획을 세우고 하나씩 function을 만든다 (도구를 만든다)
function question1() {
    fs.readFile('./santa.txt', (err, data) => { //파일 시스템을 불러와 js 로 파일 리딩 가능하다 
        console.time('santatime')
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue == ')') {
                return acc -= 1
            }

        }, 0)
        console.timeEnd('santatime')
        console.log('question1 answer:', answer)

    })
}
question1()



//2 - when does santa first enter the basement 

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        const readfile = data.toString();
        const readfilearray = readfile.split('');
        var acc = 0;
        var count = 0;
        const answer = readfilearray.some((cur) => {
            if (cur === '(') {
                count++;
                acc += 1;


            }
            else if (cur === ')') {
                count++;
                acc -= 1;

            }

            return acc < 0;


        })

        console.log('question 2 answer = ', count);


    })
}

question2();