import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export const projectData = [
  {
    id: 1,
    name: "Vamverse.com",
    github: "https://vamverse.com",
    description:
      "Vamverse is a platform where user expirience Augmented reality (AR) is an enhanced version of what you see or experience in the real world.  ",
    technology: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "ModelViewer",
      },
      {
        id: 3,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: 1,
    name: "Blog App",
    github: "https://github.com/siddharth17vaishnav/BloggApp_Reactjs_MySql",
    description:
      "Created a blog website just like twitter a user can post a article ,share the article , comment and like also",
    technology: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Nodejs",
      },
      {
        id: 3,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: 2,
    name: "Ecommerce App",
    github: "https://github.com/siddharth17vaishnav/FlipkartCloneReactjs",
    description:
      "This project has complete backend support and admin interface to handle all customers ,products and orders.",
    technology: [
      {
        id: 11,
        name: "React",
      },
      {
        id: 12,
        name: "Nodejs",
      },
      {
        id: 13,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: 3,
    name: "News App",
    github: "https://github.com/siddharth17vaishnav/InshorCloneReactJs",
    description:
      "Used newsapi from newsapi.org to create this project it fetches news based on category. ",
    technology: [
      {
        id: 21,
        name: "React",
      },
      {
        id: 22,
        name: "Tailwindcss",
      },
      {
        id: 23,
        name: "Api",
      },
    ],
  },
  {
    id: 4,
    name: "Netflix Clone",
    github: "https://github.com/siddharth17vaishnav/Netflix-Reactjs",
    description:
      "In this project i used TMDB api to fetch movies data and to store user data i have used Firebase as a backened.",
    technology: [
      {
        id: 31,
        name: "React",
      },
      {
        id: 32,
        name: "Tailwindcss",
      },
      {
        id: 33,
        name: "Firebase",
      },
    ],
  },
  {
    id: 5,
    name: "Food Ordering App",
    github: "https://github.com/siddharthpropelius/foodapp_nextjs_mongodb",
    description:
      "User can search the food catelog ,add them to cart and order them and also track them in order pages.",
    technology: [
      {
        id: 31,
        name: "NextJs",
      },
      {
        id: 32,
        name: "MUI",
      },
      {
        id: 33,
        name: "NodeJs",
      },
      {
        id: 33,
        name: "PostgreSQL",
      },
      {
        id: 33,
        name: "Redux",
      },
    ],
  },
];

export async function getServerSideProps() {
  return {
    props: {
      data: projectData,
    },
  };
}

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>siddharth vaishnav</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Siddharth Vaishnav" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,code,siddharth,vaishnav,siddharth vaishnav"
        />
        <meta name="author" content="Siddharth Vaishnav" />
      </Head>
      <Navbar />
      <Hero />
      <Description />
      <Projects projectData={props.data}></Projects>
      <Contact />
      <Footer />
    </div>
  );
}
