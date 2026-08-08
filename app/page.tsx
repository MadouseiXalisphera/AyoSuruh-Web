import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-gray-900 font-sans overflow-x-hidden scroll-smooth">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#FFFDF9]/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex justify-between items-center py-4 px-6 md:px-10 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image 
              src="/AyoSuruh-Web/AYOS/ayos11.jpeg" 
              alt="Logo ayoSuruh" 
              width={50} 
              height={50}
              className="mix-blend-multiply object-contain"
            />
            <span className="hidden md:block font-black text-2xl text-[#8EAC79] tracking-wider">
              AYO SURUH
            </span>
          </div>
          
          {/* Menu Tengah */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#" className="text-[#F18B33]">Beranda</a>
            <a href="#profil-bisnis" className="hover:text-[#F18B33] transition">Tentang Kami</a>
            <a href="#visi-misi" className="hover:text-[#F18B33] transition">Visi Misi</a>
            <a href="#layanan" className="hover:text-[#F18B33] transition">Layanan</a>
            <a href="#aplikasi" className="hover:text-[#F18B33] transition">Aplikasi</a>
            <a href="#testimoni" className="hover:text-[#F18B33] transition">Testimoni</a>
          </div>

          {/* Tombol Kanan */}
          <a href="https://wa.me/628895255693" target="_blank" className="bg-[#F18B33] hover:bg-[#d9792a] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-orange-200/50 transition w-full sm:w-auto text-center cursor-pointer">
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-12 md:pt-40 z-10">
        
        {/* Kiri: Copywriting */}
        <div className="md:w-1/2 space-y-6 mt-12 md:mt-0 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Selamat datang di website <br />
            <span className="text-[#F18B33]">ayoSuruh</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed font-medium">
            Platform aplikasi mobile yang mempertemukan mahasiswa yang membutuhkan bantuan dengan mitra yang ingin mendapatkan penghasilan tambahan secara cepat, aman, dan fleksibel. Serahkan kebutuhan harianmu pada kami agar tidak mengganggu jadwal kuliah. Butuh bantuan? ayoSuruh kami.<span className="text-[#8EAC79] font-bold">Butuh bantuan? Ayo suruh kami!</span> 
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <a href="#layanan"  className="bg-[#F18B33] hover:bg-[#d9792a] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-orange-200/50 transition w-full sm:w-auto text-center cursor-pointer">
              Layanan Kami
            </a>
            <a 
              href="/AyoSuruh-Web/ayoSuruh.apk"
              download="ayoSuruh-App.apk" 
              className="flex items-center text-gray-700 hover:text-[#F18B33] font-bold transition gap-3 w-full sm:w-auto justify-center sm:justify-start group cursor-pointer"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#F18B33] text-[#F18B33] group-hover:bg-[#F18B33] group-hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
              <span>Download Aplikasi</span>
            </a>
          </div>
        </div>

        {/* Kanan: Visual Placement */}
        <div className="md:w-1/2 flex justify-center relative w-full h-[300px] md:h-[450px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] border-[3px] border-[#F18B33]/20 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] border-[2px] border-[#8EAC79]/30 rounded-full z-0"></div>
          
          {/* PERBAIKAN PATH GAMBAR: Jangan pakai /public */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-[#FFFDF9] rounded-full z-10 shadow-2xl overflow-hidden border-8 border-white">
            <Image 
              src="/AyoSuruh-Web/AYOS/ayos7.png" 
              alt="Maskot ayoSuruh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. PROFIL BISNIS SECTION */}
      <section id="profil-bisnis" className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-20 pb-10 scroll-mt-20">
        <div className="bg-[#8EAC79]/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kenapa Memilih <span className="text-[#8EAC79]">ayoSuruh?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
Kami hadir untuk mahasiswa aktif yang memiliki jadwal kuliah dan organisasi yang padat. Dengan sistem penawaran harga (bidding), pelanggan bisa bernegosiasi secara terbuka untuk mendapatkan harga yang fleksibel dan terjangkau.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-2xl font-black text-[#F18B33]">100%</h3>
              <p className="text-gray-500 font-medium">Aman dan Terpercaya</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-2xl font-black text-[#F18B33]">24/7</h3>
              <p className="text-gray-500 font-medium">Siap Bantu</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISI MISI SECTION */}
      <section id="visi-misi" className="max-w-7xl mx-auto px-6 md:px-10 mt-10 pt-20 scroll-mt-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Arah & <span className="text-[#F18B33]">Tujuan Kami</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Menjadi platform layanan on-demand terpercaya di lingkungan kampus yang memberdayakan mahasiswa untuk saling membantu, sekaligus membuka peluang penghasilan tambahan yang fleksibel bagi mitra mahasiswa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card VISI */}
          <div className="bg-white p-10 rounded-3xl shadow-lg shadow-gray-100/70 border border-gray-100 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F18B33]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 bg-[#F18B33]/10 text-[#F18B33] rounded-2xl flex items-center justify-center mb-6 border border-[#F18B33]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                Menjadi platform layanan bantuan harian terdepan di Indonesia yang paling tepercaya, efisien, dan memberikan dampak ekonomi positif yang berkelanjutan bagi para mitra.
              </p>
            </div>
          </div>

          {/* Card MISI */}
          <div className="bg-white p-10 rounded-3xl shadow-lg shadow-gray-100/70 border border-gray-100 relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#8EAC79]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 space-y-4">
               <div className="w-14 h-14 bg-[#8EAC79]/10 text-[#8EAC79] rounded-2xl flex items-center justify-center mb-6 border border-[#8EAC79]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight">Misi</h3>
              <ul className="text-gray-700 leading-relaxed text-lg list-disc list-outside pl-5 space-y-3 font-medium">
                <li>Menghadirkan aplikasi yang mudah, cepat, dan aman untuk  menghubungkan mahasiswa yang membutuhkan bantuan dengan mitra yang telah terverifikasi.</li>
<li>Membuka peluang penghasilan tambahan yang fleksibel bagi mahasiswa melalui skema kemitraan yang adil dan transparan (sistem bidding).</li>
<li>Membangun kepercayaan melalui verifikasi mitra, fitur rating & ulasan, serta transaksi yang aman.</li>
<li>Mendukung produktivitas akademik mahasiswa dengan menghadirkan layanan kebutuhan harian secara praktis, efisien, dan fleksibel.</li>  
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LAYANAN SECTION */}
      <section id="layanan" className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-20 scroll-mt-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Layanan <span className="text-[#8EAC79]">ayoSuruh</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Apapun kerepotan harian Anda, mitra terpercaya kami siap membantu menyelesaikannya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Layanan 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-[#F18B33]/10 text-[#F18B33] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F18B33] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Titip Belanja</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Kebutuhan dapur habis tapi mager keluar? Serahkan list belanjaan Anda, mitra kami akan membelikan dan mengantarkannya ke depan pintu.
            </p>
          </div>

          {/* Layanan 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-[#8EAC79]/10 text-[#8EAC79] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8EAC79] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Antar Jemput Barang</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Kirim dokumen, ambil cucian laundry, atau antar kado untuk teman kini lebih mudah dan aman dengan jaminan layanan cepat dari kami.
            </p>
          </div>

          {/* Layanan 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-[#F18B33]/10 text-[#F18B33] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F18B33] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.322a2.626 2.626 0 00-3.082-4.102l-3.673 3.673a2.626 2.626 0 004.102 3.082l3.322-2.492m-5.83-8.83l.89-.89a2.25 2.25 0 013.18 0l2.65 2.65m-8.84-2.65L2.1 11.95a2.25 2.25 0 000 3.18l2.65 2.65" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Beberes & Bantu Harian</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Butuh tenaga ekstra untuk memindahkan perabotan, membersihkan ruangan, atau pekerjaan fisik lainnya? Panggil mitra ayoSuruh sekarang.
            </p>
          </div>
        </div>
      </section>

      {/* 6. APP SECTION (BARU) */}
      <section id="aplikasi" className="max-w-7xl mx-auto px-6 md:px-10 mt-24 pt-20 scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          
          {/* Latar Belakang Gradient Opsional */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#F18B33]/15 blur-[80px] rounded-full z-0 pointer-events-none"></div>

          {/* Kolom Kiri: Teks & Tombol */}
          <div className="md:w-1/2 space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Ayo Suruh di <span className="text-[#F18B33]">Saku Kamu</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
              Jadwal kuliah lagi padat? Serahkan urusan mendadakmu pada kami. Pesan bantuan, nego harga, dan pantau status pengerjaan langsung dari layar smartphone kamu.
            </p>
            
            {/* Tombol Unduh Warna Gelap */}
            <a 
              href="/ayoSuruh.apk" 
              download="ayoSuruh-App.apk" 
              className="inline-flex items-center gap-3 bg-[#1F1F1F] hover:bg-black text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Unduh Sekarang</span>
            </a>
          </div>

          {/* Kolom Kanan: Gambar App Resource (ayos2.png) */}
          <div className="md:w-1/2 flex justify-center relative z-10">
            <div className="relative w-full max-w-[450px] h-[400px] md:h-[500px]">
              <Image 
                src="/AyoSuruh-Web/AYOS/ayos3.png" 
                alt="Aplikasi Mobile Ayo Suruh"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONI SECTION */}
      <section id="testimoni" className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-20 pb-32 scroll-mt-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Apa Kata <span className="text-[#F18B33]">Mereka?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Cerita dari para pengguna yang sudah terbantu oleh layanan ayoSuruh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"Sangat ngebantu banget pas lagi di kampus dan ada barang praktikum yang ketinggalan di kosan. Mitranya ramah dan super cepet nyampenya!"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">A</div>
              <div>
                <h4 className="font-bold text-gray-900">Alief W.</h4>
                <p className="text-sm text-gray-500">Mahasiswa</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"Aplikasinya gampang dipakai. Kemarin minta tolong beliin bahan makanan di pasar tradisional, bener-bener dibeliin sesuai catatan. Recommended!"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#8EAC79]/20 rounded-full flex items-center justify-center text-[#8EAC79] font-bold">B</div>
              <div>
                <h4 className="font-bold text-gray-900">Bunda Rara</h4>
                <p className="text-sm text-gray-500">Ibu Rumah Tangga</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#F18B33] p-8 rounded-3xl shadow-lg shadow-orange-200 flex flex-col justify-between">
            <div>
              <div className="flex text-white mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-orange-50 italic mb-6">"Saya jomok dan saya bangga. ayo pesan saya untuk bolongin donat, ngaduk kopi, atau kerja di pabrik kecap"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F18B33] font-bold">D</div>
              <div>
                <h4 className="font-bold text-white">Fauzan Ipin</h4>
                <p className="text-sm text-orange-100">Mitra ayoSuruh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER SECTION (VERSI FIGMA 3 KOLOM KREM) */}
      <footer className="bg-[#F8F6E9] pt-16 pb-8 border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Kolom 1: Tentang */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-[#7C9A6A]">Ayo Suruh</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Platform aplikasi mobile terpercaya untuk membantu kebutuhan harian mahasiswa, sekaligus membuka peluang penghasilan tambahan antar sesama mahasiswa.
              </p>
              {/* Sosial Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full border-2 border-[#7C9A6A] flex items-center justify-center text-[#7C9A6A] hover:bg-[#7C9A6A] hover:text-white transition-colors">
                  {/* Web/Globe Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-[#7C9A6A] flex items-center justify-center text-[#7C9A6A] hover:bg-[#7C9A6A] hover:text-white transition-colors">
                  {/* Email/At Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                  </svg>
                </a>
                <a href="https://wa.me/628895255693" className="w-10 h-10 rounded-full border-2 border-[#7C9A6A] flex items-center justify-center text-[#7C9A6A] hover:bg-[#7C9A6A] hover:text-white transition-colors">
                  {/* Users Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Kolom 2: Navigasi */}
            <div>
              <h3 className="text-xl font-bold text-[#7C9A6A] mb-6">Navigation</h3>
              <ul className="space-y-4 text-gray-600 font-medium">
                <li><a href="#" className="hover:text-[#F18B33] transition-colors">Beranda</a></li>
                <li><a href="#profil-bisnis" className="hover:text-[#F18B33] transition-colors">Tentang Kami</a></li>
                <li><a href="#visi-misi" className="hover:text-[#F18B33] transition-colors">Visi Misi</a></li>
                <li><a href="#layanan" className="hover:text-[#F18B33] transition-colors">Layanan</a></li>
                <li><a href="#aplikasi" className="hover:text-[#F18B33] transition-colors">Aplikasi</a></li>
                <li><a href="#testimoni" className="hover:text-[#F18B33] transition-colors">Testimoni</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak */}
            <div>
              <h3 className="text-xl font-bold text-[#7C9A6A] mb-6">Hubungi Kami</h3>
              <ul className="space-y-4 text-gray-600 font-medium">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-[#7C9A6A]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>halo@ayosuruh.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-[#7C9A6A] mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Cileunyi, Kabupaten Bandung</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Area */}
          <div className="border-t border-[#7C9A6A]/20 pt-8">
            <p className="text-gray-500 text-sm font-medium">
              &copy; 2026 Ayo Suruh. Built by students for students. | <span className="font-bold text-gray-600">Madousei Xalisphera</span>
            </p>
          </div>
          
        </div>
      </footer>
      
    </main>
  );
}
