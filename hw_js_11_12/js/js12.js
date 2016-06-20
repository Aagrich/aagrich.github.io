$(function(){

   var $profile =  $('#profile').html();
   var $body = $('body');
   var me = [
     {  name: 'John'  },
     { secondName: 'Snow' }
   ];

   var content = tmpl($profile, {
              about: me
   });

   $body.append(content);

});
