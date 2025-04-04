import { SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class Portofolio {
  constructor() {
    this.localState = { 

    };
  }

  setSeo() {
    // Atur tag SEO
    const title = 'Portofolio';
    const description = 'Portofolio page';

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
            <h1>Portofolio</h1>
            <h3>Keahlian & Teknologi</h3>            
            <ul>
                <li>
                    <b>Front-End</b> <br/>
                    <p>
                        HTML, CSS (Bootstrap, Bulma), JavaScript (CommonJs, Modern Javascript, OOP, JQuery, TypeScript, Node, Vue, React)
                    </p>
                </li>
                <li>
                    <b>Back-End</b> <br/>
                    <p>
                        PHP (OOP, Native, Framework CodeIgniter, Framework Laravel), Pyhton (Flask)
                    </p>
                </li>
                <li>
                    <b>RDBMS/Database</b> <br/>
                    <p>
                        SQLite, MySQL, Postgresql, Query
                    </p>
                </li>
                <li>
                    <b>Rest API</b> <br/>
                    <p>
                        JSON, Microservice, Postman
                    </p>
                </li>
                <li>
                    <b>Mobile</b> <br/>
                    <p>
                        React Native (Context, Provider, State, Props, Route)
                    </p>
                </li>
                <li>
                    <b>Pemahanan Konsep Pemprograman</b> <br/>
                    <p>
                        MVC, SPA, Kompiler(Vite,SCSS,SASS,Webpack), CSP, CORS
                    </p>
                </li>
                <li>
                    <b>Konfigurasi</b> <br/>
                    <p>
                        Share Hosting, VPS, NGINX, CI/CD, Docker, Load Balancer
                    </p>
                </li>
                <li>
                    <b>Manajemen Tim</b> <br/>
                    <p>
                        Trello, Github, Slack, Ms. Teams, GitLabs
                    </p>
                </li>
            </ul>
            <hr/>
            <h3>Pendidikan</h3>
            <p>
                <b> 2011 - 2017 | Universitas Respati Yogyakarta - Teknik Informatika - S1 (S.Kom) - Yogyakarta </b> <br/>
                KKP (Kuliah Kerja Praktik) : Sistem Informasi Raport SMA. <br>
                Skripsi : Sistem Pakar Eneagram Untuk Menentukan Kepribadian Seseorang. 
            </p>
            <p>
                <b> 2007 - 2010 | Madrasah Aliyah Negeri Sintang - IPS - Kalimantan Barat</b>
            </p>
            <hr/>
            <h3>Pengalaman</h3>
            <p>
                <b> Desember 2024 - Februari 2025 | Jasa Freelance - Software Developer</b> <br/>
                Proyek Pribadi 3 Bulan, Terlibat dalam pengembangan aplikasi untuk keperluan Perusahaan dalam negeri dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>. Fitur : Absensi, Gaji, Keuangan, Gudang dan laporan<br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, Laravel Framework, MySQL. <br/>
                Bekerja secara : Individu <br/>
            </p>
            <p>
                <b>Agustus 2023 - November 2023 | Krenovator Sdn Bhd - OutSystems Developer</b> <br/>
                Bergabung selama 3 bulan, Terlibat dalam pengembangan aplikasi untuk keperluan klien perusahaan dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>.<br/>
                <ul>
                    <li>Repointing data dari database lama ke database baru</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam Platform Outsystems</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : English (Basic), Melayu, Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, OutSystems. <br/>
                Bekerja secara : Tim <br/>
                Keterangan : Orang-orang nya baik-baik. <br/>
            </p>
            <p>
                <b>Pertengahan 2022 - 2022 | Jasa Freelance - Software Developer</b> <br/>
                Proyek Pribadi pertengahan tahun 2022, 6 Bulan, Terlibat dalam pengembangan aplikasi untuk keperluan Perusahaan dalam negeri dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>.<br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, Laravel Framework, MySQL. <br/>
                Bekerja secara : Tim <br/>
                Keterangan : Orang-orang nya baik-baik. <br/>
            </p>
            <p>
                <b>Pertengahan 2020 - 2020 | Jasa Freelance - Software Developer</b> <br/>
                Proyek Pribadi pertengahan tahun 2020, 3 Bulan, Terlibat dalam pengembangan aplikasi untuk keperluan Perusahaan dalam negeri dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>.<br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, Laravel Framework, MySQL. <br/>
                Bekerja secara : Tim <br/>
                Keterangan : Orang-orang nya baik-baik. <br/>
            </p>
            <p>
                <b>2019 - Juli 2023 | PT. Pilar Cipta Solusi Integratika - Software Developer</b> <br/>
                Bergabung kembali (di kontak), Sifat Tetap, Terlibat dalam pengembangan aplikasi untuk keperluan perusahaan dan klien perusahaan dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>. Dari proyek website profile perusahaan, proyek aplikasi manajemen file sampai proyek aplikasi manajemen persuratan. <br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, CodeIgniter Framework, CodeIgniter Libraries, Laravel Framework, MicroService, Rest API, MySQL, Postgresql, Git, Slack, Trello, Docker, Node, Vue, React, React Native, Python (flask). <br/>
                Bekerja secara : Tim maupun individu <br/>
                Keterangan : Orang-orang nya baik-baik. <br/>
            </p>
            <p>
                <b>Pertengahan 2018 - 2018 | Jasa Freelance - Software Developer</b> <br/>
                Proyek Pribadi pertengahan tahun 2018, 3 Bulan, Terlibat dalam pengembangan aplikasi untuk keperluan UMKM dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>. Proyek pergudangan mencatat stock barang UMKM.<br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, Laravel Framework, MySQL. <br/>
                Bekerja secara : Individu <br/>
            </p>
            <p>
                <b>2018 - 2019 | CV. Devolusi Media Digital - Software Developer</b> <br/>
                Bergabung tahun 2018 - 2019, Sifat Kontrak, Terlibat dalam pengembangan aplikasi untuk keperluan perusahaan dan klien perusahaan dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>.<br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, CodeIgniter Framework, CodeIgniter Libraries, Laravel Framework, MicroService, Rest API, MySQL, Git. <br/>
                Bekerja secara : Tim maupun individu <br/>
                Keterangan : Orang-orang nya baik-baik. <br/>
            </p>
            <p>
                <b>2017 - 2018 | PT. Pilar Cipta Solusi Integratika - Software Developer</b> <br/>
                Bergabung tahun 2017 - 2018 (bulannya lupa 😅, se-ingat saya 1 tahun pas), Sifat Tetap, Terlibat dalam pengembangan aplikasi untuk keperluan perusahaan dan klien perusahaan dengan ketentuan <a href="https://kontrakhukum.com/article/nda-adalah/" target="_blank"> NDA <i>(Non-Disclosure Agreement)</i></a>. Dari proyek website profile perusahaan, proyek aplikasi manajemen file sampai proyek aplikasi manajemen persuratan. <br/>
                <ul>
                    <li>Mengembangkan modul CRUD (Create, Read, Update dan Delete) dalam pengelolaan data aplikasi web base</li>
                    <li>Mengembangkan Fitur lain dalam pengelolaan aplikasi web base seusai kebutuhan klien</li>
                    <li>Mengimplementasikan desain UI/UX yang disediakan oleh tim(atas permintaan klien) kedalam kode html, javascript, css dan php</li>
                    <li>Debugging, Problem code Solving, Optimasi dan Implementasi fitur.</li>
                </ul>
                Bahasa : Indonesia. <br/>
                Teknologi : HTML, CSS, JavaScript, Jquery, Php Native, Php OOP, CodeIgniter Framework, CodeIgniter Libraries, Laravel Framework, MicroService, Rest API, MySQL, Postgresql, Git, Slack, Trello. <br/>
                Bekerja secara : Tim maupun individu <br/>
                Keterangan : Banyak pengalaman dan orang-orang nya baik-baik. <br/>
            </p>
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

export default Portofolio;