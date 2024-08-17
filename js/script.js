document.getElementById("envelope").addEventListener("click", function () {
  document.getElementById("envelope").classList.remove("active");
  document.getElementById("mainContent").classList.add("active");

  // Putar audio saat amplop dibuka
  const audio = document.getElementById("anniversaryAudio");

  // Pastikan audio dapat diputar
  audio
    .play()
    .then(() => {
      console.log("Audio is playing.");
    })
    .catch((error) => {
      console.error("Error playing audio:", error);
    });

  // Menampilkan tanggal jadian dan waktu saat ini
  displayDates();

  // Fungsi untuk menghitung waktu yang telah berlalu
  calculateTimePassed();
});

function displayDates() {
  const anniversaryDate = new Date("2018-08-18");
  const currentDate = new Date();

  // Format tanggal: day, month, year
  const options = { day: "2-digit", month: "long", year: "numeric" };

  // Tampilkan tanggal jadian
  const formattedAnniversaryDate = anniversaryDate.toLocaleDateString(
    "en-GB",
    options
  );
  document.getElementById(
    "tglJadian"
  ).innerText = `${formattedAnniversaryDate} to ${currentDate.toLocaleDateString(
    "en-GB",
    options
  )}`;
}

function calculateTimePassed() {
  const anniversaryDate = new Date("2018-08-18");
  const currentDate = new Date();

  // Hitung tahun, bulan, dan hari
  let years = currentDate.getFullYear() - anniversaryDate.getFullYear();
  let months = currentDate.getMonth() - anniversaryDate.getMonth();
  let days = currentDate.getDate() - anniversaryDate.getDate();

  // Jika hari saat ini lebih kecil dari hari anniversary, kurangi bulan
  if (days < 0) {
    months--;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += previousMonth.getDate();
  }

  // Jika bulan saat ini lebih kecil dari bulan anniversary, kurangi tahun
  if (months < 0) {
    years--;
    months += 12;
  }

  // Menampilkan hasil di elemen dengan id 'timePassed'
  document.getElementById(
    "timePassed"
  ).textContent = `${years} tahun ${months} bulan ${days} hari`;
}
document.getElementById("iya").addEventListener("click", function () {
  window.location.href = "./pages/gallery.html";
});
document.getElementById("tidak").addEventListener("click", function () {
  window.location.href = "./pages/not-funny.html";
});
// Event listener untuk tombol 'Tidak'
// document.getElementById("tidak").addEventListener("click", function () {
//   alert("Semoga kamu berubah pikiran. 😢");
// });
