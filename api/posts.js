export default {
	fetchPosts: async () => {
		return await useRequest(`https://jsonplaceholder.typicode.com/posts`);
	},
}