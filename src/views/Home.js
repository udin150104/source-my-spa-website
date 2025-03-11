import { state, SEOManager, Template } from './../core';
import DefaultTemplate from './templates/DefaultTemplate';
import logo from './../../public/images/logo.svg';
import mail from './../../public/images/mail.svg';
import identification from './../../public/images/identification.svg';
import bookOpen from './../../public/images/bookOpen.svg';
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

  // updateCount(count) {
  //   const countElement = document.getElementById('count');
  //   if (countElement) {
  //     countElement.textContent = `Count: ${count}`;
  //   }
  // }

  // handleIncrement() {
  //   const currentCount = state.getState('count') || 0;
  //   state.setState('count', currentCount + 1); // Update global state
  // }

  render() {
    this.setSeo();

    const birthdata = '1992-08-17';
    const age = calculateAge(birthdata);

    // const count = state.getState('count') || 0;
    const data = {
      content: `
        <div id="home-container">
          <div class="section">
            <div class="header">
              <img src="${logo}" class="logo" alt="image svg" />
              <div>
                <h1>Syahrudin Simanjuntak</h1>
                <small>Umur ${age.years} tahun ${age.months} bulan ${age.days} hari | Laki-laki | Menikah | Indonesia</small>
              </div>
            </div>
            <div class="content">
              <a href="mailto:udin150104@gmail.com">
                <img src="${mail}" class="ico" alt="icon email" />
                Email
              </a>
              <a href="https://github.com/udin150104" target="_blank">Github</a>
              <a href="/about" data-link> 
                <img src="${logo}" class="ico" alt="ico profile" />
                Tentang Saya
              </a>
              <a href="/portofolio" data-link>
                <img src="${identification}" class="ico" alt="icon identification" />
                Portofolio
              </a>
              <a href="/blogs" data-link>
                <img src="${bookOpen}" class="ico" alt="icon book open" />
                Blogs
              </a>
            </div>
          </div>
        </div>
      `,
    };

    return Template.render(DefaultTemplate(), data);
  }

  onMount() {
    // const incrementBtn = document.getElementById('increment-btn');
    // if (incrementBtn) {
    //   incrementBtn.addEventListener('click', () => this.handleIncrement());
    // }
    // Bersihkan tag SEO saat view di-unmount (opsional)
    // SEOManager.clear();
  }
}

export default Home;