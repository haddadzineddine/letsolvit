import { Resource } from './../assets/types/Resource';

export const resources: { [id: string]: Resource[] } = {
    "arrays_hashing": [
        {
            isCompleted: false,
            start: true,
            problem: "Two Sum",
            problemLink: "https://leetcode.com/problems/two-sum/",
            solutionLink: "https://leetcode.com/problems/two-sum/solution/",
            difficulty: "easy",
            code: "https://leetcode.com/problems/two-sum/discuss/17/Here-is-a-Python-solution-in-O(n)-time"
        },
        {
            isCompleted: false,
            start: false,
            problem: "3Sum",
            problemLink: "https://leetcode.com/problems/3sum/",
            solutionLink: "https://leetcode.com/problems/3sum/solution/",
            difficulty: "medium",
            code: "https://leetcode.com/problems/3sum/discuss/232712/Best-Python-Solution-(Explained)"
        }
    ]
};

const topicsTitle: { [id: string]: string } = {
    "arrays_hashing": "Arrays & Hashing",
    "stack": "Stack",
    "two_pointers": "Two Pointers",
    "binary_search": "Binary Search",
    "sliding_window": "Sliding Window",
    "linked_list": "Linked List",
    "trees": "Trees",
    "tries": "Tries",
    "backtracking": "Backtracking",
    "graphs": "Graphs",
    "1d_dp": "1D DP",
    "heap_priority_queue": "Heap & Priority Queue",
    "intervals": "Intervals",
    "greedy": "Greedy",
    "advanced_graphs": "Advanced Graphs",
    "2d_dp": "2D DP",
    "bit_manipulation": "Bit Manipulation",
    "math_geometry": "Math & Geometry"
};

export const resourceHeaders: string[] = [
    "Status",
    "Start",
    "Problem",
    "Video Solution",
    "Difficulty",
    "Code"
];


export const getTopicTitle = (id: string): string => {
    return topicsTitle[id];
};

export const getResouces = (id: string): Resource[] => {
    return resources[id];
};

export const correspondingDifficultyColor: { [id: string]: string } = {
    "easy": "green",
    "medium": "orange",
    "hard": "red"
}

