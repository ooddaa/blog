import { reverseString } from "../toolbox/index.js";

const posts = [
  {
    id: 1,
    routeName: "blogpost1",
    header: "Post 1",
    subheader: "Post 1 subheader",
    dateCreated: [2022, 2, 10],
    author: "oda",
    body: (
      <div className="post-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    routeName: "blogpost2",
    header: "Post 2",
    subheader: "post 2 subheader",
    dateCreated: [2022, 2, 10],
    author: "hehe",
    body: (
      <div className="post-body">
        <p>
          {reverseString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia
          cupiditate nemo! Vel inventore, nam aliquid corrupti totam dignissimos
          unde ad non ducimus cum minus, beatae magni praesentium sed velit!`)}
        </p>
      </div>
    ),
  },
  {
    id: 3,
    routeName: "blogpost3",
    header: "Post 3",
    subheader: "post 3 subheader",
    dateCreated: [2022, 3, 11],
    author: "Santa",
    body: (
      <div className="post-body">
        <p>Posto numero 3</p>
      </div>
    ),
  },
];

export default posts;
