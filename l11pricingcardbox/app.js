// UI
const getcheckbox = document.getElementById('togglecheckbox');
const getchecklabel = document.getElementById('togglelabel');
let getbasic = document.getElementById('basic'),
    getpro = document.getElementById('professional'),
    getmst = document.getElementById('master');

// getcheckbox.addEventListener('click',function(){
//     // console.log('hi');

//     if(getcheckbox.checked){
//         // console.log('yes');

//         getbasic.textContent = 120;
//         getpro.textContent = 240;
//         getmst.textContent = 300;

//     }else{
//         // console.log('no');
//         // getbasic.textContent = 10;
//         // getpro.textContent = 20;
//         // getmst.textContent = 50;

//         [getbasic, getpro, getmst] = [10,20,50];
//     }
// });


getchecklabel.addEventListener('click',function(){
    if(getcheckbox.checked){
        // console.log('yes');
        [getbasic.textContent, getpro.textContent, getmst.textContent] = [10,20,50];

    }else{
        // console.log('no');
        getbasic.textContent = 120;
        getpro.textContent = 240;
        getmst.textContent = 300;
    }
});