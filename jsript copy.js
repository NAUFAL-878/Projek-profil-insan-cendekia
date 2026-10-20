<section class="panel-foto">
  <h2>📸 Ganti Foto Website</h2>
  <p>Klik foto website yang ingin diganti, lalu pilih foto dari komputer.</p>

  <input
    type="file"
    id="pilihFoto"
    accept="image/*"
  />

  <button type="button" onclick="gantiFoto()">
    Ganti Foto Terpilih
  </button>

  <p id="statusFoto">Belum ada foto yang dipilih.</p>
</section>

<style>
.panel-foto {
  max-width: 500px;
  margin: 25px auto;
  padding: 22px;
  background: #ffffff;
  border: 1px solid #dbeafe;
  border-radius: 15px;
  box-shadow: 0 5px 20px #00000012;
  font-family: Arial, sans-serif;
}

.panel-foto h2 {
  color: #1d4ed8;
  margin-top: 0;
}

.panel-foto input {
  display: block;
  width: 100%;
  margin: 15px 0;
}

.panel-foto button {
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.panel-foto button:hover {
  background: #1e40af;
}

/* Foto yang dapat diganti */
.foto-bisa-diganti {
  cursor: pointer;
  transition: 0.2s;
}

.foto-bisa-diganti:hover {
  outline: 3px solid #3b82f6;
  outline-offset: 3px;
}
</style>

<script>
let fotoTerpilih = null;

// Klik foto di website untuk memilihnya
document.querySelectorAll(".foto-bisa-diganti")
.forEach(function(foto) {
  foto.addEventListener("click", function() {
    fotoTerpilih = foto;

    document.getElementById("statusFoto").textContent =
      "Foto terpilih: " + (foto.alt || "Foto website");
  });
});

function gantiFoto() {
  const input = document.getElementById("pilihFoto");
  const status = document.getElementById("statusFoto");
  const file = input.files[0];

  if (!fotoTerpilih) {
    status.textContent = "Klik dahulu foto website yang ingin diganti.";
    return;
  }

  if (!file) {
    status.textContent = "Silakan pilih foto dari komputer.";
    return;
  }

  if (!file.type.startsWith("image/")) {
    status.textContent = "File harus berupa gambar.";
    return;
  }

  // Batasi ukuran file hingga 10 MB
  if (file.size > 10 * 1024 * 1024) {
    status.textContent = "Ukuran foto maksimal 10 MB.";
    return;
  }

  const pembaca = new FileReader();

  pembaca.onload = function(e) {
    fotoTerpilih.src = e.target.result;
    status.textContent = "Foto berhasil diganti pada tampilan website!";
    input.value = "";
  };

  pembaca.readAsDataURL(file);
}
</script>