import { SEOManager, Template } from './../core';
import PageTemplate from "./templates/PageTemplate";

class Portofolio {
    constructor() {
        this.localState = {

        };
    }

    async loadHtmlContent() {
        const res = await fetch('/pages/portofolio.html');
        return await res.text();
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

        const loadHtml = await this.loadHtmlContent();
        let html = this.injectTemplate(loadHtml);
        const data = {
            content: html
        };
        return Template.render(PageTemplate(), data);

    }

    onMount() {
        const sliders = document.querySelectorAll('.slider-wrapper');

        sliders.forEach(wrapper => {
            const slider = wrapper.querySelector('.image-collection');
            const prevBtn = wrapper.querySelector('.prev-btn');
            const nextBtn = wrapper.querySelector('.next-btn');

            // Navigasi tombol
            prevBtn?.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });

            nextBtn?.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });

            let isDown = false;
            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                isDragging = false;
                slider.classList.add('active');
                startX = e.pageX;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
                setTimeout(() => isDragging = false, 0); // reset agar klik bisa setelah mouse up
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                isDragging = true;
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 1.5;
                slider.scrollLeft = scrollLeft - walk;
            });

            // Touch support
            slider.addEventListener('touchstart', (e) => {
                isDown = true;
                isDragging = false;
                startX = e.touches[0].pageX;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('touchend', () => {
                isDown = false;
                setTimeout(() => isDragging = false, 0);
            });

            slider.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                isDragging = true;
                const x = e.touches[0].pageX;
                const walk = (x - startX) * 1.5;
                slider.scrollLeft = scrollLeft - walk;
            });

            // Gambar klik → modal
            const images = slider.querySelectorAll('.img-collection-item');
            images.forEach(img => {
                img.setAttribute('draggable', 'false'); // prevent default browser drag
                img.addEventListener('click', (e) => {
                    if (isDragging) return; // ✅ Jangan buka modal jika drag
                    const modal = document.getElementById('image-modal');
                    const modalImg = document.getElementById('modal-image');
                    modal.classList.remove('d-none');
                    modalImg.src = img.src;
                });
            });
        });

        // ❌ Tutup modal
        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('image-modal').classList.add('d-none');
        });

        document.getElementById('image-modal').addEventListener('click', (e) => {
            if (e.target.id === 'image-modal') {
                document.getElementById('image-modal').classList.add('d-none');
            }
        });

    }
}

export default Portofolio;