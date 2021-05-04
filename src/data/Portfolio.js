import wordpressImg1 from '../images/Portfolio/Wordpress_Home_1_-_Tower_Window_Cleaning.png';
import wordpressImg2 from '../images/Portfolio/Wordpress_ButtaBoxx_plant-powered_premium_skincare_beauty_treats_delivered_to_your_door.png';
import wordpressImg3 from '../images/Portfolio/Wordpress_Vein_Clinic_Center_Washington_DC_Vein_Doctors_McLean_VA.png';
import wordpressImg4 from '../images/Portfolio/Wordpress_Disaster_Restoration_Services_Yonkers_NY_-_Armor_Environmental_Solutions.png';
import wordpressImg5 from '../images/Portfolio/Wordpress_Best_SEO_Services_NYC_Top_Search_Engine_Optimization_Service_-_ENVSN_Digital.png';
import wordpressImg6 from '../images/Portfolio/Wordpress_Park_Springs_-_Atlantas_Premier_Life_Plan_Community.png';
import wordpressImg7 from '../images/Portfolio/Wordpress_Peartree1_Ltd.png';
import wordpressImg8 from '../images/Portfolio/Wordpress_TrackStar_ai_–_Predictive_Credit_Technology.png';
import wordpressImg9 from '../images/Portfolio/Wordpress_DeLoach_Ministries_–_2_Empower_U.png';
import wordpressImg10 from '../images/Portfolio/Wordpress_Woojobz_-_Woojobz_-_Job_Portal.png';

import ecommerce1 from '../images/Portfolio/Ecommerce_WoodUbend_-_Heat_Bendable_Wood_Mouldings_For_Quick_And_Simple_Decoration_Of_Furniture.png';
import ecommerce2 from '../images/Portfolio/Ecommerce_Home_-_World_Wide_Medias.png';
import ecommerce3 from '../images/Portfolio/Ecommerce_Kahina_Giving_Beauty_-_Ethical_Luxury_Skin_Care_With_Argan_Oil.png';
import ecommerce4 from '../images/Portfolio/Ecommerce_My_Clean_Assist_Key.png';
import ecommerce5 from '../images/Portfolio/Ecommerce_Prescript-Assist_Soil_Based_Probiotic_Safer_Medical_of_Montana.png';
import ecommerce6 from '../images/Portfolio/Ecommerce_Bee_Wines_Liquors.png';

import wordpressEcommerceImg1 from '../images/Portfolio/Wordpress_Ecommerce_Home_-_Shop4myvape.png';
import wordpressEcommerceImg2 from '../images/Portfolio/Wordpress_Ecommerce_MayAmor_Hair_Collection.png';
import wordpressEcommerceImg3 from '../images/Portfolio/Wordpress_Ecommerce_COVID-19_TEST_KITS_–_93_5_ACCURACY.png';

import reactImg1 from '../images/Portfolio/React_Mortgage_Calculator_from_Town_Country_Federal_Credit_Union.png';
import reactImg2 from '../images/Portfolio/React_Personal_Loan_Calculator_from_Town_Country_Federal_Credit_Union.png';
import reactImg3 from '../images/Portfolio/React_Photo_Gallary.png';
import reactImg4 from '../images/Portfolio/React_Best_CD_Calculator_Town_Country_Federal_Credit_Union_Maine.png';


