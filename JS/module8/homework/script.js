const galleryItems = [
    { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
  ];
const Gallery = () =>{
    const preview = document.querySelector(".preview");
    const fullimg = document.querySelector(".fullimg");

    preview.addEventListener('click', (e) =>{
    if (e.target.nodeName === 'IMG'){
        fullimg.setAttribute('src', e.target.getAttribute('data-fullview'));
        fullimg.setAttribute('alt', e.target.getAttribute('alt'));
    }
    });
    for(let i =0; i<galleryItems.length; i++){
        let img = document.createElement('img')
        let li = document.createElement('li');
        img.setAttribute('src', galleryItems[i].preview);
        img.setAttribute('alt', galleryItems[i].alt);
        img.setAttribute('data-fullview', galleryItems[i].fullview);
        li.append(img);
        preview.append(li);
    }
}
Gallery();