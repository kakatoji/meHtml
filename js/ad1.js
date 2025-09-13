<script>
(function(){
  if (document.getElementById('ctf-ad-modal')) return;

  var AD_URL = 'https://www.revenuecpmgate.com/k44tx0pkr7?key=f4c5add68b1b014b0917c4f17169b7bc';

  var overlay = document.createElement('div');
  overlay.id = 'ctf-ad-modal';
  Object.assign(overlay.style, {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999
  });

  var box = document.createElement('div');
  Object.assign(box.style, {
    background: '#fff',
    padding: '10px',
    borderRadius: '6px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    textAlign: 'center'
  });

  // iframe iklan
  var ifr = document.createElement('iframe');
  ifr.src = AD_URL;
  ifr.style.width = '320px';
  ifr.style.height = '250px';
  ifr.style.border = '0';
  ifr.setAttribute('loading','lazy');

  // tombol close
  var btn = document.createElement('button');
  btn.textContent = 'Tutup Iklan';
  Object.assign(btn.style, {
    marginTop: '8px',
    padding: '6px 10px',
    cursor: 'pointer'
  });

  // Fungsi helper: buka iklan lalu tutup modal
  function openAdAndClose() {
    try {
      // buka di tab baru (akan diblock kalau popup-blocker aktif)
      window.open(AD_URL, '_blank', 'noopener,noreferrer');
    } catch(e) {
      // kalau gagal, fallback: ganti tab sekarang
      window.location.href = AD_URL;
    }
    var el = document.getElementById('ctf-ad-modal');
    if (el) el.remove();
  }

  btn.addEventListener('click', openAdAndClose);

  // klik di luar box (overlay) juga trigger redirect
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) { // hanya kalau klik tepat di overlay, bukan di box
      openAdAndClose();
    }
  });

  // tombol ESC untuk menutup -> juga redirect
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' || e.key === 'Esc') {
      openAdAndClose();
    }
  });

  box.appendChild(ifr);
  box.appendChild(btn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
})();
</script>
