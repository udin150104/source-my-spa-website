export function calculateAge(birthdate) {
    // Tanggal hari ini
    const today = new Date();
  
    // Tanggal lahir
    const birthDate = new Date(birthdate);
  
    // Hitung selisih tahun
    let age = today.getFullYear() - birthDate.getFullYear();
  
    // Hitung selisih bulan
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Jika bulan lahir belum terjadi tahun ini, kurangi umur 1 tahun
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Hitung selisih bulan dan hari
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
  
    let monthAge = currentMonth - birthMonth;
    let dayAge = currentDay - birthDay;
  
    // Jika hari lahir belum terjadi bulan ini, kurangi bulan 1 dan tambahkan 30 hari
    if (dayAge < 0) {
      monthAge--;
      dayAge += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    // Jika bulan lahir belum terjadi tahun ini, tambahkan 12 bulan
    if (monthAge < 0) {
      monthAge += 12;
    }
  
    return {
      years: age,
      months: monthAge,
      days: dayAge,
    };
  }