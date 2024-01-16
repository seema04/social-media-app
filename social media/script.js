const menuItems = document.querySelectorAll('.menu-item');

// messages
const msgNotifications = document.querySelector('#message-notification'); 
const messageDiv = document.querySelector('.messages');
const eachMessage = messageDiv.querySelectorAll('.message');
const msgSearch = document.querySelector('#message-search');




// =============== sidebar ======================

// remove active class form all menu items
const changeActiveItem = () =>{
  menuItems.forEach(item => {
      item.classList.remove('active');
    })
  }

// adding active class to menu items when clicked.
menuItems.forEach(item => {
 item.addEventListener('click',()=>{
  changeActiveItem();
  item.classList.add('active');

  // if notification icon is clicked,we want to remove the notification number, also we want notification to popup.

  if(item.id != 'notifications'){
    document.querySelector('.notification-popup').style.display = 'none';
  }
  else{
    document.querySelector('.notification-popup').style.display = 'block';
    document.querySelector('#notifications .notification-count').style.display = 'none';
  }
 })
})

// ================= Messages =====================

// hightlight messages card when message in menu-item is clicked.
msgNotifications.addEventListener('click',()=>{
  messageDiv.style.boxShadow = '0 0 1rem var(--clr-primary)';
  
  msgNotifications.querySelector('.notification-count').style.display = 'none';

  setTimeout(()=>{
   messageDiv.style.boxShadow = 'none';
  },5000);
})


const searchMessage = () => {
  const val = msgSearch.value.toLowerCase();
  eachMessage.forEach(chat => {
    let name = chat.querySelectorAll('h5').textContent.toLowerCase();

    if(name.indexOf(val) != -1)
    {
      chat.style.display = 'flex';
    }
    else{
      chat.style.display = 'none';
    }
  })
}

// search chat
msgSearch.addEventListener('keyup',searchMessage);




