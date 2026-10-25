(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('nav');
  if(!t||!n)return;
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});
})();
