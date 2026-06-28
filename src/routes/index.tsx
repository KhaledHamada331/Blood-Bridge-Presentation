import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/presentation/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blood Bridge · Graduation Project 2026" },
      {
        name: "description",
        content:
          "Blood Bridge is an AI-powered blood donation coordination platform for Egypt, designed as a graduation project by the Faculty of Computers and Information at Assiut University.",
      },
      { property: "og:title", content: "Blood Bridge — Every Drop Counts" },
      {
        property: "og:description",
        content:
          "A secure, intelligent platform for coordinating donors, recipients, hospitals, and administrators in real time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Presentation />;
}
