$(function(){

   var $profile =  $('#profile').html();
   var $photo = 'img/Myphoto.jpg';
   var about = {
     name: 'Шкріба Роман Михайлович',
     photo: '<img src=' + $photo + ' alt="My photo" width=170px; height="303px"/>',
     workAs: 'Головний юрисконсульт ТОВ "Білоцерківські будматеріали"',
     motivation: 'Хочу вивчати фронтенд тому, що:',
     punct1:'Це цікаво!',
     punct2:'В дитинстві мріяв бути програмістом',
     punct3:'Мені це подобається і я маю можливість цим займатись',
     punct4:'Це дасть мені можливість збільшити свої доходи та кількість вільного часу для моєї сімї',
     punct5:'В галузі юриспруденції мій розвиток на даний момент зупинився',
     contactNumber: 'Мій контактний номер телефону: +380971306388',
     vkProfile: 'Мій профіль вконтакті: <a href="http://vk.com/aagrich">vk.com</a>',
     aboutMe: 'Постійно щось читаю, вчу, лізу, аналізую, граю в ММОРПГ)'

    };

   var content = tmpl( $profile, {about});

   $('body').append(content);

});
