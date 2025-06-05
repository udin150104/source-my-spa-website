import { calculateAge } from '../libs/age';
import { SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class About {
  constructor() {
    this.localState = {

    };
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

  render() {
    this.setSeo();

    const today = new Date();
    const parag1 = `
     Saya adalah seorang <b>Software Developer</b> lulusan <b>Universitas Swasta di Yogyakarta</b>, jurusan <b>Teknik Informatika (S.Kom)</b>. Sejak 2015, saya telah aktif mengembangkan aplikasi berbasis web, dimulai dari proyek <b>Kuliah Kerja Praktik (KKP)</b> dan <b>skripsi</b>, menggunakan <b>PHP, JavaScript, HTML, dan CSS</b> secara native melalui editor <b>Notepad++</b>. Dari pengalaman awal tersebut, minat saya pada pengembangan perangkat lunak tumbuh dan terus berkembang hingga kini. 
    `;
    const parag2 = `
      Saya telah terlibat dalam berbagai proyek dengan tantangan dan ruang lingkup yang beragam. Saya percaya bahwa perkembangan teknologi yang sangat cepat menuntut setiap developer untuk terus belajar dan beradaptasi. Meskipun demikian, saya tetap fokus pada pengembangan aplikasi berbasis web, khususnya dengan bahasa pemrograman PHP, sebagai keahlian utama yang terus saya kembangkan untuk menciptakan aplikasi yang fungsional dan relevan dengan kebutuhan pengguna.
    `;
    // const parag3 = `
    //   Saya saat ini membuka jasa <b>freelance pengembangan website</b>, baik untuk kebutuhan personal, bisnis, maupun institusi. Seluruh proyek yang saya tangani berada di bawah <b>perjanjian kerahasiaan (NDA)</b>, guna menjaga privasi dan keamanan data klien.
    // `;

    const parag3 = `
      Saya terbiasa bekerja secara individu maupun dalam tim kolaboratif, dengan pengalaman menggunakan berbagai tools manajemen proyek dan komunikasi, seperti <b>Trello, Slack, GitLab, GitHub, Zoom, dan Microsoft Teams<b/>.  
    `;
    const birthdata = '1992-08-17';
    const age = calculateAge(birthdata);
    const data = {
      content: `
        <div id="page-container">
          <div class="section">
            <h1>Tentang Saya</h1>
            <h3>Syahrudin Simanjuntak (♂️ Laki-laki)</h3>
            <p>Usia: ${age.years} tahun ${age.months} bulan ${age.days} hari</p>
            <p>Status: Menikah </p>
            <p>Domisili: Indonesia </p>
            <p>${parag1}</p>
            <p>${parag2}</p>
            <p>${parag3}</p>
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

export default About;