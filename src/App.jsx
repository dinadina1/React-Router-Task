import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import All from './All'
import NavBar from "./NavBar"
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import FSD from "./FSD"
import DataScience from "./DataScience"
import CyberSecurity from "./CyberSecurity"
import Career from "./Career"

function App() {

  const blogInfo = [
    {
      id: 1,
      domain: "Data Science",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
      referenceURL: "https://www.guvi.in/blog/real-world-data-science-examples/",
      postedBy: "Lukesh S",
      postedOn: "21 Oct, 2023",
      readTime: "7 Min Read"
    },
    {
      id: 2,
      domain: "Data Science",
      title: "Can A Commerce Student Do Data Science?",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
      referenceURL: "https://www.guvi.in/blog/can-commerce-students-do-data-science/",
      postedBy: "Saakshi Priyadarshini",
      postedOn: "08 Sep, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 3,
      domain: "Data Science",
      title: "Roles and Responsibilities of a Data Scientist",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
      referenceURL: "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/",
      postedBy: "Jaishree Tomar",
      postedOn: "20 Oct, 2023",
      readTime: "5 Min Read"
    },
    {
      id: 4,
      domain: "Data Science",
      title: "How to become a Data Scientist after Mechanical Engineering?",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
      referenceURL: "https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/",
      postedBy: "Lahari Chandana",
      postedOn: "03 Oct, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 5,
      domain: "Data Science",
      title: "Data Science vs Data Analytics | Best Career Choice in 2024",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
      referenceURL: "https://www.guvi.in/blog/data-science-vs-data-analytics-career/",
      postedBy: "Lahari Chandana",
      postedOn: "16 Mar, 2024",
      readTime: "3 Min Read"
    },
    {
      id: 6,
      domain: "Data Science",
      title: "How Long Would It Take to Learn Data Science?",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      referenceURL: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
      postedBy: "Meghana D",
      postedOn: "20 Oct, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 7,
      domain: "Data Science",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      referenceURL: "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/",
      postedBy: "Jaishree Tomar",
      postedOn: "13 Dec, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 8,
      domain: "Data Science",
      title: "Top Product-Based Companies for Data Science Freshers",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      referenceURL: "https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/",
      postedBy: "Jaishree Tomar",
      postedOn: "10 Nov, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 9,
      domain: "Full Stack Development",
      title: "Best Full-Stack Development Project Ideas in 2024 ",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      referenceURL: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
      postedBy: "Isha Sharma",
      postedOn: "13 Dec, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 10,
      domain: "Full Stack Development",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      referenceURL: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      postedBy: "Meghana D",
      postedOn: "20 Oct, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 11,
      domain: "Full Stack Development",
      title: "How does Apache work? A detailed introduction to Apache",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      referenceURL: "https://www.guvi.in/blog/how-does-apache-work/",
      postedBy: "Tushar Vinocha",
      postedOn: "03 Oct, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 12,
      domain: "Full Stack Development",
      title: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [U...",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      referenceURL: "https://www.guvi.in/blog/full-stack-developer-syllabus/",
      postedBy: "Archana",
      postedOn: "14 Dec, 2023",
      readTime: "6 Min Read "
    },
    {
      id: 13,
      domain: "Full Stack Development",
      title: "6 Essential Prerequisites For Learning ReactJS",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      referenceURL: "https://www.guvi.in/blog/prerequisites-for-reactjs/",
      postedBy: "Ramkumar",
      postedOn: "06 Oct, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 14,
      domain: "Full Stack Development",
      title: "10 Best Database Management Systems For Software Developers",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      referenceURL: "https://www.guvi.in/blog/database-management-systems-for-developers/",
      postedBy: "Isha Sharma",
      postedOn: "03 Nov, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 15,
      domain: "Full Stack Development",
      title: "Best Web Development Roadmap for Beginners 2024",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      referenceURL: "https://www.guvi.in/blog/web-development-roadmap-for-beginners/",
      postedBy: "Isha Sharma",
      postedOn: "14 Dec, 2023",
      readTime: "5 Min Read"
    },
    {
      id: 16,
      domain: "Full Stack Development",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      referenceURL: "https://www.guvi.in/blog/best-full-stack-development-online-courses/",
      postedBy: "Srinithi Sankar",
      postedOn: "13 Dec, 2023",
      readTime: "5 Min Read"
    },
    {
      id: 17,
      domain: "Cyber Security",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      referenceURL: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
      postedBy: "Tushar Vinocha",
      postedOn: "04 Oct, 2023",
      readTime: "5 Min Read"
    },
    {
      id: 18,
      domain: "Cyber Security",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      referenceURL: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
      postedBy: "Jaishree Tomar",
      postedOn: "04 Dec, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 19,
      domain: "Cyber Security",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      referenceURL: "https://www.guvi.in/blog/types-of-cybersecurity/",
      postedBy: "Tushar Vinocha",
      postedOn: "08 Sep, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 20,
      domain: "Cyber Security",
      title: "What is Cybersecurity? Importance and its uses &amp; the growing challenge...",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      referenceURL: "https://www.guvi.in/blog/what-is-cybersecurity/",
      postedBy: "Tushar Vinocha",
      postedOn: "04 Oct, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 21,
      domain: "Cyber Security",
      title: "What Is Hacking? Types of Hacking and More",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      referenceURL: "https://www.guvi.in/blog/what-is-hacking/",
      postedBy: "Meghana D",
      postedOn: "26 Oct, 2023",
      readTime: "6 Min Read"
    },
    {
      id: 22,
      domain: "Cyber Security",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      referenceURL: "https://www.guvi.in/blog/coding-for-cybersecurity/",
      postedBy: "Tushar Vinocha",
      postedOn: "05 Oct, 2023",
      readTime: "4 Min Read"
    },
    {
      id: 23,
      domain: "Cyber Security",
      title: "Top 7 Cyber Security Attacks in Real Life",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      referenceURL: "https://www.guvi.in/blog/cyber-security-attacks-in-real-life/",
      postedBy: "Lahari Chandana",
      postedOn: "05 Oct, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 24,
      domain: "Cyber Security",
      title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      referenceURL: "https://www.guvi.in/blog/cybersecurity-certifications/",
      postedBy: "Tushar Vinocha",
      postedOn: "07 Oct, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 25,
      domain: "Careers",
      title: "10 Best Software Engineering Careers in 2024 ",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      referenceURL: "https://www.guvi.in/blog/best-software-engineering-career-options/",
      postedBy: "Saakshi Priyadarshini",
      postedOn: "14 Dec, 2023",
      readTime: "5 Min Read"
    },
    {
      id: 26,
      domain: "Careers",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      referenceURL: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
      postedBy: "Isha Sharma",
      postedOn: "13 Dec, 2023",
      readTime: "6 Min Read"
    },
    {
      id: 27,
      domain: "Careers",
      title: "Is DSA Important for Placement in 2024? ",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/is_dsa_important_for_placement_in_2023-1.webp",
      referenceURL: "https://www.guvi.in/blog/is-dsa-important-for-placement/",
      postedBy: "Isha Sharma",
      postedOn: "13 Dec, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 28,
      domain: "Careers",
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      referenceURL: "https://www.guvi.in/blog/product-based-companies-for-full-stack-developers/",
      postedBy: "Isha Sharma",
      postedOn: "21 Mar, 2024",
      readTime: "3 Min Read"
    },
    {
      id: 29,
      domain: "Careers",
      title: "The Future Scope of Automation Testing in 2024",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-The-Future-Scope-of-Automation-Testing.webp",
      referenceURL: "https://www.guvi.in/blog/the-future-scope-of-automation-testing/",
      postedBy: "Meghana D",
      postedOn: "13 Dec, 2023",
      readTime: "8 Min Read "
    },
    {
      id: 30,
      domain: "Careers",
      title: "Top 10 Product-Based Companies for Automation Testing [2024]",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Automation-Testing.webp",
      referenceURL: "https://www.guvi.in/blog/product-based-companies-for-automation-testing/",
      postedBy: "Isha Sharma",
      postedOn: "13 Dec, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 31,
      domain: "Careers",
      title: "7 Best High-Paying IT Jobs For Arts Students",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-Based-Companies-for-Business-Analysts-1.webp",
      referenceURL: "https://www.guvi.in/blog/it-jobs-for-arts-students/",
      postedBy: "Isha Sharma",
      postedOn: "27 Nov, 2023",
      readTime: "3 Min Read"
    },
    {
      id: 32,
      domain: "Careers",
      title: "Top 6 Product-Based Companies for Business Analysts [2024]",
      imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-Based-Companies-for-Business-Analysts-1.webp",
      referenceURL: "https://www.guvi.in/blog/product-based-companies-for-business-analysts/",
      postedBy: "Isha Sharma",
      postedOn: "13 Dec, 2023",
      readTime: "3 Min Read"
    },

  ]

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" index element={<All blogInfo={blogInfo} />}></Route>
          <Route path="/fsd" element={<FSD blogInfo={blogInfo} />}></Route>
          <Route path="/datascience" element={<DataScience blogInfo={blogInfo} />}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity blogInfo={blogInfo} />}></Route>
          <Route path="/career" element={<Career blogInfo={blogInfo} />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


