window.openSzkolenieModal = function(typ) {
  document.getElementById('szkolenie-modal').style.display = 'flex';
  document.getElementById('szk-typ').value = typ;
  window.toggleSzkCena();
}
window.closeSzkolenieModal = function() {
  document.getElementById('szkolenie-modal').style.display = 'none';
}
window.toggleSzkCena = function() {
  var typ = document.getElementById('szk-typ').value;
  var cenaWrap = document.getElementById('szk-cena-wrap');
  var platnoscInfo = document.getElementById('szk-platnosc-info');
  if(typ==='platne') {
    cenaWrap.style.display='block';
    platnoscInfo.style.display='block';
    document.getElementById('szk-cena').required = true;
  } else {
    cenaWrap.style.display='none';
    platnoscInfo.style.display='none';
    document.getElementById('szk-cena').required = false;
  }
}
document.addEventListener('DOMContentLoaded',function(){
  window.toggleSzkCena();
  var form = document.getElementById('szkolenieForm');
  if(form) {
    form.onsubmit=function(e){
      e.preventDefault();
      document.getElementById('szk-success').style.display='block';
      this.reset();
      window.toggleSzkCena();
      setTimeout(function(){document.getElementById('szk-success').style.display='none';},6000);
      window.closeSzkolenieModal();
    };
  }
});
