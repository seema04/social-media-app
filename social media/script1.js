const menuItems = document.querySelectorAll('.menu-item');
const notifications = document.querySelector('#notifications');

// ============================ sidebar ==================================

// remove pervious item from active class.
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}


// adding active class to menu items when clicked.
  menuItems.forEach(item => {
    item.addEventListener('click',()=>{
      changeActiveItem();
      item.classList.add('active');


      // --------- notification popup ------------
      if(item.id != 'notifications'){
        notifications.querySelector('.notification-popup').style.display = 'none';
      }
      else{
        notifications.querySelector('.notification-popup').style.display = 'block';
        notifications.querySelector('.notification-count').style.display = 'none';
      }
    })
  })

  // ===================== Messages ======================

  const msgDiv = document.querySelector('.messages');
  const allMsgs = msgDiv.querySelectorAll('.message'); 
  const msgNotifications = document.querySelector('#message-notification');

  
  msgNotifications.addEventListener('click',()=>{
  msgDiv.style.boxShadow = '0 0 1rem var(--clr-primary)';

  msgNotifications.querySelector('.notification-count').style.display = 'none';

  setTimeout(() => {
   msgDiv.style.boxShadow = 'none';
  },5000)
})


// =============== search message ====================
const msgSearchInput = document.querySelector('#message-search');
console.log(msgSearchInput);

const searchMsg = () => {
  // storing each input value of message search bar.
  let val = msgSearchInput.value.toLowerCase();

  allMsgs.forEach(chat => {
    let userName = chat.querySelector('h5').textContent.toLowerCase();
    if(userName.indexOf(val) != -1)
    {
      chat.style.display = 'flex';
      chat.style.boxShadow = '0 0 1rem var(--text-clr)';
    }
    else{
      chat.style.display = 'none';
      chat.style.boxShadow = 'none';
    }
  })
}

msgSearchInput.addEventListener('keyup', searchMsg);


// ================== Theme customization =====================
const themeLink = document.querySelector('#theme');
console.log(themeLink); 
const themeCustomize = document.querySelector('.customize-theme');

var root = document.querySelector(':root');

// opening theme div
themeLink.addEventListener('click',()=>{
  themeCustomize.style.display = 'grid';
  themeCustomize.style.placeItem = 'center';
})

 // close customize theme div.
 themeCustomize.addEventListener('click',(e)=>{
  if(e.target.classList.contains('customize-theme')){
   themeCustomize.style.display = 'none';
  }
 })
 

//  ====================== Fontsize =====================
const fontSizeDiv = themeCustomize.querySelector('.font-size');
const fontSize = fontSizeDiv.querySelectorAll('.choose-size span');

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSize.forEach(size => {
    size.classList.remove('active');
  })
}


fontSize.forEach(size => {

  size.addEventListener('click',()=>{
    removeSizeSelector();
    let fontSz; 
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
      fontSz = '.8rem';
      root.style.setProperty('--sticky-top-left','5.4rem');
      root.style.setProperty('--sticky-top-right','5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
      fontSz = '.9rem';
      root.style.setProperty('--sticky-top-left','5.4rem');
      root.style.setProperty('--sticky-top-right','-7rem');
  
    }
    else if(size.classList.contains('font-size-3')){
      fontSz = '1rem';
      root.style.setProperty('--sticky-top-left','-2rem');
      root.style.setProperty('--sticky-top-right','-17rem');
    }
    else if(size.classList.contains('font-size-4')){
      fontSz = '1.1rem';
      root.style.setProperty('--sticky-top-left','-5rem');
      root.style.setProperty('--sticky-top-right','-25rem');
    }
    else if(size.classList.contains('font-size-5')){
      fontSz = '1.2rem';
      root.style.setProperty('--sticky-top-left','-10rem');
      root.style.setProperty('--sticky-top-right','-35rem');
    }

     // change font-size of the root html element.
    document.querySelector('html').style.fontSize = fontSz;
  })

})


// ===================== color ======================
const colorDiv = themeCustomize.querySelector('.color');
const colors = colorDiv.querySelectorAll('.choose-color span');

// removing active class form color div.
const changeActiveColorClass = () => {
  colors.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
} 

colors.forEach(color => {
  color.addEventListener('click',() => {
    let primaryHue;
      changeActiveColorClass();
    if(color.classList.contains('color-1')){
      primaryHue = '#9c89b8';
    }
    else if(color.classList.contains('color-2')){
     primaryHue = '#61a5c2';
    }
    else if(color.classList.contains('color-3')){
     primaryHue = '#abc4ff';
    }
    else if(color.classList.contains('color-4')){
     primaryHue = '#df7373';
    }
    else if(color.classList.contains('color-5')){
     primaryHue = '#6c584c';
    }
    color.classList.add('active');
    root.style.setProperty('--text-clr',primaryHue);
  })
 
})


// ===================== light and dark mode =====================
const bg = document.querySelector('.choose-bg');
const bg1 = bg.querySelector('.bg-1');
const bg2 = bg.querySelector('.bg-2');
const bg3 = bg.querySelector('.bg-3');
const rightSideDiv = document.querySelector('.right');
const middleSideDiv = document.querySelector('.middle');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty('--light-clr-lightness',lightColorLightness);
  root.style.setProperty('--dark-clr-lightness',darkColorLightness);
  root.style.setProperty('--white-clr-lightness',whiteColorLightness);
  
}

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  window.location.reload();
})

bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBg();
  rightSideDiv.style.color = 'hsl(252,15%,65%)';
  middleSideDiv.style.color = 'hsl(252,15%,65%)';

})

bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  bg3.classList.add('active');
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBg();
  rightSideDiv.style.color = 'hsl(252,15%,65%)';
  middleSideDiv.style.color = 'hsl(252,15%,65%)';
})


