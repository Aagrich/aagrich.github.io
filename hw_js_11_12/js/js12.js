$(function(){

   var $profile =  $('#profile').html();

   var about = [{
     name: 'john',
     secondName: 'Snow'
   },
    {
      value: 'strong',
      secondValue: 'very strong'
    }];

   var content = tmpl( $profile, {about});

   $('body').append(content);

});
