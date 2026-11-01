import type {
  PersonalDetails,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CurrentLearningItem,
  SocialLink,
  CertificationItem,
} from '../types/portfolio';

export const personalDetails: PersonalDetails = {
  name: 'Rishabh Pal',
  role: 'Full Stack Developer',
  badge: 'BCA Student (Expected 2027) • Open to Roles',
  bioSummary:
    'Results-driven Full Stack Developer and BCA student with practical expertise in designing and deploying end-to-end web applications. Strong core foundation in backend architecture (Node.js, Express.js, MongoDB) paired with frontend proficiency in React.js and JavaScript (ES6+). Experienced in building secure RESTful APIs, JWT authentication, and implementing role-based access control (RBAC). Committed to delivering clean, performant, and scalable software solutions.',
  location: 'Indore, Dewas, MP',
  phone: '+91 7489804514',
  email: 'rishabhpal.dev1@gmail.com',
  githubUrl: 'https://github.com/rishabhpbca2024-afk',
  linkedinUrl: 'https://www.linkedin.com/in/rishabh-pal-18r/',
  resumeFileName: 'Rishabh-Pal-Resume.pdf',
  resumePath: '/Rishabh-Pal-Resume.pdf',
};

export const heroCodeSnippet = `// Rishabh Pal — Full Stack Developer (Resume Profile)
const developer: Developer = {
  name: "Rishabh Pal",
  role: "Full Stack Developer",
  education: "BCA @ Sant Singaji Institute of Science and Management, Sandalpur (Khategaon)",
  location: "Indore, Dewas, MP",
  languages: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL"],
  frontend: ["React.js", "HTML5", "CSS3", "DOM Manipulation", "Responsive Design"],
  backend: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "JWT Auth", "RBAC"],
  databases: ["MongoDB (NoSQL)", "MySQL (Relational)", "JDBC Architecture"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Antigravity"],
  certifications: [
    "Java (Basic) - HackerRank",
    "SQL (Basic/Advanced) - HackerRank"
  ],
  readyFor: ["Full Stack Developer Roles", "Software Engineering Internships"]
};`;

// Technical Skills strictly from Resume
export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming and query languages used for web, backend and database tasks.',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'practiced', highlight: 'Core web logic & async operations', category: 'languages' },
      { name: 'TypeScript', level: 'practiced', highlight: 'Type-safe scalable JavaScript', category: 'languages' },
      { name: 'Java', level: 'practiced', highlight: 'OOP architecture & JDBC connectivity', category: 'languages' },
      { name: 'SQL', level: 'practiced', highlight: 'Relational data modeling & queries', category: 'languages' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, intuitive user interfaces with modern React and clean layouts.',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 'practiced', highlight: 'Component architecture, state & hooks', category: 'frontend' },
      { name: 'HTML5', level: 'practiced', highlight: 'Semantic structure & accessibility', category: 'frontend' },
      { name: 'CSS3', level: 'practiced', highlight: 'Modern styling & visual design', category: 'frontend' },
      { name: 'DOM Manipulation', level: 'practiced', highlight: 'Interactive events & canvas logic', category: 'frontend' },
      { name: 'Responsive Design', level: 'practiced', highlight: 'Cross-device layout optimization', category: 'frontend' },
    ],
  },
  {
    title: 'Backend & Architecture',
    description: 'Engineering robust REST APIs, authentication layers, and role isolation.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'practiced', highlight: 'Asynchronous event-driven runtime', category: 'backend' },
      { name: 'Express.js', level: 'practiced', highlight: 'Modular routing, controllers & middleware', category: 'backend' },
      { name: 'NestJS', level: 'learning', highlight: 'Structured TypeScript enterprise backend', category: 'backend' },
      { name: 'RESTful APIs', level: 'practiced', highlight: 'CRUD operations, HTTP status codes', category: 'backend' },
      { name: 'JWT Auth', level: 'practiced', highlight: 'Secure token authentication & verification', category: 'backend' },
      { name: 'RBAC (Role-Based Access)', level: 'practiced', highlight: 'Granular user privilege isolation', category: 'backend' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Data modeling, relational schemas, and persistence architectures.',
    icon: 'Database',
    skills: [
      { name: 'MongoDB (NoSQL)', level: 'practiced', highlight: 'Document collections & Mongoose modeling', category: 'database' },
      { name: 'MySQL (Relational)', level: 'practiced', highlight: 'Normalized schemas & relational queries', category: 'database' },
      { name: 'JDBC Architecture', level: 'practiced', highlight: 'Prepared statements & SQL injection prevention', category: 'database' },
    ],
  },
  {
    title: 'Tools & Version Control',
    description: 'Development environment, testing utilities, and workflow systems.',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'practiced', highlight: 'Version control & branch management', category: 'tools' },
      { name: 'GitHub', level: 'practiced', highlight: 'Code hosting & repository collaboration', category: 'tools' },
      { name: 'Postman', level: 'practiced', highlight: 'API endpoint validation & payloads', category: 'tools' },
      { name: 'VS Code', level: 'practiced', highlight: 'Primary code editor & debugging', category: 'tools' },
      { name: 'Antigravity', level: 'practiced', highlight: 'Modern development & agentic workflows', category: 'tools' },
    ],
  },
];

