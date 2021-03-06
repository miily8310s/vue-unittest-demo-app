import mutations from "@/store/mutations";

describe("SET_POST", () => {
  it("adds a post to the state", () => {
    const post = { id: 1, title: "Post" };
    const state = {
      postIds: [],
      posts: {},
    };
    mutations.SET_USER(state, { post });
    expect(state).toEqual({
      postIds: [1],
      posts: { "1": post },
    });
  });
});
