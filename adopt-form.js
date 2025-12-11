import { supabase } from "./supabase.js";

// Menangani submit form
document.getElementById("adoptForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    // Ambil semua data form
    const data = {
        fullName: document.getElementById("name").value,
        emailAddress: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        residenceType: document.getElementById("residence").value,
        landlordContact: document.getElementById("landlord").value,
        petInterest: document.getElementById("petInterest").value,
        petExperience: document.getElementById("experience").value,
        agreement: document.getElementById("agreement").checked
    };

    const { error } = await supabase.from("adoption").insert([data]);

    if (error) {
        alert("❌ Gagal menyimpan ke database Supabase!");
        console.error(error);
        return;
    }

    alert("✔ Berhasil tersimpan ke Supabase!");
    event.target.reset();
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