// export const penduduk = [
//   "nik" = "123456789",
//   "kode_desa" = "11.11.11.11" ,
//   "nomor_kk" = "123456789",
//   "nama_lengkap" = "ego oktafanda",
//   "jenis_klamin" = "Laki-laki",
//   "status_perkawinan" = "Belum Kawin",
//   "tempat_lahir" = "sungai langsat",
//   "tanggal_lahir" = "1997-10-30",
//   "agama" = "Islam",
//   "gol_darah" = "o+",
//   "pendidikan_terakhir" = "S1",
//   "pekerjaan" = "programer",
//   "dapat_membaca_huruf" = "ya",
//   "alamat"    = "sumgai langsat",
//   "provinsi"  = "Riau",
//   "kabupatan" = "kuantan singingi",
//   "kecamatan" = "pangean",
//   "desa" = "sungai langsat",
//   "kedudukan_dalam_keluarga" = "anak",
// ];

// selectpicker
export const pendudukSelect = [
  { label: "nik", value: "123456789" },
  { label: "kode_desa", value: "11.11.11.11" },
  { label: "nomor_kk", value: "123456789" },
  { label: "nama_lengkap", value: "ego oktafanda" },
  { label: "jenis_klamin", value: "Laki-laki" },
  { label: "status_perkawinan", value: "Belum Kawin" },
  { label: "tempat_lahir", value: "sungai langsat" },
  { label: "tanggal_lahir", value: "1997-10-30" },
  { label: "agama", value: "Islam" },
  { label: "gol_darah", value: "o+" },
  { label: "pendidikan_terakhir", value: "S1" },
  { label: "pekerjaan", value: "programer" },
  { label: "dapat_membaca_huruf", value: "ya" },
  { label: "alamat", value: "sumgai langsat" },
  { label: "provinsi", value: "Riau" },
  { label: "kabupaten", value: "kuantan singingi" },
  { label: "kecamatan", value: "pangean" },
  { label: "desa", value: "sungai langsat" },
  { label: "kedudukan_dalam_keluarga", value: "anak" },
];

// type input
export const typeInput = [
  { label: "text", value: "text" },
  { label: "text-area", value: "text-area" },
];

