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
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun aplikasi internal perusahaan (Absensi, Gaji, Keuangan, Gudang, Laporan) <br>
                        Bekerja individu
                    </li>
                    <li>
                        <strong>2023 | Krenovator Sdn Bhd – OutSystems Developer</strong><br>
                        Peran : Frontend <br/>
                        Migrasi data, implementasi UI di platform OutSystems<br>
                        Bekerja dalam tim
                    </li>
                    <li>
                        <strong>2022 | Freelance Project (6 Bulan)</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun aplikasi pendaftaran keanggotaan untuk sebuah instansi <br>
                        Bekerja dalam tim
                    </li>
                    <li>
                        <strong>2020 | Freelance Project (3 Bulan)</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun aplikasi internal perusahaan <br>
                        Bekerja individu
                    </li>
                    <li>
                        <strong>2019 – 2023 | PT. Pilar Cipta Solusi Integratika</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Berkolaborasi dalam membangun dan mengembangkan Aplikasi manajemen file & persuratan<br>
                        Berkolaborasi dalam membangun dan mengembangkan Website Company Profile Klien<br>
                        Bekerja dalam tim
                    </li>
                    <li>
                        <strong>2018 | Freelance Developer (3 Bulan)</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun Sistem informasi pergudangan UMKM<br>
                        Bekerja individu
                    </li>
                    <li>
                        <strong>2018 – 2019 | CV. Devolusi Media Digital</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun dan mengembangkan aplikasi internal & klien (NDA)<br>
                        Bekerja dalam tim
                    </li>
                    <li>
                        <strong>2017 – 2018 | PT. Pilar Cipta Solusi Integratika</strong><br>
                        Peran : Backend, Frontend, Fullstack <br/>
                        Membangun dan mengembangkan aplikasi profil, manajemen file & persuratan<br>
                        Bekerja dalam tim
                    </li>
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