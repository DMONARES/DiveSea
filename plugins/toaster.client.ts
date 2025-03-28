import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
export default defineNuxtPlugin(() => {
	const toast = useToast({
		position: 'top',
	});
	return {
		provide: {
			toast,
		},
	};
});