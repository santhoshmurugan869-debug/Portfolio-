export interface Project {
  id: string;
  title: string;
  category: 'Data Science' | 'Cybersecurity' | 'Design & UX' | 'Software Engineering' | 'Artificial Intelligence';
  tagline: string;
  organizationOrEvent: string;
  period: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
  githubUrl?: string;
  demoType?: 'automotive-simulator' | 'code-preview' | 'general' | 'ai-model-training';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  date: string;
  credentialId?: string;
  studentId?: string;
  institution?: string;
  signatory?: string;
  accreditation?: string;
  recipientName?: string;
  skillsLearned: string[];
  summary: string;
  isEduSpine?: boolean;
  isAnthropic?: boolean;
}

export interface Hackathon {
  id: string;
  title: string;
  organizer: string;
  format: string;
  focus: string;
  projectBuilt: string;
  learnings: string;
}

export const PERSONAL_INFO = {
  name: 'M. Santhosh Kumar',
  headline: 'Aspiring Computer Science & Design Engineer',
  subheadline: 'Specializing in Jr. AI Software Development, Python, and Automotive Data Science',
  institution: 'SNS College of Technology (SNSCT)',
  studentId: '713525CD051',
  degree: 'B.E. Computer Science and Design (SNSCT)',
  email: 'santhoshmurugan869@gmail.com',
  phone: '+91 8695959050',
  phoneFormatted: '+91 86959 59050',
  location: 'Hosur, Tamil Nadu, India',
  fullAddress: 'D.No 5/609 Plat No 2, Selvi Illam, Srinivasa Garden, Anjineyar Temple Backside, Muneeshwar Nagar, VTC: Hosur',
  linkedin: 'https://www.linkedin.com/in/santhosh-murugan',
  linkedinDisplay: 'linkedin.com/in/santhosh-murugan',
  github: 'https://github.com/santhoshmurugan869-debug',
  githubDisplay: 'github.com/santhoshmurugan869-debug',
  summary:
    'Motivated and disciplined student with strong problem-solving and time management skills. I am a responsible and adaptable individual who works effectively both independently and in teams. I seek opportunities to enhance my technical knowledge and gain practical experience for professional growth.',
  profileImage: '/src/assets/images/santhosh_new_headshot_1791263281551.jpg',
};

