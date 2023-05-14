export type TopicResource = {
    isCompleted: boolean;
    start: boolean;
    problem: string;
    problemLink: string;
    solutionLink: string;
    difficulty: "easy" | "medium" | "hard";
    code: string;
};

export type Resource = {
    [id: string]: TopicResource[];
};


export type ResourceContextType = {
    resources: Resource;
    setResources: (resources: Resource) => void;
    topicTitle: string;
}