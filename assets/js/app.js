// subjects
let subjects = [
  "Elm və təhsil",
  "İKT",
  "Səhiyyə",
  "İdarəetmə və Sahibkarlıq",
  "Hüquq-mühafizə orqanları",
  "İdman",
  "İncəsənət",
  "Digər",
];
// images of that subjects
let images = [
  "teacher.jpg",
  "programmer.jpeg",
  "doctor.jpg",
  "sahibkar.jpg",
  "lawyer.jpg",
  "sport.jpg",
  "artist.jpg",
  "profession.png"
]

// about subjects

let description = {
  "Elm və təhsil": "Araşdırmağı sevən, yenilikçi və inadcılsan. Bildiklərini paylaşmağı və artırmağı sevirsən. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "İKT": "Rəqəmlərlə işləməyi sevən, yeniliklərə açıq, fərdi işləməyi üstünlük verən birisən. Daim qısa yollar axtarırsan. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "Səhiyyə": "Başqalarına kömək etməyi və fayda verməyi sevən, dəqiqliyə çox önəm verən birisən. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "İdarəetmə və Sahibkarlıq": "İdarə etməyi sevən, rəqabətcil və məsuliyyətli birisən. Yaradıcı düşüncəyə malik olmağın və hesablanmış addımlar atırsan. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "Hüquq-mühafizə orqanları": "FHN, MƏHKƏMƏ VƏ HÜQUQ  MÜHAFİZƏ ORQANLARI Ədalət, qayda-qanun sənin üçün çox önəmlidir. Gününü planlı yaşamağı, kömək etməyi və qorumağı sevirsən. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "İdman": "Rəqabətcil, əzmli və dinamiksən. Məğlubiyyəti sevməyən və cəsarətli birisən. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "İncəsənət": "Estetik ruhlusan, yaradıcı düşünmə bacarığına və məkan vizual intelekt tipinə maliksən. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur.",
  "Digər": "Asılılığı və məsuliyyəti sevmirsən. Sərbəst iş qrafiki və rahatlıq sənin üçün daha önəmlidir. Elə isə, yönəlməli  olduğun peşə istiqaməti məhz budur."
}
let secondDescription = {
  "Elm və təhsil": "Bu peşə istiqamətinə müəllim, təhsil mütəxəssisi, psixoloq,  alim və.s daxildir. Araşdırma, ünsiyyət və insanlarla işləmə bacarığı bu sahə üçün çox önəmlidir. Səbirli, dözümlü, məsuliyyətli, yenilikçi və öz işinin peşekarı olmalısan. Bu sahədə uğurlu olmaq üçün qlobal düşüncələrə və bəşəri ideyalara köklənməlisən.  Kompüter üzrə müəyyən biliklərə malik olmaq sənin üçün üstünlükdür.",
  "İKT": "Bu peşə istiqamətinə kompüter mühəndisliyi, data analitik, veb developer və.s daxildir. Artıq həyatımızda elə bir sahə yoxdurki texnologiya ona təsir etməsin. Əmin ola bilərsən ki, bu peşə üzrə iş tapacaqsan. Əsas olan yorulmadan çalışmağın, informasiya texnologiyaları, müasir trendlər barədə məlumatlar əldə etməkdir. ",
  "Səhiyyə": "Bu peşə istiqamətinə həkim, tibb bacısı, tibb işçiləri və.s daxildir. Səhiyyə sahəsinin əsas məqsədi əhaliyə hər tərəfli tibbi xidmət təşkil etməkdir. Səhiyyə işçiləri gərgin iş rejiminə dözümlü, stresə davamlı, məsuliyyətli və öz sahələrində yetərincə biliyə sahib insanlar olmalıdır.",
  "İdarəetmə və Sahibkarlıq": "Sahibkar- Yeni müəssisənin təşkili, yeni ideayaların və xidmətin hazırlanmasıyla bağlı risk və məsuliyyəti öz üzərinə götürən insan. Yaradılmış obyektlərin idarə olunması isə idarəçiliklə bağlıdır. Hər iki istiqamət üçün kommunikasiya və əməkdaşlıq bacarığı çox önəmlidir. Müasir dövrün və cəmiyyətin tələbatlarını daim izləməlisən.  ",
  "Hüquq-mühafizə orqanları": "Polis, hərbçi, prokurorluq işçiləri, yanğınsöndürən və.s kimi peşələr bu istiqamətə daxildir. Bu istiqamətdə olan peşə işçiləri dövlət və əhalinin mühafizəsi, həyat şəraitinin yaxşılaşdırılması və təhlükəsizliyini təmin edir. Stressə qarşı dözümlü, səliqəli və məsuliyyətli olmalısan. ",
  "İdman": "İdman  bütün dövrlər üçün prestijli istiqamət olmuşdur. Sağlam həyat tərzi keçirmək bu sahədə uğurlu olmağın üçün əsas şərtdir. Dözümlü, inadcıl və məsuliyyətli olmalı, fiziki olaraq öz üzərində daima işləməlisən . ",
  "İncəsənət": "İncəsənət ruhun sənətidir. İncəsənət yaradıcılıq,  informasiyanın beyində vizuallaşdırma bacarığı, böyük səbr və qabiliyyət tələb edir. Müasir texnologiyanın inkişafı ilə incəsənət də kompüterləşmişdir. Qrafik dizayner, reklam meneceri, veb tərtibatı peşələri də daxil olmuşdur. Bu peşələr üçün yaradıcılıqla yanaşı kompüter bacarıqlarıda tələb olunur.",
  "Digər": "Usta, dərzi, aşbaz, youtuber, vloger kimi  peşələri bu istiqamətə daxil edə bilərik. Qeyd olunan peşələrə uyğun olaraq müəyyən qabiliiyətə malik olmalısan. Ünsiyyət bacarığıda bu sahələr üçün olduqca önəmlidir. "
}
// submit button
const check = document.querySelector(".submit");
// answers array
const div = document.querySelector(".ans");

