import { state, SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class Blogs {
  constructor() {
    this.localState = { 

    };
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

  render() {
    this.setSeo();
    const data = {
      content: `
        <div id="page-container">
          <div class="section">
            <h1>Blogs</h1>
            <p>Cooming Soon 😁</p>
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

export default Blogs;