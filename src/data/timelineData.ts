export interface TimelineEntry {
    year: string;
    title: string;
    company: string;
    description: string;
    tags: {
        frontend?: string[];
        backend?: string[];
        tools?: string[];
    };
}

export const timelineData: TimelineEntry[] = [
    {
        year: "2025 - heute",
        title: "Intensiv-Bootcamp Fullstack Development",
        company: "neuefische GmbH",
        description: "Vertiefung moderner Web-Technologien: Von der Architektur mit Next.js (App & Pages Router) über Cloud-Deployment bis hin zu modernen Backend-Strukturen mit Node.js. [cite: 1, 32]",
        tags: {
            frontend: ["Next.js", "React", "TypeScript", "JavaScript"],
            backend: ["Nest.js", "Node.js", "Prisma", "MongoDB", "MariaDB"],
            tools: ["Cloud Native", "Claude Code"]
        }
    },
    {
        year: "2022 - 2025",
        title: "Senior Fullstack Development",
        company: "TECCON (Bundesagentur für Arbeit)",
        description: "Entwicklung von Online-Lösungen für die Bundesagentur für Arbeit mit Angular & TypeScript. Fokus auf Testing und komplexe Backend-Anbindungen. [cite: 32]",
        tags: {
            frontend: ["Angular", "TypeScript"],
            backend: ["Java", "Python", "Django"],
            tools: ["JUnit", "Selenium", "Git", "Scrum", "Jira", "Confluence"]
        }
    },
    {
        year: "2015 - 2021",
        title: "Software Development & Microservices",
        company: "edict egaming GmbH",
        description: "Onlinebasierte Casinolösungen. Aufbau neuer Microservices für Marketingzwecke und Modernisierung der Frontend-Layouts. [cite: 32]",
        tags: {
            frontend: ["Angular", "TypeScript", "JavaScript"],
            backend: ["Java", "Spring", "Quarkus", "Microservices", "Rest-API", "Oracle"],
            tools: ["Jenkins", "Swagger", "Git", "Scrum", "Jira", "Confluence"]
        }
    },
    {
        year: "2013 - 2015",
        title: "E-Commerce Software Engineer",
        company: "hmmh multimediahaus AG",
        description: "Multimandanten-E-Commerce-Plattform auf Basis von Hybris und Wartung von Intershop-Systemen. Erstellung von Proof-of-Concepts für die Akquise. [cite: 32]",
        tags: {
            frontend: ["Web-Content"],
            backend: ["Java", "Hybris", "Intershop", "MariaDB"],
            tools: ["PoC", "SVN", "Scrum", "Jira", "Confluence"]
        }
    },
    {
        year: "2007 - 2013",
        title: "Java Component Expert",
        company: "AREVA NP GmbH",
        description: "Anforderungsanalyse, Datenmodellierung in UML und Implementierung von Anwendungen in Java, Struts und Python. [cite: 32]",
        tags: {
            frontend: ["JSP", "Swing", "GUI Design"],
            backend: ["Java", "Python", "Struts", "Oracle"],
            tools: ["Tomcat", "UML", "PyUnit", "JUnit"]
        }
    },
    {
        year: "2005 - 2007",
        title: "The Web Begins",
        company: "is@web GmbH",
        description: "Erstellung dynamischer Webseiten mit HTML/CSS und JavaScript. Auslesen von Daten aus dem CMS und Erstellung von Workflows. [cite: 33]",
        tags: {
            frontend: ["HTML", "CSS", "JavaScript", "Photoshop"],
            backend: ["CMS Integration", "LotusScript"],
            tools: ["Lotus Notes", "Workflows"]
        }
    },
    {
        year: "2004",
        title: "Pioneering Tech",
        company: "Universität Paderborn",
        description: "Forschung an XML-Dokumenten für PDAs und domänenübergreifenden Architekturen im Projekt SIRENA. [cite: 33]",
        tags: {
            frontend: ["Graphical UI (PDA)", "JSP"],
            backend: ["XML", "Web Services", "PHP", "MySQL"],
            tools: ["UPnP", "Web Services"]
        }
    }
];