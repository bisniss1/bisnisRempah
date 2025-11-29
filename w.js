document.addEventListener('DOMContentLoaded', function() {
    // 1. GANTI DENGAN NOMOR WHATSAPP ELFOOD ANDA (Format: 628xxxxxxx)
    const whatsappNumber = '6285777206416'; // Nomor Elfood

    const form = document.getElementById('orderForm');

    form.addEventListener('submit', function(e) {
        // Mencegah halaman reload
        e.preventDefault();

        // 2. Ambil nilai dari input formulir
        const nama = document.getElementById('nama').value.trim();
        const alamat = document.getElementById('alamat').value.trim();
        const noWa = document.getElementById('no_wa').value.trim();
        const varian = document.getElementById('varian').value.trim();
        
        // Cek status checkbox
        const sharelockCheckbox = document.getElementById('sharelock');
        const kirimSharelock = sharelockCheckbox.checked ? 'Ya, Bersedia Kirim Sharelock' : 'Tidak Perlu Sharelock';

        // 3. Lakukan Validasi dasar
        if (!nama || !alamat || !noWa || !varian) {
            alert('Mohon lengkapi semua kolom yang wajib diisi.');
            return;
        }

        // 4. Susun Pesan WhatsApp
        const message = 
            `*ORDER BARU ELFOOD*% \n\n` +
            `==========================\n` +
            `Nama Pemesan: ${nama}\n` +
            `Nomor WA: ${noWa}\n` +
            `Alamat Lengkap:\n${alamat}\n\n` +
            `Permintaan Sharelock: ${kirimSharelock}\n` +
            `==========================\n` +
            `*DETAIL PESANAN:*\n` +
            `${varian}\n\n` +
            `Mohon segera diproses. Terima kasih!`;

        // 5. Encode pesan dan buat link WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // 6. Buka tab baru dengan link WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Opsional: Reset form setelah data dikirimkan
        form.reset();
    });
});