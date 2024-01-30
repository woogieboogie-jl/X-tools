WITH foundation_list AS (
  SELECT *
  FROM (VALUES
      ('0x06590a641dc3eb43f2cebe435576389f209116da'), -- Deployer
      ('0x6fc78dcc8a949d1530035bd577dcb21e9787100e'), -- Multisig
      ('0x32ec7a59549b9f114c9d7d8b21891d91ae7f2ca1'), -- Token Lockup
      ('0x5785176048beb00dcb6ec84a604d76e30e0666db'), -- Token Lockup
      ('0xfcf78ac094288d7200cfdb367a8cd07108dfa128'), -- Token Lock Manager
      ('0x74db79268e63302d3fc69fb5a7627f7454a41732'), -- Governor
      ('0x6284042d4da0931cbc64c5aab2d6184403095883'), -- Token Lock Manager
      ('0xbffb60a537ce77d5f7d15c623540a06684e103f8'), -- Token Lock Wallet
      ('0x1c08b9ba9539388f46d69848355739cd1d1dcc99'), -- Token Lock Wallet
      ('0x2a46efbe8d40d60053233d0e22df0094488fb23a'), -- Token Lock Wallet
      ('0x7ffd3f3a36528b4fff36fcf1779ed4f1ccf75792'), -- Token Lock Wallet
      ('0xed5bc326eddf5851077283d2cc93bff46bce44d8'), -- Token Lock Wallet
      ('0xf02ca56fa0ae87d33b2c7a41f7b037a2ee346490'), -- Token Lock Wallet
      ('0xde6e2ec9a68cbdf8aef63e9c70732239fe60ff43'), -- Foundation
      ('0xb7dcd364e43b63f9ac685bfa0241b05edef2cd38'), -- Token Lock Wallet
      ('0xfd8f711ee84280ff7772685f6219195f39327c3f'), -- Token Lock Wallet
      ('0xb710457bff37e373351e2fdd622513eb0723540b'), -- Token Lock Wallet
      ('0xc3e25ac4d7de69b3411816941a0b85c57a842839'), -- Token Lock Wallet
      ('0x1f6cb15a92114e1a366924e6c2f7c201e3dc8563'), -- Foundation
      ('0xdd41ef63611cb796340aec574ebf779a41ba2cdc'), -- Token Lock Wallet
      ('0x7cc39176c85808f9c07fb32a694e177cfde5506e'), -- Token Lock Wallet
      ('0xdd1acdcb62a67bb7467ca57d597437ab06c7ef01'), -- Token Lock Wallet
      ('0xf18508c29c7a5728a8c052f29d03e2bd519c8e60'), -- Foundation
      ('0xeda49a4d1f96b93c2eb3900ae8186bf98ae1f14b'), -- Foundation
      ('0xa64bc086d8bfaff4e05e277f971706d67559b1d1'), -- Foundation
      ('0xa0debdef660dbdf57598b9ba53602071a92794d1'), -- Foundation
      ('0xe9100e908657b806be922ce04f61f48e3a499fbf'), -- Foundation
      ('0x8428c0d096d7a844eb063eea847c816926a6a6dd'), -- Token Lock Wallet
      ('0x085ffa226585302df82000fa334a95a2fb5768c3'), -- Token Lock Wallet
      ('0x86989b7b1ae82eb30d813d07c4bbd8731297e41d'), -- Gnosis Safe Proxy
      ('0x94a32f6ddd7ba7dfd179a3b5931535bdf0c61158'), -- Token Lock Wallet
      ('0xe34511c742c32d653aaf2c02a428d23ed4849c41'), -- Foundation
      ('0xb5384ebd92cb6cb9f3aad5f176fcb8d6ab555afa'), -- Foundation
      ('0x362717d3fa1bfe457535b9b716f450b95a858217'), -- Gnosis Safe Proxy
      ('0xa3276e7ab0a162f6a3b5aa6b3089accbaa65d12e'), -- Token Lock Wallet
      ('0x4a6c6f84fc66262e0d3b0b35b448cbccc8898ebd'), -- Token Lock Wallet
      ('0x7ed9d36539f349808c42187ed4e1753d5947db7a'), -- Token Lock Wallet
      ('0xea653f7e2b70a3077456f55978a545058f59e8ed'), -- Token Lock Wallet
      ('0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e'), -- Token Lock Wallet
      ('0x968c69f5b3b78990cffaecee6a2e592956cd99f9'), -- Token Lock Wallet
      ('0x7b1272c3202aef6eb069ee88cbec8106102d26da'), -- Token Lock Wallet
      ('0xc94a2669f719f792f166800fb6ef00fb3a7f5bec'), -- Token Lock Wallet
      ('0x4bbfbd1320093858d877ab0c8cd91ef0ce065318'), -- Token Lock Wallet
      ('0xa1f681e918d08cc5dba6d2540c0c3ea6d6f0f5f9'), -- Token Lock Wallet
      ('0x040a8ae130b5fbac973074aa1bd2c69773c5fbc2'), -- Token Lock Wallet
      ('0xd22c1c1a1fc452e3312489f1e89676e93c3323f0'), -- Token Lock Wallet
      ('0xe632b6d3db68d86b9675c8baba43f9e8d2bb4f44'), -- Token Lock Wallet
      ('0x03db85e86779febdd96d96ba43ac48382fb1a88d'), -- Token Lock Wallet
      ('0xa8df6bbc65cf526fbc6392524d113cf5b7c8a93e'), -- Token Lock Wallet
      ('0x3a4eec704b4e28dd3258baf52a2cab88d7dba603'), -- Token Lock Wallet
      ('0x1517977cdd8bafb2780b803dca8f36bc63118efa'), -- Token Lock Wallet
      ('0x7e9a9c31bc6dc4b7f6e4441c62368533cfd7e7d2'), -- Token Lock Wallet
      ('0x074408e01e1d322174aec7cc08768f6c621021ec'), -- Token Lock Wallet
      ('0xb85915dc553b5d6a2867ee40c3cead47b79da997'), -- Token Lock Wallet
      ('0xe543ef39bea1076e7786797572b64dcd666eef7f'), -- Token Lock Wallet
      ('0xd280c03db3cad2e36dc2414539c12575eb61b3c8'), -- Token Lock Wallet
      ('0x426e470d2dacdc52474d5c09fe3098e92f6d88bd'), -- Token Lock Wallet
      ('0x66461e2bdeeb022d7532cfd5495e3bad5024dc72'), -- Token Lock Wallet
      ('0x643c5f5223ba68e06766b194b274c4d90dd42dc8'), -- Token Lock Wallet
      ('0x6125ea331851367716bee301ecde7f38a7e429e7'), -- Token Lock Wallet
      ('0x7f7929491f02ef08133b5a75fe3992fae7a169fd'), -- Token Lock Wallet
      ('0xeb3504565b11c45361b34a29ded6779b678b558d'), -- Token Lock Wallet
      ('0xfde2323ce2ffbfffb84c4baffee0d3f6c8398a18'), -- Token Lock Wallet
      ('0x8ba97669f69284e99052b9b77726d7a73098ada7'), -- Token Lock Wallet
      ('0x489e8287374f8a50a97bef0473e309e5de81a761'), -- Token Lock Wallet
      ('0xb06071394531b63b0bac78f27e12dc2beaa913e4'), -- Token Lock Wallet
      ('0x2e3a90807cc95d818c9bfca5a996ed5556c7b27d'), -- Token Lock Wallet
      ('0x9154937dc144c87020a7974fbe9b0aa17b69cdfd'), -- Token Lock Wallet
      ('0x6e1018d184dc81af6e5b0a036810f2d72b32e879'), -- Token Lock Wallet
      ('0x38e6b1dc04087f69e69f10d7318643accc9854f5'), -- Token Lock Wallet
      ('0x58136502be6f834a5fbb300e4ed1fde0d234404e'), -- Token Lock Wallet
      ('0x502404cf223ddd655bcf7e1d3daec338f8480b5a'), -- Token Lock Wallet
      ('0xae795ff1464952dc57ba66cc11da8ac621228873'), -- Token Lock Wallet
      ('0xdb55d9010de459024c7a017e30919072ff646d53'), -- Token Lock Wallet
      ('0x234e50b877644e2130c86a16f97dcc1e7a057242'), -- Token Lock Wallet
      ('0x3f2eeb69778671883c912581cff39d93880b9064'), -- Token Lock Wallet
      ('0x347d84778a65e917a00599c54c99d5f860eaf981'), -- Token Lock Wallet
      ('0x814d01862df3124cf4d87dd375a53b4b206df8a5'), -- Token Lock Wallet
      ('0x477a89a44c3044f1af4bbad69e04b2b21da615d5'), -- Token Lock Wallet
      ('0x1c0ea3aefc170f6685f35cd8c4e6dd6310274c1e'), -- Token Lock Wallet
      ('0xd5960385b2c4d084a74f4528808f3105b257a1b6'), -- Token Lock Wallet
      ('0x65ae95127c434e8720b3e86485c801f480358f63'), -- Token Lock Wallet
      ('0xd3bac61ba87e8bb8032ea2d8024db6f87c8002d4'), -- Token Lock Wallet
      ('0x93ef3961872dfaba9a03b6d4fe9c0db32f07b7e7'), -- Token Lock Wallet
      ('0x06ac3d063a242e709899aceb189fbab244ed0005'), -- Token Lock Wallet
      ('0x8883eaa03b3389d04f812397492e559dcb080851'), -- Token Lock Wallet
      ('0x075e729f54d83473f03a83ae2f0492283065ef1f'), -- Token Lock Wallet
      ('0xc60d0c8c74b5d3a33ed51c007ebae682490de261'), -- Token Lock Wallet
      ('0x43ad9ed6bc65dcdf5c6bcd0429a904e505355d3d'), -- Token Lock Wallet
      ('0xd60f4473c7d4d307cbe75106bf59f46f83281d00'), -- Token Lock Wallet
      ('0xbd7e12fd477c53c88f715c97a951ca69d15907c2'), -- Token Lock Wallet
      ('0xfd7e0eebc25b9b438ed5a5c1dc39d521c7f5d501'), -- Token Lock Wallet
      ('0x8d0bc45e0361819d294bb74a4a119bf35916f994'), -- Token Lock Wallet
      ('0x57c6ca1effe6c676d93225a122f41eb24708edd9'), -- Token Lock Wallet
      ('0xffd6bfb590f91a881570d11b7010cc8b2edab1eb'), -- Token Lock Wallet
      ('0x97db9f64d519175392646c00285c732745c7dec2'), -- Token Lock Wallet
      ('0x88b2e385e95ffcd7ae07629a18d95b7711f4166a'), -- Token Lock Wallet
      ('0x289dd8bf0d5229c5aa4a29bb2c576fa60f4ce71d'), -- Token Lock Wallet
      ('0x85fe868adf7f5950b052469075556fb207e5372d'), -- Token Lock Wallet
      ('0x0d00fd4046731b06f0252358813cd7e8e725bcb4'), -- Token Lock Wallet
      ('0x5a8904be09625965d9aec4bffd30d853438a053e'), -- Token Lock Wallet
      ('0x367fc364ad29668adbfb654683d1e229f34be09c'), -- Token Lock Wallet
      ('0x4140d3d0086fce37ebadd965dff88e12cf78b1fb'), -- Token Lock Wallet
      ('0xf87d5ea528141c007fb68e6202b81868981fb7d1'), -- Token Lock Wallet
      ('0x7464f99665e9a0906d23e3ece3e637b3d4e97c6a'), -- Token Lock Wallet
      ('0x5679a20d3a7ebd0a5de264d585d00cc5f520b9f6'), -- Token Lock Wallet
      ('0xbac03acb82e2feeeac6a64d314e5f792d0781d17'), -- Token Lock Wallet
      ('0x52c004a4bcf1bcf44a66dbe584a7c357c752de5c'), -- Token Lock Wallet
      ('0xf8f5575f3e9ce8ddd844834beb4a5fb913e1e25e'), -- Token Lock Wallet
      ('0x2d72604306d20c27a45e5602fe310459c5188593'), -- Token Lock Wallet
      ('0x8585a861bc701e0f225e6e84d3d3ddbd4a2b9688'), -- Token Lock Wallet
      ('0xe992d67d0632027166140128f28eea9b4ca00f12'), -- Token Lock Wallet
      ('0xbdb4c34316187f56edb092bba04f859a8e26bc51'), -- Token Lock Wallet
      ('0xa0f6c04de4eba8c7b24ffaa288ca56742ff2cdaa'), -- Token Lock Wallet
      ('0x2e6b7de5a4d8bd62f38294b87d54c9d948b5245e'), -- Token Lock Wallet
      ('0xf1cce3699ce58d01ba4a631f99e4bd6e7e25b812'), -- Token Lock Wallet
      ('0xbc1926af7ab13ceea82597f751abdf9818e02e45'), -- Token Lock Wallet
      ('0xb1f562dcadb9482dd39c39bda18e911b4a66ccf1'), -- Token Lock Wallet
      ('0x30bb35bb2970ae5b77d3ee33c8a8d21075067fe1'), -- Token Lock Wallet
      ('0x0b751463e07d90f465573d3b5dd45e1afafd4cd0'), -- Token Lock Wallet
      ('0xcc79bc28f879e9736fe90b2ded078b654cdef6af'), -- Token Lock Wallet
      ('0x61378b600613bcfa0b4220011f614e6a967a917e'), -- Token Lock Wallet
      ('0x3bdb99eb6dbd0cc66537c120f9061a36f2a004e6'), -- Token Lock Wallet
      ('0xd22ea7e57fd8fde6295520bd700e33600de2f5d4'), -- Token Lock Wallet
      ('0xff5ff317987fbb1f0a9e4f32b10cfe7e647d1a69'), -- Token Lock Wallet
      ('0x634bb04d7513bd020d2ba5e1ef5f7cc53cac5f6e'), -- Token Lock Wallet
      ('0xa06c7e86cd902fb3b5f690dda9986899f9a19714'), -- Token Lock Wallet
      ('0x715654892892de8a8e41fabed8b36da93a986a89'), -- Token Lock Wallet
      ('0x1e3d52424d8c563d9a7c5b67ecbd3659cd37e4b7'), -- Token Lock Wallet
      ('0xaf495efb794244a0079c2718e8855ea8ba666bf2'), -- Token Lock Wallet
      ('0x071d17a5dcb72e3cc351be48f1a95d0e0363e255'), -- Token Lock Wallet
      ('0xbc76e8e400b4fb458876da68f7aec722fad8f680'), -- Token Lock Wallet
      ('0x9ad2420dbf0c21afb31490585c9bfb89e2b922ba'), -- Token Lock Wallet
      ('0xee63fe50066389fdabb6b02950c595cfd34a4aba'), -- Token Lock Wallet
      ('0x6f0452f5b0ea315625783f0f9f48b4cf669a8158'), -- Token Lock Wallet
      ('0xd93456bf656436e66a8e0a8835c43a6f59afbb37'), -- Token Lock Wallet
      ('0xaa3b07b1251d7961baf3ce05b101b82bd0ebf8d5'), -- Token Lock Wallet
      ('0x13ef41b59ae7dc031e2d49f2ca9b950fd13e6fc7'), -- Token Lock Wallet
      ('0xbf5555760258ff10b18af99a688536ce68996a25'), -- Token Lock Wallet
      ('0xcf513fde1a44bb2023a4c9095c5e9cc56d177eba'), -- Token Lock Wallet
      ('0x66853fa6b5ac8eb2e15871fff6b3c40929be4ced'), -- Token Lock Wallet
      ('0x49bc9eccd93cbfa6b76dcf33b3ba9a36aab05b36'), -- Token Lock Wallet
      ('0xe0c265b990f6a8ee48ddfb462662787f7b2bf308'), -- Token Lock Wallet
      ('0x22290f926b61ffcba0a70ec9a9b078ce08599cb0'), -- Token Lock Wallet
      ('0x4a2a8ce561b2d94806b42bcc1d50435d6f1ad990'), -- Token Lock Wallet
      ('0x2fcfdd74d105276b78c34fbb52e16b1e6b0589a3'), -- Token Lock Wallet
      ('0xd6a6f6ced349010b959df6d25b12643bb6a5e07f'), -- Token Lock Wallet
      ('0x309608e212a6199812269ef5f2b846b4725c6902'), -- Token Lock Wallet
      ('0x45a74db1ade7723446a6a1aa2fb85a2ccc0ca15a'), -- Token Lock Wallet
      ('0x33d17ef36ef471cfe98881b3ad8f2affbef9219b'), -- Token Lock Wallet
      ('0x3b67b626b5763b60def60fd7c8b10915f8265274'), -- Token Lock Wallet
      ('0x806296c8f6f4aa6dd816abcded47d41ae7eb3326'), -- Token Lock Wallet
      ('0x0ad80e37dd2ef16d17be53746be2e422a0a8f631'), -- Token Lock Wallet
      ('0xb393ff3cd1f70fecf9cf8b67f27780fbea0d084f'), -- Token Lock Wallet
      ('0xaac25115ae2362d06579d75b10b8a8ece386af9d'), -- Token Lock Wallet
      ('0x4ebc075c1dd19c40fa606f76c1272af77452b9fb'), -- Token Lock Wallet
      ('0xf62de2a9d8b8033a5b66f497dca1bd91080316fb'), -- Token Lock Wallet
      ('0xf57d370ce524c61a897a34ec3e484ac0ab7b9df8'), -- Token Lock Wallet
      ('0x7bf4c8fc5b83c0764888c1cd00925154d1ce18e7'), -- Token Lock Wallet
      ('0x7a0e2616046b897ba7290a25288145b8e3ac6daf'), -- Token Lock Wallet
      ('0x62810877b6dfd2932f7e718d26befcc705b7973b'), -- Token Lock Wallet
      ('0x3b9047e53efc926468285b974d1fcb29452f8ce7'), -- Token Lock Wallet
      ('0xbc5b6a1c7be65a76fdbe62719c748d6fe5e39531'), -- Token Lock Wallet
      ('0x5213fc1aaa035f24892790a8443f65c22020297e'), -- Token Lock Wallet
      ('0x70b91ef86b5199c8016a4e123fae5712e4f8cc55'), -- Token Lock Wallet
      ('0x0003ca24e19c30db588aabb81d55bfcec6e196c4'), -- Token Lock Wallet
      ('0x1dfc0fbfb4defe2b520987531bd89e0621a01b36'), -- Token Lock Wallet
      ('0x8eb6ba2dec708127e85f1fcc6e3a895009c770f0'), -- Token Lock Wallet
      ('0x58514ada5f7926c99bfcfa4f2f91294598f084f5'), -- Token Lock Wallet
      ('0x97a13b2969dc8268a24b7997ed64ab8339631cf4'), -- Token Lock Wallet
      ('0x250a8926497ffe73151a4fe8c4719a51b4c3cd7a'), -- Token Lock Wallet
      ('0x275d3d6035b374248dfa926f3f28980ff5b0c634'), -- Token Lock Wallet
      ('0xb16a4cc8a24ce7dfd6e517097717aff6fb10c0e7'), -- Token Lock Wallet
      ('0x240c0a6e4a6e4af831b4b676d226367173900b8b'), -- Token Lock Wallet
      ('0x62012ad7a3c8c32a15b5ecb38b588f73936834ab'), -- Token Lock Wallet
      ('0xf710361edc275b973857e88204da95a72386aa25'), -- Token Lock Wallet
      ('0x67e49253fa1b5be38265331ee987974804fcf6ec'), -- Token Lock Wallet
      ('0x7632b4469babef6ac88f7dee757eac8bef3733f7'), -- Token Lock Wallet
      ('0x8ad2e0c9928558f7c9743c4733f1a24ac7b60e0c'), -- Token Lock Wallet
      ('0x5804f59261ac49ab09bfe7bfaf1b277ec2120e68'), -- Token Lock Wallet
      ('0xa3978efba678bd4c369d770163c524a78aa4c67f'), -- Token Lock Wallet
      ('0x7e72b70f6e7f1d57eaa5295cc18f4281d2d17ac0'), -- Token Lock Wallet
      ('0x2139806c88e251d984871918e17d0b7a34a664f4'), -- Token Lock Wallet
      ('0x83a87db2ceec994f394a8f1536fb36e2dcd3dfa6'), -- Token Lock Wallet
      ('0xf9bbf0f4b63b3fb09549ef9758aeec2e5dcf21a2'), -- Token Lock Wallet
      ('0x9b1e565724707adfdc330023904c8a414635c1f5'), -- Token Lock Wallet
      ('0x9b2084089f2a42588e94f0bcb4d36e27c7afc318'), -- Token Lock Wallet
      ('0xb29e9b4214ad415558d7cf7f29ec4de7dce9ed9b'), -- Token Lock Wallet
      ('0x71ba24da09cc80d400c1c419ec459c3e130e37e6'), -- Token Lock Wallet
      ('0xcbb35782e564cd6b8273433a81718dfefd6dd11d'), -- Token Lock Wallet
      ('0xe7a694696a4d11ac0b7ab2dcb99a7fcf200eb00b'), -- Token Lock Wallet
      ('0x901073d364f6af645648dc81d7f90e7aab47142d'), -- Token Lock Wallet
      ('0xbe36fdc217d7019ec2f0de81cd59ec85dee1c91f'), -- Token Lock Wallet
      ('0xfb5b40098cdfec1564ae5b94d4deed116b887d08'), -- Token Lock Wallet
      ('0x978cd3207d0cf5a89003d85c2913bc9be120c31f'), -- Token Lock Wallet
      ('0x415aad6d15f1d48d430ddbcc6c90acf5432d89a7'), -- Token Lock Wallet
      ('0x4bc2e066fb0857493a1fbe48462bb34ff6ea731f'), -- Token Lock Wallet
      ('0x72acbecf3013d7b27421185d3bf369520bf552c8'), -- Token Lock Wallet
      ('0x1692a8710dcf0dce24bd34c028479176b97ee9ef'), -- Token Lock Wallet
      ('0xe58c90d9a9da8f20755216100a39b6c646cb26e2'), -- Token Lock Wallet
      ('0x0ceb7aa784616f4cd5d581ed5d1182bc4340b460'), -- Token Lock Wallet
      ('0x50fda0a43d6770a927ebe2909fce1cdcba417801'), -- Token Lock Wallet
      ('0xb3e2fe4e6673709613c22c63d3d7326f3bfa15cc'), -- Token Lock Wallet
      ('0x0c432b9ba55bd68c2e9fd70980dded4adfe016e5'), -- Token Lock Wallet
      ('0x7ca0ee4a792f4da7b6aaf4c082b234259de61112'), -- Token Lock Wallet
      ('0xf8ea1030a4fbc2c55bee9b297492888633947b4d'), -- Token Lock Wallet
      ('0x64bc3980a0128108545567af2be0ff77f1c8af10'), -- Token Lock Wallet
      ('0xd8410a44041e0a8e758e496113dfb42bef4ed3bc'), -- Token Lock Wallet
      ('0x7697a886fc3b71a8a88487019337a6bbe5838f1a'), -- Token Lock Wallet
      ('0x4955ec78868e90572c7d315a3c22238451fb7923'), -- Token Lock Wallet
      ('0x3622522a5eb9bba3417ec3d2a437f9d3c5caacee'), -- Token Lock Wallet
      ('0xa6b7fa454151298260d8ab7384cd7688a591bb14'), -- Token Lock Wallet
      ('0x00df1a072e66eae444af0756abd65f667b9aeb39'), -- Token Lock Wallet
      ('0xac8c69428414206b220a5ed20b351e385605b9ff'), -- Token Lock Wallet
      ('0xf7eab0b189b9c5a75bfddaf86fa8261d12601925'), -- Token Lock Wallet
      ('0x950d8f1e2e0ec438573a9540ca6f74913df0aeb1'), -- Token Lock Wallet
      ('0xf4a097ce3a4efbd1748b2ef2076813961e4e6fa7'), -- Token Lock Wallet
      ('0x3217b1a2129941669ffb1aa9f962dc8a686ffd47'), -- Token Lock Wallet
      ('0x1a6a74648ff8146f9b7df3a7e322506612e13e6a'), -- Token Lock Wallet
      ('0x289d2026a6a09c20261303775b9fca9494e7ab1f'), -- Token Lock Wallet
      ('0xf44964c13b8345302d4a9dfa329c6a002cfc0daf'), -- Token Lock Wallet
      ('0x7030613f84334149c3d1324497c96062c01e8459'), -- Token Lock Wallet
      ('0xc430be492ddeb6e761dbbd0e08bafe99f5064d90'), -- Token Lock Wallet
      ('0xf66af751c824c1a9ca8dde3d87e2a1ab8531bd16'), -- Token Lock Wallet
      ('0xe2877c81bbee3b9d492200f0bce5f2a2247f231b'), -- Token Lock Wallet
      ('0xdc81f90ccdd72ce4239d741a7ed9c16006dce73b'), -- Token Lock Wallet
      ('0xe49bfc7ed2f3347c1bb4d4c2d80908915f1e30b2'), -- Token Lock Wallet
      ('0x720a98087160bfdb282f695abe6f9ac966b03d43'), -- Token Lock Wallet
      ('0x48b5687f0595e2a4d581dc72305fbae214345d07'), -- Token Lock Wallet
      ('0xf3f182e859f789af8d6c2223d15c691471c79a2b'), -- Token Lock Wallet
      ('0x60165e465b242d051de4ebadfe0cf55b13f04dc5'), -- Token Lock Wallet
      ('0xbf4af02f7855c7ead52d037349b7a76e48ed47a9'), -- Token Lock Wallet
      ('0x7fd9cada29b91bad49e49481c0288ba045cf8713'), -- Token Lock Wallet
      ('0x069327d6015b1524b1c8cf0de36380be872795d7'), -- Token Lock Wallet
      ('0xf304928be241aaa4d3bc6b95328300b5691aab9e'), -- Token Lock Wallet
      ('0x532433d8f9ead9a35b10929d024b4cccb8c12321'), -- Token Lock Wallet
      ('0x8e297141f9dc76f4d71741da1a1e47294cf0fde2'), -- Token Lock Wallet
      ('0xfd12a5a7bc7f2eb4904a8177418dbb0bf094ba16'), -- Token Lock Wallet
      ('0x9aa6b3cc4d46a1629b9661666f6f639f7c30ede7'), -- Token Lock Wallet
      ('0xcba3cbd284108e1ad5942e0a6b2c75a030a9d379'), -- Token Lock Wallet
      ('0xb1a3886d051dad28bd0cc1af7506d60971b0c97c'), -- Token Lock Wallet
      ('0x8b234c946b9d61c1ec252bf6b3ba19543a848b10'), -- Token Lock Wallet
      ('0x7fd833cf8775e9c3524b8be925723345164964be'), -- Token Lock Wallet
      ('0xffdbb3281d73ac0f61b1d1a14ae68093ca01667a'), -- Token Lock Wallet
      ('0x696569606ed7e07a3a5f0720f2ece96a79135762'), -- Token Lock Wallet
      ('0x81dd719fd7efb19d12740b8057c0e363bee35b4a'), -- Token Lock Wallet
      ('0xefd8cd2688e270ba60719762d2cc1e6c2e616a2c'), -- Token Lock Wallet
      ('0x27ac40b9198659ce99eef1890d853a40560c9425'), -- Token Lock Wallet
      ('0xf6c835e53692c0cab4b444dcf5e35c980bcfc31b'), -- Token Lock Wallet
      ('0x4595855ed2d498fc2cbd7f415e7f262e2328d950'), -- Token Lock Wallet
      ('0x34a559e899b2512fda615ea415ac8d68fad404de'), -- Token Lock Wallet
      ('0xa20ad2e592ab005e4767edeb08215aeafc993237'), -- Token Lock Wallet
      ('0xbfe2a198cb0cdfb50fb03cd932c7387ddb0d25aa'), -- Token Lock Wallet
      ('0xacf308c36224175540603284ccb30a3e15c71baf'), -- Token Lock Wallet
      ('0xa74716e324cc976783dd15b0c62159b4852fe4f2'), -- Token Lock Wallet
      ('0x63c560997b8338f2b033f3ffdcc0f7c680feec45'), -- Token Lock Wallet
      ('0xbb784d9b398271b7a64f975bebde869409691915'), -- Token Lock Wallet
      ('0x9238584c74e5fa445a8f72a4d4ef4699dd783852'), -- Token Lock Wallet
      ('0xa543abe0ea61b4bbbca3f402442bda4bf7d45992'), -- Token Lock Wallet
      ('0x3eb3297b0e34a7897aa004b66a354053425f7894'), -- Token Lock Wallet
      ('0x40add970bf900d242da2bde256ead398d1ac4839'), -- Token Lock Wallet
      ('0x47da8deca9fe3a3ac18b49ca537ef0457cdb8bc9'), -- Token Lock Wallet
      ('0x0da2b8ead0975f707aa3bad4c1ae4e705e4b3b53'), -- Token Lock Wallet
      ('0xf7a36339f75ffaf058be67fd2a1764fb84eb5d87'), -- Token Lock Wallet
      ('0x4437e367cc68d87675148a9e4a1f052f0359c880'), -- Token Lock Wallet
      ('0x8b7663dd451c951f39e541188d9f7d9419e94421'), -- Token Lock Wallet
      ('0x19fbac0891042be71ce60321a17720358575f580'), -- Token Lock Wallet
      ('0x47618d5c8dfcd0026d57a43de1ffc39cb5cc8ab4'), -- Token Lock Wallet
      ('0xa3eb195c91c428d48c7ce24301f0dfbaf972b5d7'), -- Token Lock Wallet
      ('0xcb22a8ce581d04fef99b81ec5a60725070a3e8c4'), -- Token Lock Wallet
      ('0x8f9793029b66325b70fffbfdf2b04d8491682466'), -- Token Lock Wallet
      ('0x3795da0ae3173dcb56d0ec2d5be9311eb6d61510'), -- Token Lock Wallet
      ('0x4ac761592d1f948058843121133d048dc7dfc7c0'), -- Token Lock Wallet
      ('0xb1c660a1591914dc22b7f1aa03f9a717802ea319'), -- Token Lock Wallet
      ('0x1a99dd7d916117a523f3ce6510dcfd6bceab11e7'), -- Token Lock Wallet
      ('0xbe9d7c691792937ca7e2535652886ff390cc5b86'), -- Token Lock Wallet
      ('0xe183718f4a2a8cfc7fde85dc0a36cf64e5657a14'), -- Token Lock Wallet
      ('0x844b507e0083bc85b63d5e141b11f8daa173341f'), -- Token Lock Wallet
      ('0x6980fd6c85a98df8180123951e46d673b456699c'), -- Token Lock Wallet
      ('0x4fedde33607cfda2c82a999accb427d1170987d9'), -- Token Lock Wallet
      ('0xd7205e8054a6778e383d9afde80fd702db41c7fd'), -- Token Lock Wallet
      ('0x6e5ca16d78f9564dcede7f178b78a6120308ba53'), -- Token Lock Wallet
      ('0xa92bd8c16ae3266cf3b80ba0152735e9a8460ce7'), -- Token Lock Wallet
      ('0x43eb454e8715164bd41deddaec3d3e2a7fbcd7b4'), -- Token Lock Wallet
      ('0xd1982da809f156c73a0a8918b9f717adbb3eaa2f'), -- Token Lock Wallet
      ('0x62a0bd1d110ff4e5b793119e95fc07c9d1fc8c4a'), -- Token Lock Wallet
      ('0xf89b7183e644d4cbd4433463648b9aba5eb09190'), -- Token Lock Wallet
      ('0x6ac85b9d834b51b14a7b0ed849bb5199e04c05c5'), -- Token Lock Wallet
      ('0x5cccec1b4429ab12b626c2541c6300836a10f4e8'), -- Token Lock Wallet
      ('0x54f1678c496c878a4f0e9fa6e3b72c17cb6b80f9'), -- Token Lock Wallet
      ('0x632484e0411a40ca7f2552defb70605ec3e58676'), -- Token Lock Wallet
      ('0x76e84025978a0c16fc7ba483718b667388f2973c'), -- Token Lock Wallet
      ('0x41cf9718b66761d121b407f2a139b4f5b22fc9cd'), -- Token Lock Wallet
      ('0xf52d489208d75b790b2ab18786a0db3605a8b3cd'), -- Token Lock Wallet
      ('0x4d6a8776a164776c93618233a0003e8894e7e6c2'), -- Token Lock Wallet
      ('0x2d042d8a78cdaaa674b0aec5538e66a620eef75f'), -- Token Lock Wallet
      ('0x6879bbfcff0e54e62b899681ea52e74bd9b29fe4'), -- Token Lock Wallet
      ('0xfd4b9c44ee7afb7f98df3dda40aead6acd9f41f4'), -- Token Lock Wallet
      ('0x8ed9245a00d1f1edc664f32c33c3115f5b2c9a90'), -- Token Lock Wallet
      ('0xd133fd8e0607f5d82c91626140495ea0a31d0398'), -- Token Lock Wallet
      ('0x27ca9cf008a217e828b4b39945034ff8450730d1'), -- Token Lock Wallet
      ('0xef92412a451b5b7d26abae175f80367931c04cb8'), -- Token Lock Wallet
      ('0xd9c7cdf09d868467d9f94f885dd68e850e278118'), -- Token Lock Wallet
      ('0xbb3dd13614f50332819b93e37628fdcb7d2985b0'), -- Token Lock Wallet
      ('0xe995eff16391a874ebe815e4f017b034e673d930'), -- Token Lock Wallet
      ('0xcdd80384b68631f8d9c4ecfcce1ac1d3da7458a2'), -- Token Lock Wallet
      ('0xd11e05240a50e2eedb03e72d4c9c6465bc05f2a4'), -- Token Lock Wallet
      ('0x17d7dca770ef183355b202435e1ce80a11b53886'), -- Token Lock Wallet
      ('0xc36157756ea4838cf882edab9dd94325c38f2edc'), -- Token Lock Wallet
      ('0x45ac0ac13cb89e285282b1034e6eedcffb42cc2d'), -- Token Lock Wallet
      ('0x75555d4115fe3b00a90811822ff77b9f97121be2'), -- Token Lock Wallet
      ('0xd71869dd83206d87d3e6c2cb3fe76712c489b438'), -- Token Lock Wallet
      ('0xc3d77a6af93828dfda732e3620704af21bfd9638'), -- Token Lock Wallet
      ('0xfd599601786c5dd136ee2dd96086ec64dd6aead0'), -- Token Lock Wallet
      ('0x75a77853c1bf2490bc39c737581c18ca1dd13231'), -- Token Lock Wallet
      ('0x2c313e9fd1794685d2052af79457c858813b108f'), -- Token Lock Wallet
      ('0x4d7fdee1f02b7864658d7bc8c650b8901d033b9f'), -- Token Lock Wallet
      ('0xc1368e2817e7e3483c0359fbdcda765de9a55de0'), -- Token Lock Wallet
      ('0x453b5e165cf98ff60167ccd3560ebf8d436ca86c'), -- Token Lock Wallet
      ('0x011bdfea664ece919d895d174f57331460056236'), -- Token Lock Wallet
      ('0x23f579d291191b8ba88aabb97549ae9022aa8d33'), -- Token Lock Wallet
      ('0x1b536a13d1a18eb51bb216cf69aa89fcd0b1badc'), -- Token Lock Wallet
      ('0xe06899d681922247973437540323d384ae4b3928'), -- Token Lock Wallet
      ('0xbd1a939b4e4125254013a0c4573252be2fd9d207'), -- Token Lock Wallet
      ('0x57662ae1d37cf8bbda963e837fc96f45c4291e8c'), -- Token Lock Wallet
      ('0xac104dba73822c575713e1ecb06da67af01c54b3'), -- Token Lock Wallet
      ('0x8cbeeb2648db688649a92274541f89e68841f105'), -- Token Lock Wallet
      ('0x671bc7a0ffa02b0ee90ee03bcd11915df011503a'), -- Token Lock Wallet
      ('0xe758697c5fc77f6b64bcf54191c08ad051bbdc4b'), -- Token Lock Wallet
      ('0x78b9feb3f763ed43bd63a3f7bf52d486311b3a18'), -- Token Lock Wallet
      ('0x4bbae81dc703e33cb290c069afac427d96aba895'), -- Token Lock Wallet
      ('0x4167eb613d784c910f5dc0f3f0515d61ec6ec8df'), -- Token Lock Wallet
      ('0x9b1da82ee4d269eeeb4977e092b9ad2d7970c096'), -- Token Lock Wallet
      ('0x416fa0475148c65e55873359cd88161a3c4c31a1'), -- Token Lock Wallet
      ('0xeb8ca82006e0c0fb16cf9fc42e15bf3e9cdf73f9'), -- Token Lock Wallet
      ('0xb8df111ed4c8f1a651eec6a363d775004cb5ec0c'), -- Token Lock Wallet
      ('0x365507a4eef5341cf00340f702f7f6e74217d96e'), -- Token Lock Wallet
      ('0x45874192929530cd4e3dd0624df05bee3c13974f'), -- Token Lock Wallet
      ('0xca5ffcdf9f5383931e32aa1c015e7b5d1982b766'), -- Token Lock Wallet
      ('0xcc49c102b09addf780816b9989d95c873032cf88'), -- Token Lock Wallet
      ('0x39839abed87475422c5353256d17e08395c3af6b'), -- Token Lock Wallet
      ('0x4c059ccb00e504b4472f8fbb0d2556f165bdbb3b'), -- Token Lock Wallet
      ('0x55f3dcdaf0b73f7f0c761a9070d8865f37986e2c'), -- Token Lock Wallet
      ('0x7fa7d0212ac64b48efaf62055b9d2d274d14403f'), -- Token Lock Wallet
      ('0x4dc44f5906f593da2ac28be1d22c4ee9cd556420'), -- Token Lock Wallet
      ('0xbbf36ec9311d60513c09f952d7530c2ff37e86b4'), -- Token Lock Wallet
      ('0x7d4f34f0f305b65c0d89ae55fa57ff6015f0fcc5'), -- Token Lock Wallet
      ('0xddc39dceb6d8fb94d8a9b59cf3bf9a1e7ae19034'), -- Token Lock Wallet
      ('0x9f491ce41ffa24a074176106ed9c59b0ae504427'), -- Token Lock Wallet
      ('0xc65927fa56a824742bbc6acb03860b2daddbd323'), -- Token Lock Wallet
      ('0xb438830f11820a5e9cdde1363bc49bde2da67f1f'), -- Token Lock Wallet
      ('0x7e75a91495b6ccb46c567d566121df16eda092c5'), -- Token Lock Wallet
      ('0x34f38671e9ffb8464a268752680444feb8139feb'), -- Token Lock Wallet
      ('0x9a13b9b1cdac09502778088bcebd71a6bdd8d0be'), -- Proxy
      ('0x91074e14c784b26a8c337f85c0a16c0a83bec23d'), -- Proxy
      ('0x36db66903bcfb0bfaf5396daa68e65363efb2be8'), -- Foundation
      ('0x66a592d2274ec0381f91aacf5a49d19702d5a68b'), -- Proxy
      ('0x48301fe520f72994d32ead72e2b6a8447873cf50'), -- Foundation
      ('0x8B1C44E5D18EBe84E0E2775850b6D3f61425655f'), -- Foundation
      ('0x918841759970c82d8989be8182e571550b83dbf4'), -- Foundation
      ('0xa26e40a2ba484f43b33b28f5ba8291226f29cb61'), -- Foundation
      ('0xfbc8a2b5f7afa516243e0485ee1b7965408fdd2d'), -- Foundation
      ('0x5da8ff15e87c06b6bc6589e9bd05e4f86edbad09')  -- Foundation
      --('0xf55041e37e12cd407ad00ce2910b8269b01263b9')
      )
  AS foundation(FOUNDATION)
),
  daily_transfers AS (
    SELECT
      DATE(BLOCK_TIMESTAMP) as TIMESTAMP,
      SUM(
        CASE
          WHEN FROM_ADDRESS IN (SELECT FOUNDATION FROM foundation_list) THEN - RAW_AMOUNT/POW(10, 18)
          WHEN TO_ADDRESS IN (SELECT FOUNDATION FROM foundation_list) THEN RAW_AMOUNT/POW(10, 18)
          ELSE 0
        END
      ) AS daily_balance_change
    FROM
      ethereum.core.ez_token_transfers
    WHERE
      CONTRACT_ADDRESS = LOWER('0xc944E90C64B2c07662A292be6244BDf05Cda44a7')
      AND (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
    GROUP BY TIMESTAMP
)

SELECT
  DISTINCT TIMESTAMP AS DATE,
   CASE
    WHEN (EXTRACT(EPOCH FROM TIMESTAMP) - 1607817600)/86400 BETWEEN 0 AND 365 THEN (10000000000 - SUM(daily_balance_change) OVER (ORDER BY TIMESTAMP))
    WHEN (EXTRACT(EPOCH FROM TIMESTAMP) - 1607817600)/86400 BETWEEN 365 AND 730 THEN (10300000000 - SUM(daily_balance_change) OVER (ORDER BY TIMESTAMP))
    WHEN (EXTRACT(EPOCH FROM TIMESTAMP) - 1607817600)/86400 > 730 THEN (10600000000 - SUM(daily_balance_change) OVER (ORDER BY TIMESTAMP))
  END AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1607817600)/86400 AS DAYS,
  CASE
    WHEN DAYS BETWEEN 0 AND 183 THEN 1250000000 + DAYS * 16136612.02  
    WHEN DAYS BETWEEN 183 AND 365 THEN 4203000000 + (DAYS-183) * 5989010.99  
    WHEN DAYS BETWEEN 365 AND 635 THEN 5293000000 + (DAYS-365) * 5777777.78 
    WHEN DAYS BETWEEN 635 AND 905 THEN 6853000000 + (DAYS-635) * 851851.85 
    WHEN DAYS > 905 THEN 7083000000 
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP;
