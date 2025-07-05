import { calculateAge } from '../libs/age';
import { SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class About {
  constructor() {
    this.localState = {

    };
  }

  async loadHtmlContent() {
    const res = await fetch('/pages/about.html');
    return await res.text();
  }

  setSeo() {
    // Atur tag SEO
    const title = 'About Me';
    const description = 'About me page';

    SEOManager.setTitle(title);
    SEOManager.setMetaTag('description', description);
    SEOManager.setCanonicalUrl(window.location.href);
    SEOManager.setOpenGraphTag('og:title', title);
    SEOManager.setOpenGraphTag('og:description', description);
  }

  updateMessage(newMessage) {
    this.render(); // Render ulang view
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

  async render() {
    this.setSeo();

    const birthdata = '1992-08-17';
    const age = calculateAge(birthdata);

    const loadHtml = await this.loadHtmlContent();

    let html = this.injectTemplate(loadHtml, {
      birthdata,
      age
    });

    const data = {
      content: html
    };
    return Template.render(PageTemplate(), data);

  }

  onMount() {
    const btn = document.getElementById('tampilkan-foto');
    const modal = document.getElementById('modal-foto');
    const closeBtn = document.getElementById('tutup-modal');

    if (btn && modal && closeBtn) {
      btn.addEventListener('click', () => {
        modal.classList.remove('d-none');
      });

      closeBtn.addEventListener('click', () => {
        modal.classList.add('d-none');
      });

      // Tutup modal jika klik di luar modal content
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('d-none');
        }
      });
    }
  }
}

export default About;