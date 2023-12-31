const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "a",
        name: "Mark Webber",
      },

      desc: "My first tournament today!",
      group: "",
      img: "./assets/images/image1.webp",
      priv: "",
      messaage: "reacted to your recent post ",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: " 1m ago",
    },
    {
      _id: "1",
      user: {
        _id: "a",
        name: " Angela Gray",
      },
      img: "./assets/images/image2.webp",
      desc: "",
      group: "",
      priv: "",
      messaage: " followed you",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "5m ago",
    },
    {
      _id: "2",
      user: {
        _id: "a",
        name: "Jacob Thompson ",
      },
      img: "./assets/images/image3.webp",
      desc: "",
      priv: "",
      group: "Chess Club",
      messaage: " has joined your group ",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "1 day ago",
    },
    {
      _id: "11",
      user: {
        _id: "a",
        name: "  Rizky Hasanuddin ",
      },
      img: "./assets/images/image4.webp",
      desc: "",
      priv: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      messaage: " sent you a private message ",
      group: "",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: " 5 days ago",
    },
    {
      _id: "12",
      user: {
        _id: "a",
        name: " Kimberly Smith ",
      },
      img: "./assets/images/image5.webp",
      desc: "",
      priv: "",
      messaage: "  commented on your picture ",
      group: "",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "  1 week ago",
    },
    {
      _id: "13",
      user: {
        _id: "a",
        name: " Nathan Peterson",
      },
      img: "./assets/images/image6.webp",
      desc: "5 end-game strategies to increase your win rate",
      group: "",
      priv: "",
      messaage: "   reacted to your recent post  ",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "  2 weeks ago",
    },
    {
      _id: "14",
      user: {
        _id: "a",
        name: "Anna Kim ",
      },
      img: "./assets/images/image7.webp",
      desc: "",
      priv: "",
      group: "Chess Club",
      messaage: "  left the group  ",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "  2 weeks ago",
    },
  ];
};
