export interface Projects{
    title: string,
    description: string,
    tags: string[],
    imageUrl: string,
    repoUrl: string;       // For GitHub repository
    deployedUrl: string;   // For the deployed project
}