export const useClientRequest = (request, opts = {}) => {
	const config = useRuntimeConfig();

	const userAuth = useCookie('user-token');

	const options = {
		...opts,
		baseURL: config.public.api,
		headers: {
			Authorization: userAuth.value ? `Bearer ${userAuth.value}` : '',
		},
		onResponseError(e) {
			console.log(e);
		},
	};

	return $fetch(request, options);
};