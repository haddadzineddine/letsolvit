import { Edge } from "reactflow";

export const initialEdges: Edge[] = [
    { id: "e_arrays_hashing-stack", source: "arrays_hashing", target: "stack" },
    { id: "e_arrays_hashing-two_pointers", source: "arrays_hashing", target: "two_pointers" },
    { id: "e_two_pointers-binary_search", source: "two_pointers", target: "binary_search" },
    { id: "e_two_pointers-sliding_window", source: "two_pointers", target: "sliding_window" },
    { id: "e_two_pointers-linked_list", source: "two_pointers", target: "linked_list" },
    { id: "e_binary_search-trees", source: "binary_search", target: "trees" },
    { id: "e_linked_list-trees", source: "linked_list", target: "trees" },
    { id: "e_trees-tries", source: "trees", target: "tries" },
    { id: "e_trees-backtracking", source: "trees", target: "backtracking" },
    { id: "e_backtracking-graphs", source: "backtracking", target: "graphs" },
    { id: "e_backtracking-1d_dp", source: "backtracking", target: "1d_dp" },
    { id: "e_tries-heap_priority_queue", source: "trees", target: "heap_priority_queue" },
    { id: "e_heap_priority_queue-intervals", source: "heap_priority_queue", target: "intervals" },
    { id: "e_heap_priority_queue-greedy", source: "heap_priority_queue", target: "greedy" },
    { id: "e_heap_priority_queue-advanced_graphs", source: "heap_priority_queue", target: "advanced_graphs" },
    { id: "e_graphs-advanced_graphs", source: "graphs", target: "advanced_graphs" },
    { id: "e_1d_dp-2d_dp", source: "1d_dp", target: "2d_dp" },
    { id: "e_1d_dp-bit_manipulation", source: "1d_dp", target: "bit_manipulation" },
    { id: "e_bit_manipulation-math_geometry", source: "bit_manipulation", target: "math_geometry" },
    { id: "e_graphs-math_geometry", source: "graphs", target: "math_geometry" },
];