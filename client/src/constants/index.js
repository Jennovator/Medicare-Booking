import { icon01, icon02, icon03, doctorImg01, doctorImg02, doctorImg03, patientAvatar, avatarIcon } from "../assets";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

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
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      about: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Omnis eius assumenda corrupti at fugiat ipsum odio laudantium quisquam veritatis cosectetur velit illo ullam animi necessatatibus vero voluptatum fuga consequuntur, aspernatur perspiciatis adipisci. Necessitatibus et non sapiente sit distinctio, repellat illo totam perspiciatis, inventore ex assumenda odit natus cumque saepe nostrum.",
      education: [
        {
          year: "12-04-2010",
          degree: "PhD in Surgeon",
          school: "Cagayan Valley Hospital, Cagayan"
        },
        {
          year: "05-15-2005",
          degree: "Bachelor of Science in Biology",
          school: "Cagayan Valley Hospital, Cagayan"
        }
      ],
      experience: [
        {
          startDate: "07-04-2010",
          endDate: "08-13-2014",
          position: "Sr. Surgeon",
          company: "Saint Paul Hospital"
        },
        {
          startDate: "07-03-2005",
          endDate: "06-15-2010",
          position: "Surgeon",
          company: "New People General Hospital"
        }
      ],
      reviews: [
        {
          avatar: avatarIcon,
          name: "Fred Cagurangan",
          dateReviewed: "11-20-2018",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
        {
          avatar: avatarIcon,
          name: "Ronron Cuntapay",
          dateReviewed: "11-20-2020",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
        {
          avatar: avatarIcon,
          name: "Cedric Trinidad",
          dateReviewed: "11-20-2023",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 4.5
        },
      ]
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
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      about: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Omnis eius assumenda corrupti at fugiat ipsum odio laudantium quisquam veritatis cosectetur velit illo ullam animi necessatatibus vero voluptatum fuga consequuntur, aspernatur perspiciatis adipisci. Necessitatibus et non sapiente sit distinctio, repellat illo totam perspiciatis, inventore ex assumenda odit natus cumque saepe nostrum.",
      education: [
        {
          year: "12-04-2009",
          degree: "Doctor of Medicine (MD)",
          school: "Cagayan Valley Hospital, Cagayan"
        },
        {
          year: "05-15-2003",
          degree: "Master's Degree in Neurology",
          school: "Cagayan Valley Hospital, Cagayan"
        },
        {
          year: "05-15-1998",
          degree: "Bachelor of Science in Biology",
          school: "Cagayan Valley Hospital, Cagayan"
        }
      ],
      experience: [
        {
          startDate: "07-04-2012",
          endDate: "08-13-2014",
          position: "Sr. Neurologist",
          company: "Saint Paul Hospital"
        },
        {
          startDate: "02-03-2005",
          endDate: "06-15-2010",
          position: "Neurologist",
          company: "New People General Hospital"
        },
        {
          startDate: "01-03-1999",
          endDate: "10-15-2004",
          position: "Assistant Neurologist",
          company: "Cagayan Valley Hospital"
        }
      ],
      reviews: [
        {
          avatar: avatarIcon,
          name: "Nilo Mabborang",
          dateReviewed: "11-20-2018",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
        {
          avatar: avatarIcon,
          name: "Jackson Bosi",
          dateReviewed: "11-20-2020",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 4.5
        },
        {
          avatar: avatarIcon,
          name: "Bryan Vizon",
          dateReviewed: "11-20-2023",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
      ]
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
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      about: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Omnis eius assumenda corrupti at fugiat ipsum odio laudantium quisquam veritatis cosectetur velit illo ullam animi necessatatibus vero voluptatum fuga consequuntur, aspernatur perspiciatis adipisci. Necessitatibus et non sapiente sit distinctio, repellat illo totam perspiciatis, inventore ex assumenda odit natus cumque saepe nostrum.",
      education: [
        {
          year: "12-04-2016",
          degree: "PhD in Experimental Aesthetic Medicine",
          school: "Cagayan Valley Hospital, Cagayan"
        },
        {
          year: "05-15-2010",
          degree: "Master of Science in Clinical Dermatology",
          school: "Cagayan Valley Hospital, Cagayan"
        },
        {
          year: "05-15-2005",
          degree: "Bachelor of Science in Biology",
          school: "Cagayan Valley Hospital, Cagayan"
        }
      ],
      experience: [
        {
          startDate: "07-04-2010",
          endDate: "08-13-2016",
          position: "Sr. Dermatologist",
          company: "Cagayan Valley Hospital"
        },
        {
          startDate: "07-03-2005",
          endDate: "06-15-2010",
          position: "Dermatologist",
          company: "New People General Hospital"
        }
      ],
      reviews: [
        {
          avatar: avatarIcon,
          name: "Teody Mabborang",
          dateReviewed: "11-20-2018",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 4.5
        },
        {
          avatar: avatarIcon,
          name: "Paul Jasper Bosi",
          dateReviewed: "11-20-2020",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
        {
          avatar: avatarIcon,
          name: "Caster Carino",
          dateReviewed: "11-20-2023",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          star: 5
        },
      ]
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
      icon: RiLinkedinFill,
      url: "https://www.linkedin.com/in/jenyll-mabborang-297776289/"
    },
    {
        name: "Github",
        icon: AiFillGithub,
        url: "https://github.com/Jennovator"
    }
  ];

  export const quickLinks01 = [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About Us'
    },
    {
        path:'/services',
        display: 'Services'
    },
    {
        path:'/',
        display: 'Blog'
    },
];

export const quickLinks02 = [
  {
      path:'/find-a-doctor',
      display: 'Find a Doctor'
  },
  {
      path:'/',
      display: 'Request an Appointment'
  },
  {
      path:'/',
      display: 'Find a Location'
  },
  {
      path:'/',
      display: 'Get an Opinion'
  },
];

export const quickLinks03 = [
  {
      path:'/',
      display: 'Donate'
  },
  {
      path:'/contact',
      display: 'Contact Us'
  }
];