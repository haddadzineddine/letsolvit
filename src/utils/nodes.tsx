import { Node } from 'reactflow';
import { Topic } from '../components/Topic';

export const initialNodes: Node[] = [
  {
    id: "arrays_hashing",
    type: "input",
    data: { label: <Topic id='arrays_hashing' name='Arrays & Hashing' /> },
    position: { x: 600, y: 0 },
  },
  {
    id: "stack",
    type: "output",
    data: { label: <Topic id="stack" name='Stack' /> },
    position: { x: 750, y: 125 },
  },
  {
    id: "two_pointers",
    data: { label: <Topic id="two_pointers" name='Two Pointers' /> },
    position: { x: 450, y: 125 },
  },
  {
    id: "binary_search",
    data: { label: <Topic id="binary_search" name='Binary Search' /> },
    position: { x: 250, y: 300 },
  },
  {
    id: "sliding_window",
    data: { label: <Topic id="sliding_window" name='Sliding Window' /> },
    position: { x: 550, y: 300 },
  },
  {
    id: "linked_list",
    data: { label: <Topic id="linked_list" name='Linked List' /> },
    position: { x: 850, y: 300 },
  },
  {
    id: "trees",
    data: { label: <Topic id="trees" name='Trees' /> },
    position: { x: 650, y: 475 },
  },
  {
    id: "tries",
    type: "output",
    data: { label: <Topic id="tries" name='Tries' /> },
    position: { x: 450, y: 650 },
  },
  {
    id: "backtracking",
    data: { label: <Topic id="backtracking" name='Backtracking' /> },
    position: { x: 1150, y: 650 },
  },
  {
    id: "graphs",
    data: { label: <Topic id="graphs" name='Graphs' /> },
    position: { x: 950, y: 800 },
  },
  {
    id: "1d_dp",
    data: { label: <Topic id="1d_dp" name='1-D DP' /> },
    position: { x: 1350, y: 800 },
  },
  {
    id: "heap_priority_queue",
    data: { label: <Topic id="heap_priority_queue" name='Heap / Priority Queue' /> },
    position: { x: 550, y: 800 },
  },
  {
    id: "intervals",
    type: "output",
    data: { label: <Topic id="intervals" name='Intervals' /> },
    position: { x: 200, y: 950 },
  },
  {
    id: "greedy",
    type: "output",
    data: { label: <Topic id="greedy" name='Greedy' /> },
    position: { x: 500, y: 950 },
  },
  {
    id: "advanced_graphs",
    type: "output",
    data: { label: <Topic id="advanced_graphs" name='Advanced Graphs' /> },
    position: { x: 800, y: 950 },
  },
  {
    id: "2d_dp",
    type: "output",
    data: { label: <Topic id="2d_dp" name='2-D DP' /> },
    position: { x: 1250, y: 950 },
  },
  {
    id: "bit_manipulation",
    data: { label: <Topic id="bit_manipulation" name='Bit Manipulation' /> },
    position: { x: 1550, y: 950 },
  },
  {
    id: "math_geometry",
    type: "output",
    data: { label: <Topic id="math_geometry" name='Math & Geometry' /> },
    position: { x: 1100, y: 1150 },
  },
];
