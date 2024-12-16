import prisma from "@/prisma/client";

async function main() {
  // Check if the table is empty
  const issueCount = await prisma.issue.count();

  if (issueCount === 0) {
    console.log("Seeding the database...");
    await prisma.issue.createMany({
      data: [
        {
          title: "Fix login bug",
          description:
            "Resolve the issue preventing users from logging in with Google OAuth.",
          status: "OPEN",
          createdAt: new Date("2024-12-10T10:00:00Z"),
          updatedAt: new Date("2024-12-10T10:00:00Z"),
        },
        {
          title: "Add dark mode",
          description:
            "Implement dark mode for better user experience during nighttime.",
          status: "IN_PROGRESS",
          createdAt: new Date("2024-12-08T08:30:00Z"),
          updatedAt: new Date("2024-12-12T09:45:00Z"),
        },
        {
          title: "Optimize database queries",
          description:
            "Improve performance by reducing redundant database joins.",
          status: "OPEN",
          createdAt: new Date("2024-12-07T15:45:00Z"),
          updatedAt: new Date("2024-12-07T15:45:00Z"),
        },
        {
          title: "Update documentation",
          description:
            "Ensure the API documentation is up-to-date with recent changes.",
          status: "CLOSED",
          createdAt: new Date("2024-12-05T12:00:00Z"),
          updatedAt: new Date("2024-12-11T14:30:00Z"),
        },
        {
          title: "Add unit tests",
          description:
            "Increase test coverage by writing unit tests for the authentication module.",
          status: "IN_PROGRESS",
          createdAt: new Date("2024-12-09T09:00:00Z"),
          updatedAt: new Date("2024-12-12T11:15:00Z"),
        },
        {
          title: "Fix search bar responsiveness",
          description:
            "Ensure the search bar adjusts properly on mobile devices.",
          status: "IN_PROGRESS",
          createdAt: new Date("2024-12-10T08:15:00Z"),
          updatedAt: new Date("2024-12-13T10:20:00Z"),
        },
        {
          title: "Add email notifications",
          description:
            "Notify users via email for important updates and alerts.",
          status: "OPEN",
          createdAt: new Date("2024-12-09T14:00:00Z"),
          updatedAt: new Date("2024-12-09T14:00:00Z"),
        },
        {
          title: "Remove deprecated APIs",
          description: "Clean up old API endpoints that are no longer in use.",
          status: "CLOSED",
          createdAt: new Date("2024-12-05T11:45:00Z"),
          updatedAt: new Date("2024-12-07T13:30:00Z"),
        },
        {
          title: "Implement 2FA authentication",
          description:
            "Enhance security by adding two-factor authentication for user accounts.",
          status: "OPEN",
          createdAt: new Date("2024-12-11T09:30:00Z"),
          updatedAt: new Date("2024-12-11T09:30:00Z"),
        },
        {
          title: "Fix layout issue on dashboard",
          description: "Align widgets correctly on the admin dashboard.",
          status: "IN_PROGRESS",
          createdAt: new Date("2024-12-06T07:50:00Z"),
          updatedAt: new Date("2024-12-12T16:20:00Z"),
        },
      ],
    });
    console.log("Database seeded successfully!");
  } else {
    console.log("Database already seeded. No changes made.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