// Certifications from Resume
export const certifications: CertificationItem[] = [
  {
    title: 'Java (Basic) Certificate',
    issuer: 'HackerRank',
    badge: 'Verified Skill',
  },
  {
    title: 'SQL (Basic/Advanced) Certificate',
    issuer: 'HackerRank',
    badge: 'Verified Skill',
  },
];

// Education exactly from Resume
export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sant Singaji Institute of Science and Management (SSISM)',
    affiliation: 'Affiliated with Vikram University, Ujjain',
    location: 'Gram-Sandalpur, Tehsil Khategaon, Dist. Dewas, MP (455336)',
    websiteUrl: 'https://ssism.org/',
    status: 'Currently Pursuing',
    period: 'Expected 2027',
    score: 'CGPA: 7.65',
    overview:
      'Pursuing Bachelor of Computer Applications (BCA) at Sant Singaji Institute of Science and Management (SSISM), Sandalpur (affiliated with Vikram University, Ujjain). Focuses on full-stack web engineering, database architecture, and object-oriented systems with hands-on institutional projects.',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS & SQL)',
      'Object-Oriented Programming (Java)',
      'Web Technologies & REST APIs',
    ],
    keyTakeaways: [
      'Solid computer science foundations in data modeling and algorithms',
      'Hands-on full-stack development through real institutional applications like Singaji Feedback System',
      'Understanding of database security and role-based access control',
    ],
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'New Unique Public H.S. School',
    status: 'Completed',
    period: 'Completed',
    score: 'Score: 83.2%',
  },
  {
    degree: 'Secondary School (10th)',
    institution: 'New Unique Public H.S. School',
    status: 'Completed',
    period: 'Completed',
    score: 'Score: 64.8%',
  },
];

