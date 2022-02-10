let eingabe = document.getElementById("eingabe");
let ausgabe = document.getElementById("ausgabe");

function monatAbschicken() {
  console.log(eingabe);

  let eingabeText = eingabe.value;
  console.log(eingabeText);

  switch (eingabeText) {
    case `jan`:
      ausgabe.innerHTML = 
      `AQUARIUS: 
        Jan 
        Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…
        https://www.horoscopedates.com/img/icon_aquarius.png
        `;
      break;

    case `feb`:
      ausgabe.innerHTML = 
      `PISCES: 
      Feb 
      Communication is very important today—written, spoken, and even nonverbal body language will all…
      https://www.horoscopedates.com/img/icon_pisces.png
        `;
      break;

    case `mar`:
      ausgabe.innerHTML = 
      `Aries: 
      Mar 
      Today your patience might be tested when one or more of your projects gets put on hold by someone… https://www.horoscopedates.com/img/icon_aries.png
        `;
      break;

    case `apr`:
      ausgabe.innerHTML = 
      `TAURUS:
      Apr 
      Your intense energy makes you a great candidate for a leadership position right now, so if you are…
      https://www.horoscopedates.com/img/icon_taurus.png
        `;
      break;

    case `mai`:
      ausgabe.innerHTML = 
      `GEMINI: 
      May  
      If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…
      https://www.horoscopedates.com/img/icon_gemini.png
        `;
      break;

    case `jun`:
      ausgabe.innerHTML = `
      CANCER: 
      Jun
      Too many different elements in your life are overlapping with each other right now—and it's your…
      https://www.horoscopedates.com/img/icon_cancer.png
        `;
      break;

    default:
      ausgabe.innerHTML = `<b>Bitte gib nur oben genannte Optionen an</b>`;
      break;
  }
}