export const pendudukDummy = {
  id_penduduk: 5,
  nik: "1111111111111111",
  id_user: "1",
  kode_desa: "111.111.111",
  nomor_kk: "2222222222",
  nama_lengkap: "ego oktafanda",
  jenis_klamin: "Laki-laki",
  status_perkawinan: "Belum Kawin",
  tempat_lahir: "Suangai Langsat",
  tanggal_lahir: "1997-10-30",
  alamat: {
    provinsi: {
      id_provinsi: "14",
      nama_provinsi: "Riau",
    },
    kabupaten: {
      id_kabupaten: "1401",
      provinsi_id: "14",
      nama_kabupaten: "Kab. Kuantan Singingi",
    },
    kecamatan: {
      id_kecamatan: "1401030",
      kabupaten_id: "1401",
      nama_kecamatan: " Pangean",
      ibukota_kecamatan: null,
    },
    desa: {
      kode_desa: "111.111.111",
      nama_desa: "Sungai Langsat",
      ibu_kota_desa: "Dudun Pasar",
      desa_id: "1401030003",
      kecamatan_id: "1401030",
      kabupaten_id: "1401",
      provinsi_id: "14",
      sebutan_nama_desa: null,
      sebutan_nama_dusun: null,
      sebutan_nama_pemimpin_desa: null,
      kode_pos: null,
      telepon_desa: "082284733404",
      email_desa: "egooktafanda1097@gmail.com",
      website: null,
      visi: null,
      misi: null,
      logo_desa: null,
      sejarah_desa: null,
      koordinat: null,
      frame_map: null,
      status: "init",
      domain: null,
      created_at: "2022-01-01T20:53:45.000000Z",
      updated_at: "2022-01-01T20:53:45.000000Z",
      wilayah_provinsi: {
        id_provinsi: "14",
        nama_provinsi: "Riau",
      },
      wilayah_kabupaten: {
        id_kabupaten: "1401",
        provinsi_id: "14",
        nama_kabupaten: "Kab. Kuantan Singingi",
      },
      wilayah_kecamatan: {
        id_kecamatan: "1401030",
        kabupaten_id: "1401",
        nama_kecamatan: " Kuantan Tengah",
        ibukota_kecamatan: null,
      },
    },
    dusun: {
      id_dusun: 39,
      kode_desa: "111.222.333",
      id_kadus: null,
      nama_dusun: "Dusun Pasar",
      polygon: null,
      sejak: null,
      status: "isActive",
      created_at: "2022-04-20T16:59:34.000000Z",
      updated_at: "2022-04-20T16:59:34.000000Z",
    },
    Rw: {
      id_rw: "14",
      kode_desa: "111.222.333",
      id_dusun: "39",
      id_kepala_rw: null,
      nama_rw: "06",
      polygon: null,
      sejak: null,
      status: "isActive",
      created_at: "2022-04-20T16:59:44.000000Z",
      updated_at: "2022-04-20T16:59:44.000000Z",
    },
    Rt: {
      id_rt: "13",
      kode_desa: "111.222.333",
      id_dusun: "39",
      id_rw: "14",
      id_kepala_rt: null,
      nama_rt: "00",
      polygon: null,
      sejak: null,
      status: "isActive",
      created_at: "2022-04-20T16:59:50.000000Z",
      updated_at: "2022-04-20T16:59:50.000000Z",
    },
  },
  dusun_id: "39",
  rw_id: "14",
  rt_id: "13",
  latlng: null,
  agama_id: "2",
  gol_darah: "o+",
  pendidikan_terakhir_id: "2",
  pekerjaan_id: "3",
  dapat_membaca_huruf: "YA",
  kedudukan_dalam_keluarga_id: "3",
  kewarga_negaraan: "WNI",
  status_dasar_id: "1",
  keberadaan_penduduk: "BERADA DI DESA",
  tanggal_mulai_tinggal: null,
  ket: "-",
  status: "isActive",
  status_created: null,
  created_at: "2022-04-27T12:05:59.000000Z",
  updated_at: "2022-04-27T12:05:59.000000Z",
  deleted_at: null,
  user: {
    id: 27,
    account_type: "PENDUDUK",
    kode_desa: "111.222.333",
    username: "1409055210780002",
    email: null,
    phone: null,
    email_verified_at: null,
    role: "PENDUDUK",
    prangkat_desa: "0",
    table_join: "penduduk",
    status_account: "isActive",
    sumber_join: "DESA-REGISTER",
    gambar: "default.jpg",
    created_at: "2022-04-27T12:05:59.000000Z",
    updated_at: "2022-04-27T12:05:59.000000Z",
  },
  orang_tua: {
    id_orang_tua: 5,
    kode_desa: "111.222.333",
    nik: "1409055210780002",
    nama_ayah: "Rido Hawali",
    nik_ayah: null,
    tempat_lahir_ayah: null,
    tanggal_lahir_ayah: null,
    alamat_ayah: null,
    nama_ibu: "Preti",
    nik_ibu: null,
    tempat_lahir_ibu: null,
    tanggal_lahir_ibu: null,
    alamat_ibu: null,
    created_at: "2022-04-27T12:05:59.000000Z",
    updated_at: "2022-04-27T12:05:59.000000Z",
    deleted_at: null,
  },
  pendidikan_terakhir: "Magister Komputer",
  jenis_pekerjaan: "Programmer",
  agama: "Islam",
  kedudukan_dalam_keluarga: "Anak",
  status_dasar: "HIDUP",
};

