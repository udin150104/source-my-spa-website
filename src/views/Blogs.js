import { state, SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class Blogs {
  constructor() {
    this.localState = { 

    };
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
    const res = await fetch('/pages/blogs.html');
    return await res.text();
  }

  setSeo() {
    // Atur tag SEO
    const title = 'Blogs';
    const description = 'Blogs page';

    SEOManager.setTitle(title);
    SEOManager.setMetaTag('description', description);
    SEOManager.setCanonicalUrl(window.location.href);
    SEOManager.setOpenGraphTag('og:title', title);
    SEOManager.setOpenGraphTag('og:description', description);
  }

  updateMessage(newMessage) {
    this.render(); // Render ulang view
  }

  async render() {
    this.setSeo();
    const loadHtml = await this.loadHtmlContent();

    let html = this.injectTemplate(loadHtml)

    const data = {
      content: html
    };

    return Template.render(PageTemplate(), data);

  }

  onMount() {
    const changeMessageBtn = document.getElementById('change-message-btn');
    if (changeMessageBtn) {
      changeMessageBtn.addEventListener('click', () => {
        this.updateMessage('Message Changed!');
      });
    }
  }
}

export default Blogs;