document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
  });
  
$('textarea').on("keyup", function() {
  
  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
    
  current.text(characterCount);
  
  
  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css('color', '#666');
  }
  if (characterCount > 70 && characterCount < 150) {
    current.css('color', '#6d5555');
  }
  if (characterCount > 150 && characterCount < 350) {
    current.css('color', '#793535');
  }
  if (characterCount > 350 && characterCount < 550) {
    current.css('color', '#841c1c');
  }
  if (characterCount > 550 && characterCount < 700) {
    current.css('color', '#8f0001');
  }
  
  if (characterCount >= 800) {
    maximum.css('color', '#8f0001');
    current.css('color', '#8f0001');
    theCount.css('font-weight','bold');
  } else {
    maximum.css('color','#666');
    theCount.css('font-weight','normal');
  }
  
      
});
