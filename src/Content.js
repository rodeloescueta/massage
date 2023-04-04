// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero_logo from "./assets/images/Hero/logo2.png";
import Hero_logo2 from "./assets/images/Hero/logo-preview.png";

import remedy from "./assets/images/Skills/remedy.png";
import hotStone from "./assets/images/Skills/hot-stone.png";
import stretch from "./assets/images/Skills/stretch.png";
import natal from "./assets/images/Skills/natal.png";
import soothing from "./assets/images/Skills/soothing.png";
import addOn from "./assets/images/Skills/add-on.png";
import package1 from "./assets/images/Skills/package-1.png";
import package2 from "./assets/images/Skills/package-2.png";

import services_logo1 from "./assets/images/Services/logo1.svg";
import services_logo2 from "./assets/images/Services/logo2.svg";
import services_logo3 from "./assets/images/Services/logo3.svg";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

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
import { BsInstagram } from "react-icons/bs";
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
    // cerial: "562-708-0127",
    firstName: "Deneb",
    LastName: "Romero",
    btnText: "Talk to Us",
    image: Hero_logo2,
    logo: Hero_logo2,
    hero_content: [
      // {
      //   count: "Address",
      //   text: "3950 Hardwick St. Lakewood CA 90712, SUITE 206",
      // },
      {
        count: "562-708-0127",
        text: "Professional/License Massage Therapist",
      },
      {
        count: "8+",
        text: "Years of experience in Massage Therapy",
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
        ],
        logo: addOn,
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
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Certified in:",
    service_content: [
      {
        title: "Stretching/Physical Therapy Aide",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Oncology Massage",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Pre-Natal & Hot Stone",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
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
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
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
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "massageremedicalcarellc@gmail.com",
        icon: GrMail,
        link: "mailto:massageremedicalcarellc@gmail.com",
      },
      {
        text: "#562-708-0039",
        icon: MdCall,
        link: "#",
      },
      {
        text: "massage_remedial_care_llc",
        icon: BsInstagram,
        link: "https://www.instagram.com/massage_remedial_care_llc/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR10NECzQCBOv2KjIGt4MIkuWqC_vbK4toHkuY064f99x2wYl1DeGlUIzXA",
      },
      {
        text: "3950 Hardwick St. Lakewood CA 90712, Suite 206",
        icon: MdLocationPin,
        link: "#",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
