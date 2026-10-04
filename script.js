/* ============ НАСТРОЙКИ — поменяйте на свои ============ */
const CONFIG = {
  phone: '+995577407222',      // телефон в международном формате, без пробелов
  phoneShow: '+995 577 40 72 22', // как показывать на сайте
  whatsapp: '995577407222',    // номер WhatsApp без «+»
  instagram: 'https://www.instagram.com/sseaside1',
  facebook: 'https://www.facebook.com/share/1C5eBxeDaR/',
};
/* Фото кладите в папку photos/ с такими именами:
   hero.jpg, pool-1.jpg, pool-2.jpg, kitchen.jpg, house.jpg,
   room-1.jpg … room-6.jpg, gallery-1.jpg … gallery-9.jpg */

const T = {
  ru: {
    addr:'Махинджаури, 3-й пер. Тамар Мепе, 55', route:'Построить маршрут', open_map:'Открыть в картах',
    k_l1:'Газовая плита с духовкой', k_l2:'Посудомоечная машина', k_l3:'Холодильник и морозильная камера', k_l4:'Чайник, посуда и всё для готовки',
    nav_glamp:'Глэмпинги', gl_eyebrow:'Во дворе', gl_title:'Два А-образных глэмпинга', gl_sub:'Деревянные домики с мансардой, отдельным санузлом, мини-кухней и костровой зоной во дворе — для тех, кто хочет отдыха поуютнее и поближе к природе.',
    gl_f1:'Дерево и мансарда', gl_f2:'Мини-кухня', gl_f3:'ТВ и кондиционер', gl_f4:'Вид на море из окна', gl_f5:'Костровая зона во дворе',
    gl:'Глэмпинг', gl_d:'Уютный деревянный А-образный домик: спальное место в мансарде, зона отдыха с диваном, мини-кухня и выход во двор к костровой зоне.',
    f_sea_v:'700 м', f_sea:'до моря', f_wifi:'Wi-Fi', f_parking:'парковка',
    inroom:'В каждом номере', am_bath:'Свой санузел', am_tv:'Телевизор', am_fridge:'Холодильник', am_ac:'Кондиционер',
    nav_rooms:'Номера', nav_pool:'Бассейн', nav_house:'Дом', nav_gallery:'Галерея', nav_location:'Локация', nav_contact:'Контакты',
    call:'Позвонить', write:'Написать',
    hero_eyebrow:'Махинджаури · Грузия', hero_t1:'Тихий отдых', hero_t2:'с собственным бассейном',
    hero_lead:'Уютный частный дом на два этажа: 6 номеров, бассейн во дворе и 2 А-образных глэмпинга с костровой зоной.',
    hero_btn1:'Смотреть номера',
    b_in:'Заезд', b_out:'Выезд', b_guests:'Гостей', b_send:'Узнать наличие',
    f_rooms:'номеров', f_floors:'этажа', f_pool:'свой бассейн', f_kitchen:'общая кухня',
    rooms_eyebrow:'Проживание', rooms_title:'Наши номера', rooms_sub:'Шесть комфортных номеров — один на первом этаже и пять на втором.',
    room:'Номер', floor1_tag:'1 этаж', floor2_tag:'2 этаж',
    room_d1:'Единственный номер на первом этаже — удобно, если не хочется подниматься по лестнице. Рядом общая кухня.',
    room_d2:'Светлый уютный номер на втором этаже для спокойного отдыха.',
    ask:'Узнать цену',
    pool_eyebrow:'Двор', pool_title:'Бассейн для своих',
    pool_text:'Во дворе дома — собственный бассейн. Только для гостей виллы: никакой толпы, можно спокойно плавать и отдыхать в тени.',
    pool_l1:'Только для проживающих', pool_l2:'Место для отдыха у воды', pool_l3:'Идеально для семьи и компании друзей',
    house_eyebrow:'Дом', house_title:'Два этажа уюта',
    house_text:'Все гости пользуются общей кухней на первом этаже — можно готовить самим и собираться вместе за столом.',
    floor1:'1 этаж', floor1_t:'Общая кухня и один номер.',
    floor2:'2 этаж', floor2_t:'Пять номеров для отдыха.',
    gal_eyebrow:'Фото', gal_title:'Галерея',
    loc_eyebrow:'Где мы', loc_title:'Махинджаури', loc_sub:'Тихий район на Чёрном море рядом с Батуми — до моря всего 700 метров, вокруг зелень и горы.',
    c_eyebrow:'Бронирование', c_title:'Свободные даты? Спросите нас', c_sub:'Позвоните или напишите в удобный мессенджер — ответим быстро.',
    foot:'Махинджаури, Грузия',
    wa_book:(r,i,o,g)=>`Здравствуйте! Хочу узнать о наличии${r?` номера «${r}»`:''}${i?`, заезд ${i}`:''}${o?`, выезд ${o}`:''}${g?`, гостей: ${g}`:''}.`,
    guest:n=>n+(n==1?' гость':n<5?' гостя':' гостей'),
  },
  en: {
    addr:'55 Tamar Mepe 3rd Lane, Makhinjauri, Georgia', route:'Get directions', open_map:'Open in Maps',
    k_l1:'Gas hob with oven', k_l2:'Dishwasher', k_l3:'Fridge and chest freezer', k_l4:'Kettle, tableware and cooking essentials',
    nav_glamp:'Glamping', gl_eyebrow:'In the garden', gl_title:'Two A-frame glamping cabins', gl_sub:'Wooden cabins with an attic bedroom, a private bathroom, a mini kitchen and a fire pit in the garden — for a cozier stay close to nature.',
    gl_f1:'Wood and attic bedroom', gl_f2:'Mini kitchen', gl_f3:'TV and air conditioning', gl_f4:'Sea view from the window', gl_f5:'Fire pit in the garden',
    gl:'Glamping', gl_d:'A cozy wooden A-frame cabin: a bed in the attic, a lounge area with a sofa, a mini kitchen and a door to the garden and fire pit.',
    f_sea_v:'700 m', f_sea:'to the sea', f_wifi:'Wi-Fi', f_parking:'parking',
    inroom:'In every room', am_bath:'Private bathroom', am_tv:'TV', am_fridge:'Fridge', am_ac:'Air conditioning',
    nav_rooms:'Rooms', nav_pool:'Pool', nav_house:'House', nav_gallery:'Gallery', nav_location:'Location', nav_contact:'Contact',
    call:'Call', write:'Message',
    hero_eyebrow:'Makhinjauri · Georgia', hero_t1:'A peaceful stay', hero_t2:'with your own pool',
    hero_lead:'A cozy two-storey private house with 6 rooms, a garden pool and 2 A-frame glamping cabins with a fire pit.',
    hero_btn1:'View rooms',
    b_in:'Check-in', b_out:'Check-out', b_guests:'Guests', b_send:'Check availability',
    f_rooms:'rooms', f_floors:'floors', f_pool:'private pool', f_kitchen:'shared kitchen',
    rooms_eyebrow:'Accommodation', rooms_title:'Our Rooms', rooms_sub:'Six comfortable rooms — one on the ground floor and five upstairs.',
    room:'Room', floor1_tag:'Ground floor', floor2_tag:'Upper floor',
    room_d1:'The only room on the ground floor — great if you prefer to skip the stairs. The shared kitchen is right next door.',
    room_d2:'A bright, cozy room on the upper floor for a quiet getaway.',
    ask:'Ask for price',
    pool_eyebrow:'Garden', pool_title:'A pool just for guests',
    pool_text:'The house has its own pool in the garden. Reserved for our guests only — no crowds, just calm swimming and relaxing in the shade.',
    pool_l1:'Guests of the house only', pool_l2:'Lounge area by the water', pool_l3:'Perfect for families and friends',
    house_eyebrow:'The house', house_title:'Two floors of comfort',
    house_text:'All guests share a kitchen on the ground floor — cook for yourself and gather around the table together.',
    floor1:'Ground floor', floor1_t:'Shared kitchen and one bedroom.',
    floor2:'Upper floor', floor2_t:'Five bedrooms for your stay.',
    gal_eyebrow:'Photos', gal_title:'Gallery',
    loc_eyebrow:'Find us', loc_title:'Makhinjauri', loc_sub:'A quiet Black Sea district next to Batumi — just 700 metres to the sea, surrounded by greenery and mountains.',
    c_eyebrow:'Booking', c_title:'Dates free? Just ask us', c_sub:'Call or message us in your favourite messenger — we reply quickly.',
    foot:'Makhinjauri, Georgia',
    wa_book:(r,i,o,g)=>`Hello! I'd like to check availability${r?` for "${r}"`:''}${i?`, check-in ${i}`:''}${o?`, check-out ${o}`:''}${g?`, guests: ${g}`:''}.`,
    guest:n=>n+(n==1?' guest':' guests'),
  },
  ka: {
    addr:'მახინჯაური, თამარ მეფის მე-3 შესახვევი, 55', route:'მარშრუტის აგება', open_map:'რუკაზე გახსნა',
    k_l1:'გაზქურა ღუმელით', k_l2:'ჭურჭლის სარეცხი მანქანა', k_l3:'მაცივარი და საყინულე', k_l4:'ჩაიდანი, ჭურჭელი და მზადებისთვის საჭირო ყველაფერი',
    nav_glamp:'გლემპინგი', gl_eyebrow:'ეზოში', gl_title:'ორი A-ფორმის გლემპინგი', gl_sub:'ხის სახლები მანსარდით, ცალკე სააბაზანოთი, მინი-სამზარეულოთი და კოცონის ზონით ეზოში — უფრო მყუდრო დასვენებისთვის ბუნებასთან ახლოს.',
    gl_f1:'ხე და მანსარდა', gl_f2:'მინი-სამზარეულო', gl_f3:'ტელევიზორი და კონდიციონერი', gl_f4:'ზღვის ხედი ფანჯრიდან', gl_f5:'კოცონის ზონა ეზოში',
    gl:'გლემპინგი', gl_d:'მყუდრო ხის A-ფორმის სახლი: საძინებელი მანსარდაში, დივნიანი სასტუმრო ზონა, მინი-სამზარეულო და გასასვლელი ეზოში, კოცონის ზონისკენ.',
    f_sea_v:'700 მ', f_sea:'ზღვამდე', f_wifi:'Wi-Fi', f_parking:'პარკინგი',
    inroom:'თითოეულ ნომერში', am_bath:'საკუთარი სააბაზანო', am_tv:'ტელევიზორი', am_fridge:'მაცივარი', am_ac:'კონდიციონერი',
    nav_rooms:'ნომრები', nav_pool:'აუზი', nav_house:'სახლი', nav_gallery:'გალერეა', nav_location:'მდებარეობა', nav_contact:'კონტაქტი',
    call:'დარეკვა', write:'მოგვწერეთ',
    hero_eyebrow:'მახინჯაური · საქართველო', hero_t1:'მყუდრო დასვენება', hero_t2:'საკუთარი აუზით',
    hero_lead:'ორსართულიანი კერძო სახლი 6 ნომრით, აუზით ეზოში და 2 A-ფორმის გლემპინგით კოცონის ზონით.',
    hero_btn1:'ნომრების ნახვა',
    b_in:'შესვლა', b_out:'გასვლა', b_guests:'სტუმარი', b_send:'თავისუფალი თარიღები',
    f_rooms:'ნომერი', f_floors:'სართული', f_pool:'საკუთარი აუზი', f_kitchen:'საერთო სამზარეულო',
    rooms_eyebrow:'განთავსება', rooms_title:'ჩვენი ნომრები', rooms_sub:'ექვსი კომფორტული ნომერი — ერთი პირველ სართულზე და ხუთი მეორეზე.',
    room:'ნომერი', floor1_tag:'1 სართული', floor2_tag:'2 სართული',
    room_d1:'ერთადერთი ნომერი პირველ სართულზე — მოსახერხებელია, თუ კიბეზე ასვლა არ გსურთ. საერთო სამზარეულო გვერდითაა.',
    room_d2:'ნათელი და მყუდრო ნომერი მეორე სართულზე მშვიდი დასვენებისთვის.',
    ask:'ფასის გაგება',
    pool_eyebrow:'ეზო', pool_title:'აუზი მხოლოდ სტუმრებისთვის',
    pool_text:'სახლის ეზოში საკუთარი აუზია. მხოლოდ ჩვენი სტუმრებისთვის — ხალხმრავლობის გარეშე, მშვიდად საცურაოდ და დასასვენებლად.',
    pool_l1:'მხოლოდ სახლის სტუმრებისთვის', pool_l2:'დასასვენებელი ადგილი წყლის პირას', pool_l3:'იდეალურია ოჯახისა და მეგობრებისთვის',
    house_eyebrow:'სახლი', house_title:'ორი სართული სითბოსა და კომფორტის',
    house_text:'ყველა სტუმარი სარგებლობს პირველ სართულზე არსებული საერთო სამზარეულოთი — შეგიძლიათ თავად მოამზადოთ საჭმელი და ერთად შეიკრიბოთ.',
    floor1:'1 სართული', floor1_t:'საერთო სამზარეულო და ერთი ნომერი.',
    floor2:'2 სართული', floor2_t:'ხუთი ნომერი დასასვენებლად.',
    gal_eyebrow:'ფოტოები', gal_title:'გალერეა',
    loc_eyebrow:'სად ვართ', loc_title:'მახინჯაური', loc_sub:'მშვიდი უბანი შავ ზღვაზე, ბათუმთან ახლოს — ზღვამდე მხოლოდ 700 მეტრია, გარშემო სიმწვანე და მთები.',
    c_eyebrow:'დაჯავშნა', c_title:'თავისუფალია თარიღები? ჰკითხეთ ჩვენ', c_sub:'დაგვირეკეთ ან მოგვწერეთ თქვენთვის მოსახერხებელ მესენჯერში — სწრაფად გიპასუხებთ.',
    foot:'მახინჯაური, საქართველო',
    wa_book:(r,i,o,g)=>`გამარჯობა! მაინტერესებს თავისუფალია თუ არა${r?` „${r}"`:' ნომერი'}${i?`, შესვლა ${i}`:''}${o?`, გასვლა ${o}`:''}${g?`, სტუმრები: ${g}`:''}.`,
    guest:n=>n+' სტუმარი',
  }
};

