const movieCards = [
  {
    id: 1,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1lg951p870jy795i8yqi.png",
  },
  {
    id: 2,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABW_jVZ-59ilBZgXSOTT9E_orxGeMxoNPSWRxdA8CFh9ly7iBwt5lzObjO6jrH8YOQqTbPdT4hoodgxv9CPbsxMxuH32DqKNwzjpsOppqrifyyf2f584YfZ8y0Bwja0sCSDuGIQ.jpg?r=cdd",
  },

  {
    id: 3,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZopg8esWSy88GRbKlAQrb8GR23p8Fnas77hWEbd5IG_8sexPgW2DUy-1u_w2mhQjWppBUUCH_bKkR4V-RMVu_SnzEisoqViKIYiK8ABv2QBqUU5udgRekKIsqG7W8c8ikEYlg.jpg?r=163",
  },
  {
    id: 4,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABXk7Bn6UjzKb2wUye9izmugCfNGvxr9ZU5B5Pu_ZKME6wX1XZRfI3T_-Z45f0ghXqQfBTQdsWWYshEYedZQ3egKjUw6iRMD7zGwwOdz7gG39ujIeSChgMVmxSKVx0RY8N2g2s8P2vRIu4GnS07Oa62M-TuJwtP1Dyprxh1yEplmTP2ze_d2yHZXcAX420I1TEsUy7gg3kS06k04mZYeSPWD5a61fx09uv3S4gYDfO8v_2xzw2AqgBTLn4sjMJVrnfrdGRGRx7fJwqMipDFt8xABH07N5QtKIfucAvoupJWRR2CmFEXJuV022MzDHe9aDYpZjuDWf7gDr-7-Ek28yvvuYk0uyO_8YHRF2evOyHQpZ-lv7rV_EXirhUCVPhCSdbI4Iyt1KG8xOK4poNmzbeCHi78MbTHb2UwQ8Y3t6l94Ya2W5MfvgpCIgEFwxKh3PGRqA93Suiw.jpg?r=38b",
  },

  {
    id: 5,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABc1PM2LyDLVcpjDWaLb5R_eFQGf8Z3Ze0mXOwX16QN0IpQ4ytOGsvbcaYgvO7OlBBAXLvhRWNs3wKRDYhaNziT8DvQZ1kWaHGPyu.webp?r=d75",
  },

  {
    id: 6,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABegfErRYCIeyrMqszYU0dV30ZzEDwtw4mlAUms5VXTcIjgl7-FnwkhAvJEiWJD4R-5InRqEa4MHYfa-6TAw6PMg0Bovzk9858dTfXPBs1AGQJQ8GuGcL9imRrygPIz2Nvy2p0w.jpg?r=9b5",
  },

  {
    id: 7,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABTWIC7D9AX004CKmDQEjhHKk5NreAsUS4I_kmNq2e4rQpRipUsF7emznzEJ7LoruycioI59dUQa9tXY9ueliI1EE-dpeJmvJri9w.webp?r=523",
  },

  {
    id: 8,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABQz2G5TfMOI5oWbvghY4AcCLN2xs5l2Kb7jXOm7solEhDY_ZG2SMvdoBo5yQz0yUEp8bSMx7AVw9erJUUzs8jTW7wtMAzxcrFIozgace9faYOMS-BmgP_DKCuvqrcf7e14pUCcEBBzNguTJtIIgX6RgkFF1LhRA3XLauZcR7ChEjQETMQWdqSGFjxkZjOdkT5iXW8gL6fEvZi-RFaWneQs6X7Wwjsgv_JrW3Pl0k_UVm4w-I9o27VEhFH9_5tSEFz6qrf1moN5RBwRf2gvqekFjL.webp?r=a41",
  },

  {
    id: 9,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZ1XND49ecMAHf7wR5dQ5QApR2UCyuwBuvfFsNcRmXNoioQ5QPZ3smFpTm4vT2CWyb7cMmKQLUHMMDzvUcV1VOmxRliKzoHBme3CxRv0_fZe4sUghmkdv00DhnsWwjImWu-sHoxs47Zi4ULBcHkVuK5e3h3F9wgoYF4f08IaWrdjRhfUPWd04cPoPdApU7JWF1n1_vVAjISUcB-Ub9yb63sd62vkqtNnCKTunb3DqlTINtMGPzyhmQog2jP6usmqvsdoz-BRkHp7Bef9DnxEt48l1h6bY492HEOcnZNn0fTkwL4WW79C.jpg?r=1ae",
  },

  {
    id: 10,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABSX6O58Mse1b8cg6DaVnSJYT6Ql1zISnPBRgBwJf-JcTalNoJ3qodYAzvgBJCMAWab4cXygJg9mdJWlYhujpoKMU3H-Nq3BUhsV37AZ4G8HzZViHJwMx1cgW0RkLmzZ8VuWz1Q.jpg?r=c99",
  },

  {
    id: 11,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABchg1WHIvd8J4lgz_3G0nObbi9gQ1DE5aJfIv5v5lNbR0h6PJk6oQ6gHQYNg3QZdCsbq0ckEVb6J3vBmC6IC1x5FcfXuIoHd0BlX.webp?r=161",
  },

  {
    id: 12,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABV4RW3F0fu58hBLdABc5eUfke3ifx7_K_EAyCdRjRh-GA9cEbftFQAab9GJKoDaq_F1BVgYPWQ9M1zYmkfSGujtQ3yPnfIPhKZDzFnzV9sCjcZ8uKMFMCKAec8HDF0SWJhNH8w.jpg?r=344",
  },
  {
    id: 13,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pfaibn3kao9hfqvcwu4t.png",
  },

  {
    id: 14,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v38gorihn1w9evgd88u7.png",
  },
  {
    id: 15,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e24ucuk3xlth324zw6i2.png",
  },
  {
    id: 16,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x06ovqdwvttcuqv84wbr.png",
  },
  {
    id: 17,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/znubsjbgdqyrip9ovj16.png",
  },
  {
    id: 18,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6cp3zhpygv16n104ojrl.png",
  },
  {
    id: 19,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3qsddwwnzf0x3zycys8g.png",
  },
  {
    id: 20,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0gxdllre56n23k00oajf.png",
  },
  {
    id: 21,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/87dkfuznkiaq6gjow9ui.png",
  },
  {
    id: 22,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2exrv9lhvkb8dnssvzgo.png",
  },
  {
    id: 23,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c3tw7w93ihuiol1nd11m.png",
  },
  {
    id: 24,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qyj9g9zyd2vb7ri4simg.png",
  },
  {
    id: 25,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/enxatyhcxdyezs2crpcy.png",
  },
  {
    id: 26,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1lg951p870jy795i8yqi.png",
  },

  {
    id: 27,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABW_jVZ-59ilBZgXSOTT9E_orxGeMxoNPSWRxdA8CFh9ly7iBwt5lzObjO6jrH8YOQqTbPdT4hoodgxv9CPbsxMxuH32DqKNwzjpsOppqrifyyf2f584YfZ8y0Bwja0sCSDuGIQ.jpg?r=cdd",
  },

  {
    id: 28,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZopg8esWSy88GRbKlAQrb8GR23p8Fnas77hWEbd5IG_8sexPgW2DUy-1u_w2mhQjWppBUUCH_bKkR4V-RMVu_SnzEisoqViKIYiK8ABv2QBqUU5udgRekKIsqG7W8c8ikEYlg.jpg?r=163",
  },

  {
    id: 29,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABXk7Bn6UjzKb2wUye9izmugCfNGvxr9ZU5B5Pu_ZKME6wX1XZRfI3T_-Z45f0ghXqQfBTQdsWWYshEYedZQ3egKjUw6iRMD7zGwwOdz7gG39ujIeSChgMVmxSKVx0RY8N2g2s8P2vRIu4GnS07Oa62M-TuJwtP1Dyprxh1yEplmTP2ze_d2yHZXcAX420I1TEsUy7gg3kS06k04mZYeSPWD5a61fx09uv3S4gYDfO8v_2xzw2AqgBTLn4sjMJVrnfrdGRGRx7fJwqMipDFt8xABH07N5QtKIfucAvoupJWRR2CmFEXJuV022MzDHe9aDYpZjuDWf7gDr-7-Ek28yvvuYk0uyO_8YHRF2evOyHQpZ-lv7rV_EXirhUCVPhCSdbI4Iyt1KG8xOK4poNmzbeCHi78MbTHb2UwQ8Y3t6l94Ya2W5MfvgpCIgEFwxKh3PGRqA93Suiw.jpg?r=38b",
  },

  {
    id: 30,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABc1PM2LyDLVcpjDWaLb5R_eFQGf8Z3Ze0mXOwX16QN0IpQ4ytOGsvbcaYgvO7OlBBAXLvhRWNs3wKRDYhaNziT8DvQZ1kWaHGPyu.webp?r=d75",
  },
  {
    id: 31,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABegfErRYCIeyrMqszYU0dV30ZzEDwtw4mlAUms5VXTcIjgl7-FnwkhAvJEiWJD4R-5InRqEa4MHYfa-6TAw6PMg0Bovzk9858dTfXPBs1AGQJQ8GuGcL9imRrygPIz2Nvy2p0w.jpg?r=9b5",
  },

  {
    id: 32,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABTWIC7D9AX004CKmDQEjhHKk5NreAsUS4I_kmNq2e4rQpRipUsF7emznzEJ7LoruycioI59dUQa9tXY9ueliI1EE-dpeJmvJri9w.webp?r=523",
  },

  {
    id: 33,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZ1XND49ecMAHf7wR5dQ5QApR2UCyuwBuvfFsNcRmXNoioQ5QPZ3smFpTm4vT2CWyb7cMmKQLUHMMDzvUcV1VOmxRliKzoHBme3CxRv0_fZe4sUghmkdv00DhnsWwjImWu-sHoxs47Zi4ULBcHkVuK5e3h3F9wgoYF4f08IaWrdjRhfUPWd04cPoPdApU7JWF1n1_vVAjISUcB-Ub9yb63sd62vkqtNnCKTunb3DqlTINtMGPzyhmQog2jP6usmqvsdoz-BRkHp7Bef9DnxEt48l1h6bY492HEOcnZNn0fTkwL4WW79C.jpg?r=1ae",
  },

  {
    id: 34,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABchg1WHIvd8J4lgz_3G0nObbi9gQ1DE5aJfIv5v5lNbR0h6PJk6oQ6gHQYNg3QZdCsbq0ckEVb6J3vBmC6IC1x5FcfXuIoHd0BlX.webp?r=161",
  },
  {
    id: 35,
    image:
      "https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABV4RW3F0fu58hBLdABc5eUfke3ifx7_K_EAyCdRjRh-GA9cEbftFQAab9GJKoDaq_F1BVgYPWQ9M1zYmkfSGujtQ3yPnfIPhKZDzFnzV9sCjcZ8uKMFMCKAec8HDF0SWJhNH8w.jpg?r=344",
  },

  {
    id: 36,
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v38gorihn1w9evgd88u7.png",
  },
];

export default movieCards;