export const Perangkat = [
  {
    id_perangkat_desa: 1,
    kode_desa: "111.222.333",
    id_user: "28",
    nik: "1459068522000022",
    id_jabatan_perangkat: "2",
    periode: "2323",
    mulai: "2010",
    selesai: "2010",
    riwayat_hidup: null,
    signature: "sekdes.png",
    qrCode: null,
    level: null,
    prestasi: null,
    catatan: "2232323",
    status: "sedang_berjalan",
    created_at: "2022-04-29T16:30:21.000000Z",
    updated_at: "2022-04-29T16:30:21.000000Z",
    deleted_at: null,
    penduduk: {
      id_penduduk: 6,
      nik: "1459068522000022",
      id_user: "28",
      kode_desa: "111.222.333",
      nomor_kk: "1231232133212121",
      nama_lengkap: "Ridho Hawali Fani",
      jenis_klamin: "LAKI-LAKI",
      status_perkawinan: "KAWIN",
      tempat_lahir: "1232112312",
      tanggal_lahir: "1994-04-22",
      alamat: "Klp. Dua, Curug",
      dusun_id: "37",
      rw_id: "12",
      rt_id: "11",
      latlng: null,
      agama_id: "3",
      gol_darah: null,
      pendidikan_terakhir_id: "9",
      pekerjaan_id: "20",
      dapat_membaca_huruf: "YA",
      kedudukan_dalam_keluarga_id: "8",
      kewarga_negaraan: "WNI",
      status_dasar_id: "1",
      keberadaan_penduduk: "BERADA DI DESA",
      tanggal_mulai_tinggal: null,
      ket: "-",
      status: "isActive",
      status_created: null,
      created_at: "2022-04-29T04:43:38.000000Z",
      updated_at: "2022-04-29T04:43:38.000000Z",
      deleted_at: null,
    },
    user: {
      id: 28,
      account_type: "PERANGKAT-DESA",
      kode_desa: "111.222.333",
      username: "1459068522000022",
      email: null,
      phone: null,
      email_verified_at: null,
      role: "PENDUDUK",
      prangkat_desa: "1",
      table_join: "penduduk",
      status_account: "isActive",
      sumber_join: "DESA-REGISTER",
      gambar: "default.jpg",
      created_at: "2022-04-29T04:43:38.000000Z",
      updated_at: "2022-04-29T16:30:21.000000Z",
    },
    jabatan: {
      id_jabatan: 2,
      kode_desa: "111.222.333",
      nama_jabatan: "SEKRETARIS DESA",
      deskripsi_tugas: "---",
      id_parent_struktur: "1",
      status: "1",
      created_at: "2022-04-25T09:42:25.000000Z",
      updated_at: "2022-04-25T09:42:25.000000Z",
      deleted_at: null,
    },
  },
  {
    id_perangkat_desa: 2,
    kode_desa: "111.111.111",
    id_user: "29",
    nik: "1423736232361312",
    id_jabatan_perangkat: "1",
    periode: "2022-2024",
    mulai: "2022",
    selesai: null,
    riwayat_hidup: null,
    signature: "gigades.png",
    qrCode: null,
    level: null,
    prestasi: null,
    catatan: null,
    status: "sedang_berjalan",
    created_at: "2022-05-12T19:44:27.000000Z",
    updated_at: "2022-05-12T19:44:27.000000Z",
    deleted_at: null,
    penduduk: {
      id_penduduk: 7,
      nik: "1423736232361312",
      id_user: "29",
      kode_desa: "111.222.333",
      nomor_kk: "1473361315231235",
      nama_lengkap: "Argeo",
      jenis_klamin: "LAKI-LAKI",
      status_perkawinan: "KAWIN",
      tempat_lahir: "Pintu gobang kari",
      tanggal_lahir: "1999-04-13",
      alamat: "Klp. Dua, Curug",
      dusun_id: "38",
      rw_id: "13",
      rt_id: "12",
      latlng: null,
      agama_id: "2",
      gol_darah: null,
      pendidikan_terakhir_id: "8",
      pekerjaan_id: "20",
      dapat_membaca_huruf: "YA",
      kedudukan_dalam_keluarga_id: "8",
      kewarga_negaraan: "WNI",
      status_dasar_id: "1",
      keberadaan_penduduk: "BERADA DI DESA",
      tanggal_mulai_tinggal: null,
      ket: "-",
      status: "isActive",
      status_created: null,
      created_at: "2022-04-30T08:20:10.000000Z",
      updated_at: "2022-04-30T08:20:10.000000Z",
      deleted_at: null,
    },
    user: {
      id: 29,
      account_type: "PERANGKAT-DESA",
      kode_desa: "111.222.333",
      username: "1423736232361312",
      email: null,
      phone: null,
      email_verified_at: null,
      role: "PENDUDUK",
      prangkat_desa: "1",
      table_join: "penduduk",
      status_account: "isActive",
      sumber_join: "DESA-REGISTER",
      gambar: "default.jpg",
      created_at: "2022-04-30T08:20:10.000000Z",
      updated_at: "2022-05-12T19:44:27.000000Z",
    },
    jabatan: {
      id_jabatan: 1,
      kode_desa: "111.222.333",
      nama_jabatan: "KEPALA DESA",
      deskripsi_tugas: "---",
      id_parent_struktur: "0",
      status: "1",
      created_at: "2022-04-25T09:42:14.000000Z",
      updated_at: "2022-04-25T09:42:14.000000Z",
      deleted_at: null,
    },
  },
];
