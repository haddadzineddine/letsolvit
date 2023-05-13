import { Node } from 'reactflow';
import { Topic } from '../components/Topic';

export const initialNodes: Node[] = [
  {
    id: "arrays_hashing",
    type: "input",
    data: { label: <Topic name='Arrays & Hashing' progress={90} /> },
    position: { x: 600, y: 0 },
  },
  {
    id: "stack",
    type: "output",
    data: { label: <Topic name='Stack' progress={90} /> },
    position: { x: 750, y: 125 },
  },
  {
    id: "two_pointers",
    data: { label: <Topic name='Two Pointers' progress={90} /> },
    position: { x: 450, y: 125 },
  },
  {
    id: "binary_search",
    data: { label: <Topic name='Binary Search' progress={90} /> },
    position: { x: 450, y: 300 },
  },
  {
    id: "sliding_window",
    data: { label: <Topic name='Sliding Window' progress={90} /> },
    position: { x: 650, y: 300 },
  },
  {
    id: "linked_list",
    data: { label: <Topic name='Linked List' progress={90} /> },
    position: { x: 850, y: 300 },
  },
  {
    id: "trees",
    data: { label: <Topic name='Trees' progress={90} /> },
    position: { x: 650, y: 475 },
  },
  {
    id: "tries",
    type: "output",
    data: { label: <Topic name='Tries' progress={90} /> },
    position: { x: 450, y: 650 },
  },
  {
    id: "backtracking",
    data: { label: <Topic name='Backtracking' progress={90} /> },
    position: { x: 1150, y: 650 },
  },
  {
    id: "graphs",
    data: { label: <Topic name='Graphs' progress={90} /> },
    position: { x: 950, y: 800 },
  },
  {
    id: "1d_dp",
    data: { label: <Topic name='1-D DP' progress={90} /> },
    position: { x: 1350, y: 800 },
  },
  {
    id: "heap_priority_queue",
    data: { label: <Topic name='Heap / Priority Queue' progress={10} /> },
    position: { x: 550, y: 800 },
  },
  {
    id: "intervals",
    type: "output",
    data: { label: <Topic name='Intervals' progress={10} /> },
    position: { x: 450, y: 950 },
  },
  {
    id: "greedy",
    type: "output",
    data: { label: <Topic name='Greedy' progress={10} /> },
    position: { x: 650, y: 950 },
  },
  {
    id: "advanced_graphs",
    type: "output",
    data: { label: <Topic name='Advanced Graphs' progress={10} /> },
    position: { x: 850, y: 950 },
  },
  {
    id: "2d_dp",
    type: "output",
    data: { label: <Topic name='2-D DP' progress={10} /> },
    position: { x: 1150, y: 950 },
  },
  {
    id: "bit_manipulation",
    data: { label: <Topic name='Bit Manipulation' progress={10} /> },
    position: { x: 1550, y: 950 },
  },
  {
    id: "math_geometry",
    type: "output",
    data: { label: <Topic name='Math & Geometry' progress={10} /> },
    position: { x: 1100, y: 1150 },
  },
];
