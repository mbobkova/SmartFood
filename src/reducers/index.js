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
          title: "Кролик",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Говядина",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Ветчина",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Барнина",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Свинина",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Сосиски",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "Телятина",
          titleEn: "Zucchini",
          media: ""
        },
        {
          title: "meat1",
          titleEn: "Zucchini",
          media:
            "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "meat2",
          titleEn: "Zucchini",
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
          media: "http://озёрныйкрай.рф/wp-content/uploads/2018/03/golubika-sezon-urozhaj.jpg"
        },
        {
          title: "Земляника",
          titleEn: "Strawberry",
          media: "https://sunny7.ua/upload/photos/1341855535763bf23cff5f9.06395558_articles_main_big.jpg"
        },
        {
          title: "Крыжовник",
          titleEn: "Gooseberry",
          media: "http://www.poleznenko.ru/wp-content/uploads/2012/06/jagody-kryzhovnika.jpg"
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
          media: "http://img.femy.ru/photos/000/215/370/original/vanila.jpg"
        },
        {
          title: "Анис",
          titleEn: "Anise",
          media:
            "https://nebula.wsimg.com/obj/OUQwNkNFRDA5NjBCRUMyRDUxMEI6YTc4MDM1OWRmYzU0MGQ4ZWIyYWVhNGJmODZjZDlhMjI6Ojo6OjA="
        }
      ]
    }
  ],
  selectedProducts: [],
  likedProducts: [],
  recipesList :[]
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
        selectedProducts: [...state.likedProducts.splice(0,0)]
      };

      case "saveRecipes":
      return {
        ...state,
        recipesList: [ ...action.payload]
      };

    default:
      return state;
  }
  return state;
}
