const init = {
  users: [],
  feedbacks: [
    {
      user: [{ userName: '@madmaxfury', fullName: 'Hacker Mann' }],
      post: {
        postId: 1,
        title: `Look ma, i'm at the top`,
        category: ['bug'],
        detail: 'i am the upvote master, muahahaha!',
        upvote_count: 50,
        replies: [{}]
      }
    }
  ]
}


const feedbackReducer = (state = init, action) => {
  return state
}

export default feedbackReducer