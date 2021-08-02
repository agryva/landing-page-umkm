let content = [
    {
        "image": "assets/content/batik-cirebon.gif",
        "title": "Batik Jawa Barat",
        "description": "Batik adalah kain bergambar yang dibuat secara khusus dengan media untuk melukis atau menulis. Kata batik sendiri berasal dari penggabungan dua kata dalam bahasa Jawa yaitu \"Amba\" yang berarti \"menulis\" dan \"Titik\""
    },
    {
        "image": "assets/content/makanan-jabar.jpeg",
        "title": "Makanan Khas Jawa Barat",
        "description": "Salah satu daerah di Indonesia yang terkenal akan keragaman makanannya adalah Jawa Barat. Daerah yang dikenal dengan Tanah Sunda ini memiliki banyak makanan khas yang hingga kini masih banyak ditemukan, bahkan di berbagai daerah. Tidak heran, Jawa Barat banyak dijadikan sebagai destinasi wisata kuliner bagi banyak orang."
    },
];

$.each(content,  function (i, item) {
    $("#item-carousel").append("<div class='item link' index="+i+">\n" +
        "                        <div class='card-benefit card-green uk-card-primary uk-card-hover uk-card-body uk-light'>\n" +
        "                            <figure class='imghvr-fade'><img src="+item['image']+" class='img-fluid item-image'>\n" +
        "                                <figcaption>\n" +
        "                                    <h5>"+item['title']+"</h5>\n" +
        "                                    <small>Lihat Lebih Detail</small>\n" +
        "                                </figcaption><a href='javascript:;'></a>\n" +
        "                            </figure>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                    </div>")
});

// $("#item-carousel")