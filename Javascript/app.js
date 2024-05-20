function toggleMenu() {
    const menu =document.querySelector(".Menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}
function myfounction () {
    var darkmode = document.body
    darkmode.classList.toggle("dark-mode")
  }

let list = document.querySelectorAll('.list');
  for (let i=0 ; i<list.length; i++){
      list[i].onclick = function(){
          let j = 0;
          while(j < list.length){
              list[j++].className = 'list'
          }
          list[i].className = 'list active'
      }
  }

  let menutoggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  menutoggle.onclick= function(){
      menutoggle.classList.toggle('active')
      navigation.classList.toggle('active')
      section.classList.toggle('active')
  };

  const clock = document.getElementById('clock');
  const text = document.getElementById('time');

  