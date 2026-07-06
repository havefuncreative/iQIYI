<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wallpaper Download</title>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Noto Sans TC',sans-serif;
}

body{

background:
radial-gradient(circle at top,#262626,#090909);

color:white;

overflow-x:hidden;

}

header{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

padding:40px;

}

.logo{

width:110px;

margin-bottom:30px;

}

h1{

font-size:64px;

font-weight:700;

letter-spacing:2px;

}

.subtitle{

margin-top:18px;

font-size:18px;

opacity:.75;

max-width:600px;

line-height:1.8;

}

.scroll{

margin-top:70px;

font-size:14px;

opacity:.4;

animation:float 2s infinite;

}

@keyframes float{

0%{transform:translateY(0)}

50%{transform:translateY(10px)}

100%{transform:translateY(0)}

}

.gallery{

max-width:1400px;

margin:auto;

padding:120px 40px;

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:45px;

}

.card{

backdrop-filter:blur(25px);

background:rgba(255,255,255,.06);

border:1px solid rgba(255,255,255,.08);

border-radius:28px;

overflow:hidden;

transition:.45s;

cursor:pointer;

}

.card:hover{

transform:translateY(-14px);

box-shadow:0 30px 70px rgba(0,0,0,.35);

}

.card img{

width:100%;

display:block;

}

.info{

padding:28px;

}

.info h2{

font-size:28px;

margin-bottom:12px;

}

.info p{

opacity:.6;

margin-bottom:24px;

line-height:1.7;

}

.button{

display:block;

text-align:center;

padding:16px;

border-radius:16px;

background:white;

color:black;

text-decoration:none;

font-weight:700;

transition:.35s;

}

.button:hover{

background:#d9d9d9;

}

footer{

padding:90px 20px;

text-align:center;

opacity:.45;

}

.light{

position:fixed;

width:500px;

height:500px;

border-radius:50%;

background:#4a7cff33;

filter:blur(160px);

top:-200px;

left:-200px;

pointer-events:none;

}

.preview{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.9);

display:none;

justify-content:center;

align-items:center;

z-index:999;

}

.preview img{

max-width:90%;

max-height:90%;

border-radius:20px;

}

.close{

position:absolute;

top:30px;

right:40px;

font-size:42px;

cursor:pointer;

color:white;

}

@media(max-width:768px){

h1{

font-size:42px;

}

.gallery{

padding:60px 20px;

}

}

</style>

</head>

<body>

<div class="light"></div>

<header>

<img src="logo.png" class="logo">

<h1>Wallpaper Collection</h1>

<p class="subtitle">

Download exclusive wallpapers designed for our community.

</p>

<div class="scroll">

↓ Scroll

</div>

</header>

<section class="gallery">

<div class="card">

<img src="preview1.jpg" onclick="openPreview(this.src)">

<div class="info">

<h2>Wallpaper 01</h2>

<p>Mobile Wallpaper</p>

<a class="button"

href="wallpaper1.jpg"

download>

Download

</a>

</div>

</div>

<div class="card">

<img src="preview2.jpg" onclick="openPreview(this.src)">

<div class="info">

<h2>Wallpaper 02</h2>

<p>Mobile Wallpaper</p>

<a class="button"

href="wallpaper2.jpg"

download>

Download

</a>

</div>

</div>

<div class="card">

<img src="preview3.jpg" onclick="openPreview(this.src)">

<div class="info">

<h2>Wallpaper 03</h2>

<p>Mobile Wallpaper</p>

<a class="button"

href="wallpaper3.jpg"

download>

</a>

</div>

</div>

</section>

<footer>

© 2026 YOUR BRAND

</footer>

<div class="preview" id="preview">

<div class="close" onclick="closePreview()">

×

</div>

<img id="previewImage">

</div>

<script>

function openPreview(src){

document.getElementById("preview").style.display="flex";

document.getElementById("previewImage").src=src;

}

function closePreview(){

document.getElementById("preview").style.display="none";

}

document.getElementById("preview").addEventListener("click",function(e){

if(e.target===this){

closePreview();

}

});

document.addEventListener("mousemove",e=>{

document.querySelector(".light").style.left=e.clientX-250+"px";

document.querySelector(".light").style.top=e.clientY-250+"px";

});

</script>

</body>
</html>
