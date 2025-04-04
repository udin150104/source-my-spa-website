import { SEOManager, Template } from '../core';
import PageTemplate from "./templates/PageTemplate";

class InfomationPage {
  constructor() {
    this.localState = { 

    };
  }

  setSeo() {
    // Atur tag SEO
    const title = 'Information';
    const description = 'Information page';

    SEOManager.setTitle(title);
    SEOManager.setMetaTag('description', description);
    SEOManager.setCanonicalUrl(window.location.href);
    SEOManager.setOpenGraphTag('og:title', title);
    SEOManager.setOpenGraphTag('og:description', description);
  }

  updateMessage(newMessage) {
    this.render(); // Render ulang view
  }

  render() {
    this.setSeo();
    const data = {
      content: `
        <div id="page-container">
          <div class="section">
            <h1>Informasi</h1>
            <small><b>My SPA Website </b> - <code>Version 1.0.1</code></small>
            <p>
              Website ini merupakan <b>Single Page Application</b>, yang dikemas sedemikian mungkin menggunakan JavaScript, Html dan CSS dalam pengembangannya.
            </p>
            <b>Development Dependencies</b> <br>
            <small><code>Version 1.0.0</code></small>
            <ul>
              <li>javascript-obfuscator <code>^4.1.1</code></li>
              <li>rollup-plugin-obfuscator <code>^1.1.0</code></li>
              <li>terser <code>^5.39.0</code></li>
              <li>vite <code>^6.2.0</code></li>
            </ul>
            <b>Tahap Pengembangan</b> <br>
            <small><code>Version 1.0.0</code></small>
            <ul>
              <li>Ide Website Pribadi dengan konsep SPA</li>
              <li>Membuat Struktur Folder</li>
              <li>Menentukan Teknologi yang digunakan Node, NPM, Libsraries, Vite, JavaScript, Html, CSS, Konsep Modern Javascript (SPA)</li>
              <li>Manajemen File (route, state, templating etc)</li>
              <li>Styling Halaman Dekstop, Tablet, Mobile (Responsive)</li>
              <li>Membuat Halaman Utama</li>
              <li>Membuat Halaman Tentang Saya</li>
              <li>Membuat Halaman Portofolio</li>
              <li>Membuat Halaman Blogs</li>
              <li>Membuat Halaman Informasi</li>
            </ul>
            <small><code>Version 1.0.1</code></small>
            <ul>
              <li>Perbaikan Routing</li>
            </ul>
            <small><code>Version 1.0.2</code></small>
            <ul>
              <li>Perbaikan styles</li>
            </ul>
          </div>
        </div>
      `,
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

export default InfomationPage;