class SEOManager {
    constructor() {
        this.defaultTitle = 'My SPA App'; // Judul default
    }

    // Set judul halaman
    setTitle(title) {
        document.title = title || this.defaultTitle;
    }

    // Tambahkan atau perbarui meta tag
    setMetaTag(name, content) {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = name;
            document.head.appendChild(metaTag);
        }
        metaTag.content = content;
    }

    // Hapus meta tag
    removeMetaTag(name) {
        const metaTag = document.querySelector(`meta[name="${name}"]`);
        if (metaTag) {
            metaTag.remove();
        }
    }

    // Set canonical URL
    setCanonicalUrl(url) {
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.href = url;
    }

    // Set Open Graph tags
    setOpenGraphTag(property, content) {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (!ogTag) {
            ogTag = document.createElement('meta');
            ogTag.setAttribute('property', property);
            document.head.appendChild(ogTag);
        }
        ogTag.content = content;
    }

    // Bersihkan semua tag SEO yang sudah diatur
    clear() {
        document.title = this.defaultTitle;
        const seoMetaTags = document.querySelectorAll('meta[name^="seo-"], meta[property^="og:"], link[rel="canonical"]');
        seoMetaTags.forEach((tag) => tag.remove());
    }
}

export default new SEOManager(); // Ekspor instance singleton