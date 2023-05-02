// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero_logo from "./assets/images/Hero/logo2.png";
import Hero_logo2 from "./assets/images/Hero/logoblue.png";

import remedy from "./assets/images/Skills/remedy.png";
import hotStone from "./assets/images/Skills/hot-stone.png";
import stretch from "./assets/images/Skills/stretch.png";
import natal from "./assets/images/Skills/natal.png";
import soothing from "./assets/images/Skills/soothing.png";
import addOn from "./assets/images/Skills/add-on.png";
import package1 from "./assets/images/Skills/package-1.png";
import package2 from "./assets/images/Skills/package-2.png";

import services_logo1 from "./assets/images/Services/stretch.png";
import services_logo2 from "./assets/images/Services/therapy.png";
import services_logo3 from "./assets/images/Services/oncology.png";
import services_logo4 from "./assets/images/Services/preNatal.png";
import services_logo5 from "./assets/images/Services/hotStone.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/kandace.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdPriceCheck,
  MdLocationPin,
} from "react-icons/md";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },

    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#pricing",
      icon: MdPriceCheck,
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Massage Remedial Care LLC",
    text: "3950 Hardwick St. Lakewood CA 90712, SUITE 206",
    firstName: "Deneb",
    LastName: "Romero",
    btnText: "Booked Now",
    link: "https://massageremedialcare.clinicsense.com/book/",
    image: Hero_logo2,
    logo: Hero_logo2,
    hero_content: [
      {
        count: "10+",
        text: "Years of experience in Massage Therapy",
      },
      {
        count: "28315",
        text: "Professional/License Massage Therapist",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    // subtitle: "MY TOP SKILLS",
    pricing_content: [
      {
        name: "Remedy Massage",
        prices: [
          {
            min: "60 mins",
            price: "$100.00",
          },
          {
            min: "90 mins",
            price: "$150.00",
          },
        ],
        logo: remedy,
        benefits: [
          "Stimulate the blood supply",
          "Make joints more mobile",
          "Help to repair damaged tissues",
          "The therapist will aim to balance the length, tone and tension of muscles and tendons, which restores the correct position of the bones, increases blood flow and helps heal injuries",
        ],
      },
      {
        name: "Soothing Massage",
        prices: [
          {
            min: "60 mins",
            price: "$80.00",
          },
          {
            min: "90 mins",
            price: "$120.00",
          },
        ],
        logo: soothing,
        benefits: [
          "Help reduce stress",
          "Lessen pain and muscle tightness",
          "Increase relaxation",
          "Improve the work of the immune system",
        ],
      },
      {
        name: "Assisted Stretch",
        prices: [
          {
            min: "30 mins",
            price: "$50.00",
          },
          {
            min: "60 mins",
            price: "$100.00",
          },
        ],
        logo: stretch,
        benefits: [
          "Improve your core strength and posture",
          "Enhance your athletic performance while reducing your recovery time",
          "Lower your stress levels",
          "Improve your sleep and boost your energy",
        ],
      },
      {
        name: "Pre-Natal Massage",
        prices: [
          {
            min: "60 mins",
            price: "$90.00",
          },
          {
            min: "90 mins",
            price: "$135.00",
          },
        ],
        logo: natal,
        benefits: [
          "Reducing labor pain during childbirth",
          "Lessening postoperative pain",
          "Reducing anxiety and stress.",
          "Improving mood + lifting depression",
          "Easing insomnia",
        ],
      },
      {
        name: "Hot Stone Massage",
        prices: [
          {
            min: "60 mins",
            price: "$120.00",
          },
          {
            min: "90 mins",
            price: "$180.00",
          },
        ],
        logo: hotStone,
        benefits: [
          "Comforting and relaxing",
          "The heat aids depth",
          "Relief from tension and pain",
          "Relief from stress and anxiety",
          "Aids sleep",
          "Immune boosting",
          "Managing chronic pain",
          "Cancer management",
        ],
      },
      {
        name: "Add-on Service",
        prices: [
          {
            label: "Aroma Therapy",
            price: "$10.00",
          },
          {
            label: "Hot/Cold Cream for pain",
            price: "$15.00",
          },
          {
            label: "Sugar Scrub",
            price: "$15.00",
          },
          {
            label: "Cupping",
            price: "$20.00",
          },
        ],
        logo: addOn,
        benefits: null,
      },
      {
        name: "Stress Remedy Package",
        prices: [
          {
            label: "Hot Stone w/ Aromatherapy",
            price: "$185.00",
            min: "90 mins",
          },
        ],
        logo: package1,
        benefits: null,
      },
      {
        name: "Pain Remedy Package",
        prices: [
          {
            label: "Combination Deep Tissue",
            price: "$155.00",
            min: "90 mins",
          },
        ],
        logo: package2,
        benefits: null,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Certified in:",
    service_content: [
      {
        title: "Stretching",
        para: "Reduced muscle tension. Increased circulation of the blood to various parts of the body. Enhanced muscular coordination.",
        logo: services_logo1,
      },
      // {
      //   title: "Physical Therapy Aide",
      //   para: "Reduced muscle tension. Increased circulation of the blood to various parts of the body. Enhanced muscular coordination.",
      //   logo: services_logo2,
      // },
      {
        title: "Oncology Massage",
        para: "Better ability to tolerate cancer treatment side effects. Better sleep and fewer headaches. Less chemotherapy-induced peripheral neuropathy (numbness) ",
        logo: services_logo3,
      },
      {
        title: "Pre-Natal",
        para: "Research shows prenatal massage therapy can help reduce anxiety, decrease symptoms of depression, relieve muscle aches and joint pains, and improve labor outcomes and newborn health.",
        logo: services_logo4,
      },
      {
        title: "Hot Stone",
        para: "Helps relieve muscle tension and pain. Heat has long been used to ease muscle tension and pain. It can reduces stress and anxiete and promotes sleep.",
        logo: services_logo5,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Deneb has been my massage therapist for 10 years!!  From the get-go She has provided me great relief during my flare-ups, muscle fatigue and aches. Deneb immediately learned my preferences and needs and was in tune with my sensitivity assisting me with faster recovery so I can bounce back. *As long as she is in business.. So am I !! And let me include very professional, and always on time with my appointment.”",
        img: avatar1,
        name: "Kandace Sands",
      },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar2,
      //   name: "Tom Alex",
      // },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar3,
      //   name: "Johnny",
      // },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar4,
      //   name: "ROBBIN",
      // },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Massage Remedial Care LLC",
        icon: BsFacebook,
        link: "https://www.facebook.com/messages/t/100987332809146",
      },
      {
        text: "massageremedialcarellc@gmail.com",
        icon: GrMail,
        link: "mailto:massageremedicalcarellc@gmail.com",
      },
      {
        text: "massage_remedial_care_llc",
        icon: BsInstagram,
        link: "https://www.instagram.com/massage_remedial_care_llc/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR10NECzQCBOv2KjIGt4MIkuWqC_vbK4toHkuY064f99x2wYl1DeGlUIzXA",
      },
      {
        text: "#562-708-0039",
        icon: MdCall,
        link: "#",
      },
      {
        text: "3950 Hardwick St. Lakewood CA 90712, Suite 206",
        icon: MdLocationPin,
        link: "#",
      },
    ],
  },
  Location: {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
