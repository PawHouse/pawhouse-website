// Menangani submit form
document.getElementById("adoptForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil semua data form
    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Ambil data lama dari localStorage
    const saved = JSON.parse(localStorage.getItem("adoption_submissions")) || [];

    // Tambahkan data baru
    saved.push(data);

    // Simpan lagi
    localStorage.setItem("adoption_submissions", JSON.stringify(saved));

    // Notifikasi sukses
    showNotification("Data adopsi berhasil dikirim!");

    // Reset form
    this.reset();
});

// Fungsi menampilkan notifikasi
function showNotification(message) {
    const box = document.createElement("div");
    box.className = "notif-box";
    box.textContent = message;

    document.body.appendChild(box);

    setTimeout(() => {
        box.classList.add("show");
    }, 10);

    // Hilang setelah 3 detik
    setTimeout(() => {
        box.classList.remove("show");
        setTimeout(() => box.remove(), 300);
    }, 3000);
}
