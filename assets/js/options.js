import { Languages } from "../../data.js";

class Language {
  constructor() {
  }

  _initProps() {
    this.allLang = ['en', 'ru']
    this.select = document.querySelector('#lang')
    this.langContainer = document.querySelector('.language-block');
    this.projectDescription = document.querySelector('.description__text')
  }

  changeUrlLang() {
    let lang = this.select.value;
    location.href = `${window.location.pathname}#${lang}`
    location.reload()
    this.select.value = lang;
  }

  changeLanguage() {
    let hash = window.location.hash.substr(1);
    if (!this.allLang.includes(hash)) {
      location.href = `${window.location.pathname}#en`
      location.reload();
    }
    this.select.value = hash;

    //page//
    for (let key in Languages.page) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) elem.innerText = Languages.page[key][hash]
    }

    //education//
    Languages.education.forEach((i, n) => {
      document.querySelectorAll('.speciality')[n].innerText = i.speciality[hash];
      document.querySelectorAll('.institution')[n].innerText = i.institution[hash];
    })

    //experience//
    Languages.experience.forEach((i, n) => {
      document.querySelectorAll('.position')[n].innerText = i.position[hash];
      document.querySelectorAll('.company')[n].innerText = i.company[hash];
      document.querySelectorAll('.tasks')[n].innerText = i.tasks[hash];
    })
  }

  init() {
    this._initProps()
    this.changeLanguage()
    this.langContainer.addEventListener('change', this.changeUrlLang.bind(this))
  }
}


class Butler {
  path = 'https://cv-ilya-default-rtdb.europe-west1.firebasedatabase.app/guests'

  newGuest = {
    date: new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', second: 'numeric' }),
    device: navigator.platform,
    userAgent: navigator.userAgent
  }

  dateNow = new Date().toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

  //
  // getData(url) {
  //   fetch(url).then(res => res.json()).then(res => this.getData(res))
  // }

  // check(e) {
  //   let date = new Date;
  //   const objects = e;
  //   const keys = Object.keys(objects)
  //   console.log(objects);
  //   if (date - new Date(objects[keys[keys.length - 2]].date) > 300000) this.postData()
  // }
  //

  postData = () => {
    return fetch(`${this.path}/${this.dateNow}.json`, {
      method: 'POST',
      body: JSON.stringify(this.newGuest),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  init() {
    // this.getData(`${this.path}/${this.dateNow}.json`)
    this.postData(this.path)
  }
}

export { Language, Butler };
