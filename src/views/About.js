import { state, SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";
import { calculateAge } from '../libs/age';

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
      Seorang Software Developer Lulusan Universitas Swasta di Yogyakarta, jurusan Teknik Informatika (S1 - S.Kom). Berfokus pada pemprograman berbasis web. Pengalaman dalam bidang ini sejak kuliah (2015 | KKP - Skripsi) sampai saat ini ${today.getFullYear()}, bermula dari mengerjakan Tugas KKP (Kuliah Kerja Praktik) dengan bahasa pemprograman PHP, JavaScript, HTML dan CSS secara Native dengan menggunakan Editor Notepad++ pada saat proses itulah ketertarikan itu muncul 😁, hingga kini banyak pengalaman yang telah didapatkan dan dikarenakan perkembangan teknologi yang sangat cepat dituntut untuk selalu belajar terus. 
    `;
    const parag2 = `
      Saat ini membuka jasa freelance pembuatan/pengembangan website (cari tambahan 😅), seluruh proyek yang pernah saya tangani bersifat <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> 🗎 NDA <i>(Non-Disclosure Agreement)</i></a> memastikan kerahasiaan dan keamanan informasi klien.
    `;
    const parag3 = `
      Terbiasa bekerja baik secara individu maupun tim, dengan pengalaman dalam menejemen tugas dan kolaborasi tim menggunakan Trello, Slack, GitLabs, Github, Zoom, Ms. Team dll.  
    `;
    const birthdata = '1992-08-17';
    const age = calculateAge(birthdata);
    const data = {
      content: `
        <div id="page-container">
          <div class="section">
            <h1>Tentang Saya</h1>
            <p>Syahrudin Simanjuntak | Umur ${age.years} tahun ${age.months} bulan ${age.days} hari | ♂️ Laki-laki | 💍 Menikah | 🇮🇩 - 📍Indonesia.</p>
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