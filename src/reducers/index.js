const initialState = {
  fruits: [
    {
      title: "apple",
      media:
        "https://images.pexels.com/photos/277276/pexels-photo-277276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "orange",
      media:
        "https://images.pexels.com/photos/105861/pexels-photo-105861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "grusha",
      media:
        "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ],
  meet: [
    {
      title: "meat1",
      media:
        "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "meat2",
      media:
        "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "meat3",
      media:
        "https://images.pexels.com/photos/277276/pexels-photo-277276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]
};

export default function userstate(state = initialState) {
  return state;
}
