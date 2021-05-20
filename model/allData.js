const Images = [
    { image: require("../assets/kids1.jpg") },
    { image: require("../assets/kids2.jpg") },
    { image: require("../assets/kids3.jpg") },
    { image: require("../assets/kids4.jpg") },
    { image: require("../assets/ladies1.jpg") },
    { image: require("../assets/ladies2.jpg") },
    { image: require("../assets/ladies4.jpg") },
    { image: require("../assets/ladies3.jpg") },
    { image: require("../assets/gents1.jpg") },
    { image: require("../assets/gents2.jpg") },
    { image: require("../assets/gents3.jpg") },
    { image: require("../assets/gents4.jpg") },

    { image: require("../assets/essential1.jpg") },
    { image: require("../assets/essential2.jpg") },
    { image: require("../assets/essential3.jpg") },
    { image: require("../assets/essential4.jpg") },
    { image: require("../assets/dairy1.jpg") },
    { image: require("../assets/dairy2.jpg") },
    { image: require("../assets/dairy3.jpg") },
    { image: require("../assets/dairy4.jpg") },
    { image: require("../assets/bagged1.jpg") },
    { image: require("../assets/bagged2.jpg") },
    { image: require("../assets/bagged3.jpg") },
    { image: require("../assets/bagged4.jpg") },

    { image: require("../assets/cr.jpg") },
    { image: require("../assets/diary.jpg") },
    { image: require("../assets/drawing.jpg") },
    { image: require("../assets/promate.jpg") },
    { image: require("../assets/waterbottle.jpg") },
    { image: require("../assets/hilight.jpg") },
    { image: require("../assets/atlaschootypen.jpg") },
    { image: require("../assets/pencilbox.jpg") },
    { image: require("../assets/birthdaycrd.jpg") },
    { image: require("../assets/baloon.jpg") },
    { image: require("../assets/giftpack.jpg") },
    { image: require("../assets/wallbanner.jpg") },

    { image: require("../assets/CleannClear.jpg") },
    { image: require("../assets/toner.jpg") },
    { image: require("../assets/chandanaleepa.jpg") },
    { image: require("../assets/forever5cleanupscrub.jpg") },
    { image: require("../assets/lorealtotalrepairshampoo.jpg") },
    { image: require("../assets/kumarikahairoil.jpg") },
    { image: require("../assets/dove.jpeg") },
    { image: require("../assets/Revlonhaircolor.jpg") },
    { image: require("../assets/KumadoriLipstick.jpg") },
    { image: require("../assets/PerfectMatEyeliner.jpg") },
    { image: require("../assets/VianaMoisturizingCompactPowder.jpg") },
    { image: require("../assets/VianaPowderBrush.jpg") },

    { image: require("../assets/rice.jpg") },
    { image: require("../assets/koththu.jpg") },
    { image: require("../assets/ricencurry.jpg") },
    { image: require("../assets/string-hoppers.jpg") },
    { image: require("../assets/pizza.jpg") },
    { image: require("../assets/chickendrumsticks.jpg") },
    { image: require("../assets/burger.jpg") },
    { image: require("../assets/hoppers.jpg") },
    { image: require("../assets/avacado.jpg") },
    { image: require("../assets/pineapple.jpg") },
    { image: require("../assets/lemonwater.jpg") },
    { image: require("../assets/milkshake.jpg") },

    { image: require("../assets/acer1.jpg") },
    { image: require("../assets/asus1.jpg") },
    { image: require("../assets/dell1.jpg") },
    { image: require("../assets/hp.jpg") },
    { image: require("../assets/headphone.jpg") },
    { image: require("../assets/headphone1.jpg") },
    { image: require("../assets/headphone2.jpg") },
    { image: require("../assets/headphone3.jpg") },
    { image: require("../assets/pen1.jpg") },
    { image: require("../assets/pen3.jpg") },
    { image: require("../assets/pen4.jpg") },
    { image: require("../assets/pendrve.jpg") },
];

