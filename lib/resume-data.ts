interface Education {
  institution: string;
  degree: string;
  location: string;
  date: string;
  highlights: string[];
}
interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  domain: string
}

interface ResumeData {
  name: string;
  title: string;
  education: Education[];
  experience: Experience[];
  skills: {
    languages: string[];
    databases: string[];
    software: string[];
  };
  extracurriculars: string[];
}

// Then, create the actual data object typed as ResumeData
// This is the "data object" I was referring to
export const resumeData: ResumeData = {
  name: "Yuvan Chugh",
  title: "CS @ Cornell | AI/ML Researcher",

  education: [
    {
      institution: "Cornell University, College of Engineering",
      degree: "Bachelor of Science, Computer Science",
      location: "Ithaca, NY",
      date: "December 2025",
      highlights: [
        "Dean's List - three semesters",
        "Courses: Machine Learning, Database Systems, Algorithms, Data Structures, Discrete Math, Multivariable Calculus, Probability and Statistics, Functional Programming, Robotics, Embedded Systems, Systems Programming, Entrepreneurship"
      ]
    },
    {
      institution: "Dhirubhai Ambani International School",
      degree: "Grade 12 International Baccalaureate Diploma",
      location: "Mumbai, India",
      date: "May 2021",
      highlights: [
        "IB Diploma score: 44/45, GPA: 4.00/4.00",
        "Grade 10 IGCSE GPA: 3.95/4.00"
      ]
    }
  ],

  experience: [
    {
      company: "Interplay Research Lab, Cornell University",
      role: "AI/ML Researcher",
      location: "Ithaca, NY",
      period: "Dec 2025 - Present",
      domain: "cornell.edu",
      bullets: [
        "Building sentiment analysis system to analyze public opinion about Hawk-Eye in baseball using NLTK VADER and OpenAI GPT-4o mini API.",
        "Implemented data pipeline using Python to scrape, clean and process 40,000+ Reddit posts and comments.",
        "Developed reusable visualization frameworks using matplotlib and seaborn libraries to generate multi-subplot analytical dashboards."
      ]
    },
    {
      company: "Allianz Life",
      role: "Data Science Intern",
      location: "Minneapolis, MN",
      period: "May 2024 - Aug 2024",
      domain: "allianz.com",
      bullets: [
        "Developed automated workflows processing 7,000+ distributor records across all sales channels for real-time sales targeting.",
        "Implemented production-level ML clustering algorithm using scikit-learn with silhouette analysis validation and continuous monitoring.",
        "Created distributor segmentation profiles and presented actionable findings to senior management for data-driven decisions."
      ]
    },
    {
      company: "Lemnisk",
      role: "Data Science Intern",
      location: "Bangalore, India",
      period: "Jul 2023 - Aug 2023",
      domain: "lemnisk.co",
      bullets: [
        "Designed and implemented chatbot that converts natural language to SQL code, leveraging GPT-4 and LangChain with custom prompt templates and schema injection, achieving 85% query accuracy across a 20-table relational database.",
        "Improved query performance through index tuning, table partitioning and materialized views for complex aggregations."
      ]
    },
    {
      company: "Avendus Capital (Owned by KKR)",
      role: "Software Engineering Intern",
      location: "Mumbai, India",
      period: "Feb 2025 - Mar 2025",
      domain: "avendus.com",
      bullets: [
        "Built ETL pipeline using Python to extract structured and unstructured data from 500+ Wealth-X PDFs, reducing manual processing time.",
        "Enabled CRM integration with unique-key mapping to help 40+ Relationship Managers access most recently processed client insights."
      ]
    },
    {
      company: "Bold Penguin",
      role: "Data Science Intern",
      location: "Columbus, OH",
      period: "Jun 2022 - Jul 2022",
      domain: "boldpenguin.com",
      bullets: [
        "Developed Named Entity Recognition and classification algorithms to automate data extraction from emails, proposal forms, PDFs.",
        "Built OCR-based document parser in Python and improved existing parser accuracy by 7%."
      ]
    },
    {
      company: "Yellow.AI",
      role: "Data Engineering Intern",
      location: "Bangalore, India",
      period: "Jun 2020 - Jul 2020",
      domain: "yellow.ai",
      bullets: [
        "Implemented chatbot features using JavaScript and SQL including conversation flows and database integrations for client deployments.",
        "Analyzed conversational AI architectures across industry platforms, evaluating tech stacks and system design patterns."
      ]
    },
    {
      company: "AI Practicum, Cornell University",
      role: "Software Developer",
      location: "Ithaca, NY",
      period: "Aug 2024 - Dec 2024",
      domain: "cornell.edu",
      bullets: [
        "Developed a conversational AI assistant for text and audio input/output using Retrieval Augmented Generation (RAG).",
        "Programmed FastAPI backend, NextJS frontend, and data ingestion workflow for real-time document retrieval and vector search using Pinecone."
      ]
    }
  ],

  skills: {
    languages: ["Python", "Java", "SQL", "React"],
    databases: ["AWS SageMaker", "Apache Druid", "Microsoft Azure Synapse", "SQL Server"],
    software: ["Jupyter Notebooks", "Hugging Face", "Tableau", "LangChain", "Kubernetes", "PyTorch", "Microsoft Copilot", "Git", "Posit Workbench", "Jira", "Azure OpenAI", "VSCode", "FastAPI", "Bloomberg Terminal"]
  },

  extracurriculars: [
    "Trinity College Communication Skills Program: Professional Certificate Award (Highest Grade)",
    "Member of Tarana, Cornell's South Asian Acapella group",
    "Volunteer at the Poona School and Home for the Blind; 16 articles published on assistive technologies",
    "Cornell Rocketry Team - Business Team Lead: Led six-member team, represented Cornell at Spaceport America Intercollegiate Rocket Competition"
  ]
}
