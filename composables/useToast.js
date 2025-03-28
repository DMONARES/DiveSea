export const useToast = (type, text) => {
	const { $toast } = useNuxtApp();

	$toast[type](text);
};