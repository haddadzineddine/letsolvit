export type Resource = {
    isCompleted: boolean;
    start: boolean;
    problem: string;
    problemLink: string;
    solutionLink: string;
    difficulty: "easy" | "medium" | "hard";
    code: string;
}