// Technical Projects (Strictly the 5 projects requested)
export const projects: ProjectItem[] = [
  {
    id: 'singaji-feedback-system',
    title: 'Singaji Feedback System',
    subtitle: 'Institutional evaluation platform with automated survey dispatch & RBAC',
    category: 'mern',
    shortDescription:
      'Architected an automated evaluation platform collecting lecture-wise student feedback across multiple college departments with secure JWT-based Role-Based Access Control.',
    detailedDescription:
      'Engineered an automated evaluation platform collecting lecture-wise student feedback across multiple college departments (MEG, BEG, ITEG, BTech). Built responsive client-side interfaces using React.js enabling intuitive forms for students and clear operational dashboards for faculty. Implemented modular REST APIs using Express.js and MongoDB with secure JWT-based RBAC to isolate Admin and Faculty privileges. Automated dispatch workflows send instantaneous survey links upon lecture completion.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    features: [
      'End-to-End Development: Automated evaluation platform across departments (MEG, BEG, ITEG, BTech)',
      'Interactive Frontend: Responsive React.js client interfaces with intuitive forms and dashboards',
      'Backend & Security: Modular Express.js and MongoDB REST APIs with secure JWT-based RBAC',
      'Automation Engine: Automated dispatch workflows sending survey links immediately after lectures',
    ],
    architectureHighlights: [
      'Complete privilege isolation between Student, Faculty, and Admin roles via JWT',
      'Role-protected React routes and modular backend controllers',
      'Automated dispatch workflows for streamlined survey distribution',
    ],
    githubUrl: 'https://github.com/rishabhpbca2024-afk/Singaji-Feedback-System',
    demoUrl: 'https://singaji-feedback-system.vercel.app',
    demoStatus: 'offline',
    demoStatusNote:
      'Deployment on Vercel is currently offline; source code, models, and controllers verified in GitHub repository.',
    verifiedDetails: 'Verified from official repository source code.',
    academicContext: 'Developed for SSISM (Sant Singaji Institute)',
    iconName: 'MessageSquareText',
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    subtitle: 'Enterprise-level Java application with 4 distinct user roles & JDBC prepared statements',
    category: 'systems',
    shortDescription:
      'Developed an enterprise-level console application in Core Java with 4 distinct user roles managing secure hospital operations with JDBC prepared statements preventing SQL injection.',
    detailedDescription:
      'Developed an enterprise-level application with 4 distinct user roles (Admin, Doctor, Patient, Pharmacist) managing secure operations. Designed relational database tables in MySQL and implemented reliable CRUD operations using JDBC prepared statements to prevent SQL injection. Automated patient appointment booking, doctor clinical record entries, prescription verification, and pharmacy medicine dispensing workflows.',
    tags: ['Java', 'JDBC', 'MySQL', 'Relational Schema', 'CRUD'],
    features: [
      'Role-Based Access: 4 distinct user roles (Admin, Doctor, Patient, Pharmacist) managing secure operations',
      'Data Integrity: Relational MySQL tables with reliable CRUD using JDBC prepared statements to prevent SQL injection',
      'Workflow Automation: Automated patient booking, clinical records, prescription verification, and pharmacy dispensing',
    ],
    architectureHighlights: [
      'Object-Oriented model hierarchy (Admin, Doctor, Patient, Pharmacist)',
      'JDBC architecture with prepared statements preventing SQL injection vulnerabilities',
      'Normalized relational database structure ensuring strict data integrity',
    ],
    githubUrl: 'https://github.com/rishabhpbca2024-afk/Hospital-Management-System',
    demoStatus: 'none',
    academicContext: 'Core Java, JDBC & MySQL',
    verifiedDetails: 'Verified from repository source files and database dump.',
    iconName: 'Building2',
  },
  {
    id: 'vehicle-parking-system',
    title: 'SmartPark — Vehicle Parking Management',
    subtitle: 'Node.js & Express REST API system with concurrency-safe slot allocation & automated billing',
    category: 'systems',
    shortDescription:
      'A robust backend parking management system built with Node.js and Express, featuring concurrency-safe slot allocation, automated duration-based tariff calculation, and structured database transactions.',
    detailedDescription:
      'Migrated and re-engineered as a modern backend system utilizing Node.js and Express. Features modular RESTful controllers, concurrency control to prevent double-assignment during vehicle entry, dynamic tariff computation based on vehicle classification, automated checkout billing with duration tracking, and structured database queries with prepared statement execution.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MySQL / DBMS', 'Backend Architecture'],
    features: [
      'Concurrency-Safe Entry: Synchronized slot allocation preventing race conditions and double-assignment',
      'Dynamic Tariff Engine: Real-time calculation based on vehicle category and elapsed parking duration',
      'Exit Checkout & Billing: Authoritative fee computation supporting multiple payment method tracking',
      'Modular REST APIs: Clean separation of route handlers, controller business logic, and database layer',
      'Reporting & Capacity Audits: Daily/monthly revenue breakdowns and real-time slot occupancy matrices',
    ],
    architectureHighlights: [
      'Express.js modular routing architecture with centralized error-handling middleware',
      'Parameterized database queries preventing SQL injection across all endpoint transactions',
      'Snapshot pricing model storing entry-time tariff rates to prevent retroactive charge discrepancies',
    ],
    githubUrl: 'https://github.com/rishabhpbca2024-afk/Vehicle-Parking-System',
    demoStatus: 'none',
    academicContext: 'Node.js & Express Backend',
    verifiedDetails: 'Verified repository source code with Node.js & Express architecture.',
    iconName: 'Car',
  },
  {
    id: 'udhaari-manager',
    title: 'Udhaari Manager',
    subtitle: 'Offline-first, private personal debt tracking Android app with native SQLite',
    category: 'mobile',
    shortDescription:
      'An offline-first, private personal finance Android application built with React 19, TypeScript, Capacitor 7, and Native SQLite with paise-safe 64-bit integer calculations.',
    detailedDescription:
      'Engineered as a 100% offline, local-only ledger mobile application to track money lent and borrowed without cloud servers or third-party tracking. Backed by native SQLite storage on Android via Capacitor. Eliminates floating-point rounding errors by calculating all currency as safe 64-bit integers in paise. Features real-time overdue alerts, full search filtering, and JSON backup/restore with schema verification.',
    tags: ['React 19', 'TypeScript', 'Capacitor 7', 'Native SQLite', 'Android', 'Offline-First'],
    features: [
      'Offline-First Native SQLite: Persistent internal storage on Android via @capacitor-community/sqlite',
      'Paise-Safe Financial Math: Stored as 64-bit integers in paise to eliminate floating-point rounding anomalies',
      'Real-Time Balance Dashboard: Instant visibility into outstanding balances, overdue debts, and settled totals',
      'WhatsApp & Call Triggers: Quick communication shortcuts directly from transaction cards',
      'Backup & Restore Engine: JSON export and restore with schema validation and merge/replace conflict options',
    ],
    architectureHighlights: [
      'Capacitor Android wrapper with native Gradle builds and zero cloud dependencies',
      'Clean separation of repository layer, SQLite adapter, and currency utility functions',
      'Dual runtime mode: Native SQLite on Android devices with persistent fallback for web testing',
    ],
    githubUrl: 'https://github.com/rishabhpbca2024-afk/UdhaariManager',
    demoStatus: 'none',
    verifiedDetails: 'Verified from repository code (capacitor.config.ts, src/services/db.ts, src/utils/currency.ts).',
    iconName: 'Smartphone',
  },
  {
    id: 'job-portal-mern',
    title: 'JobHub — Full-Stack MERN Job Portal',
    subtitle: 'Recruitment platform with role-based access & resume uploads',
    category: 'mern',
    shortDescription:
      'A full-stack MERN application providing distinct role workflows for Job Seekers and Recruiters, complete with resume uploads and candidate tracking.',
    detailedDescription:
      'Engineered with Node.js, Express, React, and MongoDB, JobHub delivers a recruitment workflow with Job Seeker and Recruiter roles, resume upload modals, and real-time candidate stage tracking.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
    features: [
      'Role-Based Access Control (RBAC) separating Job Seeker and Recruiter workflows',
      'Resume file upload dialog supporting .pdf, .doc, and .docx with MIME inspection',
      'Live candidate application tracking with stages: Applied → Shortlisted → Interview → Rejected',
      'Recruiter management dashboard with candidate file review',
    ],
    architectureHighlights: [
      'Clean separation of frontend and backend REST services',
      'JWT authentication and protected routes',
    ],
    githubUrl: 'https://github.com/rishabhpbca2024-afk/job-portal-mern',
    demoUrl: 'https://job-portal-mern-six-pi.vercel.app',
    demoStatus: 'offline',
    demoStatusNote: 'Deployment on Vercel currently offline; full repository code verified.',
    verifiedDetails: 'Verified from repository code and package dependencies.',
    iconName: 'Briefcase',
  },
];

