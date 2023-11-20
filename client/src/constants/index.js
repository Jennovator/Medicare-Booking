import { icon01, icon02, icon03, doctorImg01, doctorImg02, doctorImg03, patientAvatar } from "../assets";
import { RiLinkedIn } from 'react-icons/ri';
import { AiFillGitHub, AiOutlineInstagram } from 'react-icons/ai';

export const navLinks = [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/doctors',
        display: 'Find a Doctor'
    },
    {
        path:'/services',
        display: 'Services'
    },
    {
        path:'/contact',
        display: 'Contact'
    },
];

export const finderLinks = [
    {
        path: '/doctors',
        title: 'Find a Doctor',
        icon: icon01,
        description: 'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.'
    },
    {
        path: '/doctors',
        title: 'Find a Location',
        icon: icon02,
        description: 'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.'
    },
    {
        path: '/doctors',
        title: 'Book Appointment',
        icon: icon03,
        description: 'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.'
    }
];

export const services = [
    {
      name: "Cancer Care",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(254, 182, 13, .2)",
      textColor: "#FEB60D",
    },
    {
      name: "Labor & Delivery",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(151, 113, 255, .2)",
      textColor: "#9771FF",
    },
    {
      name: "Heart & Vascular",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(1, 181, 197, .2)",
      textColor: "#01B5C5",
    },
    {
      name: "Mental Health",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(1, 181, 197, .2)",
      textColor: "#01B5C5",
    },
    {
      name: "Neurology",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(254, 182, 13, .2)",
      textColor: "#FEB60D",
    },
    {
      name: "Burn Treatment",
      desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
      bgColor: "rgba(151, 113, 255, .2)",
      textColor: "#9771FF",
    },
];

export const features = [
  {
    description: "Schedule the appointment directly."
  },
  {
    description: "Search for your physician here and contact their office."
  },
  {
    description: "View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time."
  }
];

export const doctors = [
    {
      id: "01",
      name: "Dr. Romel Cagurangan",
      specialty: "Surgeon",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg01,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "02",
      name: "Dr. Jackelyn Trinidad",
      specialty: "Neurologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg02,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "03",
      name: "Dr. John Brain Dugay",
      specialty: "Dermatologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg03,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
  ];
 

export const faqs = [
    {
      question: "What is your medical care?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      question: "What happens if I need to go a hospital?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      question: "What happens if I need to go a hospital?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      question: "Can I visit your medical office?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
      question: "Does you provide urgent care?",
      content:
        "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
  ];

  export const testimonials = [
    {
      image: patientAvatar,
      name: 'Romel Cagurangan',
      star: 5,
      testimonial: 'I have taken medical services from them. They treat so well and they are providing the best medical services.'
    },
    {
      image: patientAvatar,
      name: 'John Brain Dugay',
      star: 4.5,
      testimonial: 'I have taken medical services from them. They treat so well and they are providing the best medical services.'
    },
    {
      image: patientAvatar,
      name: 'Neil Bosi',
      star: 5,
      testimonial: 'I have taken medical services from them. They treat so well and they are providing the best medical services.'
    },
    {
      image: patientAvatar,
      name: 'Edmar Trinidad',
      star: 5,
      testimonial: 'I have taken medical services from them. They treat so well and they are providing the best medical services.'
    },
    {
      image: patientAvatar,
      name: 'Jackson Bosi',
      star: 4.5,
      testimonial: 'I have taken medical services from them. They treat so well and they are providing the best medical services.'
    }
  ];
 
  export const socialLinks = [
    {
      name: "Instagram",
      icon: AiOutlineInstagram,
      url: "https://www.instagram.com/jnyll.mab/"
    },
    {
      name: "Linkedin",
      icon: RiLinkedIn,
      url: "https://www.linkedin.com/in/jenyll-mabborang-297776289/"
    },
    {
        name: "Github",
        icon: AiFillGitHub,
        url: "https://github.com/Jennovator"
    }
  ];