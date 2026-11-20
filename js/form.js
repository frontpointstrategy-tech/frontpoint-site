const f=document.querySelector("form[data-ajax]");
if(f){f.addEventListener("submit",async e=>{
  e.preventDefault();
  const s=document.getElementById("status"),b=f.querySelector("button");
  b.disabled=true;b.textContent="Sending…";s.className="status";s.textContent="";
  try{
    const r=await fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}});
    if(!r.ok)throw new Error();
    f.reset();s.className="status ok";s.textContent="Message sent. We'll reply by email.";
  }catch(_){
    s.className="status err";s.innerHTML='The message did not send. Try again, or email <a href="mailto:engage@frontpointstrategy.com">engage@frontpointstrategy.com</a>.';
  }
  b.disabled=false;b.textContent="Send message";
});}