export const currentLearnings: CurrentLearningItem[] = [
  {
    title: 'NestJS Enterprise Architecture',
    focus: 'Modular backend architecture, dependency injection, and scalable TypeScript services.',
    whyItMatters:
      'Combines Express runtime flexibility with structured enterprise application patterns.',
    progressStage: 'Active Study & Practice',
  },
  {
    title: 'Advanced React & TypeScript',
    focus: 'Strict typing for component props, custom hooks, and scalable frontend architecture.',
    whyItMatters:
      'Prevents runtime errors and improves maintainability in production-grade codebases.',
    progressStage: 'Daily Project Integration',
  },
  {
    title: 'Relational & NoSQL Schema Design',
    focus: 'Database normalization, indexing, and transactional integrity across MySQL and MongoDB.',
    whyItMatters:
      'Ensures scalable query performance and consistent data integrity.',
    progressStage: 'Continuous Practice',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/rishabhpbca2024-afk',
    iconName: 'Github',
    isExternal: true,
    actionText: 'github.com/rishabhpbca2024-afk',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishabh-pal-18r/',
    iconName: 'Linkedin',
    isExternal: true,
    actionText: 'linkedin.com/in/rishabh-pal-18r',
  },
  {
    label: 'Email',
    href: 'mailto:rishabhpal.dev1@gmail.com',
    iconName: 'Mail',
    isExternal: false,
    actionText: 'rishabhpal.dev1@gmail.com',
  },
];

export const portfolioHighlights = [
  { label: 'Role Focus', value: 'Full Stack', detail: 'Frontend & Backend' },
  { label: 'Core Degree', value: 'BCA', detail: 'Expected 2027 • CGPA 7.65' },
  { label: 'Certifications', value: '2', detail: 'HackerRank Java & SQL' },
  { label: 'Primary Stack', value: 'MERN + Java', detail: 'React, Node, Mongo, MySQL' },
];
