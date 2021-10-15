const propertie = {
  user: {
    id: 4,
    username: "CrashDummy",
    name: "Jessica johnes",
    ico: "",
    score: "NaN",
  },
  leaderBoard: [
    {
      id: 3,
      name: "User1",
      score: 90000,
    },
    {
      id: 2,
      name: "User2",
      score: 90000,
    },
    {
      id: 1,
      name: "User3",
      score: 90000,
    },
  ],
  Ask: [
    {
      Question: "Who is who?",
      goodAnswer: 2,
      answer: [
        { id: 1, text: "JOJO1" },
        { id: 2, text: "JOJO2" },
        { id: 3, text: "JOJO3" },
        { id: 4, text: "JOJO" },
      ],
    },
    {
      Question: "Who is who?3",
      goodAnswer: 2,
      answer: [
        { id: 1, text: "JOJO1" },
        { id: 2, text: "JOJO2" },
      ],
    },
    {
      Question: "Who is who2?",
      goodAnswer: 2,
      answer: [
        { id: 1, text: "JOJO1" },
        { id: 2, text: "JOJO2" },
        { id: 3, text: "JOJO3" },
      ],
    },
  ],
};

export default propertie;
export const Ask = propertie.Ask;
export const user = propertie.user;
export const leaderBoard = propertie.leaderBoard;