import graphics1 from '../images/Portfolio/Graphics_back-min.jpg';
import graphics2 from '../images/Portfolio/Graphics_Banner-1-min.png';
import graphics3 from '../images/Portfolio/Graphics_Banner-2-min.png';
import graphics4 from '../images/Portfolio/Graphics_business-card-back-min.jpg';
import graphics5 from '../images/Portfolio/Graphics_business-card-fornt-min.jpg';
import graphics6 from '../images/Portfolio/Graphics_daughter-without-dieline-2-scaled-min.jpg';
import graphics7 from '../images/Portfolio/Graphics_FB-Cover-page-updated-min.png';
import graphics8 from '../images/Portfolio/Graphics_Fodler1-min.jpg';
import graphics9 from '../images/Portfolio/Graphics_Fodler2-min.jpg';
import graphics10 from '../images/Portfolio/Graphics_front-min.jpg';
import graphics11 from '../images/Portfolio/Graphics_grandmother-without-dieline-scaled-min.jpg';
import graphics12 from '../images/Portfolio/Graphics_image_2019_09_04T17_14_53_025Z-min.png';
import graphics13 from '../images/Portfolio/Graphics_letterpad-01-min.jpg';
import graphics14 from '../images/Portfolio/Graphics_letterpad-02-min.jpg';
import graphics15 from '../images/Portfolio/Graphics_letterpad-03-min.jpg';
import graphics16 from '../images/Portfolio/Graphics_LINKED-IN-COVER-update-05-min.jpg';
import graphics17 from '../images/Portfolio/Graphics_Long-Sleeve-Shirt-Mock-Up-min.png';
import graphics18 from '../images/Portfolio/Graphics_postcard-01-min.jpg';
import graphics19 from '../images/Portfolio/Graphics_Postcard-02-min.jpg';
import graphics20 from '../images/Portfolio/Graphics_postcard-03-min.jpg';
import graphics21 from '../images/Portfolio/Graphics_Postcard-5-min.jpg';
import graphics22 from '../images/Portfolio/Graphics_Postcard-06-min.jpg';
import graphics23 from '../images/Portfolio/Graphics_Mike-01-min.jpg';
import graphics24 from '../images/Portfolio/Graphics_Mike-02-min.jpg';
import graphics25 from '../images/Portfolio/Graphics_Short-Sleeve-Mock-Up-min.png';


import logo1 from '../images/Portfolio/Logo_ASM_logo-1.png';
import logo2 from '../images/Portfolio/Logo_image_2020_08_09T19_10_26_615Z.png';
import logo3 from '../images/Portfolio/Logo_image_2020_08_09T19_10_38_409Z.png';
import logo4 from '../images/Portfolio/Logo_image_2020_08_09T19_10_48_290Z.png';
import logo5 from '../images/Portfolio/Logo_ireachify-logo-04-1-scaled.jpg';
import logo6 from '../images/Portfolio/Logo_lens-Barber-Shop-01.png';
import logo7 from '../images/Portfolio/Logo_lens-Barber-Shop-transperent-03.png';
import logo8 from '../images/Portfolio/Logo_MICHELLE-DIXON-02.png';
import logo9 from '../images/Portfolio/Logo_NJA-Construction-final.png';
import logo10 from '../images/Portfolio/Logo_PURE-HEALTH-transperent.png';
import logo11 from '../images/Portfolio/Logo_US-mounted-PNG.png';

export const TYPES = {
  WORDPRESS: 'Wordpress',
  REACT: 'React',
  ECOMMERECE: 'E-Commerce',
  GRAPHICS: 'Graphics Design',
  LOGO: 'LOGO Design'
};