const questions = document.querySelector('.questions-container')

// bot results
const firstBotArray = [500, 500, 500, 500, 400, 300, 300, 200]
const secondBotArray = [300, 250, 250, 200, 150, 150, 150, 150]
const thirdBotArray = [250, 250, 250, 250, 200, 150, 150, 100]

check.addEventListener("click", function () {
  //getting results of form sorting it
  let values = testChecker()
  let max = Math.max(...values);
  let ind = values.indexOf(max);
  let sorted = values.sort((a, b) => b - a)
  // checking for bot
  if (botChecker(values)) {
    // checking for 2 close subjects
    if (sorted[0] - sorted[1] <= sorted[0] * 0.04) {
      let ind2 = values.indexOf(sorted[1]);
      div.innerHTML = `<p>${subjects[ind]}</p>
    <p class="desc">${description[subjects[ind]]}</p>
    <img src="./assets/images/${images[ind]}" />
    <p>${subjects[ind2]}</p>
    <p class="desc">${description[subjects[ind2]]}</p>
    <p class="second-desc"><img src="/assets/images/info.png"/>${secondDescription[subjects[ind2]]}</p>
    <img src="./assets/images/${images[ind2]}" /> <br>
    <button><a href="">Yenidən</a></button>`

    } else {
      div.innerHTML = `
    <p>${subjects[ind]}</p>
    <p class="desc">${description[subjects[ind]]}</p>
    <p class="second-desc"><img src="/assets/images/info.png"/>${secondDescription[subjects[ind]]}</p>
    <button><a href="">Yenidən</a></button><br>
    <img src="./assets/images/${images[ind]}" />
    `
    }
  } else {
    div.innerHTML = `
    <p>${subjects[7]}</p>
    <p class="desc">${description[subjects[7]]}</p>
    <p class="second-desc"><img src="/assets/images/info.png"/>${secondDescription[subjects[7]]}</p>
    <button><a href="">Yenidən</a></button><br>
    <img src="./assets/images/${images[7]}" />`
  }
  div.style.display = 'block'
  questions.style.display = 'none'
  buttons.style.display = 'none'
});

