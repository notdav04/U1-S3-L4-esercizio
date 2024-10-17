//creazione tabellone
const tabellone = document.getElementById("tabellone");

const create_tabellone = function () {
  let i = 1;
  while (i <= 90) {
    //imposto contatore per 90 numeri
    for (let k = 1; k <= 6; k++) {
      const new_cartella_tabellone = document.createElement("div"); //creo cartella tabellone (loop di 6)
      new_cartella_tabellone.classList.add("cartella");
      tabellone.appendChild(new_cartella_tabellone);
      for (j = 1; j <= 15; j++) {
        //creo 15 celle per ogni tabella
        const new_div = document.createElement("div");
        new_div.classList.add("cella_numero");
        new_div.innerText = i;
        i++;

        new_cartella_tabellone.appendChild(new_div);
      }
    }
  }
};
window.onload = () => {
  create_tabellone();
  create_tabella();
};

//estrazione numero random
const lista_estratti = [];
const btn_random = document.getElementById("random_number");
const numero_estratto = document.getElementById("numero_estratto");
btn_random.onclick = function () {
  let n;
  if (lista_estratti.length === 0) {
    n = Math.ceil(Math.random() * 90);
    numero_estratto.innerText = n;
    lista_estratti.push(n);
    console.log(lista_estratti);
  } else {
    let ctrl = false;
    while (ctrl == false) {
      n = Math.ceil(Math.random() * 90);
      if (!lista_estratti.includes(n)) {
        numero_estratto.innerText = n;
        lista_estratti.push(n);
        console.log(lista_estratti);
        ctrl = true;
      }
    }
  }

  //controlliamo e coloriamo la cella del numero generato
  const tabellone_array = document.querySelectorAll(".cella_numero");
  const controllo_tabellone = function (element, number) {
    if (parseInt(element.innerText) === number) {
      element.style.backgroundColor = "green";
    }
  };
  tabellone_array.forEach((element) => controllo_tabellone(element, n));
};

//creazione tabellina
const wrapper = document.querySelector(".wrapper");
const create_tabella = function () {
  //   for (let k = 1; k <= 6; k++) {
  const tabellina = document.createElement("div");
  tabellina.classList.add("cartella");
  tabellina.classList.add("tabellina");

  wrapper.appendChild(tabellina);
  let i = 1;
  while (i <= 15) {
    let lista_tabellina = [];
    let scelta = Math.ceil(Math.random() * 90);
    if (lista_tabellina.length === 0) {
      lista_tabellina.push(scelta);
      const new_div = document.createElement("div");
      new_div.classList.add("cella_numero");
      new_div.innerText = scelta;
      tabellina.appendChild(new_div);

      i++;
    } else {
      let ctrl = false;
      while (ctrl === false) {
        scelta = Math.ceil(Math.random() * 90);
        if (!lista_tabellina.includes(scelta)) {
          lista_tabellina.push(scelta);
          const new_div = document.createElement("div");
          new_div.classList.add("cella_numero");
          new_div.innerText = scelta;
          tabellina.appendChild(new_div);
          i++;
        }
      }
    }
  }

  // };
};
