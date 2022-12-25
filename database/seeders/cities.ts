const cities = [
  {
    id: '0101',
    name: 'Kab. Aceh Barat',
  },
  {
    id: '0102',
    name: 'Kab. Aceh Barat Daya',
  },
  {
    id: '0103',
    name: 'Kab. Aceh Besar',
  },
  {
    id: '0104',
    name: 'Kab. Aceh Jaya',
  },
  {
    id: '0105',
    name: 'Kab. Aceh Selatan',
  },
  {
    id: '0106',
    name: 'Kab. Aceh Singkil',
  },
  {
    id: '0107',
    name: 'Kab. Aceh Tamiang',
  },
  {
    id: '0108',
    name: 'Kab. Aceh Tengah',
  },
  {
    id: '0109',
    name: 'Kab. Aceh Tenggara',
  },
  {
    id: '0110',
    name: 'Kab. Aceh Timur',
  },
  {
    id: '0111',
    name: 'Kab. Aceh Utara',
  },
  {
    id: '0112',
    name: 'Kab. Bener Meriah',
  },
  {
    id: '0113',
    name: 'Kab. Bireuen',
  },
  {
    id: '0114',
    name: 'Kab. Gayo Lues',
  },
  {
    id: '0115',
    name: 'Kab. Nagan Raya',
  },
  {
    id: '0116',
    name: 'Kab. Pidie',
  },
  {
    id: '0117',
    name: 'Kab. Pidie Jaya',
  },
  {
    id: '0118',
    name: 'Kab. Simeulue',
  },
  {
    id: '0119',
    name: 'Kota Banda Aceh',
  },
  {
    id: '0120',
    name: 'Kota Langsa',
  },
  {
    id: '0121',
    name: 'Kota Lhokseumawe',
  },
  {
    id: '0122',
    name: 'Kota Sabang',
  },
  {
    id: '0123',
    name: 'Kota Subulussalam',
  },
  {
    id: '0201',
    name: 'Kab. Asahan',
  },
  {
    id: '0202',
    name: 'Kab. Batubara',
  },
  {
    id: '0203',
    name: 'Kab. Dairi',
  },
  {
    id: '0204',
    name: 'Kab. Deli Serdang',
  },
  {
    id: '0205',
    name: 'Kab. Humbang Hasundutan',
  },
  {
    id: '0206',
    name: 'Kab. Karo',
  },
  {
    id: '0207',
    name: 'Kab. Labuhanbatu',
  },
  {
    id: '0208',
    name: 'Kab. Labuhanbatu Selatan',
  },
  {
    id: '0209',
    name: 'Kab. Labuhanbatu Utara',
  },
  {
    id: '0210',
    name: 'Kab. Langkat',
  },
  {
    id: '0211',
    name: 'Kab. Mandailing Natal',
  },
  {
    id: '0212',
    name: 'Kab. Nias',
  },
  {
    id: '0213',
    name: 'Kab. Nias Barat',
  },
  {
    id: '0214',
    name: 'Kab. Nias Selatan',
  },
  {
    id: '0215',
    name: 'Kab. Nias Utara',
  },
  {
    id: '0216',
    name: 'Kab. Padang Lawas',
  },
  {
    id: '0217',
    name: 'Kab. Padang Lawas Utara',
  },
  {
    id: '0218',
    name: 'Kab. Pakpak Bharat',
  },
  {
    id: '0219',
    name: 'Kab. Samosir',
  },
  {
    id: '0220',
    name: 'Kab. Serdang Bedagai',
  },
  {
    id: '0221',
    name: 'Kab. Simalungun',
  },
  {
    id: '0222',
    name: 'Kab. Tapanuli Selatan',
  },
  {
    id: '0223',
    name: 'Kab. Tapanuli Tengah',
  },
  {
    id: '0224',
    name: 'Kab. Tapanuli Utara',
  },
  {
    id: '0225',
    name: 'Kab. Toba Samosir',
  },
  {
    id: '0226',
    name: 'Kota Binjai',
  },
  {
    id: '0227',
    name: 'Kota Gunungsitoli',
  },
  {
    id: '0228',
    name: 'Kota Medan',
  },
  {
    id: '0229',
    name: 'Kota Padangsidempuan',
  },
  {
    id: '0230',
    name: 'Kota Pematangsiantar',
  },
  {
    id: '0231',
    name: 'Kota Sibolga',
  },
  {
    id: '0232',
    name: 'Kota Tanjungbalai',
  },
  {
    id: '0233',
    name: 'Kota Tebing Tinggi',
  },
  {
    id: '0301',
    name: 'Kab. Agam',
  },
  {
    id: '0302',
    name: 'Kab. Dharmasraya',
  },
  {
    id: '0303',
    name: 'Kab. Kepulauan Mentawai',
  },
  {
    id: '0304',
    name: 'Kab. Lima Puluh Kota',
  },
  {
    id: '0305',
    name: 'Kab. Padang Pariaman',
  },
  {
    id: '0306',
    name: 'Kab. Pasaman',
  },
  {
    id: '0307',
    name: 'Kab. Pasaman Barat',
  },
  {
    id: '0308',
    name: 'Kab. Pesisir Selatan',
  },
  {
    id: '0309',
    name: 'Kab. Sijunjung',
  },
  {
    id: '0310',
    name: 'Kab. Solok',
  },
  {
    id: '0311',
    name: 'Kab. Solok Selatan',
  },
  {
    id: '0312',
    name: 'Kab. Tanah Datar',
  },
  {
    id: '0313',
    name: 'Kota Bukittinggi',
  },
  {
    id: '0314',
    name: 'Kota Padang',
  },
  {
    id: '0315',
    name: 'Kota Padangpanjang',
  },
  {
    id: '0316',
    name: 'Kota Pariaman',
  },
  {
    id: '0317',
    name: 'Kota Payakumbuh',
  },
  {
    id: '0318',
    name: 'Kota Sawahlunto',
  },
  {
    id: '0319',
    name: 'Kota Solok',
  },
  {
    id: '0401',
    name: 'Kab. Bengkalis',
  },
  {
    id: '0402',
    name: 'Kab. Indragiri Hilir',
  },
  {
    id: '0403',
    name: 'Kab. Indragiri Hulu',
  },
  {
    id: '0404',
    name: 'Kab. Kampar',
  },
  {
    id: '0405',
    name: 'Kab. Kepulauan Meranti',
  },
  {
    id: '0406',
    name: 'Kab. Kuantan Singingi',
  },
  {
    id: '0407',
    name: 'Kab. Pelalawan',
  },
  {
    id: '0408',
    name: 'Kab. Rokan Hilir',
  },
  {
    id: '0409',
    name: 'Kab. Rokan Hulu',
  },
  {
    id: '0410',
    name: 'Kab. Siak',
  },
  {
    id: '0411',
    name: 'Kota Dumai',
  },
  {
    id: '0412',
    name: 'Kota Pekanbaru',
  },
  {
    id: '0501',
    name: 'Kab. Bintan',
  },
  {
    id: '0502',
    name: 'Kab. Karimun',
  },
  {
    id: '0503',
    name: 'Kab. Kepulauan Anambas',
  },
  {
    id: '0504',
    name: 'Kab. Lingga',
  },
  {
    id: '0505',
    name: 'Kab. Natuna',
  },
  {
    id: '0506',
    name: 'Kota Batam',
  },
  {
    id: '0507',
    name: 'Kota Tanjung Pinang',
  },
  {
    id: '0508',
    name: 'Pulau Tambelan Kab. Bintan',
  },
  {
    id: '0509',
    name: 'Pekajang Kab. Lingga',
  },
  {
    id: '0510',
    name: 'Pulau Serasan Kab. Natuna',
  },
  {
    id: '0511',
    name: 'Pulau Midai Kab. Natuna',
  },
  {
    id: '0512',
    name: 'Pulau Laut Kab. Natuna',
  },
  {
    id: '0601',
    name: 'Kab. Batanghari',
  },
  {
    id: '0602',
    name: 'Kab. Bungo',
  },
  {
    id: '0603',
    name: 'Kab. Kerinci',
  },
  {
    id: '0604',
    name: 'Kab. Merangin',
  },
  {
    id: '0605',
    name: 'Kab. Muaro Jambi',
  },
  {
    id: '0606',
    name: 'Kab. Sarolangun',
  },
  {
    id: '0607',
    name: 'Kab. Tanjung Jabung Barat',
  },
  {
    id: '0608',
    name: 'Kab. Tanjung Jabung Timur',
  },
  {
    id: '0609',
    name: 'Kab. Tebo',
  },
  {
    id: '0610',
    name: 'Kota Jambi',
  },
  {
    id: '0611',
    name: 'Kota Sungai Penuh',
  },
  {
    id: '0701',
    name: 'Kab. Bengkulu Selatan',
  },
  {
    id: '0702',
    name: 'Kab. Bengkulu Tengah',
  },
  {
    id: '0703',
    name: 'Kab. Bengkulu Utara',
  },
  {
    id: '0704',
    name: 'Kab. Kaur',
  },
  {
    id: '0705',
    name: 'Kab. Kepahiang',
  },
  {
    id: '0706',
    name: 'Kab. Lebong',
  },
  {
    id: '0707',
    name: 'Kab. Mukomuko',
  },
  {
    id: '0708',
    name: 'Kab. Rejang Lebong',
  },
  {
    id: '0709',
    name: 'Kab. Seluma',
  },
  {
    id: '0710',
    name: 'Kota Bengkulu',
  },
  {
    id: '0801',
    name: 'Kab. Banyuasin',
  },
  {
    id: '0802',
    name: 'Kab. Empat Lawang',
  },
  {
    id: '0803',
    name: 'Kab. Lahat',
  },
  {
    id: '0804',
    name: 'Kab. Muara Enim',
  },
  {
    id: '0805',
    name: 'Kab. Musi Banyuasin',
  },
  {
    id: '0806',
    name: 'Kab. Musi Rawas',
  },
  {
    id: '0807',
    name: 'Kab. Musi Rawas Utara',
  },
  {
    id: '0808',
    name: 'Kab. Ogan Ilir',
  },
  {
    id: '0809',
    name: 'Kab. Ogan Komering Ilir',
  },
  {
    id: '0810',
    name: 'Kab. Ogan Komering Ulu',
  },
  {
    id: '0811',
    name: 'Kab. Ogan Komering Ulu Selatan',
  },
  {
    id: '0812',
    name: 'Kab. Ogan Komering Ulu Timur',
  },
  {
    id: '0813',
    name: 'Kab. Penukal Abab Lematang Ilir',
  },
  {
    id: '0814',
    name: 'Kota Lubuklinggau',
  },
  {
    id: '0815',
    name: 'Kota Pagar Alam',
  },
  {
    id: '0816',
    name: 'Kota Palembang',
  },
  {
    id: '0817',
    name: 'Kota Prabumulih',
  },
  {
    id: '0901',
    name: 'Kab. Bangka',
  },
  {
    id: '0902',
    name: 'Kab. Bangka Barat',
  },
  {
    id: '0903',
    name: 'Kab. Bangka Selatan',
  },
  {
    id: '0904',
    name: 'Kab. Bangka Tengah',
  },
  {
    id: '0905',
    name: 'Kab. Belitung',
  },
  {
    id: '0906',
    name: 'Kab. Belitung Timur',
  },
  {
    id: '0907',
    name: 'Kota Pangkal Pinang',
  },
  {
    id: '1001',
    name: 'Kab. Lampung Tengah',
  },
  {
    id: '1002',
    name: 'Kab. Lampung Utara',
  },
  {
    id: '1003',
    name: 'Kab. Lampung Selatan',
  },
  {
    id: '1004',
    name: 'Kab. Lampung Barat',
  },
  {
    id: '1005',
    name: 'Kab. Lampung Timur',
  },
  {
    id: '1006',
    name: 'Kab. Mesuji',
  },
  {
    id: '1007',
    name: 'Kab. Pesawaran',
  },
  {
    id: '1008',
    name: 'Kab. Pesisir Barat',
  },
  {
    id: '1009',
    name: 'Kab. Pringsewu',
  },
  {
    id: '1010',
    name: 'Kab. Tulang Bawang',
  },
  {
    id: '1011',
    name: 'Kab. Tulang Bawang Barat',
  },
  {
    id: '1012',
    name: 'Kab. Tanggamus',
  },
  {
    id: '1013',
    name: 'Kab. Way Kanan',
  },
  {
    id: '1014',
    name: 'Kota Bandar Lampung',
  },
  {
    id: '1015',
    name: 'Kota Metro',
  },
  {
    id: '1101',
    name: 'Kab. Lebak',
  },
  {
    id: '1102',
    name: 'Kab. Pandeglang',
  },
  {
    id: '1103',
    name: 'Kab. Serang',
  },
  {
    id: '1104',
    name: 'Kab. Tangerang',
  },
  {
    id: '1105',
    name: 'Kota Cilegon',
  },
  {
    id: '1106',
    name: 'Kota Serang',
  },
  {
    id: '1107',
    name: 'Kota Tangerang',
  },
  {
    id: '1108',
    name: 'Kota Tangerang Selatan',
  },
  {
    id: '1201',
    name: 'Kab. Bandung',
  },
  {
    id: '1202',
    name: 'Kab. Bandung Barat',
  },
  {
    id: '1203',
    name: 'Kab. Bekasi',
  },
  {
    id: '1204',
    name: 'Kab. Bogor',
  },
  {
    id: '1205',
    name: 'Kab. Ciamis',
  },
  {
    id: '1206',
    name: 'Kab. Cianjur',
  },
  {
    id: '1207',
    name: 'Kab. Cirebon',
  },
  {
    id: '1208',
    name: 'Kab. Garut',
  },
  {
    id: '1209',
    name: 'Kab. Indramayu',
  },
  {
    id: '1210',
    name: 'Kab. Karawang',
  },
  {
    id: '1211',
    name: 'Kab. Kuningan',
  },
  {
    id: '1212',
    name: 'Kab. Majalengka',
  },
  {
    id: '1213',
    name: 'Kab. Pangandaran',
  },
  {
    id: '1214',
    name: 'Kab. Purwakarta',
  },
  {
    id: '1215',
    name: 'Kab. Subang',
  },
  {
    id: '1216',
    name: 'Kab. Sukabumi',
  },
  {
    id: '1217',
    name: 'Kab. Sumedang',
  },
  {
    id: '1218',
    name: 'Kab. Tasikmalaya',
  },
  {
    id: '1219',
    name: 'Kota Bandung',
  },
  {
    id: '1220',
    name: 'Kota Banjar',
  },
  {
    id: '1221',
    name: 'Kota Bekasi',
  },
  {
    id: '1222',
    name: 'Kota Bogor',
  },
  {
    id: '1223',
    name: 'Kota Cimahi',
  },
  {
    id: '1224',
    name: 'Kota Cirebon',
  },
  {
    id: '1225',
    name: 'Kota Depok',
  },
  {
    id: '1226',
    name: 'Kota Sukabumi',
  },
  {
    id: '1227',
    name: 'Kota Tasikmalaya',
  },
  {
    id: '1301',
    name: 'Kota Jakarta',
  },
  {
    id: '1302',
    name: 'Kab. Kepulauan Seribu',
  },
  {
    id: '1401',
    name: 'Kab. Banjarnegara',
  },
  {
    id: '1402',
    name: 'Kab. Banyumas',
  },
  {
    id: '1403',
    name: 'Kab. Batang',
  },
  {
    id: '1404',
    name: 'Kab. Blora',
  },
  {
    id: '1405',
    name: 'Kab. Boyolali',
  },
  {
    id: '1406',
    name: 'Kab. Brebes',
  },
  {
    id: '1407',
    name: 'Kab. Cilacap',
  },
  {
    id: '1408',
    name: 'Kab. Demak',
  },
  {
    id: '1409',
    name: 'Kab. Grobogan',
  },
  {
    id: '1410',
    name: 'Kab. Jepara',
  },
  {
    id: '1411',
    name: 'Kab. Karanganyar',
  },
  {
    id: '1412',
    name: 'Kab. Kebumen',
  },
  {
    id: '1413',
    name: 'Kab. Kendal',
  },
  {
    id: '1414',
    name: 'Kab. Klaten',
  },
  {
    id: '1415',
    name: 'Kab. Kudus',
  },
  {
    id: '1416',
    name: 'Kab. Magelang',
  },
  {
    id: '1417',
    name: 'Kab. Pati',
  },
  {
    id: '1418',
    name: 'Kab. Pekalongan',
  },
  {
    id: '1419',
    name: 'Kab. Pemalang',
  },
  {
    id: '1420',
    name: 'Kab. Purbalingga',
  },
  {
    id: '1421',
    name: 'Kab. Purworejo',
  },
  {
    id: '1422',
    name: 'Kab. Rembang',
  },
  {
    id: '1423',
    name: 'Kab. Semarang',
  },
  {
    id: '1424',
    name: 'Kab. Sragen',
  },
  {
    id: '1425',
    name: 'Kab. Sukoharjo',
  },
  {
    id: '1426',
    name: 'Kab. Tegal',
  },
  {
    id: '1427',
    name: 'Kab. Temanggung',
  },
  {
    id: '1428',
    name: 'Kab. Wonogiri',
  },
  {
    id: '1429',
    name: 'Kab. Wonosobo',
  },
  {
    id: '1430',
    name: 'Kota Magelang',
  },
  {
    id: '1431',
    name: 'Kota Pekalongan',
  },
  {
    id: '1432',
    name: 'Kota Salatiga',
  },
  {
    id: '1433',
    name: 'Kota Semarang',
  },
  {
    id: '1434',
    name: 'Kota Surakarta',
  },
  {
    id: '1435',
    name: 'Kota Tegal',
  },
  {
    id: '1501',
    name: 'Kab. Bantul',
  },
  {
    id: '1502',
    name: 'Kab. Gunungkidul',
  },
  {
    id: '1503',
    name: 'Kab. Kulon Progo',
  },
  {
    id: '1504',
    name: 'Kab. Sleman',
  },
  {
    id: '1505',
    name: 'Kota Yogyakarta',
  },
  {
    id: '1601',
    name: 'Kab. Bangkalan',
  },
  {
    id: '1602',
    name: 'Kab. Banyuwangi',
  },
  {
    id: '1603',
    name: 'Kab. Blitar',
  },
  {
    id: '1604',
    name: 'Kab. Bojonegoro',
  },
  {
    id: '1605',
    name: 'Kab. Bondowoso',
  },
  {
    id: '1606',
    name: 'Kab. Gresik',
  },
  {
    id: '1607',
    name: 'Kab. Jember',
  },
  {
    id: '1608',
    name: 'Kab. Jombang',
  },
  {
    id: '1609',
    name: 'Kab. Kediri',
  },
  {
    id: '1610',
    name: 'Kab. Lamongan',
  },
  {
    id: '1611',
    name: 'Kab. Lumajang',
  },
  {
    id: '1612',
    name: 'Kab. Madiun',
  },
  {
    id: '1613',
    name: 'Kab. Magetan',
  },
  {
    id: '1614',
    name: 'Kab. Malang',
  },
  {
    id: '1615',
    name: 'Kab. Mojokerto',
  },
  {
    id: '1616',
    name: 'Kab. Nganjuk',
  },
  {
    id: '1617',
    name: 'Kab. Ngawi',
  },
  {
    id: '1618',
    name: 'Kab. Pacitan',
  },
  {
    id: '1619',
    name: 'Kab. Pamekasan',
  },
  {
    id: '1620',
    name: 'Kab. Pasuruan',
  },
  {
    id: '1621',
    name: 'Kab. Ponorogo',
  },
  {
    id: '1622',
    name: 'Kab. Probolinggo',
  },
  {
    id: '1623',
    name: 'Kab. Sampang',
  },
  {
    id: '1624',
    name: 'Kab. Sidoarjo',
  },
  {
    id: '1625',
    name: 'Kab. Situbondo',
  },
  {
    id: '1626',
    name: 'Kab. Sumenep',
  },
  {
    id: '1627',
    name: 'Kab. Trenggalek',
  },
  {
    id: '1628',
    name: 'Kab. Tuban',
  },
  {
    id: '1629',
    name: 'Kab. Tulungagung',
  },
  {
    id: '1630',
    name: 'Kota Batu',
  },
  {
    id: '1631',
    name: 'Kota Blitar',
  },
  {
    id: '1632',
    name: 'Kota Kediri',
  },
  {
    id: '1633',
    name: 'Kota Madiun',
  },
  {
    id: '1634',
    name: 'Kota Malang',
  },
  {
    id: '1635',
    name: 'Kota Mojokerto',
  },
  {
    id: '1636',
    name: 'Kota Pasuruan',
  },
  {
    id: '1637',
    name: 'Kota Probolinggo',
  },
  {
    id: '1638',
    name: 'Kota Surabaya',
  },
  {
    id: '1701',
    name: 'Kab. Badung',
  },
  {
    id: '1702',
    name: 'Kab. Bangli',
  },
  {
    id: '1703',
    name: 'Kab. Buleleng',
  },
  {
    id: '1704',
    name: 'Kab. Gianyar',
  },
  {
    id: '1705',
    name: 'Kab. Jembrana',
  },
  {
    id: '1706',
    name: 'Kab. Karangasem',
  },
  {
    id: '1707',
    name: 'Kab. Klungkung',
  },
  {
    id: '1708',
    name: 'Kab. Tabanan',
  },
  {
    id: '1709',
    name: 'Kota Denpasar',
  },
  {
    id: '1801',
    name: 'Kab. Bima',
  },
  {
    id: '1802',
    name: 'Kab. Dompu',
  },
  {
    id: '1803',
    name: 'Kab. Lombok Barat',
  },
  {
    id: '1804',
    name: 'Kab. Lombok Tengah',
  },
  {
    id: '1805',
    name: 'Kab. Lombok Timur',
  },
  {
    id: '1806',
    name: 'Kab. Lombok Utara',
  },
  {
    id: '1807',
    name: 'Kab. Sumbawa',
  },
  {
    id: '1808',
    name: 'Kab. Sumbawa Barat',
  },
  {
    id: '1809',
    name: 'Kota Bima',
  },
  {
    id: '1810',
    name: 'Kota Mataram',
  },
  {
    id: '1901',
    name: 'Kab. Alor',
  },
  {
    id: '1902',
    name: 'Kab. Belu',
  },
  {
    id: '1903',
    name: 'Kab. Ende',
  },
  {
    id: '1904',
    name: 'Kab. Flores Timur',
  },
  {
    id: '1905',
    name: 'Kab. Kupang',
  },
  {
    id: '1906',
    name: 'Kab. Lembata',
  },
  {
    id: '1907',
    name: 'Kab. Malaka',
  },
  {
    id: '1908',
    name: 'Kab. Manggarai',
  },
  {
    id: '1909',
    name: 'Kab. Manggarai Barat',
  },
  {
    id: '1910',
    name: 'Kab. Manggarai Timur',
  },
  {
    id: '1911',
    name: 'Kab. Ngada',
  },
  {
    id: '1912',
    name: 'Kab. Nagekeo',
  },
  {
    id: '1913',
    name: 'Kab. Rote Ndao',
  },
  {
    id: '1914',
    name: 'Kab. Sabu Raijua',
  },
  {
    id: '1915',
    name: 'Kab. Sikka',
  },
  {
    id: '1916',
    name: 'Kab. Sumba Barat',
  },
  {
    id: '1917',
    name: 'Kab. Sumba Barat Daya',
  },
  {
    id: '1918',
    name: 'Kab. Sumba Tengah',
  },
  {
    id: '1919',
    name: 'Kab. Sumba Timur',
  },
  {
    id: '1920',
    name: 'Kab. Timor Tengah Selatan',
  },
  {
    id: '1921',
    name: 'Kab. Timor Tengah Utara',
  },
  {
    id: '1922',
    name: 'Kota Kupang',
  },
  {
    id: '2001',
    name: 'Kab. Bengkayang',
  },
  {
    id: '2002',
    name: 'Kab. Kapuas Hulu',
  },
  {
    id: '2003',
    name: 'Kab. Kayong Utara',
  },
  {
    id: '2004',
    name: 'Kab. Ketapang',
  },
  {
    id: '2005',
    name: 'Kab. Kubu Raya',
  },
  {
    id: '2006',
    name: 'Kab. Landak',
  },
  {
    id: '2007',
    name: 'Kab. Melawi',
  },
  {
    id: '2008',
    name: 'Kab. Mempawah',
  },
  {
    id: '2009',
    name: 'Kab. Sambas',
  },
  {
    id: '2010',
    name: 'Kab. Sanggau',
  },
  {
    id: '2011',
    name: 'Kab. Sekadau',
  },
  {
    id: '2012',
    name: 'Kab. Sintang',
  },
  {
    id: '2013',
    name: 'Kota Pontianak',
  },
  {
    id: '2014',
    name: 'Kota Singkawang',
  },
  {
    id: '2101',
    name: 'Kab. Balangan',
  },
  {
    id: '2102',
    name: 'Kab. Banjar',
  },
  {
    id: '2103',
    name: 'Kab. Barito Kuala',
  },
  {
    id: '2104',
    name: 'Kab. Hulu Sungai Selatan',
  },
  {
    id: '2105',
    name: 'Kab. Hulu Sungai Tengah',
  },
  {
    id: '2106',
    name: 'Kab. Hulu Sungai Utara',
  },
  {
    id: '2107',
    name: 'Kab. Kotabaru',
  },
  {
    id: '2108',
    name: 'Kab. Tabalong',
  },
  {
    id: '2109',
    name: 'Kab. Tanah Bumbu',
  },
  {
    id: '2110',
    name: 'Kab. Tanah Laut',
  },
  {
    id: '2111',
    name: 'Kab. Tapin',
  },
  {
    id: '2112',
    name: 'Kota Banjarbaru',
  },
  {
    id: '2113',
    name: 'Kota Banjarmasin',
  },
  {
    id: '2201',
    name: 'Kab. Barito Selatan',
  },
  {
    id: '2202',
    name: 'Kab. Barito Timur',
  },
  {
    id: '2203',
    name: 'Kab. Barito Utara',
  },
  {
    id: '2204',
    name: 'Kab. Gunung Mas',
  },
  {
    id: '2205',
    name: 'Kab. Kapuas',
  },
  {
    id: '2206',
    name: 'Kab. Katingan',
  },
  {
    id: '2207',
    name: 'Kab. Kotawaringin Barat',
  },
  {
    id: '2208',
    name: 'Kab. Kotawaringin Timur',
  },
  {
    id: '2209',
    name: 'Kab. Lamandau',
  },
  {
    id: '2210',
    name: 'Kab. Murung Raya',
  },
  {
    id: '2211',
    name: 'Kab. Pulang Pisau',
  },
  {
    id: '2212',
    name: 'Kab. Sukamara',
  },
  {
    id: '2213',
    name: 'Kab. Seruyan',
  },
  {
    id: '2214',
    name: 'Kota Palangkaraya',
  },
  {
    id: '2301',
    name: 'Kab. Berau',
  },
  {
    id: '2302',
    name: 'Kab. Kutai Barat',
  },
  {
    id: '2303',
    name: 'Kab. Kutai Kartanegara',
  },
  {
    id: '2304',
    name: 'Kab. Kutai Timur',
  },
  {
    id: '2305',
    name: 'Kab. Mahakam Ulu',
  },
  {
    id: '2306',
    name: 'Kab. Paser',
  },
  {
    id: '2307',
    name: 'Kab. Penajam Paser Utara',
  },
  {
    id: '2308',
    name: 'Kota Balikpapan',
  },
  {
    id: '2309',
    name: 'Kota Bontang',
  },
  {
    id: '2310',
    name: 'Kota Samarinda',
  },
  {
    id: '2401',
    name: 'Kab. Bulungan',
  },
  {
    id: '2402',
    name: 'Kab. Malinau',
  },
  {
    id: '2403',
    name: 'Kab. Nunukan',
  },
  {
    id: '2404',
    name: 'Kab. Tana Tidung',
  },
  {
    id: '2405',
    name: 'Kota Tarakan',
  },
  {
    id: '2501',
    name: 'Kab. Boalemo',
  },
  {
    id: '2502',
    name: 'Kab. Bone Bolango',
  },
  {
    id: '2503',
    name: 'Kab. Gorontalo',
  },
  {
    id: '2504',
    name: 'Kab. Gorontalo Utara',
  },
  {
    id: '2505',
    name: 'Kab. Pohuwato',
  },
  {
    id: '2506',
    name: 'Kota Gorontalo',
  },
  {
    id: '2601',
    name: 'Kab. Bantaeng',
  },
  {
    id: '2602',
    name: 'Kab. Barru',
  },
  {
    id: '2603',
    name: 'Kab. Bone',
  },
  {
    id: '2604',
    name: 'Kab. Bulukumba',
  },
  {
    id: '2605',
    name: 'Kab. Enrekang',
  },
  {
    id: '2606',
    name: 'Kab. Gowa',
  },
  {
    id: '2607',
    name: 'Kab. Jeneponto',
  },
  {
    id: '2608',
    name: 'Kab. Kepulauan Selayar',
  },
  {
    id: '2609',
    name: 'Kab. Luwu',
  },
  {
    id: '2610',
    name: 'Kab. Luwu Timur',
  },
  {
    id: '2611',
    name: 'Kab. Luwu Utara',
  },
  {
    id: '2612',
    name: 'Kab. Maros',
  },
  {
    id: '2613',
    name: 'Kab. Pangkajene Dan Kepulauan',
  },
  {
    id: '2614',
    name: 'Kab. Pinrang',
  },
  {
    id: '2615',
    name: 'Kab. Sidenreng Rappang',
  },
  {
    id: '2616',
    name: 'Kab. Sinjai',
  },
  {
    id: '2617',
    name: 'Kab. Soppeng',
  },
  {
    id: '2618',
    name: 'Kab. Takalar',
  },
  {
    id: '2619',
    name: 'Kab. Tana Toraja',
  },
  {
    id: '2620',
    name: 'Kab. Toraja Utara',
  },
  {
    id: '2621',
    name: 'Kab. Wajo',
  },
  {
    id: '2622',
    name: 'Kota Makassar',
  },
  {
    id: '2623',
    name: 'Kota Palopo',
  },
  {
    id: '2624',
    name: 'Kota Parepare',
  },
  {
    id: '2701',
    name: 'Kab. Bombana',
  },
  {
    id: '2702',
    name: 'Kab. Buton',
  },
  {
    id: '2703',
    name: 'Kab. Buton Selatan',
  },
  {
    id: '2704',
    name: 'Kab. Buton Tengah',
  },
  {
    id: '2705',
    name: 'Kab. Buton Utara',
  },
  {
    id: '2706',
    name: 'Kab. Kolaka',
  },
  {
    id: '2707',
    name: 'Kab. Kolaka Timur',
  },
  {
    id: '2708',
    name: 'Kab. Kolaka Utara',
  },
  {
    id: '2709',
    name: 'Kab. Konawe',
  },
  {
    id: '2710',
    name: 'Kab. Konawe Kepulauan',
  },
  {
    id: '2711',
    name: 'Kab. Konawe Selatan',
  },
  {
    id: '2712',
    name: 'Kab. Konawe Utara',
  },
  {
    id: '2713',
    name: 'Kab. Muna',
  },
  {
    id: '2714',
    name: 'Kab. Muna Barat',
  },
  {
    id: '2715',
    name: 'Kab. Wakatobi',
  },
  {
    id: '2716',
    name: 'Kota Bau Bau',
  },
  {
    id: '2717',
    name: 'Kota Kendari',
  },
  {
    id: '2801',
    name: 'Kab. Banggai',
  },
  {
    id: '2802',
    name: 'Kab. Banggai Kepulauan',
  },
  {
    id: '2803',
    name: 'Kab. Banggai Laut',
  },
  {
    id: '2804',
    name: 'Kab. Buol',
  },
  {
    id: '2805',
    name: 'Kab. Donggala',
  },
  {
    id: '2806',
    name: 'Kab. Morowali',
  },
  {
    id: '2807',
    name: 'Kab. Morowali Utara',
  },
  {
    id: '2808',
    name: 'Kab. Parigi Moutong',
  },
  {
    id: '2809',
    name: 'Kab. Poso',
  },
  {
    id: '2810',
    name: 'Kab. Sigi',
  },
  {
    id: '2811',
    name: 'Kab. Tojo Una Una',
  },
  {
    id: '2812',
    name: 'Kab. Toli Toli',
  },
  {
    id: '2813',
    name: 'Kota Palu',
  },
  {
    id: '2901',
    name: 'Kab. Bolaang Mongondow',
  },
  {
    id: '2902',
    name: 'Kab. Bolaang Mongondow Selatan',
  },
  {
    id: '2903',
    name: 'Kab. Bolaang Mongondow Timur',
  },
  {
    id: '2904',
    name: 'Kab. Bolaang Mongondow Utara',
  },
  {
    id: '2905',
    name: 'Kab. Kepulauan Sangihe',
  },
  {
    id: '2906',
    name: 'Kab. Kepulauan Siau Tagulandang Biaro',
  },
  {
    id: '2907',
    name: 'Kab. Kepulauan Talaud',
  },
  {
    id: '2908',
    name: 'Kab. Minahasa',
  },
  {
    id: '2909',
    name: 'Kab. Minahasa Selatan',
  },
  {
    id: '2910',
    name: 'Kab. Minahasa Tenggara',
  },
  {
    id: '2911',
    name: 'Kab. Minahasa Utara',
  },
  {
    id: '2912',
    name: 'Kota Bitung',
  },
  {
    id: '2913',
    name: 'Kota Kotamobagu',
  },
  {
    id: '2914',
    name: 'Kota Manado',
  },
  {
    id: '2915',
    name: 'Kota Tomohon',
  },
  {
    id: '3001',
    name: 'Kab. Majene',
  },
  {
    id: '3002',
    name: 'Kab. Mamasa',
  },
  {
    id: '3003',
    name: 'Kab. Mamuju',
  },
  {
    id: '3004',
    name: 'Kab. Mamuju Tengah',
  },
  {
    id: '3005',
    name: 'Kab. Mamuju Utara',
  },
  {
    id: '3006',
    name: 'Kab. Polewali Mandar',
  },
  {
    id: '3101',
    name: 'Kab. Buru',
  },
  {
    id: '3102',
    name: 'Kab. Buru Selatan',
  },
  {
    id: '3103',
    name: 'Kab. Kepulauan Aru',
  },
  {
    id: '3104',
    name: 'Kab. Maluku Barat Daya',
  },
  {
    id: '3105',
    name: 'Kab. Maluku Tengah',
  },
  {
    id: '3106',
    name: 'Kab. Maluku Tenggara',
  },
  {
    id: '3107',
    name: 'Kab. Maluku Tenggara Barat',
  },
  {
    id: '3108',
    name: 'Kab. Seram Bagian Barat',
  },
  {
    id: '3109',
    name: 'Kab. Seram Bagian Timur',
  },
  {
    id: '3110',
    name: 'Kota Ambon',
  },
  {
    id: '3111',
    name: 'Kota Tual',
  },
  {
    id: '3201',
    name: 'Kab. Halmahera Barat',
  },
  {
    id: '3202',
    name: 'Kab. Halmahera Tengah',
  },
  {
    id: '3203',
    name: 'Kab. Halmahera Utara',
  },
  {
    id: '3204',
    name: 'Kab. Halmahera Selatan',
  },
  {
    id: '3205',
    name: 'Kab. Kepulauan Sula',
  },
  {
    id: '3206',
    name: 'Kab. Halmahera Timur',
  },
  {
    id: '3207',
    name: 'Kab. Pulau Morotai',
  },
  {
    id: '3208',
    name: 'Kab. Pulau Taliabu',
  },
  {
    id: '3209',
    name: 'Kota Ternate',
  },
  {
    id: '3210',
    name: 'Kota Tidore Kepulauan',
  },
  {
    id: '3211',
    name: 'Kota Sofifi',
  },
  {
    id: '3212',
    name: 'Kota Sofifi',
  },
  {
    id: '3301',
    name: 'Kab. Asmat',
  },
  {
    id: '3302',
    name: 'Kab. Biak Numfor',
  },
  {
    id: '3303',
    name: 'Kab. Boven Digoel',
  },
  {
    id: '3304',
    name: 'Kab. Deiyai',
  },
  {
    id: '3305',
    name: 'Kab. Dogiyai',
  },
  {
    id: '3306',
    name: 'Kab. Intan Jaya',
  },
  {
    id: '3307',
    name: 'Kab. Jayapura',
  },
  {
    id: '3308',
    name: 'Kab. Jayawijaya',
  },
  {
    id: '3309',
    name: 'Kab. Keerom',
  },
  {
    id: '3310',
    name: 'Kab. Kepulauan Yapen',
  },
  {
    id: '3311',
    name: 'Kab. Lanny Jaya',
  },
  {
    id: '3312',
    name: 'Kab. Mamberamo Raya',
  },
  {
    id: '3313',
    name: 'Kab. Mamberamo Tengah',
  },
  {
    id: '3314',
    name: 'Kab. Mappi',
  },
  {
    id: '3315',
    name: 'Kab. Merauke',
  },
  {
    id: '3316',
    name: 'Kab. Mimika',
  },
  {
    id: '3317',
    name: 'Kab. Nabire',
  },
  {
    id: '3318',
    name: 'Kab. Nduga',
  },
  {
    id: '3319',
    name: 'Kab. Paniai',
  },
  {
    id: '3320',
    name: 'Kab. Pegunungan Bintang',
  },
  {
    id: '3321',
    name: 'Kab. Puncak',
  },
  {
    id: '3322',
    name: 'Kab. Puncak Jaya',
  },
  {
    id: '3323',
    name: 'Kab. Sarmi',
  },
  {
    id: '3324',
    name: 'Kab. Supiori',
  },
  {
    id: '3325',
    name: 'Kab. Tolikara',
  },
  {
    id: '3326',
    name: 'Kab. Waropen',
  },
  {
    id: '3327',
    name: 'Kab. Yahukimo',
  },
  {
    id: '3328',
    name: 'Kab. Yalimo',
  },
  {
    id: '3329',
    name: 'Kota Jayapura',
  },
  {
    id: '3330',
    name: 'Kab. Yapen Waropen',
  },
  {
    id: '3401',
    name: 'Kab. Fakfak',
  },
  {
    id: '3402',
    name: 'Kab. Kaimana',
  },
  {
    id: '3403',
    name: 'Kab. Manokwari',
  },
  {
    id: '3404',
    name: 'Kab. Manokwari Selatan',
  },
  {
    id: '3405',
    name: 'Kab. Maybrat',
  },
  {
    id: '3406',
    name: 'Kab. Pegunungan Arfak',
  },
  {
    id: '3407',
    name: 'Kab. Raja Ampat',
  },
  {
    id: '3408',
    name: 'Kab. Sorong',
  },
  {
    id: '3409',
    name: 'Kab. Sorong Selatan',
  },
  {
    id: '3410',
    name: 'Kab. Tambrauw',
  },
  {
    id: '3411',
    name: 'Kab. Teluk Bintuni',
  },
  {
    id: '3412',
    name: 'Kab. Teluk Wondama',
  },
  {
    id: '3413',
    name: 'Kota Sorong',
  },
];

export default cities;
