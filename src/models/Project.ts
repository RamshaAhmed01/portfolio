export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string; // URL to the live project
  repoUrl: string; // URL to the project's repository
}
