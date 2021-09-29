export default {
  SET_USER(state: any, { post }: any) {
    state.postIds.push(post.id);
    state.posts = { ...state.posts, [post.id]: post };
  },
};
