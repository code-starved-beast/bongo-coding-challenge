const users = [
  {
    id: 0,
    name: "User 0",
    details: "zero"
  },
  {
    id: 1,
    name: "User 1",
    details: "one"
  },
  {
    id: 2,
    name: "User 2",
    details: "two"
  },
  {
    id: 3,
    name: "User 3",
    details: "three"
  },
  {
    id: 4,
    name: "User 4",
    details: "four"
  },
];

export interface User {
  id: number;
  name: string;
  details: string;
}

export default users;
