export interface Project {
    id: number;
    title: string;
    subtitle: string;
    tags: string[];
    imageUrl: string;
    alt?: string;
    repoUrl: string; // URL to the project's repository
  }
  