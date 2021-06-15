const naiveSearch = (word, search) => {
    return word.match(search) ? 'found' : 'not found';
}

const naiveSearchNoregex = ( text, search ) => {
   if (search.length > text.length) {
       return 'not found';
   }

   let startText = 0;
   let startSearch = 0;
   let numberOfMatches = 0;

   while(startText <= text.length) {
       if(text[startText] === search[startSearch]) {
         numberOfMatches++
         startText++
         startSearch++
       }
       if(text[startText] !== search[startSearch]){
         startText++;
         startSearch = 0;
       }
       if (numberOfMatches === search.length) {
           return 'found';
       }
   }
   return 'not found';
}


const naiveSearchFor = (text, search ) => {
   let matches = 0;
   for(let i = 0; i < text.length; i++) {
       for(let j = 0; j < search.length; j++) {
           if(search[j] !== text[i + j]) {
               break;
           } else {
               matches++;
               if(matches === search.length) {
                   return 'found';
               }
           }
       }
   }
   return 'not found';
}


console.log(naiveSearch('kasdkfadomg', 'omg'));
console.log(naiveSearch('kasdkfadomg', 'naive'));
console.log(naiveSearchNoregex('kasdkfadomg', 'omg'));
console.log(naiveSearchNoregex('kasdkfadomg', 'kfa'));
console.log(naiveSearchNoregex('mg', 'naive'));

console.log(naiveSearchFor('kasdkfadomg', 'omg'));
console.log(naiveSearchFor('kasdkfadomg', 'omi'));
console.log(naiveSearchFor('kasdjosedomg', 'jose'));
console.log(naiveSearchFor('kasdjosedomg', 'a'));

