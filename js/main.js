(function(){
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));}
  const images=[
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_1.jpg',
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_2.jpg',
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_3.jpg',
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_4.jpg',
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_5.jpg',
    'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_6.jpg'
  ];
  const img=document.getElementById('gallery-image'),dots=document.getElementById('gallery-dots');
  if(img&&dots&&images.length){let index=0;images.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Фото '+(i+1));b.addEventListener('click',()=>show(i));dots.appendChild(b)});function show(i){index=(i+images.length)%images.length;img.src=images[index];dots.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('active',j===index));}document.querySelector('.gallery-arrow--prev').addEventListener('click',()=>show(index-1));document.querySelector('.gallery-arrow--next').addEventListener('click',()=>show(index+1));show(0);setInterval(()=>show(index+1),5000)}
  document.getElementById('year').textContent=new Date().getFullYear();
})();