export const PORTFOLIO = {
  home: {
    title: 'Work',
    showCategories: true,
    categories: [TYPES.WORDPRESS, TYPES.REACT, TYPES.ECOMMERECE, TYPES.GRAPHICS],
    activeType: TYPES.WORDPRESS,
    pages: [
      {
        img: wordpressEcommerceImg1,
        link: 'https://www.shop4myvape.com',
        type: [TYPES.WORDPRESS, TYPES.ECOMMERECE],
      },
      {
        img: wordpressEcommerceImg2,
        link: 'https://mayamorhaircollection.com',
        type: [TYPES.WORDPRESS, TYPES.ECOMMERECE],
      },
      {
        img: wordpressEcommerceImg3,
        link: 'https://covid-testkit.co.uk/',
        type: [TYPES.WORDPRESS, TYPES.ECOMMERECE],
      },
      {
        img: wordpressImg1,
        link: 'http://www.towerwindowcleaning.co.uk/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg2,
        link: 'https://www.buttaboxx.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg3,
        link: 'https://www.virginiaveincare.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: reactImg1,
        link: 'https://www.tcfcu.com/financial-calculators/mortgage-calculator',
        type: [TYPES.REACT],
      },
      {
        img: reactImg2,
        link: 'https://www.tcfcu.com/financial-calculators/personal-calculator',
        type: [TYPES.REACT],
      },
      {
        img: reactImg3,
        link: 'http://photogallery.itliquid.com/',
        type: [TYPES.REACT],
      },
      {
        img: reactImg4,
        link: 'https://www.tcfcu.com/financial-calculators/cd-calculator',
        type: [TYPES.REACT],
      },
      {
        img: wordpressImg4,
        link: 'https://armorenviro.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg5,
        link: 'https://envsndigital.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg6,
        link: 'https://www.parksprings.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg7,
        link: 'https://peartree1ltd.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg8,
        link: 'https://trackstar.ai/',
        type: [TYPES.WORDPRESS],
      },
      // {
      //   img: wordpressImg9,
      //   link: 'https://www.thomasadeloach.com',
      //   type: [TYPES.WORDPRESS],
      // },
      {
        img: wordpressImg10,
        link: 'https://www.woojobz.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: ecommerce1,
        link: 'https://woodubend.com',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce2,
        link: 'https://worldwidemedias.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce3,
        link: 'https://kahina-givingbeauty.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce4,
        link: 'https://www.mycleanassistkey.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce5,
        link: 'https://safermedicalmt.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce6,
        link: 'https://beeliquor.com',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: graphics1,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics2,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics3,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics4,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics5,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics6,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics7,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics8,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics9,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics10,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics11,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics12,
        link: '',
        type: [TYPES.GRAPHICS],
      },

    ],
  },

  react: {
    title: 'React Apps',
    showCategories: false,
    activeType: TYPES.REACT,
    pages: [
      {
        img: reactImg1,
        link: 'https://www.tcfcu.com/financial-calculators/mortgage-calculator',
        type: [TYPES.REACT],
      },
      {
        img: reactImg2,
        link: 'https://www.tcfcu.com/financial-calculators/personal-calculator',
        type: [TYPES.REACT],
      },
      {
        img: reactImg3,
        link: 'http://photogallery.itliquid.com/',
        type: [TYPES.REACT],
      },
      {
        img: reactImg4,
        link: 'https://www.tcfcu.com/financial-calculators/cd-calculator',
        type: [TYPES.REACT],
      },
     
    ],
  },

  wordpress: {
    title: 'Wordpress Websites',
    showCategories: false,
    activeType: TYPES.WORDPRESS,
    pages: [
      {
        img: wordpressImg1,
        link: 'http://www.towerwindowcleaning.co.uk/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg2,
        link: 'https://www.buttaboxx.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg3,
        link: 'https://www.virginiaveincare.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg4,
        link: 'https://armorenviro.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg5,
        link: 'https://envsndigital.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg6,
        link: 'https://www.parksprings.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg7,
        link: 'https://peartree1ltd.com/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg8,
        link: 'https://trackstar.ai/',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg9,
        link: 'https://www.thomasadeloach.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressImg10,
        link: 'https://www.woojobz.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressEcommerceImg1,
        link: 'https://www.shop4myvape.com',
        type: [TYPES.WORDPRESS],
      },
      {
        img: wordpressEcommerceImg2,
        link: 'https://mayamorhaircollection.com',
        type: [TYPES.WORDPRESS],
      },
    ],
  },

  graphics: {
    title: 'UI/UX and LOGOS',
    showCategories: true,
    categories: [TYPES.GRAPHICS, TYPES.LOGO],
    activeType: TYPES.GRAPHICS,
    pages: [
      {
        img: graphics1,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics2,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics3,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics4,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics5,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics6,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics7,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics8,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics9,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics10,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics11,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics12,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics13,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics14,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics15,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics16,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics17,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics18,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics19,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics20,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics21,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics22,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics23,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics24,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: graphics25,
        link: '',
        type: [TYPES.GRAPHICS],
      },
      {
        img: logo1,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo2,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo3,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo4,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo5,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo6,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo7,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo8,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo9,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo10,
        link: '',
        type: [TYPES.LOGO],
      },
      {
        img: logo11,
        link: '',
        type: [TYPES.LOGO],
      },
    ],
  },

  ecommerce: {
    title: 'E-Commerce',
    showCategories: false,
    activeType: TYPES.ECOMMERECE,
    pages: [
      {
        img: ecommerce1,
        link: 'https://woodubend.com',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce2,
        link: 'https://worldwidemedias.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: wordpressEcommerceImg1,
        link: 'https://www.shop4myvape.com',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: wordpressEcommerceImg2,
        link: 'https://mayamorhaircollection.com',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: wordpressEcommerceImg3,
        link: 'https://covid-testkit.co.uk/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce3,
        link: 'https://kahina-givingbeauty.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce4,
        link: 'https://www.mycleanassistkey.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce5,
        link: 'https://safermedicalmt.com/',
        type: [TYPES.ECOMMERECE],
      },
      {
        img: ecommerce6,
        link: 'https://beeliquor.com',
        type: [TYPES.ECOMMERECE],
      },
    ],
  },
};