let lang = 'ru';
try { lang = localStorage.getItem('lang') || (navigator.language||'').slice(0,2); } catch(e){}
if (!T[lang]) lang = 'ru';

const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];

/* ---------- contact links ---------- */
function msgLink(text){ return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`; }
function setContacts(){
  $$('.ig-link').forEach(a=>a.href=CONFIG.instagram);
  $$('.fb-link').forEach(a=>a.href=CONFIG.facebook);
  $$('.call-link').forEach(a=>a.href='tel:'+CONFIG.phone);
  $$('.phone-txt').forEach(s=>s.textContent=CONFIG.phoneShow);
  $$('.wa-link').forEach(a=>{ if(!a.dataset.custom) a.href = msgLink(T[lang].wa_book('','','','')); });
}

/* ---------- rooms & gallery ---------- */
const ROOMS = [1,2,3,4,5,6];
function renderRooms(){
  const t = T[lang];
  $('#roomsGrid').innerHTML = ROOMS.map(n=>{
    const ground = n===1;
    return `<article class="room reveal in">
      <div class="ph" data-photo="photos/room-${n}.jpg">
        <span class="tag">${ground?t.floor1_tag:t.floor2_tag}</span>
        <img src="photos/room-${n}.jpg" alt="${t.room} ${n}" loading="lazy" onerror="this.remove()">
      </div>
      <div class="room-body">
        <h3>${t.room} ${n}</h3>
        <p>${ground?t.room_d1:t.room_d2}</p>
        <div class="chips"><span>🚿 ${t.am_bath}</span><span>📺 ${t.am_tv}</span><span>🧊 ${t.am_fridge}</span><span>❄️ ${t.am_ac}</span></div>
        <div class="btns">
          <a class="btn btn-gold" target="_blank" rel="noopener" href="${msgLink(t.wa_book(t.room+' '+n,'','',''))}">${t.ask}</a>
          <a class="btn btn-ghost" href="tel:${CONFIG.phone}">${t.call}</a>
        </div>
      </div></article>`;
  }).join('');
  bindLightbox();
}
function renderGlamp(){
  const t=T[lang];
  $('#glAmen').innerHTML=[['🪵',t.gl_f1],['🚿',t.am_bath],['🍳',t.gl_f2],['📺',t.gl_f3],['🌊',t.gl_f4],['🔥',t.gl_f5]].map(([i,x])=>`<li><i>${i}</i><span>${x}</span></li>`).join('');
  $('#glCards').innerHTML=[1,2].map(n=>`<article class="room reveal in">
      <div class="ph" data-photo="photos/glamping-${n===1?1:9}.jpg"><span class="tag">A-frame</span>
        <img src="photos/glamping-${n===1?1:9}.jpg" alt="${t.gl} ${n}" loading="lazy" onerror="this.remove()"></div>
      <div class="room-body"><h3>${t.gl} ${n}</h3><p>${t.gl_d}</p>
        <div class="btns"><a class="btn btn-gold" target="_blank" rel="noopener" href="${msgLink(t.wa_book(t.gl+' '+n,'','',''))}">${t.ask}</a>
        <a class="btn btn-ghost" href="tel:${CONFIG.phone}">${t.call}</a></div></div></article>`).join('');
  bindLightbox();
}
function renderGallery(){
  const files = [...Array(11)].map((_,i)=>`photos/gallery-${i+1}.jpg`);
  $('#galleryGrid').innerHTML = files.map(f=>
    `<div class="ph" data-photo="${f}"><img src="${f}" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>`).join('');
  bindLightbox();
}
function renderGuests(){
  const sel = $('#bGuests'), cur = sel.value || 2;
  sel.innerHTML = [1,2,3,4,5,6,7,8,9,10,12].map(n=>`<option value="${n}"${n==cur?' selected':''}>${T[lang].guest(n)}</option>`).join('');
}

/* ---------- i18n ---------- */
function applyLang(){
  const t = T[lang];
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el=>{ const v=t[el.dataset.i18n]; if(typeof v==='string') el.textContent=v; });
  $$('.lang button').forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
  renderRooms(); renderGlamp(); renderGuests(); setContacts();
  try{ localStorage.setItem('lang',lang);}catch(e){}
}
$$('.lang button').forEach(b=>b.addEventListener('click',()=>{ lang=b.dataset.lang; applyLang(); }));

/* ---------- booking form -> WhatsApp ---------- */
$('#bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const t=T[lang], fmt=v=>v?v.split('-').reverse().join('.'):'';
  const text=t.wa_book('',fmt($('#bIn').value),fmt($('#bOut').value),$('#bGuests').value);
  window.open(msgLink(text),'_blank','noopener');
});
const today=new Date().toISOString().slice(0,10);
$('#bIn').min=today; $('#bOut').min=today;
$('#bIn').addEventListener('change',e=>{ $('#bOut').min=e.target.value||today; });

/* ---------- nav ---------- */
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});
$('#burger').addEventListener('click',()=>$('#links').classList.toggle('open'));
$$('#links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));
$('#year').textContent=new Date().getFullYear();

/* ---------- reveal ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));

/* ---------- lightbox ---------- */
let lbList=[], lbIdx=0;
function bindLightbox(){
  $$('[data-photo]').forEach(el=>{
    if(el.dataset.bound) return; el.dataset.bound=1;
    el.addEventListener('click',()=>{
      const img=$('img',el); if(!img) return;      // нет фото — не открываем
      lbList=$$('[data-photo]').filter(x=>$('img',x)).map(x=>$('img',x).src);
      lbIdx=lbList.indexOf(img.src); openLb();
    });
  });
}
function openLb(){ $('#lbImg').src=lbList[lbIdx]; $('#lightbox').classList.add('open'); }
function stepLb(d){ lbIdx=(lbIdx+d+lbList.length)%lbList.length; $('#lbImg').src=lbList[lbIdx]; }
$('#lbClose').onclick=()=>$('#lightbox').classList.remove('open');
$('#lbPrev').onclick=()=>stepLb(-1);
$('#lbNext').onclick=()=>stepLb(1);
$('#lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') $('#lightbox').classList.remove('open'); });
addEventListener('keydown',e=>{
  if(!$('#lightbox').classList.contains('open')) return;
  if(e.key==='Escape') $('#lightbox').classList.remove('open');
  if(e.key==='ArrowLeft') stepLb(-1);
  if(e.key==='ArrowRight') stepLb(1);
});

renderGallery();
applyLang();
