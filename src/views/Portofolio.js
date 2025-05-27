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
                <h1>Portofolio & Pengalaman</h1>
                <h2>Kompetensi & Teknologi</h2>    
            
                <h3>Front-End</h3>
                <ul>
                    <li><strong>Bahasa & Framework:</strong> HTML, CSS (Bootstrap, Bulma)</li>
                    <li><strong>JavaScript:</strong> CommonJS, Modern JS, OOP, jQuery, TypeScript</li>
                    <li><strong>Library / Framework:</strong> Vue, React</li>
                </ul>

                <h3>Back-End</h3>
                <ul>
                    <li><strong>PHP:</strong> Native, OOP, CodeIgniter, Laravel</li>
                    <li><strong>Python:</strong> Flask</li>
                </ul>

                <h3>Database</h3>
                <ul>
                    <li><strong>RDBMS:</strong> MySQL, PostgreSQL, SQLite</li>
                    <li><strong>Query:</strong> CRUD, Join, Aggregation, Indexing</li>
                </ul>

                <h3>API & Integrasi Teknologi</h3>
                <ul>
                    <li><strong>Teknologi:</strong> RESTful API, JSON, Microservices</li>
                    <li><strong>Tools:</strong> Postman</li>
                </ul>

                <h3>Mobile Development</h3>
                <ul>
                    <li><strong>Framework:</strong> React Native</li>
                    <li><strong>Konsep:</strong> State, Props, Context, Navigation</li>
                </ul>

                <h3>Konsep Arsitektur & Toolchain</h3>
                <ul>
                    <li><strong>Arsitektur:</strong> MVC, SPA</li>
                    <li><strong>Toolchain:</strong> Vite, SCSS/SASS, Webpack</li>
                    <li><strong>Security:</strong> CSP, CORS</li>
                </ul>

                <h3>Deployment & Konfigurasi</h3>
                <ul>
                    <li><strong>Server:</strong> Shared Hosting, VPS</li>
                    <li><strong>Teknologi:</strong> NGINX, CI/CD, Docker, Load Balancer</li>
                </ul>

                <h3>Manajemen Proyek & Tim</h3>
                <ul>
                    <li><strong>Tools:</strong> Trello, GitHub, GitLab, Slack, Microsoft Teams, Zoom</li>
                </ul>
            
                <hr/>
                <h2>🎓 Pendidikan</h2>

                <ul>
                    <li>
                        <strong>2011 – 2017</strong><br>
                        Universitas Respati Yogyakarta<br>
                        S1 Teknik Informatika (S.Kom) – Yogyakarta
                        <ul>
                        <li><strong>KKP:</strong> Sistem Informasi Raport SMA</li>
                        <li><strong>Skripsi:</strong> Sistem Pakar Enneagram untuk Menentukan Kepribadian Seseorang</li>
                        </ul>
                    </li>
                    <li>
                        <strong>2007 – 2010</strong><br>
                        Madrasah Aliyah Negeri Sintang – Kalimantan Barat<br>
                        Jurusan: Ilmu Pengetahuan Sosial (IPS)
                    </li>
                </ul>
                <hr/>
                <h2>🧩 Pengalaman Kerja</h2>
                <ul>
                    <li>
                        <strong>2024 – 2025 | Freelance Software Developer</strong><br>
                        Membangun aplikasi internal perusahaan (Absensi, Gaji, Keuangan, Gudang, Laporan)<br>
                        Tools: HTML, CSS, JS, PHP Native, Laravel, MySQL
                    </li>
                    <li>
                        <strong>2023 | Krenovator Sdn Bhd – OutSystems Developer</strong><br>
                        Migrasi data, implementasi UI di platform OutSystems<br>
                        Tools: HTML, CSS, JS, jQuery, OutSystems
                    </li>
                    <li>
                        <strong>2022 | Freelance Project (6 Bulan)</strong><br>
                        Pengembangan aplikasi internal perusahaan dengan Laravel dan MySQL<br>
                        Bekerja dalam tim
                    </li>
                    <li>
                        <strong>2020 | Freelance Project (3 Bulan)</strong><br>
                        Proyek internal perusahaan menggunakan Laravel<br>
                        Bekerja individu
                    </li>
                    <li>
                        <strong>2019 – 2023 | PT. Pilar Cipta Solusi Integratika</strong><br>
                        Aplikasi manajemen file & persuratan (Web-based)<br>
                        Tools: CodeIgniter, Laravel, Vue, React, Docker, REST API
                    </li>
                    <li>
                        <strong>2018 | Freelance Developer (3 Bulan)</strong><br>
                        Sistem stok pergudangan UMKM<br>
                        Bekerja individu
                    </li>
                    <li>
                        <strong>2018 – 2019 | CV. Devolusi Media Digital</strong><br>
                        Proyek aplikasi internal & klien (NDA)<br>
                        Tools: CodeIgniter, Laravel, Git
                    </li>
                    <li>
                        <strong>2017 – 2018 | PT. Pilar Cipta Solusi Integratika</strong><br>
                        Proyek awal: aplikasi profil, manajemen file & persuratan<br>
                        Tools: CodeIgniter, PostgreSQL, Git, Trello
                    </li>
                </ul>
                <h2>✨ Catatan Tambahan</h2>

                <ul>
                    <li>Semua proyek berada dalam lingkup Non-Disclosure Agreement (NDA).</li>
                    <li>Terbiasa bekerja dalam berbagai skenario: mandiri, tim lokal, maupun tim remote lintas negara.</li>
                    <li>Memiliki kemampuan komunikasi lintas bahasa (Bahasa Indonesia, Melayu, Bahasa Inggris dasar).</li>
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

export default Portofolio;