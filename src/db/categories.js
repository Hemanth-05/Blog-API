export const categories = [
  {
    id: 1,
    name: "Technology",
    description: "Articles related to latest trends in tech, programming, and software.",
    isActive: true,
    createdAt: "2025-09-01",
  },
  {
    id: 2,
    name: "Sports",
    description: "Blogs about cricket, football, basketball, and other sports.",
    isActive: true,
    createdAt: "2025-09-02",
  },
  {
    id: 3,
    name: "Lifestyle",
    description: "Covers topics on health, fitness, food, and daily living.",
    isActive: false,
    createdAt: "2025-09-03",
  },
  {
    id: 4,
    name: "Business",
    description: "Insights into startups, markets, and corporate strategies.",
    isActive: true,
    createdAt: "2025-09-04",
  },
  {
    id: 5,
    name: "Travel",
    description: "Guides, tips, and stories from travels around the world.",
    isActive: true,
    createdAt: "2025-09-05",
  },
  {
    id: 6,
    name: "Education",
    description: "Posts about learning, teaching, and educational technology.",
    isActive: false,
    createdAt: "2025-09-06",
  },
  {
    id: 7,
    name: "Entertainment",
    description: "Covers movies, music, TV, and pop culture.",
    isActive: true,
    createdAt: "2025-09-07",
  },
  {
    id: 8,
    name: "Science",
    description: "Exploring discoveries, experiments, and scientific research.",
    isActive: true,
    createdAt: "2025-09-08",
  },
  {
    id: 9,
    name: "Politics",
    description: "Discussions on government, policies, and current affairs.",
    isActive: false,
    createdAt: "2025-09-09",
  },
  {
    id: 10,
    name: "Personal Growth",
    description: "Self-improvement, motivation, and productivity hacks.",
    isActive: true,
    createdAt: "2025-09-10",
  }
];

let nextCategoryId = categories.length;

export function getNextCategoryId() {
  nextCategoryId++;
  return nextCategoryId;
}
