type HeaderContent = {
  title: string;
  subHeading: string;
};

const headerContent: Record<string, HeaderContent> = {
  "/todaysTasks": {
    title: "Today",
    subHeading: "Focus on what matters today",
  },
  "/upcomingTasks": {
    title: "Upcoming",
    subHeading: "Plan ahead for what's next",
  },
  "/completedTasks": {
    title: "Completed",
    subHeading: "Review your accomplishments",
  },
  "/allTasks": {
    title: "All Tasks",
    subHeading: "View your entire task list",
  },
};

export function getHeaderContent(pathname: string): HeaderContent {
  return (
    headerContent[pathname] ?? {
      title: "Not Found",
      subHeading: "This page does not exist",
    }
  );
}