// test results algorithm


const testChecker = () => {
  let tests = document.getElementsByTagName("input");
  let values = [0, 0, 0, 0, 0, 0, 0, 0];

  if (tests[1].value < 50) {
    values[0] += Math.abs(parseInt(tests[1].value) - 100);
    values[6] += Math.abs(parseInt(tests[1].value) - 100);
  } else {
    values[7] += parseInt(tests[1].value);
  }
  //   3 Hansını seçərsən?
  if (tests[2].value < 50) {
    values[2] += Math.abs(parseInt(tests[2].value) - 100);
    values[4] += Math.abs(parseInt(tests[2].value) - 100);
    values[5] += Math.abs(parseInt(tests[2].value) - 100);
  } else {
    values[1] += parseInt(tests[2].value);
    values[3] += parseInt(tests[2].value);
  }
  // 4 Hansını seçərsən?
  if (tests[3].value < 50) {
    values[4] += Math.abs(parseInt(tests[3].value) - 100);
    values[7] += Math.abs(parseInt(tests[3].value) - 100);
  } else {
    values[1] += parseInt(tests[3].value);
    values[3] += parseInt(tests[3].value);
    values[5] += parseInt(tests[3].value);
  }
  //  5 Hansını seçərsən?
  if (tests[4].value < 50) {
    values[1] += Math.abs(parseInt(tests[4].value) - 100);
    values[3] += Math.abs(parseInt(tests[4].value) - 100);
  } else {
    values[0] += parseInt(tests[4].value);
    values[2] += parseInt(tests[4].value);
    values[6] += parseInt(tests[4].value);
  }
  // 6 Hansını seçərsən?
  if (tests[5].value < 50) {
    values[0] += Math.abs(parseInt(tests[5].value) - 100);
  } else {
    values[5] += parseInt(tests[5].value);
    values[6] += parseInt(tests[5].value);
  }
  // 7 Video-oyunlar oynamağı sevirsən?
  if (tests[6].value < 50) {
    values[0] += Math.abs(parseInt(tests[6].value) - 100);
    values[1] += Math.abs(parseInt(tests[6].value) - 100);
  } else {}
  // 8 Gününü planlı yaşayırsan?(Hər gün eyni vaxtda oyanmaq, yemək və.s)
  if (tests[7].value < 50) {
    values[4] += Math.abs(parseInt(tests[7].value) - 100);
    values[5] += Math.abs(parseInt(tests[7].value) - 100);
  } else {
    values[6] += parseInt(tests[7].value);
    values[7] += parseInt(tests[7].value);
  }
  // 9 HƏrFlƏrİ bELə YazMaĞIm sƏNi QıCIqlanDırIR?
  if (tests[8].value < 50) {
    values[0] += Math.abs(parseInt(tests[8].value) - 100);
    values[3] += Math.abs(parseInt(tests[8].value) - 100);
  } else {
    values[6] += parseInt(tests[8].value);
  }
  // 10 Problemi necə həll edirsən?
  if (tests[9].value < 50) {
    values[5] += Math.abs(parseInt(tests[9].value) - 100);
  } else {
    values[3] += parseInt(tests[9].value);
  }
  // 11 Kiməsə hədiyyə verərkən
  if (tests[10].value < 50) {
    values[6] += Math.abs(parseInt(tests[10].value) - 100);
  } else {
    values[4] += parseInt(tests[10].value);
    values[7] += parseInt(tests[10].value);
  }
  // 12 Səncə uğur qazanmaq üçün hansı daha vacibdir?
  if (tests[11].value < 50) {
    values[1] += Math.abs(parseInt(tests[11].value) - 100);
  } else {
    values[2] += parseInt(tests[11].value);
    values[4] += parseInt(tests[11].value);
    values[5] += parseInt(tests[11].value);
  }
  // 13 Otağndakı əşyaların yerini
  if (tests[12].value < 50) {} else {
    values[2] += parseInt(tests[12].value);
    values[4] += parseInt(tests[12].value);
  }
  // 14 Rəqabəti sevirsən?
  if (tests[13].value < 50) {
    values[3] += Math.abs(parseInt(tests[13].value) - 100);
    values[5] += Math.abs(parseInt(tests[13].value) - 100);
  } else {
    values[0] += parseInt(tests[13].value);
  }
  // 15 Dərs stolun (iş stolun) necə olur
  if (tests[14].value < 50) {} else {
    values[2] += parseInt(tests[14].value);
  }
  // 16 Kİməsə qarşı haqsızlıq olarkən
  if (tests[15].value < 50) {
    values[7] += Math.abs(parseInt(tests[15].value) - 100);
  } else {
    values[2] += parseInt(tests[15].value);
    values[4] += parseInt(tests[15].value);
  }
  // 17 Dostlarınla birlikdə hara getməyi seçərdin?
  if (tests[16].value < 50) {
    values[6] += Math.abs(parseInt(tests[16].value) - 100);
  } else {
    values[5] += parseInt(tests[16].value);
    values[7] += parseInt(tests[16].value);
  }
  // 18 Dostlarınla birlikdə hara getməyi seçərdin?
  if (tests[17].value < 50) {
    values[0] += Math.abs(parseInt(tests[17].value) - 100);
    values[1] += Math.abs(parseInt(tests[17].value) - 100);
  } else {
    values[6] += parseInt(tests[17].value);
  }
  // 19 Zaman maşının olsaydı hansına səyahət edərdin?(Heçnəyi dəyişdirə bilməzsən😉)
  if (tests[18].value < 50) {
    values[0] += Math.abs(parseInt(tests[18].value) - 100);
    values[1] += Math.abs(parseInt(tests[18].value) - 100);
  } else {
    values[4] += parseInt(tests[18].value);
  }
  // 20 Dostlarınla harasa gedərkən məkanı özün seçirsən?
  if (tests[19].value < 50) {
    values[3] += Math.abs(parseInt(tests[19].value) - 100);
  } else {
    values[7] += parseInt(tests[19].value);
  }
  // 21 Başladığın işi
  if (tests[20].value < 50) {
    values[2] += Math.abs(parseInt(tests[20].value) - 100);
    values[3] += Math.abs(parseInt(tests[20].value) - 100);
  } else {}
  // 22 nəyisə edərkən
  if (tests[21].value < 50) {
    values[2] += Math.abs(parseInt(tests[21].value) - 100);
    values[7] += Math.abs(parseInt(tests[21].value) - 100);
  } else {
    values[1] += parseInt(tests[21].value);
  }
  return values
}

// array equality checker
function arraysEqual(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

// function that checking if results are submitted by bot
const botChecker = (values) => {
  return !arraysEqual(values, firstBotArray) && !arraysEqual(values, secondBotArray) && !arraysEqual(values, thirdBotArray)
}


// show question
let sliders = document.querySelectorAll('.slider')

const activeSlider = (n) => {
  for (let slider of sliders) {
    slider.classList.remove('active')
  }
  sliders[n].classList.add('active')
}

//next question
let i = 0
var buttons = document.querySelector('.prev-next')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


buttons.addEventListener('click', (e) => {
  if ([...e.target.classList].includes('next')) {
    i++
    e.target.style.display = 'unset'
    if (i === sliders.length - 1) {
      next.style.display = 'none'
      check.style.display = 'unset'
    }
    prev.style.display = 'unset'
  } else if ([...e.target.classList].includes('prev')) {
    i--
    if (i === 0) {
      prev.style.display = 'none'
    }
    next.style.display = 'unset'
    check.style.display = 'none'
    div.style.display = 'none'
  }
  activeSlider(i)
})