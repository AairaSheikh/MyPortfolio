export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  repo: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    goal: string;
    myRole: string;
    solution: string;
    keyFeatures: string[];
    architecture: {
      frontend: string;
      backend: string;
      database: string;
      vectorSearch: string;
      ai: string;
      auth: string;
    };
    technicalHighlights: string[];
    outcome: string[];
    nextSteps: string[];
    resumeBullets: string[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Physical AI & Humanoid Robotics Textbook",
    slug: "physical-ai-humanoid-robotics",
    summary: "A robotics learning platform with structured modules, authentication, progress tracking, search, dark mode, and a retrieval-based chatbot grounded in course content. Includes Urdu translation while preserving code formatting.",
    tags: ["Full-Stack", "AI/RAG", "React", "FastAPI", "PostgreSQL", "Qdrant"],
    repo: "https://github.com/AairaSheikh/physical-ai-humanoid-robotics",
    featured: true,
    caseStudy: {
      overview: "Physical AI & Humanoid Robotics Textbook is a learning platform for robotics students that combines structured modules (like ROS 2 and simulation tools) with personalization, progress tracking, search, and an AI assistant that answers questions using course content. It's built as a modern web product (not just documentation), with a clean UI, authentication, and an AI-powered help layer.",
      
      problem: "Robotics learners usually jump between scattered resources: docs, videos, blogs, and code examples. That makes it hard to follow a clear path, track progress, or quickly get answers that match the course material. I wanted to solve three pain points:\n\n• Structure: learners need a guided sequence, not random links.\n• Support: learners get stuck, and searching the web is noisy.\n• Access: language and complexity barriers slow beginners down.",
      
      goal: "Build a platform that feels like a proper product:\n\n• Clear learning modules with a consistent layout\n• Personalized learning experience based on skill level\n• Built-in search, progress tracking, and dark mode\n• A chatbot that answers using the textbook content (not generic replies)\n• Urdu translation support, while preserving code formatting",
      
      myRole: "I designed and implemented the platform end-to-end across:\n\n• Frontend UX (learning layout, navigation, responsive design)\n• Backend APIs (auth, progress, chatbot flow, search)\n• AI layer (retrieval + context + response orchestration)\n• Infrastructure integration (database and vector search)",
      
      solution: "I built the platform around one core idea: course content should be searchable, trackable, and teachable with AI assistance. So the experience flows like this:\n\n• User signs in and selects experience level and preferences\n• The platform recommends the right content and learning order\n• Users track progress and return where they left off\n• If stuck, users ask the chatbot, which searches the course knowledge base first\n• Content can be translated to Urdu without breaking code blocks",
      
      keyFeatures: [
        "Four learning modules: ROS 2, Gazebo, NVIDIA Isaac, and Humanoid Robotics",
        "RAG chatbot: semantic search + conversation context for more accurate answers",
        "Authentication: email/password plus social OAuth (Google and GitHub)",
        "Personalization: adapts content to experience level and learning style",
        "Urdu translation: keeps code intact while translating explanations",
        "Quality-of-life: progress tracking, full-text search, dark mode, and responsive UI"
      ],
      
      architecture: {
        frontend: "Docusaurus + React-based components",
        backend: "FastAPI (Python) for auth, progress tracking, and AI endpoints",
        database: "Postgres (Neon) for users, progress, and content metadata",
        vectorSearch: "Qdrant for semantic retrieval",
        ai: "OpenAI API for chatbot responses",
        auth: "Better-Auth for sign-in flows and sessions"
      },
      
      technicalHighlights: [
        "Built a retrieval-first chatbot so answers are grounded in the platform's content.",
        "Designed the system so search and learning content scale as new modules get added.",
        "Implemented translation that preserves code formatting for technical accuracy.",
        "Delivered a product-style experience (auth, UI polish, progress) instead of a static site."
      ],
      
      outcome: [
        "Complete learning platform with structured modules and modern UX",
        "AI support that answers from the textbook knowledge base",
        "Personalization + progress tracking to help learners stay consistent",
        "Multi-language support (Urdu) designed for real technical content"
      ],
      
      nextSteps: [
        "Admin workflow for adding and organizing new lessons",
        "Progress analytics (time spent, weak areas, recommendations)",
        "Offline-friendly reading and faster search caching",
        "Quizzes and checkpoints per module"
      ],
      
      resumeBullets: [
        "Built an AI-native robotics learning platform with structured modules, personalization, authentication, progress tracking, search, and dark mode.",
        "Implemented authentication with email/password and social OAuth, plus profile-based personalization by experience level and learning preferences.",
        "Developed a retrieval-first chatbot using semantic search and conversation context so answers stay grounded in the platform's content.",
        "Integrated Postgres (Neon) for users and progress data, and Qdrant for vector search to support fast, relevant retrieval.",
        "Delivered Urdu translation while preserving code formatting to keep technical content readable and accurate.",
        "Designed the system to scale by keeping frontend, backend APIs, and retrieval modular and easy to extend."
      ]
    }
  }
];
