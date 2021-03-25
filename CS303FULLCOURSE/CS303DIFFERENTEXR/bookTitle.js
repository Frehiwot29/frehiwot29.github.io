"use strict";
/*eslint-disable*/
function findTitle(libraryBook){
    let title=""
    let sortTitle=libraryBook.sort((a,b)=>{
    if(a.title>b.title)
    return 1
    else if(a.title<b.title)
    return -1
    else
    return 0
    })
    for(let book of sortTitle){
    title+=book.title+"\n";
    }
    return title;
    }



    function showTitle(){
        let title=""
        let i=0;
        let sortedByTitle=booksList.sort((a,b)=>{
        if(a.title>b.title) return 1
        else if(a.title<b.title) return -1
        else return 0;
        })
        for(let i=0;i<sortedByTitle.length;i++){
        title+=i+1 +"."+(sortedByTitle[i].title+"\n" )
        }
        document.getElementById("displayArea").innerHTML=title;
        }