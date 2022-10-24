var dizi = [];
var secilenDizi = [];
// hazır
const xhr = new XMLHttpRequest();
xhr.open('GET','json/information.json',true);
    function loadInformation(){    
xhr.onload=function(){
    var info = JSON.parse(this.responseText);
    for(let i =0 ; i<info.data.length;i++){
     dizi.push(info.data[i]); } 
//Evre 2----------------------
//suffle kod---------------------
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  // Used like so
  shuffle(dizi);
  console.log(dizi);
  for(let i =0 ; i<4;i++){
    secilenDizi.push(dizi[i]);
    secilenDizi.push(dizi[i]);
  }
  var random = Math.floor(Math.random()*8)
    secilenDizi.splice(random,0,{ "pic":"8.png",
"name":"Ditto"
    });
    html =
    `
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[0].pic}" class="resim"></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[1].pic}" class="resim"></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[2].pic}" class="resim"></div>

    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[3].pic}" class="resim"></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[4].pic}" class="resim"></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[5].pic}" class="resim"></div>
    
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[6].pic}" class="resim "></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[7].pic}" class="resim"></div>
    <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[8].pic}" class="resim"></div>
    `;
document.querySelector('.kartlar').innerHTML = html;
var resimjs = document.querySelectorAll('.resim');
var hucrejs = document.querySelectorAll('.hucre');
var sayac =0;
var a=[];
var b=[];
for(let i =0 ; i<resimjs.length;i++)
    {
        resimjs[i].addEventListener('click',resimf)
    function resimf(){

        if(resimjs[i].getAttribute("src")=="/uygulama10/img/8.png"){
            hucrejs[i].setAttribute("class","kapa  col-3  rounded-2 m-2");
        }
        if(sayac%2==0){
        a.push(i);
        resimjs[a[0]].setAttribute("class","ac");
        }
       else if(sayac%2==1){
        b.push(i);      
        resimjs[b[0]].setAttribute("class","ac");
        }
        if(a.length==1 && b.length==1){
        var k =resimjs[a[0]];
        var l =resimjs[b[0]];
        var m =hucrejs[a[0]];
        var n =hucrejs[b[0]];

              

            if(a[0]!=b[0]){
                 setTimeout(myGreeting, 1000);
                function myGreeting() {
                    k.setAttribute("class","kapa");
                    l.setAttribute("class","kapa");
                  }
                if(resimjs[a[0]].getAttribute("src")==resimjs[b[0]].getAttribute("src"))
                {             
                    setTimeout(myGreeting, 1000);
                    function myGreeting() {
                        k.setAttribute("class","kapa");
                        l.setAttribute("class","kapa");
                        m.setAttribute("class","kapa  col-3  rounded-2 m-2");
                        n.setAttribute("class","kapa  col-3  rounded-2 m-2");
                      }   

                }
            }
        a=[];
        b=[];
}
               sayac++;
    }
}
}
xhr.send();
}
loadInformation();
document.querySelector('.yeni').addEventListener('click',yenif);
function yenif(){

    var dizi = [];
    var secilenDizi = [];
    // hazır
    const xhr = new XMLHttpRequest();
    xhr.open('GET','json/information.json',true);
        function loadInformation(){    
    xhr.onload=function(){
        var info = JSON.parse(this.responseText);
        for(let i =0 ; i<info.data.length;i++){
         dizi.push(info.data[i]); } 
    //Evre 2----------------------
    //suffle kod---------------------
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }
      // Used like so
      shuffle(dizi);
      console.log(dizi);
      for(let i =0 ; i<4;i++){
        secilenDizi.push(dizi[i]);
        secilenDizi.push(dizi[i]);
      }
      var random = Math.floor(Math.random()*8)
        secilenDizi.splice(random,0,{ "pic":"8.png",
    "name":"Ditto"
        });
        html =
        `
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[0].pic}" class="resim"></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[1].pic}" class="resim"></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[2].pic}" class="resim"></div>
    
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[3].pic}" class="resim"></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[4].pic}" class="resim"></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[5].pic}" class="resim"></div>
        
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[6].pic}" class="resim "></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[7].pic}" class="resim"></div>
        <div class="hucre col-3  rounded-2 m-2"><img src="/uygulama10/img/${secilenDizi[8].pic}" class="resim"></div>
        `;
    document.querySelector('.kartlar').innerHTML = html;
    var resimjs = document.querySelectorAll('.resim');
    var hucrejs = document.querySelectorAll('.hucre');
    var sayac =0;
    var a=[];
    var b=[];
    for(let i =0 ; i<resimjs.length;i++)
        {
            resimjs[i].addEventListener('click',resimf)
        function resimf(){
    
            if(resimjs[i].getAttribute("src")=="/uygulama10/img/8.png"){
                hucrejs[i].setAttribute("class","kapa  col-3  rounded-2 m-2");
            }
            if(sayac%2==0){
            a.push(i);
            resimjs[a[0]].setAttribute("class","ac");
    
            }
           else if(sayac%2==1){
            b.push(i);      
            resimjs[b[0]].setAttribute("class","ac");
            }
            if(a.length==1 && b.length==1){
            var k =resimjs[a[0]];
            var l =resimjs[b[0]];
            var m =hucrejs[a[0]];
            var n =hucrejs[b[0]];
    
                  
    
                if(a[0]!=b[0]){
                     setTimeout(myGreeting, 1000);
                    function myGreeting() {
                        k.setAttribute("class","kapa");
                        l.setAttribute("class","kapa");
                      }
                    if(resimjs[a[0]].getAttribute("src")==resimjs[b[0]].getAttribute("src"))
                    {             
                        setTimeout(myGreeting, 1000);
                        function myGreeting() {
                            k.setAttribute("class","kapa");
                            l.setAttribute("class","kapa");
                            m.setAttribute("class","kapa  col-3  rounded-2 m-2");
                            n.setAttribute("class","kapa  col-3  rounded-2 m-2");
                          }   
    
                    }
                }
            a=[];
            b=[];
    }
                   sayac++;
        }
    }
    }
    xhr.send();
    }
    loadInformation();
}
