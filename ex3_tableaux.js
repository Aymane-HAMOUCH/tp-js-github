 let notes=[12,8,15,10,7]
 notes.sort((a, b) => b - a);
 let moyenne , meilleurNote , noteSup=[] ;
 let sum=0 ;
 console.log(typeof(notes));
 for (let i = 0; i < notes.length; i++) {
     sum+=notes[i] ;
     if(notes[i]>=10) { 
        noteSup.push(notes[i])
        
     }
    }
    moyenne=sum/notes.length ;
    console.log(`la moyenne est : ${moyenne}`);
    console.log(`le meilleur note est : ${notes[0]}` );
    console.log(`le  no,bre de notes >=10 est : ${noteSup}` );
    
    

