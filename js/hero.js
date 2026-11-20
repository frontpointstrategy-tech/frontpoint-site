(function(){
  var box=document.getElementById("hero-video");
  if(!box)return;
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  var save=navigator.connection&&navigator.connection.saveData;
  var btn=document.getElementById("hero-toggle");
  if(reduce||save){if(btn)btn.hidden=true;return;}
  var id=box.getAttribute("data-youtube");
  var f=document.createElement("iframe");
  f.title="Background video";
  f.setAttribute("aria-hidden","true");f.tabIndex=-1;
  f.allow="autoplay; encrypted-media";
  f.referrerPolicy="strict-origin-when-cross-origin";
  f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&mute=1&loop=1&playlist="+id+"&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&enablejsapi=1";
  f.addEventListener("load",function(){setTimeout(function(){box.classList.add("on")},1200)});
  box.appendChild(f);
  var playing=true;
  function cmd(fn){f.contentWindow.postMessage(JSON.stringify({event:"command",func:fn,args:""}),"*")}
  if(btn){btn.hidden=false;btn.addEventListener("click",function(){
    playing=!playing;cmd(playing?"playVideo":"pauseVideo");
    btn.textContent=playing?"Pause video":"Play video";btn.setAttribute("aria-pressed",String(!playing));
  });}
})();
