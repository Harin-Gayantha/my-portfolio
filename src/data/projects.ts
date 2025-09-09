export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Online Movie Seat Booking System (Java)",
    description:
      "Web-based platform using Java, JSP, Servlets, and Spring Boot to enable users to browse movies, select showtimes, and reserve seats online with a smooth experience for both customers and administrators.",
    tech: ["Java", "JSP", "Servlets", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/Harin-Gayantha",
  },
  {
    title: "Tea Center Management System",
    description:
      "Electron desktop app with Node.js and PostgreSQL for supplier management, payments, and daily/stock calculations. Includes secure login, role-based access, and reporting.",
    tech: ["Electron", "Node.js", "PostgreSQL"],
    github: "https://github.com/Harin-Gayantha",
  },
  {
    title: "Car Rental Web System (C#)",
    description:
      "ASP.NET/C# web app enabling service providers to manage bookings, users, and rentals with an admin dashboard.",
    tech: ["C#", "ASP.NET", "SQL"],
    github: "https://github.com/Harin-Gayantha",
  },
  {
    title: "Point of Sale System for Marketing Business (C#)",
    description: "POS for inventory, customer, and order management; sales tracking and reporting.",
    tech: ["C#", ".NET", "SQL"],
    github: "https://github.com/Harin-Gayantha",
  },
];


