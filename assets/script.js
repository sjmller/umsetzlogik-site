const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}

document.querySelectorAll('[data-mail-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name')||''; const company=data.get('company')||''; const phone=data.get('phone')||''; const subject=data.get('subject')||'Anfrage über umsetzlogik.de'; const message=data.get('message')||'';
    const body=`Name: ${name}\nUnternehmen: ${company}\nTelefon: ${phone}\n\n${message}`;
    window.location.href=`mailto:sergej.mueller@umsetzlogik.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })
});
