const slides = [
  {
    id: 1,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABW_jVZ-59ilBZgXSOTT9E_orxGeMxoNPSWRxdA8CFh9ly7iBwt5lzObjO6jrH8YOQqTbPdT4hoodgxv9CPbsxMxuH32DqKNwzjpsOppqrifyyf2f584YfZ8y0Bwja0sCSDuGIQ.jpg?r=cdd',
  },

  {
    id: 2,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZopg8esWSy88GRbKlAQrb8GR23p8Fnas77hWEbd5IG_8sexPgW2DUy-1u_w2mhQjWppBUUCH_bKkR4V-RMVu_SnzEisoqViKIYiK8ABv2QBqUU5udgRekKIsqG7W8c8ikEYlg.jpg?r=163',
  },
  {
    id: 3,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABXk7Bn6UjzKb2wUye9izmugCfNGvxr9ZU5B5Pu_ZKME6wX1XZRfI3T_-Z45f0ghXqQfBTQdsWWYshEYedZQ3egKjUw6iRMD7zGwwOdz7gG39ujIeSChgMVmxSKVx0RY8N2g2s8P2vRIu4GnS07Oa62M-TuJwtP1Dyprxh1yEplmTP2ze_d2yHZXcAX420I1TEsUy7gg3kS06k04mZYeSPWD5a61fx09uv3S4gYDfO8v_2xzw2AqgBTLn4sjMJVrnfrdGRGRx7fJwqMipDFt8xABH07N5QtKIfucAvoupJWRR2CmFEXJuV022MzDHe9aDYpZjuDWf7gDr-7-Ek28yvvuYk0uyO_8YHRF2evOyHQpZ-lv7rV_EXirhUCVPhCSdbI4Iyt1KG8xOK4poNmzbeCHi78MbTHb2UwQ8Y3t6l94Ya2W5MfvgpCIgEFwxKh3PGRqA93Suiw.jpg?r=38b',
  },

  {
    id: 4,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABc1PM2LyDLVcpjDWaLb5R_eFQGf8Z3Ze0mXOwX16QN0IpQ4ytOGsvbcaYgvO7OlBBAXLvhRWNs3wKRDYhaNziT8DvQZ1kWaHGPyu.webp?r=d75',
  },

  {
    id: 5,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABegfErRYCIeyrMqszYU0dV30ZzEDwtw4mlAUms5VXTcIjgl7-FnwkhAvJEiWJD4R-5InRqEa4MHYfa-6TAw6PMg0Bovzk9858dTfXPBs1AGQJQ8GuGcL9imRrygPIz2Nvy2p0w.jpg?r=9b5',
  },

  {
    id: 6,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABTWIC7D9AX004CKmDQEjhHKk5NreAsUS4I_kmNq2e4rQpRipUsF7emznzEJ7LoruycioI59dUQa9tXY9ueliI1EE-dpeJmvJri9w.webp?r=523',
  },

  {
    id: 7,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABQz2G5TfMOI5oWbvghY4AcCLN2xs5l2Kb7jXOm7solEhDY_ZG2SMvdoBo5yQz0yUEp8bSMx7AVw9erJUUzs8jTW7wtMAzxcrFIozgace9faYOMS-BmgP_DKCuvqrcf7e14pUCcEBBzNguTJtIIgX6RgkFF1LhRA3XLauZcR7ChEjQETMQWdqSGFjxkZjOdkT5iXW8gL6fEvZi-RFaWneQs6X7Wwjsgv_JrW3Pl0k_UVm4w-I9o27VEhFH9_5tSEFz6qrf1moN5RBwRf2gvqekFjL.webp?r=a41',
  },

  {
    id: 8,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABZ1XND49ecMAHf7wR5dQ5QApR2UCyuwBuvfFsNcRmXNoioQ5QPZ3smFpTm4vT2CWyb7cMmKQLUHMMDzvUcV1VOmxRliKzoHBme3CxRv0_fZe4sUghmkdv00DhnsWwjImWu-sHoxs47Zi4ULBcHkVuK5e3h3F9wgoYF4f08IaWrdjRhfUPWd04cPoPdApU7JWF1n1_vVAjISUcB-Ub9yb63sd62vkqtNnCKTunb3DqlTINtMGPzyhmQog2jP6usmqvsdoz-BRkHp7Bef9DnxEt48l1h6bY492HEOcnZNn0fTkwL4WW79C.jpg?r=1ae',
  },

  {
    id: 9,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABSX6O58Mse1b8cg6DaVnSJYT6Ql1zISnPBRgBwJf-JcTalNoJ3qodYAzvgBJCMAWab4cXygJg9mdJWlYhujpoKMU3H-Nq3BUhsV37AZ4G8HzZViHJwMx1cgW0RkLmzZ8VuWz1Q.jpg?r=c99',
  },

  {
    id: 10,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABchg1WHIvd8J4lgz_3G0nObbi9gQ1DE5aJfIv5v5lNbR0h6PJk6oQ6gHQYNg3QZdCsbq0ckEVb6J3vBmC6IC1x5FcfXuIoHd0BlX.webp?r=161',
  },

  {
    id: 11,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABV4RW3F0fu58hBLdABc5eUfke3ifx7_K_EAyCdRjRh-GA9cEbftFQAab9GJKoDaq_F1BVgYPWQ9M1zYmkfSGujtQ3yPnfIPhKZDzFnzV9sCjcZ8uKMFMCKAec8HDF0SWJhNH8w.jpg?r=344',
  },

  //continue watching
  {
    id: 12,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe1XeMFRp5QS19ePdTVA--nusbyC8pdTR9dmM8myMW2oGvHLW_ZfQfHLkxBF1YQmyOBJvhywk9-mPbEDY4a0KyK1UcLxC-O2BLI.webp?r=bb2',
  },

  {
    id: 13,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcRj_5GUY7OsKRiuNQYq2qF8f5-amJZEgsKctVugs5huthbr0JzCJaqD0S7q_eg-Didwi6BmNmCvGCh3YoW5jcZ7g4KkYRmmeWBtcqXB5BPhuVhiUDWiqwUqTVnbHUI38wp7u9cfNtuBUn9GaniUKj6QFg-RF0ic4mxRJXPDIllx5D41Te5rEPOyNGODAwN9S3tMIULm1R3OxlZIo3YpjBOHLjHepEJsSyDjdLLmj3-RjC0X9OmgZYiWbCDnm5uy-VsY1Ynj8xmgRdNozxTR0dtAeXkEIudC5_rWdD6iZnPGbcICHu_-VUswKb9XxL0ko8Sr0ZhwbXFU4nk5PoYJhq2yfw8afAdC7pnlrgxWr-af9A.jpg?r=1e6',
  },

  {
    id: 14,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07',
  },

  {
    id: 15,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXjaseQmgXYWQOYh7JETnybAq-ET7T4lO9t5cTQfEFEhy7_Z3dDOj6c7FpxIAiigy03Fq4IoPlgX-ic-n12jbzY5GHaZka99dzRg2c1yuIQ8e5Cs5vlH4DUbvKfswk_RTlt.jpg?r=5a0',
  },

  {
    id: 16,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboxYyEGFAxLOtUvJJ2RCOh-4bJOptJVISrfcd1dxKjzNVKLXDg5Y0-z7mkorpZ8euYthUVAlbU-A3AH_nBkEy1-x2BRG_FeLf4.webp?r=acd',
  },

  {
    id: 17,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc3XQRlsfNahH01fhSbtoEbaHmyfXxRVom89h7EdKhxxIgB2wfbQEyuGiE9IzyKA3RCsindGTrYdnyXcHskAduKdwGLPKyWyH10yyY3Sgr2NA2tNuplwpM9a0yuknE4CUzIo.jpg?r=f97',
  },

  {
    id: 18,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfBhiJsOqsE6TfUi1-VNu4AzStJsgdqq0J-HASAcrAQf7IE9PJ4-If_wEh4oh8gKEisbOJ4jEs0YyBAFHtyNPmjNTgwve3tmkC8.webp?r=a63',
  },

  {
    id: 19,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABamipwJyFQ5kewSJK6s3XSVN2JZuFF6x-gRHcwESimURb6rBzFJogptCW6SMEp1xqeZAdrdeqYBaCakEMo4e0E0E_9kH85Vh6BMsTj2L7pfvATtxQoo58jHcLKYmAQ-K4GCJ.jpg?r=b94',
  },

  {
    id: 20,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUi-RleYwMkkJczwbO6OL8LyddHkxY-Hox77P1EOHdKVhnH9NhXUuDRc3J7oVwj7jvJY6EPBQ_QHrg22y19sriCB9hp8CIbsCOcuy3V-Qwyra-t_hG_69Ybr7JEtE16YeKnF.jpg?r=b38',
  },

  {
    id: 21,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYzV6m23fGHsGtdrRmRR2TOqh--0c5zIYxDV5lfVghS082nwxziSXGYt7hFX8dMQ_wXLPQd2i4SDD0Q0vEvLpSGzSZdAlJ27oWYEkdazGY9L4tk0sqOHs0Qmps_DSkI8gS8e.jpg?r=fa7',
  },

  {
    id: 22,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcX6OQaM9O-yWBUseVMS8nyx24F9TdYxMgbFatb-icJ0duw3hbCWPW7cObWi3KguGeMTeaV0pfwSr7xILY5eXFQfQj0UOuwPmVIzxSV4byvmO5ooJSFYesBuNxFxpCI9FUqZ.jpg?r=3ce',
  },

  {
    id: 23,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSJWc5egQb3sxyKqUiF_19SXDFpMUcWleeQbXeL-paRiRrcNyVliNIwBhVPaaf2i7i8NqQ8VGvY8bfGD8BNJDeN-JTvYIu2xchWGa4KfX3ACqqb0ACUkLqE01dcaky_AXyYt.jpg?r=0cd',
  },

  {
    id: 24,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTN69DLv1xtVGf053NvzsmqRL19PDfunvk6yb-s9i9qUJKwkKY7AyMTDO34Lb2usgCKkWlqtT26YXZKlLElCzXzV7L03mB8Zw_3aBXFg02USAUWfVWJmFVVWItPQ8ukQrNqD.jpg?r=b10',
  },

  {
    id: 25,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d',
  },
  {
    id: 26,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ2eiBpv_rekzKj9jQZotd4B03h7CzmZkUtSPJMLEAFqL9yfN0HrM3AsotR28mktweG4g0DJzJiprKzYxs34LF5H35bNHMRHRFQ.webp?r=615',
  },

  {
    id: 27,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeDuTIIVNEIf0sZ-C9tu-pA4cEW_fM_N2yoQnfVTvakIC2LPdRKTv5pzN85PF3nuYfahNNfehgoTbQC8oFqiKl9n62mpq69afrcgoMlhvHsEYrU9YB-01PxU6ZZFyLFdgKay.jpg?r=850',
  },

  {
    id: 28,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSQzIEnxYnJ64UTZv5fMckpq_Urzh6ODWj7AfL2lAln1u9NCzUTbux3T5qjJU7kdcDBBLstJ94bhxICIIjIxjAwvCYxMDGJ4RQRicsw5Lk4Im76fFQeLY8yzQfrslxdb1UTW.jpg?r=96c',
  },

  {
    id: 29,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeRjXvon9wUGxnZ-OzxreSdTC5nLZPxiGnd4d-LYlXg8BCsWBI0LrykFUBjOaLHIGOdypai6e6IhD5SyjCjYiqVcOcnTAeu5w9vfB0hU0ZCOQsy5a3vRxTXZYGdOxg3yqeaL.jpg?r=2d9',
  },

  {
    id: 30,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU_n4AmTteloPLyG_uBXYrZiPZIfrUupZOtS2RZjg3j36DgFlRYQHnVyt0cMBSeNBuWkYf4qzpuvbzJdtIIDmhMaSzr4ZfjwFf4MMSu7MACQtXclAEcstuWmfCXNwGtwK_j_.jpg?r=597',
  },

  {
    id: 31,
    image:
      'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWIGAyqV6hwC-LHmcmo_menMFVdlqvanwGfOu_0Q-sVsVB8Bj177Cu2sUx4Yo5rz96Bp1SZCEHz0GWUIfv21pa_7QDbSNdhv9tQ.webp?r=444',
  },
  {
    id: 32,
    image:
      'https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSKKx8JTUbeqaxBoJFba_tQSHLHOc-nNlTgtmEfKPUD4ARyY1Qd9w45NJRyyr2YrQVqD5qVi6j_9CBJQbGZ_W7VvDDEN0GipAF-cMfZtnNWONqXJjSIft-l1fgmSLYKjwpAQ.jpg?r=ab0',
  },
];

export default slides;
