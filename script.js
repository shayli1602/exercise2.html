// let x = 10;

// let y = 5;

// let result = x+y;

// alert(result);

function calc(){

 let num1 = prompt('enter first number');

 let num2 = prompt('enter secend number');

 let result = Number(num1)+Number(num2);


//  alert(num1+'+'+ num2+ '='+ result);
 
//  alert(`${num1} + ${num2} = ${result}`);
// }

document.getElementById('hw').innerHTML=`${num1} + ${num2} = ${result}`;}


function calculate(){
    let number1 = document.getElementById('_num1').value;
    let number2 = document.getElementById('_num2').value;
    let result = Number(number1)+Number(number2);
    document.getElementById('hw3').innerHTML= `${number1}+${number2}=${result}`;
}


function _calculate(x,y){

    let result=Number(x)+Number(y);
    document.getElementById('hw3').innerHTML=`${x}+${y}={result}`;


}



// function check(){

// let number1=Number(document.getElementById('num1').value);
// let number2=Number(document.getElementById('num2').value);
// if( number1 > number2 ){
// document.getElementById('_special').innerHTML= `${number1} is greater then ${number2}🍌`;
// }
// else if( number1 < number2 ){
//     document.getElementById('_special').innerHTML= `${number1} is less then ${number2}🍕`;
//     }


// else if( number1 == number2 ){
//     document.getElementById('_special').innerHTML= `${number1} is equal to ${number2}🍕`;
//     }
// }


function check(){

    let number1=Number(document.getElementById('num1').value);
    let number2=Number(document.getElementById('num2').value);
    if( number1 > number2 ){
    document.getElementById('_special').innerHTML= `${number1} is greater then ${number2}🍌`;
    }
    
    
    else if( number1 == number2 ){
        document.getElementById('_special').innerHTML= `${number1} is equal to ${number2}🍕`;
        }

        else{
            document.getElementById('_special').innerHTML= `${number1} is less then ${number2}🍦`;  
        }
    }

let v = 10;
let y= 5;
let array = ['text','shayli',v,y];
console.log(array);
console.log(array[0]);
console.log(array[array.length-1]);


console.log(array.length); 
  //array.length = 4 asking if 4 is greater than 3. array length is bigger then 3 so to statment will occur
            
  //true
  if(array.length >= 4){
    console.log(`array has more than 3 items. \narray size is: ${array.length}`);
}


let x = 5
let s = 15
let t = 10
let avr =['yuval','betty','niv','meitar','liri',x,t,s];
console.log(avr[3]);
console.log(avr)
console.log(avr[avr.length-1]);







const movies = [
    {
        title: 'Batman The Dark Knight',
        year: 2008,
        rate: 9,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        linkUrl: 'https://www.imdb.com/title/tt0468569/',
        rateUrl: 'https://www.imdb.com/title/tt0468569/ratings'

    },
    {
        title: 'Batman The Dark Knight Rises',
        year: 2012,
        rate: 8.5,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg',
        linkUrl: 'https://www.imdb.com/title/tt1345836/',
        rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
    },
    {
      title: 'Die hard',
      year: 1988,
      rate: 8.2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/819cf1ZR2WL.jpg',
      linkUrl: 'https://www.imdb.com/title/tt0095016/',
      rateUrl: 'https://www.imdb.com/title/tt0095016/ratings'

  },
  {
    title: 'IRON MAN',
    year: 2008,
    rate: 7.9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/he/3/3e/Ironmanmovieposter.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0371746/',
    rateUrl: 'https://www.imdb.com/title/tt0371746/ratings'

},
{
  title: 'The princess bride',
  year: 1987,
  rate: 8,
  imageUrl: 'https://i0.wp.com/multiversesite.com/wp-content/uploads/2017/03/princess-bride-10.jpg?resize=393%2C600&ssl=1',
  linkUrl: 'https://www.imdb.com/title/tt0093779/',
  rateUrl: 'https://www.imdb.com/title/tt0093779/ratings'

},
{
  title: 'Armagedon',
  year: 1998,
  rate: 6.7,
  imageUrl: 'http://moridimtv.com/images/xl/movies_new/xYOPof4KBEQ0.jpg',
  linkUrl: 'https://www.imdb.com/title/tt0120591/',
  rateUrl: 'https://www.imdb.com/title/tt0120591/ratings'

},
    
]

for (let index = 0; index < 100; index++) 
{
console.log(`index = ${index}`);

}


function displayImages(){
    for(let i = 0; i < movies.length; i++){
      document.getElementById('images').innerHTML += `
      <div class="col">
        <div class="card shadow-sm ">
        <img class="card-img"src="${movies[i].imageUrl}" id="img" alt="${movies[i].title}">
          <div class="card-body p-1">
            <p class="card-text">Movie Name: ${movies[i].title}</p>
            <p class="card-text">Year: ${movies[i].year}</p>
            <p class="card-text">Rating: ${movies[i].rate}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a class="btn btn-sm btn-outline-secondary" href="${movies[i].linkUrl}" target="_blank">View</a>
                <a class="btn btn-sm btn-outline-secondary" href="${movies[i].rateUrl}"  target="_blank">Rate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      `;
  }
}

window.onload = function() {
  displayImages();
};

function sendemail(){

let firstName = document.querySelector('[name="firstName"]').value;
let lastName = document.querySelector('[name="lastName"]').value;
let email = document.querySelector('[name="email"]').value;
let message = document.querySelector('[name="messageContent"]').value;
let date = new Date();

Email.send({
    Host: "smtp.elasticemail.com",
    Username: "איימיל שלך מהאתר",
    Password: "סיסמה שלך מהאתר",
    From: "איימיל שלך מהאתר",
    To: "איימיל שלך מהאתר",
    Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
    Body: `
<b>הודעה מאת:</b> ${firstName} ${lastName}
<br>
<br>
<b>כתובת איימיל של השולח:</b> ${email}
<br>
<br>
<b>נשלח בתאריך:</b> ${date}
<br>
<br>
<b>תוכן ההודעה:</b>
<br>
${message}`
});

document.querySelector('#sent-success').style = 'display:block';

}