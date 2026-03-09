/* ====== Rotação Automática dos Cards ====== */
const cards = document.querySelectorAll('.card');
let index = 0;

function showCards() {
  cards.forEach((card, i) => {
    card.style.display = 'none';
    card.style.opacity = 0;
    card.style.transform = 'scale(0.8)';
  });

  for (let i = 0; i < 3; i++) {
    const current = (index + i) % cards.length;
    cards[current].style.display = 'block';
    setTimeout(() => {
      cards[current].style.opacity = 1;
      cards[current].style.transform = 'scale(1)';
    }, 50);
  }

  index = (index + 3) % cards.length;
}

showCards();
setInterval(showCards, 6000);

/* ====== Modal ====== */
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const closeBtn = document.querySelector('.close');

const galleryImages = {
  "Fititel": [
    "/Final/Actividades/fititel/540624498_1216439277193731_3210749835429400658_n.jpg",
    "/Final/Actividades/fititel/541298066_1217577347079924_1523489170626497963_n.jpg",
     "/Final/Actividades/fititel/541485059_1217577887079870_1319838996405856466_n.jpg",
      "/Final/Actividades/fititel/542047552_1217515260419466_7019913100852236049_n.jpg", 
      "/Final/Actividades/fititel/542404537_1217592557078403_8771061339335240728_n.jpg",
       "/Final/Actividades/fititel/542706305_1217499753754350_7701998217550007294_n.jpg",
       "/Final/Actividades/fititel/542714779_1216831683821157_6575993918150679408_n.jpg",
    "/Final/Actividades/fititel/543118751_1217577190413273_8617736489357512452_n.jpg" ,
    "/Final/Actividades/fititel/543169759_1216832733821052_4590170152828969659_n.jpg" ,
    "/Final/Actividades/fititel/543199816_1218920723612253_6885104799543368994_n.jpg",
    "/Final/Actividades/fititel/543169759_1216832733821052_4590170152828969659_n.jpg" ,
    "/Final/Actividades/fititel/543199816_1218920723612253_6885104799543368994_n.jpg",
    "/Final/Actividades/fititel/540624498_1216439277193731_3210749835429400658_n.jpg",
    "/Final/Actividades/fititel/541298066_1217577347079924_1523489170626497963_n.jpg",
     "/Final/Actividades/fititel/541485059_1217577887079870_1319838996405856466_n.jpg",
      "/Final/Actividades/fititel/542047552_1217515260419466_7019913100852236049_n.jpg", 
      "/Final/Actividades/fititel/542404537_1217592557078403_8771061339335240728_n.jpg",
       "/Final/Actividades/fititel/542706305_1217499753754350_7701998217550007294_n.jpg",
       "/Final/Actividades/fititel/542714779_1216831683821157_6575993918150679408_n.jpg",
    "/Final/Actividades/fititel/543118751_1217577190413273_8617736489357512452_n.jpg" ,
    "/Final/Actividades/fititel/543169759_1216832733821052_4590170152828969659_n.jpg" ,
    "/Final/Actividades/fititel/543199816_1218920723612253_6885104799543368994_n.jpg",
    "/Final/Actividades/fititel/543169759_1216832733821052_4590170152828969659_n.jpg" ,
    "/Final/Actividades/fititel/543199816_1218920723612253_6885104799543368994_n.jpg"
  ],
  "Informática": ["/Final/Actividades/seman_info/486811357_1089561099881550_2907592724093361506_n.jpg",
     "/Final/Actividades/seman_info/486874114_1089561186548208_5017347327104780152_n.jpg",
      "/Final/Actividades/seman_info/486935056_1089561106548216_5343638981580471084_n.jpg",
      "/Final/Actividades/seman_info/487044213_1089561046548222_506611148335207414_n.jpg",
      "/Final/Actividades/seman_info/487104685_1089561069881553_9186323935730190146_n.jpg",
      "/Final/Actividades/seman_info/487204558_1089561039881556_2767668356168017328_n.jpg",
       "/Final/Actividades/seman_info/487453804_1089561123214881_2044938143219036299_n.jpg", 
       "/Final/Actividades/seman_info/487453852_1089560853214908_4992047072653931135_n.jpg" ,
       "/Final/Actividades/seman_info/487454844_1089561116548215_8677830706006902223_n.jpg", 
       "/Final/Actividades/seman_info/487483104_1089560843214909_530009552606306834_n.jpg", 
       "/Final/Actividades/seman_info/487502397_1089561109881549_957628362994121627_n.jpg", 
       "/Final/Actividades/seman_info/487503187_1089560836548243_3289602884639954411_n.jpg", 
       "/Final/Actividades/seman_info/487506212_1089560873214906_8622633187733834996_n.jpg",
        "/Final/Actividades/seman_info/487511866_1089560893214904_8126156510437177303_n.jpg",
         "/Final/Actividades/seman_info/488051050_1089560833214910_6452701994613941785_n.jpg",
        "/Final/Actividades/seman_info/capainfo.jpg" ,
        "/Final/Actividades/seman_info/capainfo1.jpg", 
        "/Final/Actividades/seman_info/capainfo2.jpg", 
        "/Final/Actividades/seman_info/me.jpg",
        "/Final/Actividades/seman_info/487483104_1089560843214909_530009552606306834_n.jpg"],
  "Electrónica": ["/Final/Actividades/Seman_ele/492745175_1126806526157007_1736418073239340364_n.jpg", 
    "/Final/Actividades/Seman_ele/496769025_1122940219876971_2142380427557271510_n.jpg", 
    "/Final/Actividades/Seman_ele/497400146_1125090039661989_3301733657344541338_n.jpg", 
    "/Final/Actividades/Seman_ele/497741128_1126805239490469_8744677503152752644_n.jpg", 
    "/Final/Actividades/Seman_ele/497790183_1126801782824148_3319724923046205702_n.jpg" ,
    "/Final/Actividades/Seman_ele/497882252_1126802892824037_5530960653303374601_n.jpg", 
    "/Final/Actividades/Seman_ele/498136553_1126802392824087_7848239228630405768_n.jpg" ,
    "/Final/Actividades/Seman_ele/498149792_1126803019490691_4123370940026780566_n.jpg", 
    "/Final/Actividades/Seman_ele/498163729_1126804232823903_2958797344683353145_n.jpg", 
    "/Final/Actividades/Seman_ele/498287530_1126802032824123_7994345888231398238_n.jpg", 
    "/Final/Actividades/Seman_ele/498525361_1126806716156988_7540829571092614524_n.jpg", 
    "/Final/Actividades/Seman_ele/499251858_1126804169490576_710131320932850568_n.jpg", 
    "/Final/Actividades/Seman_ele/capsemanaeele.jpg" ,
    "/Final/Actividades/Seman_ele/ele.jpg"],
  "Multimédia": ["/Final/Actividades/Seman_ele/492745175_1126806526157007_1736418073239340364_n.jpg", 
    "/Final/Actividades/Seman_ele/496769025_1122940219876971_2142380427557271510_n.jpg", 
    "/Final/Actividades/Seman_ele/497400146_1125090039661989_3301733657344541338_n.jpg", 
    "/Final/Actividades/Seman_ele/497741128_1126805239490469_8744677503152752644_n.jpg", 
    "/Final/Actividades/Seman_ele/497790183_1126801782824148_3319724923046205702_n.jpg" ,
    "/Final/Actividades/Seman_ele/497882252_1126802892824037_5530960653303374601_n.jpg", 
    "/Final/Actividades/Seman_ele/498136553_1126802392824087_7848239228630405768_n.jpg" ,
    "/Final/Actividades/Seman_ele/498149792_1126803019490691_4123370940026780566_n.jpg", 
    "/Final/Actividades/Seman_ele/498163729_1126804232823903_2958797344683353145_n.jpg", 
    "/Final/Actividades/Seman_ele/498287530_1126802032824123_7994345888231398238_n.jpg", 
    "/Final/Actividades/Seman_ele/498525361_1126806716156988_7540829571092614524_n.jpg", 
    "/Final/Actividades/Seman_ele/499251858_1126804169490576_710131320932850568_n.jpg", 
    "/Final/Actividades/Seman_ele/capsemanaeele.jpg" ,
    "/Final/Actividades/Seman_ele/ele.jpg"],
    "África": [ "/Final/Actividades/Seman_ele/492745175_1126806526157007_1736418073239340364_n.jpg", 
    "/Final/Actividades/Seman_ele/496769025_1122940219876971_2142380427557271510_n.jpg", 
    "/Final/Actividades/Seman_ele/497400146_1125090039661989_3301733657344541338_n.jpg", 
    "/Final/Actividades/Seman_ele/497741128_1126805239490469_8744677503152752644_n.jpg", 
    "/Final/Actividades/Seman_ele/497790183_1126801782824148_3319724923046205702_n.jpg" ,
    "/Final/Actividades/Seman_ele/497882252_1126802892824037_5530960653303374601_n.jpg", 
    "/Final/Actividades/Seman_ele/498136553_1126802392824087_7848239228630405768_n.jpg" ,
    "/Final/Actividades/Seman_ele/498149792_1126803019490691_4123370940026780566_n.jpg", 
    "/Final/Actividades/Seman_ele/498163729_1126804232823903_2958797344683353145_n.jpg", 
    "/Final/Actividades/Seman_ele/498287530_1126802032824123_7994345888231398238_n.jpg", 
    "/Final/Actividades/Seman_ele/498525361_1126806716156988_7540829571092614524_n.jpg", 
    "/Final/Actividades/Seman_ele/499251858_1126804169490576_710131320932850568_n.jpg", 
    "/Final/Actividades/Seman_ele/capsemanaeele.jpg" ,
    "/Final/Actividades/Seman_ele/ele.jpg "],
  "ITEL Solidário": ["/Final/Actividades/Seman_ele/492745175_1126806526157007_1736418073239340364_n.jpg", 
    "/Final/Actividades/Seman_ele/496769025_1122940219876971_2142380427557271510_n.jpg", 
    "/Final/Actividades/Seman_ele/497400146_1125090039661989_3301733657344541338_n.jpg", 
    "/Final/Actividades/Seman_ele/497741128_1126805239490469_8744677503152752644_n.jpg", 
    "/Final/Actividades/Seman_ele/497790183_1126801782824148_3319724923046205702_n.jpg" ,
    "/Final/Actividades/Seman_ele/497882252_1126802892824037_5530960653303374601_n.jpg", 
    "/Final/Actividades/Seman_ele/498136553_1126802392824087_7848239228630405768_n.jpg" ,
    "/Final/Actividades/Seman_ele/498149792_1126803019490691_4123370940026780566_n.jpg", 
    "/Final/Actividades/Seman_ele/498163729_1126804232823903_2958797344683353145_n.jpg", 
    "/Final/Actividades/Seman_ele/498287530_1126802032824123_7994345888231398238_n.jpg", 
    "/Final/Actividades/Seman_ele/498525361_1126806716156988_7540829571092614524_n.jpg", 
    "/Final/Actividades/Seman_ele/499251858_1126804169490576_710131320932850568_n.jpg", 
    "/Final/Actividades/Seman_ele/capsemanaeele.jpg" ,
    "/Final/Actividades/Seman_ele/ele.jpg, "],
  "Futebol": ["/Final/Actividades/Seman_ele/492745175_1126806526157007_1736418073239340364_n.jpg", 
    "/Final/Actividades/Seman_ele/496769025_1122940219876971_2142380427557271510_n.jpg", 
    "/Final/Actividades/Seman_ele/497400146_1125090039661989_3301733657344541338_n.jpg", 
    "/Final/Actividades/Seman_ele/497741128_1126805239490469_8744677503152752644_n.jpg", 
    "/Final/Actividades/Seman_ele/497790183_1126801782824148_3319724923046205702_n.jpg" ,
    "/Final/Actividades/Seman_ele/497882252_1126802892824037_5530960653303374601_n.jpg", 
    "/Final/Actividades/Seman_ele/498136553_1126802392824087_7848239228630405768_n.jpg" ,
    "/Final/Actividades/Seman_ele/498149792_1126803019490691_4123370940026780566_n.jpg", 
    "/Final/Actividades/Seman_ele/498163729_1126804232823903_2958797344683353145_n.jpg", 
    "/Final/Actividades/Seman_ele/498287530_1126802032824123_7994345888231398238_n.jpg", 
    "/Final/Actividades/Seman_ele/498525361_1126806716156988_7540829571092614524_n.jpg", 
    "/Final/Actividades/Seman_ele/499251858_1126804169490576_710131320932850568_n.jpg", 
    "/Final/Actividades/Seman_ele/capsemanaeele.jpg" ,
    "/Final/Actividades/Seman_ele/ele.jpg "],  
  
};
// Seleção da galeria e lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Clique em imagens da galeria para abrir lightbox
cards.forEach(card => {
  card.addEventListener('click', () => {
    const atividade = card.dataset.atividade;

    if (galleryImages[atividade] && galleryImages[atividade].length > 0) {
      const imgs = modalGallery.querySelectorAll('img');
      imgs.forEach(img => {
        img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightbox.style.display = 'flex';
        });
      });
    }
  });
});

// Fechar lightbox
closeLightbox.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
cards.forEach(card => {
  card.addEventListener('click', () => {
    const atividade = card.dataset.atividade;
    modalTitle.textContent = atividade;

    modalGallery.innerHTML = '';
    galleryImages[atividade].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      modalGallery.appendChild(img);
    });

    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    const atividade = card.dataset.atividade;
    console.log("Atividade clicada:", atividade);
    console.log("Imagens encontradas:", galleryImages[atividade]);

    modalTitle.textContent = atividade;

    modalGallery.innerHTML = '';
    if (galleryImages[atividade] && galleryImages[atividade].length > 0) {
      galleryImages[atividade].forEach(src => {
        const img = document.createElement('img');
        img.src = src; // certifique-se do caminho relativo
        modalGallery.appendChild(img);
      });
    } else {
      modalGallery.innerHTML = '<p>Nenhuma imagem encontrada.</p>';
    }

    modal.style.display = 'block';
  });
});