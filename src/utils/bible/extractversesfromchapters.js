export const extractVerses = (data) =>{  
   /* verses contains objects of verses
       {
           verse:1,
           text:'verse text',
       }
   */
   let verses = [],
       verseText = '',
       verNum = 1;

  for (let i=0; i<data.length; i++){
   let {items} = data[i];
  
   items.forEach((item) => {
       if ( item.name === 'verse'){
          if (verseText.length > 0){
              let verse = {
                  number:verNum,
                  text: verseText,
              }
              verseText = '';
              verNum++;
              verses.push(verse);
          }
       }else if ( item.name === 'char'){
          verseText += item.items[0].text;
       }else if ( item.type === 'text'){
          verseText += item.text;
       }
  })
  }
   
  return verses;
}