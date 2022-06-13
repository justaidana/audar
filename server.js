const Express = require('express');

const app = new Express();

app.use(Express.static('static')).listen(5000, () => {
    console.log('server listens on port 5000');
});


// camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str) {
//         let arr = str.split('');
        
//         for(let i=0;i<arr.length;i++){
//           if(arr[i]=='-'){
//             if(i < arr.length-1){
//               arr[i+1]=arr[i+1].toUpperCase();
//             }
//             arr.splice(i,1);
//           }
//         }
        
//         return arr.join('');
// }
// console.log(camelize("background-color-image"));
