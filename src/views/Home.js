import { state, SEOManager, Template } from './../core';
import DefaultTemplate from './templates/DefaultTemplate';
import { calculateAge } from '../libs/age';

class Home {
  constructor() {
    // state.subscribe('count', (newCount) => {
    //   this.updateCount(newCount);
    // });
  }

  setSeo() {
    // Atur tag SEO
    const title = 'Home - Welcome';
    const description = 'Welcome to the Home page';

    SEOManager.setTitle(title);
    SEOManager.setMetaTag('description', description);
    SEOManager.setCanonicalUrl(window.location.href);
    SEOManager.setOpenGraphTag('og:title', title);
    SEOManager.setOpenGraphTag('og:description', description);
  }

  injectTemplate(html, data) {
    return html.replace(/\{\{(.*?)\}\}/g, (_, key) => {
      const keys = key.trim().split('.');
      let value = data;

      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return '';
      }

      return value;
    });
  }

  async loadHtmlContent() {
    const res = await fetch('/pages/home.html');
    return await res.text();
  }

  async render() {
    this.setSeo();

    const birthdata = '1992-08-17';
    const age = calculateAge(birthdata);
    
    let logo = './images/logo.svg';
    let mail = './images/mail.svg';
    let identification = './images/identification.svg';
    let bookOpen = './images/bookOpen.svg';
    const loadHtml = await this.loadHtmlContent();

    let html = this.injectTemplate(loadHtml, {
      logo,
      mail,
      identification,
      bookOpen,
      age,
    })

    const data = {
      content: html
    };

    return Template.render(DefaultTemplate(), data);
  }

  onMount() {
  }
}

export default Home;