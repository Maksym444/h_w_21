
'use strict'

// 1)
const simpleList=[1,2,3];
generateSimpleList(simpleList)

function generateSimpleList(array){
    const $ul = document.createElement('ul');
        for (let i =1; i<=array.length; i++){
        let $li = document.createElement('li');
        $li.textContent = `List item ${i}`;
        $ul.append($li);
    }   
    document.querySelector('.generate-simple-list').append($ul);
}



// 1*
const list=[1,2,[1.1,1.2,1.3],3];
generateList(list)

function generateList(array){
    const $masterUL = document.createElement('ul');
    for (let i =1; i<=array.length; i++){
        const elem = array [i];
        let $li = document.createElement('li');
        if (Array.isArray(elem)){
            const $slaveUL = document.createElement('ul');
            for (let e=1; e<=elem.length; e++){
                let slaveElem = elem[e];
                let $slaveLI = document.createElement('li');
                $slaveLI.textContent = `List item ${e}`;
                $slaveUL.append($slaveLI);
            }
            $li.append($slaveUL)
            $masterUL.append($li);  
            }else{      
        $li.textContent = `List item ${i}`;
        $masterUL.append($li);    }
    }
    document.querySelector('.generate-list').append($masterUL);
}
//  2
 const tableLength = 10;
 createTable (tableLength);

 function createTable (length) {
    let counter=1;
    const $table = document.createElement('table')
    $table.style.cssText= "border-spacing:10px; border:5px solid black; text-align:center;";
    for (let i=1; i<=length; i++){
        const $tr=document.createElement('tr') 
            for (let e=1;e<=length; e++) {
                const $td=document.createElement('td');
                $td.textContent=counter;
                $td.style.cssText = "border: 2px solid red";
                counter++
                $tr.append($td);
            }
            $table.append($tr);
    }
    document.querySelector('div:nth-child(4)').append($table); 
 }
