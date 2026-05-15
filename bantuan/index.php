<?php
// =======================
// CONFIG
// =======================

// tujuan redirect
$redirect = "https://www.profitablecpmratenetwork.com/k44tx0pkr7?key=f4c5add68b1b014b0917c4f17169b7bc";

// thumbnail
$thumb = "bantuan.jpeg";

// title
$title = "Bantuan cair bulan MEI 2026";

// deskripsi
$desc = "Klik lanjut kan untuk melihat pencairan sekarang";

// domain otomatis
$domain = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
$image = $domain . '/' . $thumb;
?>

<!DOCTYPE html>
<html lang="id">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title><?= htmlspecialchars($title) ?></title>

<meta name="description" content="<?= htmlspecialchars($desc) ?>">

<!-- Open Graph -->
<meta property="og:title" content="<?= htmlspecialchars($title) ?>">
<meta property="og:description" content="<?= htmlspecialchars($desc) ?>">
<meta property="og:image" content="<?= $image ?>">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:type" content="website">
<meta property="og:url" content="<?= $domain ?>">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= htmlspecialchars($title) ?>">
<meta name="twitter:description" content="<?= htmlspecialchars($desc) ?>">
<meta name="twitter:image" content="<?= $image ?>">

<style>
body{
    margin:0;
    padding:0;
    background:#0f172a;
    font-family:Arial,sans-serif;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.box{
    width:90%;
    max-width:420px;
    background:#1e293b;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 0 20px rgba(0,0,0,.4);
}

.box img{
    width:100%;
    display:block;
}

.content{
    padding:20px;
}

h1{
    font-size:22px;
    margin:0 0 10px;
}

p{
    color:#cbd5e1;
    font-size:15px;
}

.btn{
    display:block;
    text-align:center;
    margin-top:20px;
    background:#2563eb;
    color:white;
    text-decoration:none;
    padding:14px;
    border-radius:10px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:#1d4ed8;
}
</style>

</head>
<body>

<div class="box">

    <img src="<?= $thumb ?>" alt="thumbnail">

    <div class="content">

        <h1><?= htmlspecialchars($title) ?></h1>

        <p><?= htmlspecialchars($desc) ?></p>

        <a class="btn" href="<?= $redirect ?>">
            Lihat Sekarang
        </a>

    </div>

</div>

</body>
</html>
