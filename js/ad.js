(function() {
    // Buat overlay gelap di belakang popup
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "9998";
    document.body.appendChild(overlay);

    // Buat kotak popup iklan
    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fff";
    popup.style.padding = "0";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
    popup.style.width = "400px";
    popup.style.height = "300px";
    popup.style.zIndex = "9999";
    popup.innerHTML = `
        <div style="text-align:right; padding:5px; background:#f1f1f1; border-bottom:1px solid #ccc;">
            <span id="closeAdBtn" style="
                cursor:pointer;
                font-weight:bold;
                color:#333;
                font-size:18px;">✖</span>
        </div>
        <iframe src="https://www.revenuecpmgate.com/k44tx0pkr7?key=f4c5add68b1b014b0917c4f17169b7bc"
            style="width:100%; height:calc(100% - 30px); border:none; border-radius:0 0 8px 8px;">
        </iframe>
    `;
    document.body.appendChild(popup);

    // Event tombol close (redirect)
    document.getElementById("closeAdBtn").onclick = function() {
        window.location.href = "https://www.revenuecpmgate.com/k44tx0pkr7?key=f4c5add68b1b014b0917c4f17169b7bc";
    };
})();
