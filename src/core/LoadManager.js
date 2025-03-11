class LoadingManager {
    constructor() {
        this.progress = 0; // Persentase loading (0-100)
        this.loadingElement = null; // Elemen progress bar di DOM
    }

    // Inisialisasi progress bar
    init() {
        this.loadingElement = document.createElement('div');
        this.loadingElement.classList.add('loading');
        this.loadingElement.classList.add('none');
        document.body.appendChild(this.loadingElement);
    }

    // Update progress bar
    setProgress(progress) {
        this.progress = progress;
        if (this.loadingElement) {
            this.loadingElement.classList.remove('none');
            this.loadingElement.style.width = `${progress}%`;
        }
    }

    // Sembunyikan progress bar setelah loading selesai
    complete() {
        this.setProgress(100);
        setTimeout(() => {
            if (this.loadingElement) {
                this.loadingElement.classList.add('none');
                this.loadingElement.removeAttribute('style');
            }
        }, 300); // Beri sedikit delay sebelum menghilangkan progress bar
    }

    // Reset progress bar
    reset() {
        this.progress = 0;
        if (this.loadingElement) {
            this.loadingElement.style.width = '0%';
            this.loadingElement.style.display = 'block';
            this.loadingElement.removeAttribute('style');
            this.loadingElement.classList.add('none');
        }
    }
}

export default new LoadingManager(); // Ekspor instance singleton