import eventHubUI from "../assets/eventhub.png";
import expensesTrackerUI from "../assets/expenseTracker.png";
import foodDeilveryUI from "../assets/foodDeliveryApp.png";
import musicAppUi from "../assets/musicApp.png";
import wellnessUi from "../assets/wellnessRetreatApp.png";
import barbarImg from "../assets/barbarShopUI.png";
import { cardDataType } from "../types/type";

const skills = [
    {
      "Frontend Skills": [
        "React.Js",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "ShadCn UI",
        "Figma",
        "SASS",
      ],
    },
    {
      "Backend Skills": [
        "Node.JS",
        "Django",
        "Amazon Web Services",
        "Docker",
        "Jenkins",
        "SQL",
        "MongoDB",
        "PostgreSql",
      ],
    },
    {
      Framework: [
        "Django",
        "Next.Js",
        "Express.Js",
        "Flask",
        "Bootstrap",
        "Spring Boot",
      ],
    },
];

const cardData: cardDataType[] = [
  {
    title: "Wellness Retreat",
    description: "Full Stack Project",
    tools: "React, Django, Postgresql, Integrated Rest APIs",
    img: wellnessUi,
  },
  {
    title: "Expenses Tracker",
    description: "Full Stack Project",
    tools:
      "React, Node, Graphql, MongoDB, JWT Authentication, Docker Implementation",
    img: expensesTrackerUI,
  },
  {
    title: "Food Delivery App",
    description: "Full Stack Project",
    tools:
      "React, Node, MongoDB, Context API, JWT Authentication, Stripe Payment Integration, Admin Panel Integration",
    img: foodDeilveryUI,
  },
  {
    title: "EventHub Platform",
    description: "Full Stack Project",
    tools: "React, Node, MongoDB",
    img: eventHubUI,
  },
  {
    title: "Barbar Shop Landing Page",
    description: "Frontend Project",
    tools: "HTML, CSS, JS",
    img: barbarImg,
  },
  {
    title: "Music App Landing Page",
    description: "Frontend Project",
    tools: "HTML, CSS, JS",
    img: musicAppUi,
  },
];
  
export { skills, cardData };