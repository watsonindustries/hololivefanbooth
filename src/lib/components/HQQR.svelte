<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let pathDrawOpts = { duration: 1000, delay: 200, easing: quintOut };
</script>

<svg
	class="Qr-item-svg bg-white rounded-xl m-8 shadow-sm"
	viewBox="-6.6 -6.6 46.2 46.2"
	fill="white"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="0.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="0.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="0.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="0.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="0.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="0.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="1.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="1.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="1.5"
		cy="13.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="1.5" cy="15.5" /><circle
		fill="#000000"
		cx="1.5"
		cy="18.5"
		r="0.25"
		opacity="0.3" /><circle fill="#000000" cx="1.5" cy="20.5" r="0.25" opacity="0.3" /><circle
		r="0.25"
		fill="#000000"
		cx="1.5"
		cy="21.5"
		opacity="0.3" /><circle opacity="0.3" r="0.25" fill="#000000" cx="1.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="1.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="1.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="2.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="2.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="2.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="2.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="2.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="2.5" cy="16.5" /><circle
		r="0.25"
		fill="#000000"
		cx="2.5"
		cy="17.5"
		opacity="0.3" /><circle r="0.25" fill="#000000" cx="2.5" cy="19.5" opacity="0.3" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="2.5"
		cy="20.5" /><circle r="1.5" fill="#546aff" cx="3.5" cy="3.5" /><path
		transition:draw={pathDrawOpts}
		d="M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z"
		stroke="#546aff"
		stroke-width="10.416666666666668"
		fill="none"
		transform="translate(0.5,0.5) scale(0.06,0.06)" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="3.5"
		cy="9.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="3.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="3.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="3.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="3.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="3.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="3.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="3.5" cy="24.5" /><circle
		fill="#546aff"
		cx="3.5"
		cy="29.5"
		r="1.5" /><path
		transition:draw={pathDrawOpts}
		d="M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z"
		stroke="#546aff"
		stroke-width="10.416666666666668"
		fill="none"
		transform="translate(0.5,26.5) scale(0.06,0.06)" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="4.5"
		cy="9.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="4.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="4.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="4.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="4.5"
		cy="16.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="4.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="4.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="5.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="5.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="5.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="5.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="5.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="5.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="5.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="5.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="6.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="6.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="6.5" cy="12.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="6.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="6.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="6.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="6.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="6.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="6.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="7.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="7.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="7.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="7.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="7.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="7.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="7.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="7.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="3.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="5.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="6.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="8.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="8.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="0.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="3.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="4.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="9.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="9.5"
		cy="32.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="3.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="5.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="6.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="25.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="28.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="29.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="10.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="10.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="7.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="12.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="13.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="26.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="27.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="29.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="11.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="11.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="1.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="6.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="9.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="21.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="27.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="12.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="12.5" cy="31.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="3.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="7.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="13.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="13.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="14.5" cy="0.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="14.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="14.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="14.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="14.5" cy="6.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="14.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="14.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="14.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="14.5" cy="29.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="1.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="2.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="3.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="4.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="7.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="10.5" /><circle fill="#000000" cx="15.5" cy="11.5" r="0.25" opacity="0.3" /><circle
		fill="#000000"
		cx="15.5"
		cy="14.5"
		r="0.25"
		opacity="0.3" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="17.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="21.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="15.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="15.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="4.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="6.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="7.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="9.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="16.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="16.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="16.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="1.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="2.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="5.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="10.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="12.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="20.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="21.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="17.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="17.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="5.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="6.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="12.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="13.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="28.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="18.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="18.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="0.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="25.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="19.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="19.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="1.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="3.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="4.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="6.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="7.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="20.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="20.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="4.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="5.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="17.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="25.5" /><circle fill="#000000" cx="21.5" cy="26.5" r="0.25" opacity="0.3" /><circle
		fill="#000000"
		cx="21.5"
		cy="29.5"
		r="0.25"
		opacity="0.3" /><circle opacity="0.3" r="0.25" fill="#000000" cx="21.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="21.5"
		cy="32.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="6.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="7.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="22.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="22.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="1.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="3.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="7.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="13.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="17.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="27.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="29.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="23.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="23.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="0.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="2.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="3.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="4.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="5.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="6.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="7.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="13.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="22.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="23.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="24.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="25.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="26.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="27.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="24.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="24.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="16.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="17.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="25.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="25.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="14.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="26.5" cy="26.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="26.5"
		cy="28.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="8.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="27.5"
		cy="10.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="27.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="27.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="27.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="27.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="27.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="9.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="12.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="14.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="16.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="17.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="28.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="28.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="28.5"
		cy="31.5" /><circle fill="#546aff" cx="29.5" cy="3.5" r="1.5" /><path
		transition:draw={pathDrawOpts}
		d="M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z"
		stroke="#546aff"
		stroke-width="10.416666666666668"
		fill="none"
		transform="translate(26.5,0.5) scale(0.06,0.06)" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="29.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="29.5" cy="12.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="29.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="29.5" cy="19.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="29.5"
		cy="20.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="29.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="29.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="29.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="29.5"
		cy="31.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="29.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="9.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="15.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="30.5"
		cy="29.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="30.5" cy="30.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="8.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="11.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="17.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="18.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="19.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="24.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="25.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="26.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="27.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="31.5"
		cy="28.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="31.5" cy="32.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="11.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="32.5" cy="13.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="15.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="32.5" cy="16.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="18.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="32.5" cy="21.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="22.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="32.5" cy="23.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="25.5" /><circle opacity="0.3" r="0.25" fill="#000000" cx="32.5" cy="28.5" /><circle
		opacity="0.3"
		r="0.25"
		fill="#000000"
		cx="32.5"
		cy="30.5" /></svg>
