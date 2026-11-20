(function(){
  var root=document.documentElement,btn=document.querySelector('.nav-toggle'),nav=document.getElementById('site-nav'),scrim=document.querySelector('.nav-scrim');
  if(!btn||!nav)return;
  var mq=window.matchMedia('(max-width:820px)');
  function set(open){
    root.classList.toggle('nav-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    if(open){var a=nav.querySelector('a');if(a)a.focus({preventScroll:true});}
  }
  btn.addEventListener('click',function(){set(!root.classList.contains('nav-open'));});
  if(scrim)scrim.addEventListener('click',function(){set(false);btn.focus();});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){
    if(!root.classList.contains('nav-open'))return;
    if(e.key==='Escape'){set(false);btn.focus();return;}
    if(e.key==='Tab'){
      var f=[btn].concat([].slice.call(nav.querySelectorAll('a'))),i=f.indexOf(document.activeElement);
      if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus();}
      else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus();}
    }
  });
  (mq.addEventListener?mq.addEventListener('change',function(){if(!mq.matches)set(false);}):mq.addListener(function(){if(!mq.matches)set(false);}));
})();
