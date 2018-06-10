const initialState = {
  groups: [
    {
      group: "Молочное",
      items: [
        {
          title: "Йогурт",
          titleEn: "Yogurt",
          media:
            "http://multivarenie.ru/images/multivarenie/2015/03/min4-550x344.jpg"
        },
        {
          title: "Молоко",
          titleEn: "Milk",
          media:
            "http://media.pogliad.ua/news/article/2018/01/18/349391/aCSVKVC3giXsmaAxzyBP.r695x430.jpg"
        },
        {
          title: "Сливки",
          titleEn: "Cream",
          media:
            "http://testoved.com/images/kak-vzbit-slivki-recept-s-foto-2.jpg"
        },
        {
          title: "Сгущеное молоко",
          titleEn: "CondensedMilk",
          media:
            "https://kh-news.net/media/k2/items/cache/651d40634c7c4346f3f104a1ff612807_L.jpg"
        },
        {
          title: "Творог",
          titleEn: "Curd",
          media:
            "data:image/jpeg;base64,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"
        },
        {
          title: "Сметана",
          titleEn: "SourCream",
          media:
            "http://ladyelena.ru/wp-content/uploads/2017/01/k-chemu-snitsya-smetana-1.jpg"
        },
        {
          title: "Кокосовое молоко",
          titleEn: "CoconutMilk",
          media: "https://i.ytimg.com/vi/GdmPhhjeSEY/maxresdefault.jpg"
        }
      ]
    },
    {
      group: "Крупы и злаки",
      items: [
        {
          title: "Гречневая крупа",
          titleEn: "Buckwheat",
          media:
            "http://cdnweb01.wikitree.co.kr/webdata/editor/201706/16/img_20170616154323_726e2f33.jpg"
        },
        {
          title: "Рис",
          titleEn: "Rice",
          media: "https://matsumarurice.com/wp/wp-content/uploads/2017/08/1.jpg"
        },
        {
          title: "Манная крупа",
          titleEn: "Semolina",
          media:
            "http://muka56.ru/media/k2/items/cache/3dcbd8056f504532259e733a4b9e2ae3_L.jpg"
        },
        {
          title: "Перловая крупа",
          titleEn: "PearlBarley",
          media:
            "http://foodandhealth.ru/wp-content/uploads/2016/08/perlovaya-krupa.jpg"
        },
        {
          title: "Пшеничная крупа",
          titleEn: "Millet",
          media:
            "http://health-lifestyle.org/wp-content/uploads/2017/11/krupa2.jpeg"
        },
        {
          title: "Овсяные хлопья",
          titleEn: "Oat",
          media:
            "https://www.gastronom.ru/binfiles/images/20160906/b6c0c98a.jpg"
        },
        {
          title: "Отруби",
          titleEn: "Bran",
          media:
            "http://corpdidi.ru/imagesumi/3abd8b6e7f7106fe0a782c6bb2f479a6.jpg"
        },
        {
          title: "Булгур",
          titleEn: "Bulgur",
          media:
            "http://alter-zdrav.ru/wp-content/uploads/2017/09/polza-bulgura.jpg"
        }
      ]
    },
    {
      group: "Овощи",
      items: [
        {
          title: "Кукуруза",
          titleEn: "Corn",
          media:
            "http://www.minipedia.org.ua/wp-content/uploads/2012/12/kukuruza-zolotoj-zlak-novogo-sveta.jpg"
        },
        {
          title: "Помидоры",
          titleEn: "Tomatoes",
          media:
            "https://www.gastronom.ru/binfiles/images/20160329/b9babf0f.jpg"
        },
        {
          title: "Перец",
          titleEn: "Pepper",
          media:
            "http://villaved.ru/wp-content/uploads/2016/03/kogda-sazhat-bolgarskij-perec.jpg"
        },
        {
          title: "Оругцы",
          titleEn: "Cucumbers",
          media: "http://s.mediasole.ru/images/926/926321/1.jpg"
        },
        {
          title: "Морковь",
          titleEn: "Carrot",
          media:
            "https://babyfoodtips.ru/wp-content/uploads/2014/06/shutterstock_250834906-700x467.jpg"
        },
        {
          title: "Оливки",
          titleEn: "Olives",
          media:
            "http://foodandhealth.ru/wp-content/uploads/2017/01/konservirovannye-olivki.jpg"
        },
        {
          title: "Маслины",
          titleEn: "Olives",
          media:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVQI9XR6ZdE6jFEx62oIxRf0DxZBPg74MpFPlv4w0ZnmKTPzt"
        },
        {
          title: "Тыква",
          titleEn: "Pumpkin",
          media:
            "http://www.med-practic.com/up/article/big/file_38929_3755354.jpg"
        },
        {
          title: "Цукини",
          titleEn: "Zucchini",
          media:
            "http://moznoli.ru/wp-content/uploads/2016/11/mozno-li-cukini-zamenit-kabachkom.jpg"
        }
      ]
    },
    {
      group: "Мясо",
      items: [
        {
          title: "Курица",
          titleEn: "Chicken",
          media: "https://tv.ua/img/article/906/0_main.png"
        },
        {
          title: "Ветчина",
          titleEn: "Ham",
          media:
            "https://womanadvice.ru/sites/default/files/39/articles_main_big/2017-12-25_2318/vetchina_iz_indeyki.jpg"
        },
        {
          title: "Сосиски",
          titleEn: "Sausages",
          media: "https://www.patee.ru/r/x6/05/61/50/390x.jpg"
        },
        {
          title: "Телятина",
          titleEn: "Veal",
          media:
            "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "meat3",
          titleEn: "Zucchini",
          media:
            "https://images.pexels.com/photos/277276/pexels-photo-277276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      ]
    },
    {
      group: "Макароны",
      items: [
        {
          title: "Вермишель",
          titleEn: "Noodle",
          media:
            "http://n1s1.hsmedia.ru/b2/e2/ef/b2e2efa8ef3cedfe84714d884beea4d0/600x398_0_ab6433a6f1a913d1689af1f7e4e17a9d@800x530_0x59f91261_289750971394185908.jpeg"
        },
        {
          title: "Лапша",
          titleEn: "Pasta",
          media:
            "https://img-global.cpcdn.com/023_recipes/c0dc41fd311c541f322c0141373c58429be8b060754330d1d21a4295e314ac3d/751x532cq70/photo.jpg"
        },
        {
          title: "Листы для лазаньи",
          titleEn: "LasagnaSheets",
          media:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkgyN-WSxjyjEzL3Pof-okSjmr0PUj_nUpBWGJpJVbSsZdSLj0w"
        },
        {
          title: "Лапша удон",
          titleEn: "UdonNoodles",
          media: "http://static.chinacaipu.com/d/file/c/14690044521.jpg"
        },
        {
          title: "Спагетти",
          titleEn: "Spaghetti",
          media:
            "http://chudo-povar.com/images/kak-pravilno-varit-spagetti-recept-s-foto-2.jpg"
        },
        {
          title: "Макароны",
          titleEn: "Macaroni",
          media:
            "https://taiafilippova.ru/wp-content/uploads/2014/10/%D0%BC%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%BD%D1%8B.jpg"
        }
      ]
    },
    {
      group: "Сыры",
      items: [
        {
          title: "Фета",
          titleEn: "Feta",
          media:
            "https://zhenskoe-mnenie.ru/upload/information_system_14/2/1/2/item_21212/information_items_21212.jpg"
        },
        {
          title: "Сулугуни",
          titleEn: "Suluguni",
          media: "http://okeydoc.ru/wp-content/uploads/2015/12/9hs4yd5i.jpg"
        },
        {
          title: "Чеддер",
          titleEn: "Cheddar",
          media:
            "http://syrodelkin.ru/wp-content/uploads/2015/04/syr-chedder-v-domashnix-usloviyax.jpg"
        },
        {
          title: "Филадельфия",
          titleEn: "Philadelphia",
          media:
            "https://takprosto.cc/wp-content/uploads/k/kak-prigotovit-syr-filadelfiya/1.jpg"
        },
        {
          title: "Рикотта",
          titleEn: "Ricotta",
          media: "http://www.sportiwno.ru/upload/articles/5132651953.jpg"
        },
        {
          title: "Плавленный сыр",
          titleEn: "ProcessedСheese",
          media: "http://jemchyjinka.ru/wp-content/uploads/2018/04/27.jpg"
        },
        {
          title: "Маскарпоне",
          titleEn: "Mascarpone",
          media:
            "http://italy4.me/wp-content/uploads/2016/12/Formaggi_mascarpone_cr.jpg"
        },
        {
          title: "Брынза",
          titleEn: "Brynza",
          media:
            "https://images.ru.prom.st/486934663_w0_h0_iz_kakogo_molo__ut_bryinzu.jpg"
        },
        {
          title: "Моцарелла",
          titleEn: "Mozzarella",
          media:
            "https://dinne.ru/wp-content/uploads/2017/06/da7c9db7d-880x586.jpg"
        }
      ]
    },
    {
      group: "Хлебобулочные изделия",
      items: [
        {
          title: "Багет",
          titleEn: "Baguette",
          media:
            "https://bit.ua/wp-content/uploads/2018/01/HeaderProducts_Baguette.jpg"
        },
        {
          title: "Лаваш",
          titleEn: "Pita",
          media:
            "https://takprosto.cc/wp-content/uploads/k/konvertiki-iz-lavasha/1.jpg"
        },
        {
          title: "Батон",
          titleEn: "Loaf",
          media:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXFRgYGBgVFRUXFxcYGBgXGBUYGBUYHSggGBolGxUXIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0mHSUtLS0tLS4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEkQAAECAwQGCAEJBQcDBQAAAAEAAgMRIQQSMUEFUWFxgZEGEyIyobHB8NEjQlJicoKSouEUg7LC8TNTY3OTw9KEo7MHFSRDZP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAQQBAwQDAQAAAAAAAAABAhEDBBIhMUETMlEUInGxQlJhBf/aAAwDAQACEQMRAD8A8zc+q02c0ZjExDYFRBA0CWa6ZqpR4k9yVDplAhiIUaG2QQobZlOllEDFyVOziZmiRG0RLMKIGREKdVgYiPOS0UCBRxIIbKAotoFQhxO6gDbx2FhFFF7qALTygAkE0W5qLBRRmgCcdtFXxGJ9zppBxqUAEYKKQKiBRSaEhmOwQ4YqVPJahiqABMMjVSLVIwpzKg1pCYjcVtAhyTBFJKD2EIGBiiihDqExdQWNkSEASktyU2rYQBB4ohPamJITmTCAAIoZQILiitdggRoramWrEDHi7JbiRJBRagx3TMkyQUV6yzszUXNmjhuASGMWZlJpkCahDIAROsAbtQAB9SmIQkEKE2ZTLIZdQAk6gJpDoC5bLqhWULQUc1LQ0fWPomIegQ2sR+VGtFTuzWUtRjj5No6bLLpFBFdNyFanSkuzseiGm66HZwdZimf5Qr6z2F9CGCUsIbWDf3qrGWtiukbrQvyzy2CTOZCyIvZhott3tTGx4aR4hVekOj1niT+SYdrJsPNtCktbHyiXpG/azzKcghOxXZ6Q6Fuxgv8AuPIn+IUVZE6G2uc7jTueFvHUY5eTF4MifRz5CXLMSulidFrWB/YOO4tPqqa1WCLDJD4bm/aaQOa0U4vpkOEl2gDcApsC1qRAFRIO7RbgN7Snkd61CxCQAC2s0eJBkG7UOMJOITGbKZeibEgLGVKC8klNy80GI2qBgQhxBVM3UO0Q6TQBEhSurIYmEQYIAEQtOFUUtWEUQAlGh1QwnSyiWiUKBBQJrEK+sQFlo4BoSJCZtT5mSAHIA1DambLDmSUveknrIzsoAWikzKnZ2kkZozGzdhMrqdCaI6vtvE3nDZ+qxzZo4o2zfBglllS6NaF6PzF6LMT+aMeJXQththN7IDWjE4cykbRbLtJmZwbmfgE9o/RrooDnOrkPmj9d68bLmnkdyfHwezDDjxLgWJfFPYkB9IivAepVhYNDylOd4z7VXGWczkr6yaNDcQJ4GmOoySekdMMhdlnaePwt2UxOxZbmheo5uohIYbCh3+8JiXdaTzSUfSpdO4A3WcSqm1W10QlziSTjluSz7QZbFNtm0cK7l2WojzxMzmSSaJhtqY0TddDRm40XMP0iBQGbicBLxJUYFkiRqvDnBpoDQNBOIy4rWNLlhKFl9aukYwgsLqyvvBDRrk3E+CBEjWiLP5VzcKMF1p/CC44jNWVk0EyV6VCa4yG0z+KcgtazADLu08Tim8z8GFQXXLErNYIxBm6K07IhcDLOZdgUZlltAEr1+RqHtDw4bwZqzs8WXdF0cT4mhRReNZnfPyAVLdIyc6fSOO0joazRXXYsDqn17UF0ucNwHkuftfRCKO1BIjNGQ7MQb4ZryXqggCdTXatGyNO/d5Lqx5M0TDIsUvFM8PMEgua4EHURIjgUBrTVez6S0JCjd9gcRgTOY4zmua0j0GZjCcWnU7tN4HEeK646hfyVHK8H9WeeWhl6RUg/tVyElb2vQUeEJPh0+kKj9OKrYLRMzW6kmrRg4uLpgGNoN5W4jKzTAZQLHMoqELtbVaiNomHNqtvgzB3IGVlmzByKOwIbhJwOtGBzQBqSxrKoxWBoQAF0KRkgR4VcFZPhzF4YjFLxmzoeBQgZXmEsW3MM1iBEnvxKExy1GNFFAB4DZuVpKQSWj4SsjIkAIGXXRrR4l1hFcvir7SRuMvAVwaNbk5oKwANE8gpWmwmLHFOwwS+8ak8pLxMsnOTkz28VY0oLx2VuhtHF4Ln9pxNSfIbF2WjrOA3AASz1BKANgtBcdw28FWaQ0m6ICBRnnv2LmdyZUryddBtOafMzCg0Gb8zrDdW9c6GzTFwHfRQjkMFVpss2htgqiKRokvJImI55LWHDF2Q3ayhhzoz5NowGpHztQB9V2nR7o+GNqBIYkgD+iTVcLsc8qirZVaG0LKWs1qJz4yV/GfAgEihd9ESpvMqJTTGkQ3sQCQAJFwEp7G7Kqg633/VQ1b5JjFz5lwvgvzpK9jQZAESGqevesNsBONDhl4eipBGkPihRrScQOJGexNfCNPTijp4dtmKzGWrd/VHs+mGNbXmDOUs1wNp0+GTa0X36vmje7GiQYHxqxHE/VDTdI90qV0xTjyzmljjLg7nSHTWCw9kmI7U0T3CeE1TROnNqdSHChwzM98lx4AABKaP0NMghmGqpyPdoMCKnGW1Xdi0K/ZxpOppdxGwoedLoPQguylNv0g/GOQKzuNhgCe+ZPBNwrFbe8LRElkQRnkW1mdq7Gx6EBwkCJA0y1AioI9FbQtFNZUyblUgT4mqnfOXREsuOPCOCEe3Nu9sObQSc1pEzkSKzqgW4wXk9dZzCfh1kOrd5AAmvRHCGMATuBHmcEraLIxwPYntMjmaSwTTyJ2iXkxy4lE8qt+i3QmsMw5jj2Xt7p+B2JTq6Lv7R0ckXFh7LpXoZHYdLVqO0YLltL6JiQSRccWYhwFJHI6jkvQwanf8AbLhnDqNOofdB2v0VPUzltCM2FhTCYWnPIDd5RW18F1HKUtshyBOYKxjZ8QrC3WQzLZYhV1mBltFOSACsbTcphi2xknS+l6qbYcjLUgDITRORwKGYQmWngmLmXjsWWuoGsIAqXQ1tWQjMNXCua0nYq/0oHBZBbMrTym7DC97UMEN2WHLd7mnrBIvaSMXDzp72JFoNGjPyGJUoloLSJZEeCTVqioummewaLIEMIlpiiEKVe50wPeSr9C2wPhAg5A81kdhcZnIrwbftPY2rc2AtEJzpl5JOs5bAElFbIEeKtIzjKSRtYIE+KtpLouEm+BURKgD+qTi2Z9o7DaNvdtxzA+bPVPFWGj9Guiy+aJmbtQyA2n0VwWNhtuwxKmO7UCpcvgtySdCmj7HBgBt7AVAAq6WFMBWtdS1pC2viCWDRg0eZ1rQhYn+qmG0OtJQ+SdyTvyUcYGcghsaBU+/1TVoFaUzPv1XOaUt143YXbOsd0fE7N6pQs23hNIaUDd+QG9Vny0YjFrTkCaiVdysNG6Gc5xLu040mddZAD34rr9D6CAlPAa9QoTvNeabnGHRMnfMjltFaBJLaSmaZmeUgN3kuy0V0YwJFR4HAy15K1bDhwe0HASzNBqAAljTI60GJ0hYDIYDNYPJuIcptfYi2sei2MqZAAVyGGZW36RhMndF4jYAJ7/Ci4y36fc8yy2E0PxSItBBnM+9k5LSDoj6ZvmTO4ZpwuFC1mxsifVRZHmZzBMsSSZ8TmuThWgUphrpyCsYFqpMgUM578phbRmiJYNvR1EInUmGnYufGkWipMqbQN+c+CDauk8KG2b33aavGU810rIqOV4ZN8HSRGApCOwZ4Lj7V02LgRBhvc7IkSbLXJV5tVsjVLroyDcvRYZckDpxaeflnS6T0HCfWjTiC2QnvbmuY0jYXQzJwocHDA7j6JodHI76ue9x2kzy1blf6F0FFY1zIzr8J0pCJIEbQZ7kYtU4f6ic2mxyV7lZxFrxDtYH6qpay7GiMOB7Q9V22m9AuhCbJuZM7S0bdY2rkdMNlEhRPunivSx5IzVxPNlFxdM05vZB1GXwRIjcHax4jFGbDoRrH9FkATYRmDMeq0IAtPh5FFug4jYfiiNZ40PHBbaPgeH6IAUi6OqZiqxWcO1gAA1Ipyw8FiVsODhoLZlW9ms8geQP8RSdhgkyliTIepVnGBuhjR3jdH2RieJmqELQmyaXnOjdwSNoigVT9tNJSwoFR2x9UDOx/9PtOG86A44Tc3d84eq72HaB8V4bYLS6HEbEbi0zHqF61oq3NjwxFYd4zBzB2rytXjcJ710/2epppqcNr7X6Ldzp0C0+BMYIEE5madhxRRc92bNNdBrCzq2BuNa+ay0MCkDP3wUspcipoi+bK20xbomlHWgBrnOMgBwTuk4UxT3mos0U0tvRR2ZghuM8JT90Ts0i1RzNpgRbULrJthmRJwLq0GxvvfZ6O0IxgmdQlIYYSCvpybJrQJ7sqY7ktazSplTBS5SfCLUgMmscXGnamN1MVK1aaMuzKU8VTRg51Bt1a1G1PlT3PPPcl6V9mn2g7Xb3uNSffklxFIz5qNynvwS8QzwV7Eui9wx1gnOaL1olj41KrotM5+/BV9tt4bQVOxNQbBzSLo28AkT/p5pW09IJdlszsGSpIbYkU5ieMhWm5XujtDyl2DM6hU+5LRqMTPfYm2NaH53R9WV7nkrGx6FAF55P2nZ4SqarqLF0bJd2pNbISl39uweK6CBZ4MORAaS2XadKe2pwPJYym3x+jN5Evain0Z0dnJxEmFs5mYcNXZI8yugs9hhsFBeO2gQLTpJgGJIOoyGrigst8xKdNUwtMeJds58kpy7H3gkybIDZ8cUnEsu/eiQos85BbMYTmfcti3lji0ZRlKLFGk1B18lzHS/QvWQXuhjtDtSGcq0GvzXWRRXyS0c4HJYR3YpXE3ajkVSPPLJGvQ2vGoFGhdl+x3qntJaPbDJuUa4kyya4mZlsmlIrJtB1G6eGC9eE1OO5Hl5Mbxy2si5hFDrkpEVpmJ8QmI7ZydLEeIoUu9sxPV2t2tWZmnQgayxWJuHZ4hE2d01HHEc1tFhRyujW0n9xnHvu4BOQzec5ww7rdgGJ8hxUIIDW6wJw27ZSMR3F0mrVojthtlPCm8irj+I+CBiWkHzJllT4+9qorScSrSJFBbtPvz9FXx4VQEwQswKz0Fpp9liXm1ae+zJw9DtVe9slBRKKkqZcZNO0ez6I0jCtDL8J09Ywc06iE4TI+/BeK6O0hFgP6yE667PURqIzFV6LoDpnBjSZFlDiYV7jjsdluK8zNpZQ5jyjvx6lS4fZ1EKNqMt6MyKaTOaUfDrMeCx5IGJXLbOjhloWXiATQJm0RARsVEy0mePNSiWsnNPcL03Ye0RpYFJRSTU08Vp0f37zQob71SnZoo0CiUy8fPUqeNGm7dqT1tfPWqwnHwTs0SJhxI1zqoWghjZu1Z+8kzDhkNk0EuNR+pyG1bZ0ffEdOITOlMveKNy8jbo5mK58Q9mYGvXsAVpo7o6XEU3k195LrrFohjRhWZ9QjRbTDZQy3fqplmfUSErYto7o+xpExPdhsrzV26LCghxIDdeZ3eC5u39IJAiGJDxK5yNa4rzV2e8rNQlLspwv3HX2zpW2XyYrrIE/VUsTSz3unPHVM+fwVFFxx54qDSfpc1vGCXQ6S6R0DbZWtZ65e8lY2a3jNwEs3S81xkW1ZT5URbPGLjs40WiTIlTO3GkZ0Djvr4BNQbZjOcsyDn5lclAtV3PLNOQ9Il0gXTlu88k7IeNHTR7YDmOSharTIb9Wa54WyZrQa1j7YKAH3v1TJ5pSdhHFQS1RZzB+PvBLQYU7w1iY3ivklYlox2p+FIBrq5e+S6dFdSRyf9FK4sDABcwjMG8PI+i1Bb2p+5Z+aLAcGRK4VB3OofOfBSDLpIlWcvfiu480XdDc0loJkDTzWK1bKQnjhyosQB5tbrUQGtae62Q8STvJJPEKsMRztq6GBosFoe7NrTICs3zcANzGji8JfRthBJe7uNdI7QGl7uF0eITGJQbO4OE5TlPYDTynzRm2ed4yphyx9E2+HIOdQBou0wLsXy+84j7qk2CQ0AmpHLGfiHHgEgKe2MAkkCVcW2zOdvn+nqBwKrxBJGz+vwQCYFac2iN1Si4JFFtoTpVaLNJodfhj5jzh9l2I8l3GjemdnjSBdcd9F9OTsCvL7vmhuasMmnhP8msM0onuDHA1BmEOLD5Lx7R2lY8E/JxXNH0Zzb+E05Lr9E9PB3Y7Lp+kyreLcR4rjyaOS5XJ149UvPB1LzVDD5YKdntcKMA6G8OGtpn5YJmHZhiSuRprs7FNNFdaGyxSVnYHOlKexWukoc6NRrMWwmCgJQmW2OwYV1okzfhwpwHJadaAG4GfKW5Rh6RJ3US9ojXhXXqS4ISfkDFtZBmZzynLDLeqe2OLiZ61a2hjTQID2jV5Klwaoqm2akzmhx3hokE9aXqqtDsaq1yF0JvfVCfFnIZYrcR00Oi1SMmzcNGMYgIBdL36IL4vBVVk3Q9+07VNlo2jhTwVVfUg9VtFvLo27b7+Cw2yfePDaqTryNal+0ez8FLxj9Uv7K3rHBk5FxlxOfindB2hzrO0HFoLXfaYbpSHRaEYj3OyY0kbXZeEzyTlncGWu0wiey4iMzdEHb5OK69NDavyedrMm+VLwOx2Xg062lp3tx8JKwLZ3XH5za7xMHndPMJOzVBacpOG7BwHA+Cdsw7L2/OaQRhXKf4mtHFdJxkXQ55raKIsM1NPhl4LECKO3NDW3aBzyZ07s8QPstaB/051qm0pE6qExgHalO7nfiERHN2yBgs3Xk+1oiRQC7sBtXY9l94uPGBBe7fFQYsIxbQHGlyb3ZhrnOut/C90Q7oITGIRIBkyHjr+sceM3OB3PW3ippQeIFR+WGPxqw6v5QkC7cZQanuu3Wzyuuiw2/u0IwwZH5om6Yl3RUY/UhtH3kkNlfFYZOzIBHHuj8zn8krGs4lIYSkN07vkwnirmPBLQLwkQ4l0tUJhe787jVCbZpANIwnPbca1rhzc/kmIoeoqZ5egmUq+HgMyrqNB7BP1cdrzdb4AoBs3b2Nhlx2Ub/wAkh2VQZidVEurGOyUEHNxPvxSF2iKGRhNmVCVEwxkplDIokBGzx3wyHMc5p1tMuetdPovpvFZSK2+PpNk13EYE8lzJGG9RLffFTPHGfuRcMkodM9NsfSGBGldiAHUey7kcU7EiT98l5G9nvgPim7JpSND7kR0tR7Q5HDguOehX8WdsNb/ZHqWUvJFgTw1LhLF0xcP7Rk/rMP8AKfiuj0f0ihRSAH11Gh5HFceTT5Ido68eohPplpaYuQSxFJqNoiikvJLuiTWSs6ODVodiqu0uGATFpeTmkom1bRIkwERyA6ItxDMqD2gLZIwbBxHnFAc5ZGioL3LaMTGUyXWrToyA5yGStVAweSg7oylCfMy97TyShdJN6OPaBlgRym2f5XO5LRQRlLKzv9ByhMuCVHOvGeJJlOW2ULmktOPuR7PEEsHQHHZ8yfOfJMaIh9gay1orjea/qXOl9pkN24IvSHRpfAeG94NvtpOTmiZO8iQ4rTpHOuWPaNfVpyq0kjJ1ANtSOasAwtdPAE3Sfog0E93YKS0W4PhhzcHtDm/eAP8AMPwq1ey8JfSGGo5E7ZkclRILq3DBsxjlnWXDDgsTcOG9wDgAJiZnjP53jNYkBxdgd2HPDJ33Ub9R13sf6MOE0bYw1rWj5dp7jMOfMnWxgdDBJwk+7aeL260SM9wbdDQHABrG/wCI/qyGA4Ta99maP8l+orb2ANMNp7MuqB/w2saYrtxhsY8bS5D6H5BaOhuLCT34jp1r23UG3+1tTP8AS2JqDCBOQaXADVc77p/ubOw/vEaGx0NoyeJuke71l0kCerrrYwfuti06GLt0d0tljQtiObBYZ5ys9nc77yAKwAufXU1pB1xnmNFH3YbXA7lloi9gyHbeGDc53yr6bevI4I9mYYgqKxTEcayIMaI2A07hCEd3BSbIxGvPdF6MZ5MbOKx352N+6gBLScAEljZSdHbDb9mG0A8nEqviu+TtMQZlsNstsyfNqdjtLYgacYUMud/mxakc3flKFZLNODZW49daHRCNbGGR8GAoAqukbQ27D+i0eIn5EKugw7xaJe/ZTnSSJetD5fSI5U9E1oizgxWgCt0Snrcf1CYxO2WYsMiMf0SL2Zbl1OnoPysNucqeJ97lSxYHbeBkT6/BAWVkqqJFBuTXVY7yPEBRdCSGLvHv8PwUCPfNHiNUSz3zQAu4evqtXae9qJEHvmoypy8igYzZ9JRWd15lqNRjtT8DpG8d5s9o+BVPLH384LUvfNZSxQl2jSOacemXw02w5kcD6KETSrTmOaopLUlH08DT6qZdC2DIie9Di2naqlY4KvRQvqJD5jjYhPtA1pRbAVqCIeVsK6OoXyVGSmxtRw9FVGdtmmt98R8VeaLsl51zXT8bYsLzLEnBssnOEsC8SzowvHixX9gs92644AAz/wAvqIpP/biJksv9EAuhggY1BlgIsJsQD8cI810dgAvGkxeJ2EOvO/hu8wqXRbLgLSJSHCVnjmGPCKeSs9GursDLvGGS0/lg+KZBW9Eew2JAP/0xokIE6g7s8JPd+FXxJuyGINPvZbhe/KqGOww7e/6MaGyJWffYDDcBvD3Hgro1MjQOEjrrWQ2kuifhCS6HLsI5+oEg1nXOvqsQmWqI2gbOU641nUYZGY4LExHKQXExC4u7gLy4S77i4B0jqc60Rxsa3UrGysBiPDgAGhkMg1A6wui2hs/qsY8T1OCQ0XLq54B562QlNsMBohgSxLITIdMxaXJjR0QFgLpARRfdOlI5I3zbZbO8/fCTKQxGc4zMpPmDdP0x8pIS/wD02qE393sQtJPENr7gmGh4YNVwNssMbjOKRvU4UczvuFWt61zfrNDrS4N1nrbRZm/dlkl7Q0B8OG6oa4Bxni2yQi9xJl/fOeOAQARsG7MNl2Jw2u2sa2yw56/lY9oPBSY0EzNGFzYe0MaDaIrD93q2cVBs7oaaFxAccAbrXOiEbo9rJ+6q+2Wj5EkGvVRHkVobREuNH4YaBlbHtl5j4h70QvfxdJkMcHPBG5XtjhyiwZ92y2K+cKPcM9cw5UH7IXOgQv7x8MbQC4y8Hg8F0dvidjSEUfOisgjcwNJ8CmJnBRH3ohJ1+tVf9FG3o45z3NNBxkufgiZPvZ6rpuhsIftA3+eHqgCxt8AOt8NmQZ/tOPwVPYYAJtDiO66GAaUJL5jyXQ2d9/SMY/RhRJbO4weD1VaKaDZrQ7XaABwaXDzQIooMGbGkfOdP80QfyBRfBwOyfMTVrZIEoNnd9Vz88AXn/c8VCPZ+wR/htlvukEb5ySKKWJB8vgouhU96lbRIHgf9wN9EJ0KjthdwlIeYQMpI8OU1Es7PL+ZWNqs/e+yPNw9ChiB2TuafH9UMEINZjud4Sd6KN3Def5fin2QPJ3MsIHiEEwTLDWebZjyQOxS7jv8AiokJ2JAq8Swn4OHooiBNjjqLOTg/4BAhSSk1pIkMq8KTTbLPVtO+2Q31aON4ITIVQNaAsWDUezwph51Nnzc1vqjxIOzIeAlNWujbF8jPN75GnzWAEV+0fAIYJlC1lDvHqmXQO0zGrYZ5tBTllsV5sYj5t3xd+itrXo6Ys7pTBhQd8wJEeEkxWbh2GVpe0ykLTBbh/eNiMnXeFc2Kw3obAce2D+8FpaB+dvJWFp0eBao5l3Y9jdtmHGfkraz2KQAlhFheBhj+coJbFLPCvTp3hEGGT4TY/wDEAnLLBPWA/wCI4D71yWX1nJmxWaV0aurHCsJw5M8UcQ5SphdI1zDC3HMzhhAih6WwpQoFow6mIA46oUXsRDwvhOv7orLOeYGfGToic07YxFs8eEBO8x4aNZk5zPEMVP0btPXWZjnVN2646yKP5zcl5K8DzrLFdVr7oOVKHPxmsR4byBK6CcySMc/GaxMRx3VmJDcGzHWGFCYKC6IsiwiWqEQw/wCWE097XuuijXuwOUOI8Wdh2f8Ax7PGprftWLFK8lPgYssQEFzsHPY5wzAAdbog2i51DJZhhSdmgX3ODgL3VwYRrS9aniJaDyL1ixMDLdH7F7LqzEOv5dz4jxyiQuWxA0pZSyG9gIo6yQt7rpiE/n8VixMXkLY4A/8Acms+bCDnf6cK7/E5xSltiz0bf/vLREcebvgOSxYgRyNlNTsr4j4rtOgEH5RzjiJAb3HHkCsWIGxrRkX5W3xPoQwK7XOH+2FWWJt3Rr3fSjRT+GFdH5iFixMQa22eUFg+ho8O4xerAlxaeay2w7s9kUs/7kJnqsWKRi/U1cPrQcPrxnOKDEs9H7nnxin+VYsQMV0lCu9dPKGdVJGPLyWmWfvgCgaM8Kwj6rFiGJBbJA7QmBWI1v5i3yKB+zC6T9do4HrG/BYsQM3Cs3awxhEnjBLj4rLNY5BzT86A12WLHw2j+IrFiQGOsoDGOHehvcJZULYg31eeS3a9F3HObqceQ/qsWKhMMNHTBEsK81dWLR/yVZUaT75rFiBAtC2L5C1UxMEf+Qn0V3GsAMGzyApDZnvWLECLfSVn+Uju1w4b8sWmY/i8lYWqGGh51Eu5E/8AELFiYjTmyvDUXc+sn/OixGgOdTN3mHepWLEAbhkTDiMt/dx/8a5Xo3ZuptVrss53Ige2eF2JMS4GZ4rSxS+0UumX5gnWtrFiqibP/9k="
        },
        {
          title: "Лепешка",
          titleEn: "Scone",
          media:
            "https://s1.eda.ru/StaticContent/Photos/131113183908/131123192109/p_O.jpg"
        },
        {
          title: "Сухари",
          titleEn: "Crumbs",
          media:
            "http://suseky.com/wp-content/uploads/2016/12/suhari-kalorijnost.jpg"
        },
        {
          title: "Тортилья",
          titleEn: "Tortilla",
          media:
            "https://skinnyms.com/wp-content/uploads/2014/03/Homemade-Whole-Grain-Tortillas.jpg"
        },
        {
          title: "Хлеб",
          titleEn: "Bread",
          media: "https://doctr.ru/assets/img/diets/hleb.jpg"
        },
        {
          title: "Цельнозерновой хлеб",
          titleEn: "WheatBread",
          media: "https://tutknow.ru/uploads/posts/2017-09/1505843769_1.jpg"
        },
        {
          title: "Чипсы",
          titleEn: "Crisp",
          media:
            "https://foodandhealth.ru/wp-content/uploads/2017/08/chipsy.jpg"
        }
      ]
    },
    {
      group: "Фрукты",
      items: [
        {
          title: "Абрикос",
          titleEn: "Apricot",
          media:
            "https://images.pexels.com/photos/209416/pexels-photo-209416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Ананас",
          titleEn: "Pineapple",
          media:
            "http://www.deltasuper.com.br/blog/wp-content/uploads/2016/11/vertus-bienfaits-ananas-consommer_0.jpg"
        },
        {
          title: "Гранат",
          titleEn: "Pomegranate",
          media:
            "http://skalozyb-comedy.ru/wp-content/uploads/2018/02/granat.jpg"
        },
        {
          title: "Авокадо",
          titleEn: "Avocado",
          media:
            "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2017/01/avocado.jpg"
        },
        {
          title: "Груша",
          titleEn: "Pear",
          media:
            "https://www.twincities.com/wp-content/uploads/2017/03/170316eat_puck.jpg?w=525"
        },
        {
          title: "Киви",
          titleEn: "Kiwi",
          media:
            "http://feelgood.ua/media/article/201701/polza-kivi-dlya-zdorovya_620x280.jpeg"
        },
        {
          title: "Лайм",
          titleEn: "Lime",
          media: "https://images.lady.mail.ru/456642/"
        },
        {
          title: "Апельсин",
          titleEn: "Orange",
          media: "https://fixyourgut.com/wp-content/uploads/2017/08/oranges.jpg"
        },
        {
          title: "Яблоко",
          titleEn: "Apple",
          media:
            "https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg"
        },
        {
          title: "Банан",
          titleEn: "Banan",
          media: "http://bagiraclub.ru/images/bagiraclub/2017/05/thumb.jpg"
        },
        {
          title: "Яблоко",
          titleEn: "Apple",
          media:
            "https://images.pexels.com/photos/277276/pexels-photo-277276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Апельсин",
          titleEn: "Orange",
          media:
            "https://images.pexels.com/photos/105861/pexels-photo-105861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      ]
    },
    {
      group: "Орехи и семечки",
      items: [
        {
          title: "Фундук",
          titleEn: "Hazelnut",
          media:
            "http://ponchikov.net/uploads/posts/2017-10/1506861764_plody-lesnogo-oreha.jpg"
        },
        {
          title: "Арахис",
          titleEn: "Peanut",
          media:
            "http://www.nacional.hr/wp-content/uploads/2016/12/kikiriki.jpg"
        },
        {
          title: "Фисташки",
          titleEn: "Pistachios",
          media:
            "http://foodandhealth.ru/wp-content/uploads/2017/02/plody-fistashkovogo-dereva.jpg"
        },
        {
          title: "Грецкие",
          titleEn: "Walnut",
          media: "https://vitaminba.ru/wp-content/uploads/2015/07/orex.jpg"
        },
        {
          title: "Миндаль",
          titleEn: "Almond",
          media:
            "https://fitohome.ru/wp-content/uploads/2013/03/shutterstock_127762535.jpg"
        },
        {
          title: "Кешью",
          titleEn: "Cashew",
          media: "http://foodandhealth.ru/wp-content/uploads/2017/01/keshyu.jpg"
        },
        {
          title: "Тыквенные семечки",
          titleEn: "PumpkinSeeds",
          media: "http://sila-edy.ru/wp-content/uploads/2015/03/toss-around.jpg"
        },
        {
          title: "Подсолнечные семечки",
          titleEn: "SunflowerSeeds",
          media:
            "http://polza-vred.su/wp-content/uploads/2016/11/5749768b9cf32.jpg"
        }
      ]
    },
    {
      group: "Сладкое",
      items: [
        {
          title: "Вафли",
          titleEn: "Waffles",
          media:
            "https://www.gastronom.ru/binfiles/images/20150429/b906cc96.jpg"
        },
        {
          title: "Какао",
          titleEn: "Cocoa",
          media:
            "http://www.magicworld.su/media/k2/items/cache/a8bfce1b35b25b98e185785e8a683747_XL.jpg"
        },
        {
          title: "Шоколад",
          titleEn: "Chocolate",
          media:
            "http://analitikaua.net/wp-content/uploads/2017/07/SHokolad.jpg"
        },
        {
          title: "Печенье",
          titleEn: "Cookie",
          media:
            "https://www.gastronom.ru/binfiles/images/20170218/b1810db0.jpg"
        },
        {
          title: "Мармелад",
          titleEn: "Marmalade",
          media:
            "http://www.poleznenko.ru/wp-content/uploads/2016/07/fruktovyj-marmelad.jpg"
        },
        {
          title: "Пряники",
          titleEn: "Gingerbreads",
          media:
            "http://img.povar.ru/uploads/38/00/5e/88/imbirnii_pryanik_klassicheskii-344562.jpg"
        },
        {
          title: "Цукаты",
          titleEn: "CandiedFruit",
          media:
            "data:image/jpeg;base64,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"
        },
        {
          title: "Мюсли",
          titleEn: "Muesli",
          media:
            "data:image/jpeg;base64,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"
        },
        {
          title: "Сироп",
          titleEn: "Syrup",
          media: "http://pojrem.ru/img2/k-2702-00.jpg"
        },
        {
          title: "Варенье",
          titleEn: "Jam",
          media:
            "http://www.vokrugsada.ru/wp-content/uploads/malinovoye-varenye.jpg"
        },
        {
          title: "Зефир",
          titleEn: "Marshmallow",
          media:
            "http://img.povar.ru/main/38/ea/e4/0c/zefir_bez_sahara-442203.jpg"
        }
      ]
    },
    {
      group: "Мука и тесто",
      items: [
        {
          title: "Мука",
          titleEn: "Flour",
          media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQhe0HGgeIyrDBBGDnepbhy4-d_7Ycc3BoNo6Dm_XhY6nOawQ"
        },
        {
          title: "Мука гречневая",
          titleEn: "BuckwheatFlour",
          media: "data:image/jpeg;base64,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"
        },
        {
          title: "Мука кокосовая",
          titleEn: "CoconutFlour",
          media: "https://foodandhealth.ru/wp-content/uploads/2017/04/kokosovaya-muka.jpeg"
        },
        {
          title: "Мука кукурузная",
          titleEn: "CornFlour",
          media: "http://www.inflora.ru/img/corn-flour.jpg"
        },
        {
          title: "Мука ржаная",
          titleEn: "RyeFlour",
          media: "http://cdn.vkusvill.ru/sites/default/files/styles/product_page_image/public/images/goods/14740.jpg?itok=08UwN-zb"
        },
        {
          title: "Мука рисовая",
          titleEn: "RiceFlour",
          media: "https://foodandhealth.ru/wp-content/uploads/2017/03/risovaya-muka.jpg"
        },
        {
          title: "Слоеное тесто",
          titleEn: "PuffPastry",
          media: "https://smachno.ua/wp-content/uploads/old_uploads/img/forall2/sloenoe%20testo1.jpg"
        },
      ]
    },
    {
      group: "Морепродукты",
      items: [
        {
          title: "Карп",
          titleEn: "Carp",
          media:
            "data:image/jpeg;base64,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"
        },
        {
          title: "Семга",
          titleEn: "PinkSalmon",
          media: "http://fitfan.ru/uploads/posts/2010-10/1286907013_semga.jpg"
        },
        {
          title: "Лосось",
          titleEn: "Salmon",
          media: "http://st.oede.by/st//files/blyudo-eda-losos-ryba-steyk.jpg"
        },
        {
          title: "Форель",
          titleEn: "Trout",
          media:
            "https://images.pexels.com/photos/161481/appetite-banana-calories-catering-161481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Сельдь",
          titleEn: "Herring",
          media:
            "https://old.st.zakupka.tv/images/ca/34/48/2c4e5bb2-d708-11e1-a954-e9e8542adabd.jpg"
        },
        {
          title: "Анчоус",
          titleEn: "Anchovy",
          media:
            "http://www.neboleem.net/images/stories3/foodnutrient/anchous-pre2.jpg"
        },
        {
          title: "Кальмар",
          titleEn: "Kalmar",
          media: "https://images.lady.mail.ru/456747/"
        },
        {
          title: "Креветки",
          titleEn: "Shrimps",
          media:
            "https://www.edimdoma.ru/data/ckeditor_pictures/27236/content_fotolia_107363817_subscription_xxl.jpg"
        },
        {
          title: "Яйца",
          titleEn: "Eggs",
          media:
            "https://images.pexels.com/photos/6420/metal-easter-eggs-basket.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Осьминог",
          titleEn: "Octopus",
          media:
            "https://www.ilgiornaledelcibo.it/wp-content/uploads/2009/11/insalata-di-polpo-di-talia.jpg"
        }
      ]
    },
    {
      group: "Ягоды",
      items: [
        {
          title: "Черника",
          titleEn: "Hucklberry",
          media:
            " https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Клубника",
          titleEn: "Strawberry",
          media:
            "http://agroportal.ua/images/doc/f/c/fc2aefa-strawberry-629180-1280.jpg"
        },
        {
          title: "Малина",
          titleEn: "Raspberry",
          media:
            "http://ladyhealth.com.ua/images/articles/fotos/produkty/malina.jpg"
        },
        {
          title: "Смородина",
          titleEn: "Currant",
          media:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0vo02Eer-yovoZ66Lvl6AbfJjJwvUKRqjGADGf_WfoE1Q-Xwaw"
        },
        {
          title: "Черешня",
          titleEn: "Cherry",
          media:
            "https://www.gastronom.ru/binfiles/images/20150624/b7d1fdf2.jpg"
        },

        {
          title: "Ежевика",
          titleEn: "Blackberry",
          media: "http://st.oede.by/st//files/666493-1600x900.jpg"
        },
        {
          title: "Голубика",
          titleEn: "Blueberry",
          media:
            "http://озёрныйкрай.рф/wp-content/uploads/2018/03/golubika-sezon-urozhaj.jpg"
        },
        {
          title: "Земляника",
          titleEn: "Strawberry",
          media:
            "https://sunny7.ua/upload/photos/1341855535763bf23cff5f9.06395558_articles_main_big.jpg"
        },
        {
          title: "Крыжовник",
          titleEn: "Gooseberry",
          media:
            "http://www.poleznenko.ru/wp-content/uploads/2012/06/jagody-kryzhovnika.jpg"
        }
      ]
    },
    {
      group: "Приправы",
      items: [
        {
          title: "Лавровый лист",
          titleEn: "Laurel",
          media:
            "http://www.prosto-mariya.ru/uploads/images/default/lavrovyj-list-ukreplyaet-immunitet.jpg"
        },
        {
          title: "Куркума",
          titleEn: "Turmeric",
          media: "https://shkolazhizni.ru/img/content/i129/129407_or.jpg"
        },
        {
          title: "Кунжут",
          titleEn: "Sesame",
          media:
            "http://foodandhealth.ru/wp-content/uploads/2016/08/vazhnye-komponenty-kunzhuta.jpg"
        },
        {
          title: "Красный молотый перец",
          titleEn: "RedPepper",
          media: "https://travniku.com/wp-content/uploads/2017/04/kaiper1.jpg"
        },
        {
          title: "Карри",
          titleEn: "Curry",
          media:
            "http://www.anthonythespicemaker.com/wp-content/uploads/2014/03/Supreme-Curry-P-4-1-1.jpg"
        },
        {
          title: "Корица",
          titleEn: "Cinnamon",
          media: "http://foodandhealth.ru/wp-content/uploads/2016/12/korica.jpg"
        },
        {
          title: "Имбирь",
          titleEn: "Ginger",
          media:
            "https://kofegood.ru/wp-content/uploads/2015/08/molotyj-imbir.jpg"
        },
        {
          title: "Душистый перец",
          titleEn: "Allspice",
          media:
            "http://xcook.info/sites/default/files/products/12/Opisanie_0.jpg"
        },
        {
          title: "Гвоздика",
          titleEn: "Carnation",
          media:
            "https://z-portal.net/wp-content/uploads/2012/11/gvozdika-pryanost-1728x800_c.jpg"
        },
        {
          title: "Ваниль",
          titleEn: "Vanilla",
          media: "https://394604.ssl.1c-bitrix-cdn.ru/upload/iblock/780/7803c8b2193e398c8b312d26cd25b7d6.jpg?1471464224128471"
        },
        {
          title: "Анис",
          titleEn: "Anise",
          media:
            "https://nebula.wsimg.com/obj/OUQwNkNFRDA5NjBCRUMyRDUxMEI6YTc4MDM1OWRmYzU0MGQ4ZWIyYWVhNGJmODZjZDlhMjI6Ojo6OjA="
        }
      ]
    },
    {
      group: "Соусы",
      items: [
        {
          title: "Кетчуп",
          titleEn: "Ketchup",
          media:
            "http://img.povar.ru/main/54/f7/e6/b0/domashnii_ketchup_v_multivarke-230643.jpg"
        },
        {
          title: "Соевый",
          titleEn: "Soy",
          media:
            "https://foodandhealth.ru/wp-content/uploads/2017/04/soeviy-sous.jpg"
        },
        {
          title: "Кунжутный",
          titleEn: "Sesame",
          media:
            "http://saucebook.ru/wp-content/uploads/2018/02/sesame-sauce-4.jpg"
        },
        {
          title: "Табаско",
          titleEn: "Tabasco",
          media:
            "http://www.supergotovka.ru/resize/262/348/w/uploads/recipes/1375351730.jpg"
        },
        {
          title: "Васаби",
          titleEn: "Wasabi",
          media:
            "http://volshebnaya-eda.ru/wp-content/uploads/2015/09/vasabi.jpg"
        },

        {
          title: "Аджика",
          titleEn: "Adjika",
          media:
            "https://www.gastronom.ru/binfiles/images/20160919/b5301eec.jpg"
        },
        {
          title: "Кисло-сладкий",
          titleEn: "SweetAndSour",
          media:
            "https://avatars.mds.yandex.net/get-pdb/199965/60afd31d-a8e6-4b5f-86c3-7f2b6e20de16/s800"
        },
        {
          title: "Барбекю",
          titleEn: "Barbecue",
          media:
            "https://www.gastronom.ru/binfiles/images/00000179/00112714.jpg"
        }
      ]
    }
  ],
  selectedProducts: [],
  likedProducts: [],
  recipesList: [],
  likedRecipes: []
};

export default function userstate(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload]
      };

    case "delete":
      const selectID = state.selectedProducts.indexOf(action.payload);
      if (selectID !== 0) {
        return {
          ...state,
          selectedProducts: [
            ...state.selectedProducts.splice(0, selectID),
            ...state.selectedProducts.splice(selectID)
          ]
        };
      } else {
        return {
          ...state,
          selectedProducts: [...state.selectedProducts.splice(selectID + 1)]
        };
      }
    case "like":
      return {
        ...state,
        likedProducts: [...state.likedProducts, action.payload]
      };

    case "unlike":
      const likeID = state.likedProducts.indexOf(action.payload);
      if (likeID !== 0) {
        return {
          ...state,
          likedProducts: [
            ...state.likedProducts.splice(0, likeID),
            ...state.likedProducts.splice(likeID)
          ]
        };
      } else {
        return {
          ...state,
          likedProducts: [...state.likedProducts.splice(likeID + 1)]
        };
      }

    case "reset":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts.splice(0, 0)],
        recipesList: [...state.recipesList.splice(0, 0)]
      };

    case "saveRecipes":
      return {
        ...state,
        recipesList: [...action.payload]
      };

    case "likeResipe":
      return {
        ...state,
        likedRecipes: [...state.likedRecipes, action.payload]
      };

    case "unlikeResipe":
      const likeResipeID = state.likedRecipes.indexOf(action.payload);
      if (likeResipeID !== 0) {
        return {
          ...state,
          likedRecipes: [
            ...state.likedRecipes.splice(0, likeResipeID),
            ...state.likedRecipes.splice(likeResipeID)
          ]
        };
      } else {
        return {
          ...state,
          likedRecipes: [...state.likedRecipes.splice(likeResipeID + 1)]
        };
      }

    default:
      return state;
  }
  
}