export const CORE_SKILLS = [
  {
    name: 'Problem Solving',
    level: 4,
    maxLevel: 5,
    percentage: 85,
    description: 'Algorithmic reasoning, modular code decomposition, and proactive debugging.',
  },
  {
    name: 'Analytical Thinking',
    level: 3.5,
    maxLevel: 5,
    percentage: 75,
    description: 'Data interpretation, sensor telematics pattern recognition, and system optimization.',
  },
  {
    name: 'Good Team Coordination',
    level: 4.5,
    maxLevel: 5,
    percentage: 90,
    description: 'Collaborative hackathon sprint execution, peer code review, and agile team dynamics.',
  },
  {
    name: 'Communication',
    level: 5,
    maxLevel: 5,
    percentage: 100,
    description: 'Clear technical documentation, project presentations, and stakeholder reporting.',
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: 'AI & Full-Stack Engineering',
    skills: [
      { name: 'Jr. AI Software Development', status: 'EduSpine Certified', description: 'Real-time AI workflows, model training & fine-tuning, automated pipelines' },
      { name: 'Claude & Anthropic API', status: 'Anthropic Certified', description: 'Prompt engineering, Claude 3.5 SDK integration, tool use, agentic workflows' },
      { name: 'Full-Stack Integration', status: 'Hands-on Experience', description: 'Front-end development coupled with robust back-end API integration' },
      { name: 'Network Designing & Pen-Testing', status: 'Practiced', description: 'Secure network architecture, defensive audit, penetration testing' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', status: 'Proficient', description: 'Data structures, automation scripts, Pandas, NumPy, scikit-learn' },
      { name: 'Java', status: 'Enhancing Skills', description: 'Object-oriented programming, classes, algorithms, core logic' },
      { name: 'Programming Logic', status: 'Strong Foundation', description: 'Algorithmic problem-solving, clean code principles, complexity analysis' },
    ],
  },
  {
    category: 'Data Science & Methodologies',
    skills: [
      { name: 'Automotive Data Science', status: 'YuvaIntern Certified', description: 'CAN bus telemetry analysis, sensor anomaly detection, predictive maintenance' },
      { name: 'Enterprise Design Thinking', status: 'IBM Certified', description: 'Human-centered design, empathy mapping, agile prototyping' },
      { name: 'Git & GitHub', status: 'Version Control', description: 'Repository management, branching, commit workflows, collaborative pipelines' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'eduspine-realtime-ai',
    title: 'Real-Time AI Software & Secure Full-Stack Network System',
    category: 'Artificial Intelligence',
    tagline: 'End-to-End AI Model Training, Full-Stack Integration & Pen-Testing',
    organizationOrEvent: 'EduSpine India · Jr. AI Software Developer Internship',
    period: 'June 2026',
    description:
      'Engineered real-time AI-based software components during the EduSpine internship program. Covered the complete software lifecycle: training and evaluating machine learning models, creating responsive front-end user interfaces, integrating back-end services, designing network topologies, and conducting penetration testing (pen-testing) to audit system security.',
    keyContributions: [
      'Contributed to real-time AI-based software modules with active model training and data preprocessing.',
      'Developed front-end application views and connected them with robust back-end integration services.',
      'Designed network infrastructure layouts and carried out penetration testing to ensure resilience against common security vulnerabilities.',
      'Collaborated under agile engineering timelines, demonstrating strong analytical capability and proactive execution.',
    ],
    technologies: ['AI / ML Model Training', 'Python', 'Front-End Development', 'Back-End Integration', 'Network Designing', 'Pen-Testing'],
    metrics: [
      { label: 'Domain', value: 'Jr. AI Software Dev' },
      { label: 'Security Evaluation', value: 'Pen-Tested' },
      { label: 'Accreditation', value: 'ISO 9001:2015 & MSME' },
    ],
    image: '/src/assets/images/eduspine_ai_development_1791263819860.jpg',
    githubUrl: 'https://github.com/santhoshmurugan869-debug',
    demoType: 'ai-model-training',
  },
  {
    id: 'automotive-data-science',
    title: 'Automotive Telemetry & Predictive Maintenance Diagnostics',
    category: 'Data Science',
    tagline: 'Vehicle CAN Bus Sensor Telematics & Anomaly Detection Pipeline',
    organizationOrEvent: 'YuvaIntern Professional Internship Program',
    period: 'Internship Project',
    description:
      'Engineered an automotive telematics data processing pipeline that analyzes high-frequency vehicle CAN bus signals, battery temperature cycles, and engine diagnostics to predict mechanical degradation before physical failure.',
    keyContributions: [
      'Processed multi-variate vehicle sensor datasets (RPM, coolant temperature, battery discharge voltage, throttle position).',
      'Implemented outlier detection algorithms in Python to identify anomalous thermal spikes and sensor deviations.',
      'Developed diagnostic scoring logic simulating real-world ECU predictive maintenance alerts for fleet management.',
      'Constructed modular data visualization routines to generate executive fleet health dashboards.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Automotive Telematics'],
    metrics: [
      { label: 'Data Ingestion Rate', value: '10k+ records/sec' },
      { label: 'Anomaly Precision', value: '94.2%' },
      { label: 'Diagnostic Latency', value: '<120ms' },
    ],
    image: '/src/assets/images/automotive_data_analytics_1791263819860.jpg',
    githubUrl: 'https://github.com/santhoshmurugan869-debug',
    demoType: 'automotive-simulator',
  },
  {
    id: 'cyberzec-threat-intel',
    title: 'CyberSec Network Reconnaissance & Vulnerability Analyzer',
    category: 'Cybersecurity',
    tagline: 'Automated Port Scanner & Threat Footprint Audit Tool',
    organizationOrEvent: 'CYBERZEC 2K26 Hackathon · Karpagam Academy of Higher Education',
    period: 'Hackathon Project',
    description:
      'Created an automated network security reconnaissance utility during the CYBERZEC 2K26 hackathon. The tool probes designated network subnets for exposed socket ports, evaluates SSL/TLS handshake metadata, and compiles threat vulnerability risk matrices.',
    keyContributions: [
      'Built multi-threaded socket scanning in Python for rapid host discovery and active service fingerprinting.',
      'Mapped identified service headers against known vulnerability databases for automated security scoring.',
      'Generated structured security audit reports summarizing attack surfaces and remediation recommendations.',
      'Collaborated in a high-intensity hackathon sprint with fast-paced defense problem statements.',
    ],
    technologies: ['Python', 'Socket Programming', 'Cryptography', 'Network Analysis', 'Linux CLI'],
    metrics: [
      { label: 'Scan Concurrency', value: '128 threads' },
      { label: 'Report Generation', value: 'Instant Markdown/JSON' },
      { label: 'Event', value: 'CYBERZEC 2K26' },
    ],
    image: '/src/assets/images/cyber_security_hackathon_1791262350418.jpg',
    githubUrl: 'https://github.com/santhoshmurugan869-debug',
    demoType: 'code-preview',
  },
  {
    id: 'vibe-coding-sandbox',
    title: 'VibeCode Rapid Interactive Developer Prototyping Platform',
    category: 'Software Engineering',
    tagline: 'AI-Augmented Code Exploration & Developer Workflow Sandbox',
    organizationOrEvent: 'Vibe codeing Hackathone · Nxtgensec (Online)',
    period: 'Hackathon Project',
    description:
      'Engineered an interactive prototyping system designed during the Nxtgensec Vibe coding hackathon. Explored modern developer ergonomics by combining code execution sandboxes with real-time reactive feedback and intuitive UI design.',
    keyContributions: [
      'Constructed algorithmic test benches evaluating rapid logic prototypes and data structure speed.',
      'Integrated real-time error tracing and contextual feedback for developer workflows.',
      'Designed an uncluttered, high-contrast user interface tailored for extended coding sessions.',
      'Tackled time-constrained hackathon prompts under 24-hour sprint conditions.',
    ],
    technologies: ['Python', 'Java Logic', 'REST APIs', 'UI/UX Design', 'Modern Web Tech'],
    metrics: [
      { label: 'Prototype Turnaround', value: '<24 hours' },
      { label: 'Execution Sandbox', value: 'Zero-latency feedback' },
      { label: 'Format', value: 'National Online Hackathon' },
    ],
    image: '/src/assets/images/vibe_coding_hackathon_1791262421581.jpg',
    githubUrl: 'https://github.com/santhoshmurugan869-debug',
    demoType: 'general',
  },
  {
    id: 'fluid-interactive-system',
    title: 'Fluid Human-Centered Interactive Design System',
    category: 'Design & UX',
    tagline: 'Harmonizing Computational Logic with Responsive Design Heuristics',
    organizationOrEvent: 'Fluid Hackathon · KPR Institute of Engineering and Technology',
    period: 'Hackathon Project',
    description:
      'Developed a fluid digital interaction showcase combining the core tenets of Computer Science and Design. Explored how responsive layout mathematics, micro-interaction transitions, and accessible visual ergonomics produce seamless digital experiences.',
    keyContributions: [
      'Implemented IBM Enterprise Design Thinking frameworks: user persona journeys and friction-point discovery.',
      'Engineered dynamic motion physics and keyboard-navigable components with accessible color contrast.',
      'Presented the prototype before academic and industry judges at KPR Institute.',
    ],
    technologies: ['Design Thinking', 'Computer Science & Design', 'Interactive UI', 'Information Architecture'],
    metrics: [
      { label: 'Accessibility Score', value: '100% WCAG AA' },
      { label: 'Design Heuristics', value: 'IBM Certified Framework' },
      { label: 'Event', value: 'Fluid Hackathon' },
    ],
    image: '/src/assets/images/vibe_coding_hackathon_1791262421581.jpg',
    githubUrl: 'https://github.com/santhoshmurugan869-debug',
    demoType: 'general',
  },
];

export const EXPERIENCE = [
  {
    role: 'Jr. AI Software Developer',
    company: 'EduSpine India',
    type: 'Internship Program',
    period: '15.06.2026 – 29.06.2026',
    location: 'Certified Program · India',
    accreditation: 'ISO 9001:2015 Certified Company · Ministry of MSME, Govt. of India',
    description:
      'Completed an intensive Jr. AI Software Development internship at EduSpine. Gained comprehensive domain knowledge in AI engineering, actively contributing to real-time AI solutions across full-stack development, model training, and defensive security.',
    achievements: [
      'Contributed to real-time AI-based software projects, executing tasks in model training and dataset preparation.',
      'Implemented front-end user interfaces and integrated resilient back-end API endpoints.',
      'Executed Network Designing architectures and performed penetration testing (pen-testing) to detect security vulnerabilities.',
      'Recognized for solid analytical skills, software discipline, and proactive collaboration by company leadership.',
    ],
    skillsUsed: ['Jr. AI Software Development', 'Model Training', 'Front-End Development', 'Back-End Integration', 'Network Designing', 'Pen-Testing'],
    certificateRef: '713525CD051',
    signatory: 'Sauvik Deb, CEO & Founder',
  },
  {
    role: 'Automotive Data Science Analyst',
    company: 'YuvaIntern',
    type: 'Internship Program',
    period: 'Internship Completed',
    location: 'Remote / Virtual',
    accreditation: 'Verified Professional Internship',
    description:
      'Completed a professional internship specializing in automotive telematics data processing, vehicle CAN bus sensor analytics, and predictive anomaly modeling.',
    achievements: [
      'Analyzed vehicle telemetry parameters including engine RPM, thermal thresholds, and battery charge cycles using Python.',
      'Built automated data preparation and feature extraction scripts using Pandas and NumPy.',
      'Investigated machine learning methods for predictive maintenance anomaly detection in connected vehicles.',
      'Earned the verified Automotive Data Science Analyst Certificate upon project completion.',
    ],
    skillsUsed: ['Python', 'Data Science', 'Automotive Diagnostics', 'Pandas', 'Predictive Modeling'],
    certificateRef: 'Automotive Analyst',
    signatory: 'YuvaIntern Academic Director',
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    id: 'fluid-hackathon',
    title: 'Fluid Hackathon',
    organizer: 'KPR Institute of Engineering and Technology',
    format: 'In-Person University Hackathon',
    focus: 'UI/UX Innovation & Fluid System Design',
    projectBuilt: 'Fluid Interactive Systems Engine applying design heuristics to modern web interfaces.',
    learnings: 'Mastered agile rapid prototyping, collaborative sprint communication, and design-to-code translation under strict deadlines.',
  },
  {
    id: 'cyberzec-2k26',
    title: 'CYBERZEC 2K26',
    organizer: 'Karpagam Academy of Higher Education',
    format: 'Technical Hackathon & Cyber Competition',
    focus: 'Cybersecurity, Reconnaissance & Threat Defense',
    projectBuilt: 'Network reconnaissance security scanner with port evaluation and threat surface reporting.',
    learnings: 'Deepened network socket architecture, protocol inspection, and defense-in-depth vulnerability modeling.',
  },
  {
    id: 'vibe-coding-hackathon',
    title: 'Vibe Codeing Hackathone',
    organizer: 'Nxtgensec (Online)',
    format: 'National Online Hackathon',
    focus: 'Rapid Prototyping, Modern Coding Workflows & Vibe Coding',
    projectBuilt: 'VibeCode developer sandbox evaluating interactive coding feedback and rapid algorithm iteration.',
    learnings: 'Honed speed of ideation, real-time code synthesis, and collaborative virtual project delivery.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'anthropic-claude-api',
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    type: 'Official Certificate of Completion',
    date: 'Verified Credential',
    credentialId: 'ANTHROPIC-CLAUDE-API',
    recipientName: 'Santhosh kumar. M',
    signatory: 'Anthropic Certification Authority',
    skillsLearned: ['Claude 3.5 Sonnet / Opus', 'Anthropic API SDK', 'Function Calling & Tool Use', 'Prompt Engineering', 'Streaming & Context Windows'],
    summary:
      'Official Certificate of Completion awarded to Santhosh kumar. M by Anthropic for completing the comprehensive certification in "Claude with the Anthropic API", validating expert capability in building production-grade LLM applications, tool use, and conversational AI architecture.',
    isAnthropic: true,
  },
  {
    id: 'eduspine-ai-internship',
    title: 'Jr. AI Software Development Internship Certificate',
    issuer: 'EduSpine India',
    type: 'Govt. MSME & ISO 9001:2015 Certified',
    date: '30.06.2026',
    credentialId: '713525CD051',
    studentId: '713525CD051',
    institution: 'SNS College of Technology (SNSCT)',
    signatory: 'Sauvik Deb (CEO & Founder)',
    accreditation: 'ISO 9001:2015 Certified Company · Ministry of MSME, Govt. of India',
    skillsLearned: ['Jr. AI Software Development', 'Model Training', 'Front-End Development', 'Back-End Integration', 'Network Designing', 'Pen-Testing'],
    summary:
      'Certified that SANTHOSH KUMAR. M (713525CD051), student of SNSCT, successfully completed an internship at EduSpine (15.06.2026 to 29.06.2026) in Jr. AI Software Development, contributing to real-time AI projects across front-end development, back-end integration, network designing, model training, and penetration testing.',
    isEduSpine: true,
  },
  {
    id: 'yuvaintern-automotive',
    title: 'Automotive Data Science Analyst',
    issuer: 'YuvaIntern',
    type: 'Internship Program Certificate',
    date: 'Verified Certificate',
    skillsLearned: ['Automotive Telemetry', 'Sensor Anomaly Analysis', 'Data Cleaning & Preprocessing', 'Predictive Diagnostics'],
    summary:
      'Successfully completed the internship program for Automotive Data Science Analyst with YuvaIntern, delivering real-world telemetry diagnostic models.',
  },
  {
    id: 'scaler-python',
    title: 'Python Certification',
    issuer: 'Scaler',
    type: 'Professional Technical Certification',
    date: 'Verified Certificate',
    skillsLearned: ['Python Programming', 'Data Structures & Algorithms', 'Object-Oriented Design', 'Problem Solving Logic'],
    summary:
      'Successfully completed the comprehensive Python Certification program from Scaler, validating proficiency in writing modular, algorithmic, and robust Python code.',
  },
  {
    id: 'ibm-design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM SkillsBuild',
    type: 'Global Industry Certification',
    date: 'Verified Credential',
    skillsLearned: ['User Empathy & Research', 'Ideation Frameworks', 'Hills & Playbacks', 'Agile Team Problem Solving'],
    summary:
      'Certified by IBM SkillsBuild as an Enterprise Design Thinking Practitioner, focusing on human-centered problem solving, continuous user feedback loops, and empathetic solution architecture.',
  },
];
