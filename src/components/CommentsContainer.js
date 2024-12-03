const commentsData = [
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [
      {
        name: "Anurag",
        text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
        replies: [
          {
            name: "Anurag",
            text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
            replies: [
              {
                name: "Anurag",
                text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
                replies: [
                  {
                    name: "Anurag",
                    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
                    replies: [
                      {
                        name: "Anurag",
                        text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Anurag",
            text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
            replies: [],
          },
        ],
      },
      {
        name: "Anurag",
        text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
        replies: [],
      },
      {
        name: "Anurag",
        text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
        replies: [],
      },
    ],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [
      {
        name: "Anurag",
        text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
        replies: [],
      },
    ],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [],
  },
  {
    name: "Anurag",
    text: "Irure aliquip eiusmod sit officia enim sit ad adipisicing deserunt excepteur.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-md bg-gray-200 p-2 rounded-md my-2">
      <img
        className="h-8"
        alt="User"
        src="https://www.iconpacks.net/icons/5/free-icon-no-profile-picture-15260.png"
      />
      <div className="px-4">
        <p className="font-medium">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-4 border-l-2 border-l-orange-300 ml-5 ">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className=" ml-12 mr-2 p-4  shadow-xl">
      <h2 className="font-bold text-lg"> Comments : </h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
