export const blogs = [
  {
    id: 1,
    title: "The Man, The Myth, The Legend",
    content: "A blog about Virat Kohli",
    author: "Hemanth Pasupula",
    isPublished: false,
    createdAt: "2025-09-12",
    updatedAt: null,
  },
  {
    id: 2,
    title: "Captain Cool",
    content: "A blog about MS Dhoni",
    author: "Sumeet Bandari",
    isPublished: true,
    createdAt: "2025-09-13",
    updatedAt: null,
  },
  {
    id: 3,
    title: "The Hitman",
    content: "A blog about Rohit Sharma",
    author: "Tarun",
    isPublished: true,
    createdAt: "2025-09-14",
    updatedAt: null,
  },
  {
    id: 4,
    title: "Universe Boss",
    content: "A blog about Chris Gayle",
    author: "Raghu",
    isPublished: false,
    createdAt: "2025-09-15",
    updatedAt: null,
  },
  {
    id: 5,
    title: "Mr. 360",
    content: "A blog about AB de Villiers",
    author: "Nivas",
    isPublished: true,
    createdAt: "2025-09-16",
    updatedAt: null,
  },
  {
    id: 6,
    title: "The Wall",
    content: "A blog about Rahul Dravid",
    author: "Hemanth Pasupula",
    isPublished: true,
    createdAt: "2025-09-17",
    updatedAt: null,
  },
  {
    id: 7,
    title: "The God of Cricket",
    content: "A blog about Sachin Tendulkar",
    author: "Hemanth Pasupula",
    isPublished: true,
    createdAt: "2025-09-18",
    updatedAt: null,
  },
  {
    id: 8,
    title: "King of Swing",
    content: "A blog about Wasim Akram",
    author: "Hemanth Pasupula",
    isPublished: false,
    createdAt: "2025-09-19",
    updatedAt: null,
  },
  {
    id: 9,
    title: "Sultan of Multan",
    content: "A blog about Virender Sehwag",
    author: "Naveen",
    isPublished: true,
    createdAt: "2025-09-20",
    updatedAt: null,
  },
  {
    id: 10,
    title: "Rawalpindi Express",
    content: "A blog about Shoaib Akhtar",
    author: "Hemanth Pasupula",
    isPublished: false,
    createdAt: "2025-09-21",
    updatedAt: null,
  }
];


let nextId = blogs.length;

export function getNextId(){
    nextId++;
    return nextId;
}