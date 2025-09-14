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
        author: "Hemanth Pasupula",
        isPublished: true,
        createdAt: "2025-09-13",
        updatedAt: null,
    }
];

let nextId = blogs.length;

export function getNextId(){
    nextId++;
    return nextId;
}