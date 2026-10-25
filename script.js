(function () {
  // Menú móvil
  var toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    toggle.setAttribute('aria-expanded', nav.classList.toggle('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Formulario: abre el correo del usuario con los datos ya escritos
  var form = document.getElementById('quote-form'), msg = document.getElementById('form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    if (!v('f-name') || !v('f-msg')) {
      msg.hidden = false; msg.textContent = 'Escribe tu nombre y cuéntame qué necesitas.'; return;
    }
    var body = 'Nombre: ' + v('f-name') + '\nEmpresa: ' + (v('f-company') || '-') +
      '\nTipo de proyecto: ' + v('f-type') + '\nPresupuesto: ' + v('f-budget') +
      '\nTecnologías: ' + (v('f-tech') || '-') + '\n\n' + v('f-msg');
    window.location.href = 'mailto:eddy16pacheco@gmail.com?subject=' +
      encodeURIComponent('Cotización: ' + v('f-type')) + '&body=' + encodeURIComponent(body);
    msg.hidden = false; msg.textContent = 'Se abrió tu aplicación de correo con la solicitud lista para enviar.';
  });
})();