export const products = [
    { id: '1',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: "Organic Cotton Frock",
      image: Images[0].image,
      rating: 4,
      reviews: 345,
      shop:"Velona - Moratuwa",
      price:"LKR 1890.00",
      category: "kids"
    },
    { id: '2',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: "Baby Party Frock",
      //description: "This is the second best food place",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      shop:"Fashion Hub - Piliyandala",
      price:"LKR 2350.00",
      category: "kids"
    },
    { id: '3',
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: "Baby Boy Kit",
      //description: "This is the third best food place",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      shop:"Fashion Bug - Moratuwa",
      price:"LKR 2250.00",
      category: "kids"

    },
    { id: '4',
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: "Boys Shirt",
     // description: "This is the fourth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
      shop:"ODEL K-Zone Moratuwa",
      price:"LKR 1850.00",
      category: "kids"

    },
    { id: '5',
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: "Sleeveless Casual Frock",
      //description: "This is the fifth best food place",
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      shop:"FashionBug - Moratuwa",
      price:"LKR 1500.00",
      category: "Ladies"

    },
    {   id: '6',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Melissa red border Frock",
        //description: "This is the fifth best food place",
        image: Images[5].image,
        rating: 4,
        reviews: 178,
        shop:"ODEL K-Zone - Moratuwa",
        price:"LKR 3490.00",
        category: "Ladies"
      },
      { id: '7',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Green Cotton Saree",
        //description: "This is the fifth best food place",
        image: Images[6].image,
        rating: 5,
        reviews: 342,
        shop:"ODEL K-Zone - Moratuwa",
        price:"LKR 2450.00",
        category: "Ladies"
      },
      { id: '8',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Flow Line Trouser",
        //description: "This is the fifth best food place",
        image: Images[7].image,
        rating: 3,
        reviews: 376,
        shop:"FashionHub Piliyandala",
        price:"LKR 1560.00",
        category: "Ladies"
      },
      { id: '9',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Cotton Casual Shirt",
        //description: "This is the fifth best food place",
        image: Images[8].image,
        rating: 5,
        reviews: 342,
        shop:"ODEL K-Zone - Moratuwa",
        price:"LKR 2450.00",
        category: "Gents"
      },
      { id: '10',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Denim Long Trouser",
        //description: "This is the fifth best food place",
        image: Images[9].image,
        rating: 4,
        reviews: 202,
        shop:"FashionBug - Moratuwa",
        price:"LKR 3590.00",
        category: "Gents"
      },
      { id: '11',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Casual Black Shirt",
        //description: "This is the fifth best food place",
        image: Images[10].image,
        rating: 3,
        reviews: 234,
        shop:"Fashion Hub - Piliyandala",
        price:"LKR 1750.00",
        category: "Gents"
      },
      { id: '12',
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Striped Casual Shirt",
        image: Images[11].image,
        rating: 4,
        reviews: 321,
        shop:"Velona - Moratuwa",
        price:"LKR 2300.00",
        category: "Gents"
      },

      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Orient Brown Sugar",
        image: Images[12].image,
        rating: 4,
        reviews: 100,
        shop:"Keels Supper - Moratuwa",
        price:"LKR 267.00",
        category: "Rice/Sugar/Essential"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "CIC Golden Crop",
        image: Images[13].image,
        rating: 5,
        reviews: 567,
        shop:"Cargils - Piliyandala",
        price:"LKR 400.00",
        category: "Rice/Sugar/Essential"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Coconut Milk Powder",
        image: Images[14].image,
        rating: 2,
        reviews: 367,
        shop:"Lanka Sathosa Piliyandala",
        price:"LKR 350.00",
        category: "Rice/Sugar/Essential"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "String Hoppers Flour",
        image: Images[15].image,
        rating: 3,
        reviews: 254,
        shop:"Lanka Sathosa Katubedda",
        price:"LKR 220.00",
        category: "Rice/Sugar/Essential"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Ariya Milk Powder",
        image: Images[16].image,
        rating: 4,
        reviews: 490,
        shop:"Cargils Mount Lavania",
        price:"LKR 480.00",
        category: "Daily Products"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Anchor Fresh Milk",
        image: Images[17].image,
        rating: 5,
        reviews: 50,
        shop:"Lanka Sathosa Katubedda",
        price:"LKR 360.00",
        category: "Daily Products"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Happy Cow Cheese",
        image: Images[18].image,
        rating: 5,
        reviews: 300,
        shop:"Keels Supper Moratuwa",
        price:"LKR 510.00",
        category: "Daily Products"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Anchor Newdale",
        image: Images[19].image,
        rating: 4,
        reviews: 400,
        shop:"Lanka Sathosa Piliyandala",
        price:"LKR 60.00",
        category: "Daily Products"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Orient Mysoor Dhal",
        image: Images[20].image,
        rating: 4,
        reviews: 200,
        shop:"Family Super Dehiwala",
        price:"LKR 310.00",
        category: "Bagged Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Bombai Onion",
        image: Images[21].image,
        rating: 3,
        reviews: 210,
        shop:"Cargils Rawathawaththa",
        price:"LKR 387.00",
        category: "Bagged Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Orient White Cowpea",
        image: Images[22].image,
        rating: 4,
        reviews: 150,
        shop:"Keels Super Moratuwa",
        price:"LKR 526.00",
        category: "Bagged Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "1KG Potatoes",
        image: Images[23].image,
        rating: 4,
        reviews: 412,
        shop:"Keels Supper Rathmalana",
        price:"LKR 369.00",
        category: "Bagged Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Atlas CR Book",
        image: Images[24].image,
        rating: 4,
        reviews: 412,
        shop:"Didula Bookshop Moratuwa",
        price:"LKR 220.00",
        category: "Books and NotePads"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Rose Diary",
        image: Images[25].image,
        rating: 3,
        reviews: 234,
        shop:"Sarasawi BookShop",
        price:"LKR 320.00",
        category: "Books and NotePads"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Darwing Book",
        image: Images[26].image,
        rating: 5,
        reviews: 165,
        shop:"Sarasi BookShop Piliyandala",
        price:"LKR 80.00",
        category: "Books and NotePads"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Promate Exercise Book",
        image: Images[27].image,
        rating: 3,
        reviews: 398,
        shop:"Samadhi BookShop Moratuwa",
        price:"LKR 180.00",
        category: "Books and NotePads"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Water Bottle",
        image: Images[28].image,
        rating: 4,
        reviews: 465,
        shop:"Sarasi BookShop Piliyandala",
        price:"LKR 280.00",
        category: "Other School Stationary"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Highlighter",
        image: Images[29].image,
        rating: 3,
        reviews: 123,
        shop:"Didula BookShop Moratuwa",
        price:"LKR 60.00",
        category: "Other School Stationary"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Atlas Chooty Pen",
        image: Images[30].image,
        rating: 3,
        reviews: 324,
        shop:"Samadhi BookShop Moratuwa",
        price:"LKR 10.00",
        category: "Other School Stationary"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Pencil Box",
        image: Images[31].image,
        rating: 2,
        reviews: 123,
        shop:"Samadhi BookShop Moratuwa",
        price:"LKR 180.00",
        category: "Other School Stationary"
      }, 
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Birthday Card",
        image: Images[32].image,
        rating: 5,
        reviews: 390,
        shop:"Didula BookShop Moratuwa",
        price:"LKR 120.00",
        category: "Gifts,Cards and Party"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Birthday Ballons",
        image: Images[33].image,
        rating: 3,
        reviews: 367,
        shop:"Samadhi BookShop Moratuwa",
        price:"LKR 15.00",
        category: "Gifts,Cards and Party"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Gift pack",
        image: Images[34].image,
        rating: 4,
        reviews: 243,
        shop:"Sarasavi Book Shop Piliyandala",
        price:"LKR 750.00",
        category: "Gifts,Cards and Party"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Birthday Wall Banner",
        image: Images[35].image,
        rating: 3,
        reviews: 534,
        shop:"Sarasi BookShop Piliyandala",
        price:"LKR 220.00",
        category: "Gifts,Cards and Party"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Clean and Clear Facewash",
        image: Images[36].image,
        rating: 1,
        reviews: 100,
        shop:"Saweena Piliyandala",
        price:"LKR 165.00",
        category: "Skin Care"
      }, 
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Rose water Toner",
        image: Images[37].image,
        rating: 2,
        reviews: 213,
        shop:"Asariya Fancy Moratuwa",
        price:"LKR 230.00",
        category: "Skin Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chandanaleepa",
        image: Images[38].image,
        rating: 4,
        reviews: 467,
        shop:"Shop in Mount Lavania",
        price:"LKR 200.00",
        category: "Skin Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Venivel Clean Up",
        image: Images[39].image,
        rating: 3,
        reviews: 254,
        shop:"Asariya Fancy Moratuwa",
        price:"LKR 450.00",
        category: "Skin Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Loreal Hair Shampoo",
        image: Images[40].image,
        rating: 1,
        reviews: 124,
        shop:"Fancy Paradies Dehiwala",
        price:"LKR 1350.00",
        category: "Hair Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Kumarika Hair Shampoo",
        image: Images[41].image,
        rating: 2,
        reviews: 234,
        shop:"Shop in Mount Lavania",
        price:"LKR 150.00",
        category: "Hair Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Dove Shampoo",
        image: Images[42].image,
        rating: 3,
        reviews: 298,
        shop:"Saweena Piliyandala",
        price:"LKR 370.00",
        category: "Hair Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Revlon Black Hair Color",
        image: Images[43].image,
        rating: 5,
        reviews: 500,
        shop:"Angels Moratuwa",
        price:"LKR 1500.00",
        category: "Hair Care"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Kumodori Lipstick",
        image: Images[44].image,
        rating: 3,
        reviews: 312,
        shop:"Saweena Piliyandala",
        price:"LKR 450.00",
        category: "Makup"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Perfect Matte Eyeliner",
        image: Images[45].image,
        rating: 5,
        reviews: 200,
        shop:"K-Zone Katubedda",
        price:"LKR 650.00",
        category: "Makup"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Viana Compact Powder",
        image: Images[46].image,
        rating: 3,
        reviews: 412,
        shop:"Fancy Corner Piliyandala",
        price:"LKR 720.00",
        category: "Makup"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Viana Powder Brush",
        image: Images[47].image,
        rating: 5,
        reviews: 376,
        shop:"Angels Moratuwa",
        price:"LKR 1120.00",
        category: "Makup"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chicken Fride Rice",
        image: Images[48].image,
        rating: 4,
        reviews: 210,
        shop:"Rasinvil Hotel Rathmalana",
        price:"LKR 420.00",
        category: "Buffets"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chicken Koththu",
        image: Images[49].image,
        rating: 4,
        reviews: 189,
        shop:"Lia's Resturant Moratuwa",
        price:"LKR 350.00",
        category: "Buffets"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chicken Rice and Curry",
        image: Images[50].image,
        rating: 3,
        reviews: 209,
        shop:"Nelum Kole Bokundara",
        price:"LKR 290.00",
        category: "Buffets"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "String Hoppers",
        image: Images[51].image,
        rating: 3,
        reviews: 65,
        shop:"Kaala Balan Rathmalana",
        price:"LKR 120.00",
        category: "Buffets"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Devilled Chicken Pizza",
        image: Images[52].image,
        rating: 3,
        reviews: 298,
        shop:"Pizza Hut Piliyandala",
        price:"LKR 500.00",
        category: "Fast Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chicken Drumsticks",
        image: Images[53].image,
        rating: 2,
        reviews: 109,
        shop:"KFC Mount Lavania",
        price:"LKR 240.00",
        category: "Fast Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Burger",
        image: Images[54].image,
        rating: 3,
        reviews: 265,
        shop:"McDonald's Dehiwala",
        price:"LKR 450.00",
        category: "Fast Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Egg Hoppers",
        image: Images[55].image,
        rating: 3,
        reviews: 213,
        shop:"Kaala Balan Rathmalana",
        price:"LKR 25.00",
        category: "Fast Foods"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Avacado",
        image: Images[56].image,
        rating: 4,
        reviews: 265,
        shop:"Roots K-Zone Katubedda",
        price:"LKR 140.00",
        category: "Juise and Smoothies"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Pineapple",
        image: Images[57].image,
        rating: 3,
        reviews: 234,
        shop:"Sweety Foods Moratuwa",
        price:"LKR 120.00",
        category: "Juise and Smoothies"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Lemon Juise",
        image: Images[58].image,
        rating: 3,
        reviews: 321,
        shop:"Juice Life Moratuwa",
        price:"LKR 110.00",
        category: "Juise and Smoothies"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Chocolate Milkshake",
        image: Images[59].image,
        rating: 2,
        reviews: 12,
        shop:"Squueze - Borupana Road",
        price:"LKR 180.00",
        category: "Juise and Smoothies"
      }, 
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Acer Aspire 10th Gen",
        image: Images[60].image,
        rating: 3,
        reviews: 256,
        shop:"Abans Elite Piliyandala",
        price:"LKR 139 900.00",
        category: "Laptops"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Asus P1440FA",
        image: Images[61].image,
        rating: 4,
        reviews: 345,
        shop:"Singer Katubedda",
        price:"LKR 126 000.00",
        category: "Laptops"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Dell Inspiron",
        image: Images[62].image,
        rating: 4,
        reviews: 254,
        shop:"Softlogic Piliyandala",
        price:"LKR 92 490.00",
        category: "Laptops"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Hp Pavilion Laptop",
        image: Images[63].image,
        rating: 3,
        reviews: 523,
        shop:"Softlogic Moratuwa",
        price:"LKR 194 235.00",
        category: "Laptops"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Bluetooth Headphone",
        image: Images[64].image,
        rating: 5,
        reviews: 123,
        shop:"Smart Arcade Moratuwa",
        price:"LKR 1750.00",
        category: "HeadPhones"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Sony Headphone",
        image: Images[65].image,
        rating: 4,
        reviews: 235,
        shop:"Softlogic Piliyandala",
        price:"LKR 2250.00",
        category: "HeadPhones"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Wireless Headphone",
        image: Images[66].image,
        rating: 4,
        reviews: 236,
        shop:"Softlogic Moratuwa",
        price:"LKR 2650.00",
        category: "HeadPhones"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Focal Wireless Headphone",
        image: Images[67].image,
        rating: 3,
        reviews: 423,
        shop:"Abans Elite - Piliyandla",
        price:"LKR 2850.00",
        category: "HeadPhones"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Original SanDisk 128GB",
        image: Images[68].image,
        rating: 3,
        reviews: 412,
        shop:"Softlogic Moratuwa",
        price:"LKR 2025.00",
        category: "Pen Drivers"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "USB Flash drive 32GB",
        image: Images[69].image,
        rating: 4,
        reviews: 234,
        shop:"Abans Elite Piliyandala",
        price:"LKR 2850.00",
        category: "Pen Drivers"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "Kingston 64GB",
        image: Images[70].image,
        rating: 2,
        reviews: 154,
        shop:"C Solutions Piliyandala",
        price:"LKR 780.00",
        category: "Pen Drivers"
      },
      {
        coordinate: {
          latitude: 22.6292757,
          longitude: 88.444781,
        },
        title: "SanDisk 32GB Pendrive",
        image: Images[71].image,
        rating: 3,
        reviews: 150,
        shop:"Singer Katubedda",
        price:"LKR 1765.00",
        category: "Pen Drivers"
      },     
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];

