class State {
  constructor() {
    this.state = {}; // Menyimpan state global
    this.listeners = {}; // Menyimpan listener untuk reaktivitas
  }

  // Set state global
  setState(key, value) {
    this.state[key] = value;
    this.notify(key); // Panggil listener jika ada
  }

  // Get state global
  getState(key) {
    return this.state[key];
  }

  // Tambahkan listener untuk reaktivitas
  subscribe(key, listener) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(listener);
  }

  // Panggil semua listener ketika state berubah
  notify(key) {
    if (this.listeners[key]) {
      this.listeners[key].forEach((listener) => listener(this.state[key]));
    }
  }
}

export default new State(); // Ekspor instance singleton