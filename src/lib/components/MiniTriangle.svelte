<script lang="ts">
	

	interface Props {
		type?: number;
		position?: string;
		delay?: string;
		class?: string;
		size?: number;
	}

	let {
		type = 1,
		position = 'top-24',
		delay = 'animation-delay-2000',
		class: classname = '',
		size = 32
	}: Props = $props();
</script>

<div
	class="absolute animate-blob blur-md filter will-change-transform {position} mix-blend-multiply dark:mix-blend-soft-light {delay} {classname}">
	{#if type == 1}
		<svg
			class="w-{size} h-{size}"
			viewBox="0 0 86 81"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<g transform="matrix(1,0,0,1,-9580.11,-3168.68)">
				<g transform="matrix(4.16667,0,0,4.16667,7972.45,0)">
					<g opacity="0.46">
						<g transform="matrix(-13.0574,14.9957,14.9957,13.0574,405.566,766.068)">
							<path
								d="M0.433,0.425L0.007,-0.375C-0.015,-0.416 0.015,-0.466 0.062,-0.467L0.937,-0.479C0.985,-0.48 1.015,-0.428 0.992,-0.386L0.542,0.426C0.518,0.469 0.456,0.469 0.433,0.425Z"
								style="fill:url(#_Linear1);fill-rule:nonzero;" />
						</g>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="_Linear1"
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(1,-5.55112e-17,-5.55112e-17,-1,0,-0.01048)"
					><stop offset="0" style="stop-color:rgb(74,195,255);stop-opacity:1" /><stop
						offset="1"
						style="stop-color:rgb(53,227,255);stop-opacity:1" /></linearGradient>
			</defs>
		</svg>
	{:else if type == 2}
		<svg
			class="w-{size} h-{size}"
			viewBox="0 0 374 330"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<g transform="matrix(1,0,0,1,-14496.2,-1800.13)">
				<g transform="matrix(4.16667,0,0,4.16667,7972.45,0)">
					<g opacity="0.46">
						<g transform="matrix(39.575,77.4361,77.4361,-39.575,1599.98,416.613)">
							<path
								d="M0.433,0.425L0.007,-0.375C-0.015,-0.416 0.015,-0.466 0.062,-0.467L0.937,-0.479C0.985,-0.48 1.015,-0.428 0.992,-0.386L0.542,0.426C0.518,0.469 0.456,0.469 0.433,0.425Z"
								style="fill:url(#_Linear1);fill-rule:nonzero;" />
						</g>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="_Linear1"
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(1,0,0,-1,0,-0.0105018)"
					><stop offset="0" style="stop-color:rgb(74,195,255);stop-opacity:1" /><stop
						offset="1"
						style="stop-color:rgb(53,227,255);stop-opacity:1" /></linearGradient>
			</defs>
		</svg>
	{:else if type == 3}
		<svg
			class="w-{size} h-{size}"
			viewBox="0 0 413 391"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<g transform="matrix(1,0,0,1,-8083.45,-2577.09)">
				<g transform="matrix(4.16667,0,0,4.16667,7972.45,0)">
					<g opacity="0.46">
						<g transform="matrix(64.0302,-71.6127,-71.6127,-64.0302,29.7423,684.753)">
							<path
								d="M0.433,0.425L0.007,-0.375C-0.015,-0.416 0.015,-0.466 0.062,-0.467L0.937,-0.479C0.985,-0.48 1.015,-0.428 0.992,-0.386L0.542,0.426C0.518,0.469 0.456,0.469 0.433,0.425Z"
								style="fill:url(#_Linear1);fill-rule:nonzero;" />
						</g>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="_Linear1"
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(1,0,0,-1,0,-0.0104978)"
					><stop offset="0" style="stop-color:rgb(74,195,255);stop-opacity:1" /><stop
						offset="1"
						style="stop-color:rgb(53,227,255);stop-opacity:1" /></linearGradient>
			</defs>
		</svg>
	{:else if type == 4}
		<svg
			class="w-{size} h-{size}"
			viewBox="0 0 305 313"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<g transform="matrix(1,0,0,1,-10158.8,-2954.09)">
				<g transform="matrix(4.16667,0,0,4.16667,7972.45,0)">
					<g transform="matrix(1,0,0,1,0,0.72)">
						<g opacity="0.46">
							<g transform="matrix(57.478,46.6571,-46.6571,57.478,519.766,733.219)">
								<path
									d="M0.433,0.425L0.007,-0.375C-0.015,-0.416 0.015,-0.466 0.062,-0.467L0.937,-0.479C0.985,-0.48 1.015,-0.428 0.992,-0.386L0.542,0.426C0.518,0.469 0.456,0.469 0.433,0.425Z"
									style="fill:url(#_Linear1);fill-rule:nonzero;" />
							</g>
						</g>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="_Linear1"
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(1,0,0,-1,0,-0.0104942)"
					><stop offset="0" style="stop-color:rgb(74,195,255);stop-opacity:1" /><stop
						offset="1"
						style="stop-color:rgb(53,227,255);stop-opacity:1" /></linearGradient>
			</defs>
		</svg>
	{/if}
</div>
