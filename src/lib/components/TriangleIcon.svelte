<script lang="ts">
	import { TriangleKind } from '../../const';

	interface Props {
		kind?: TriangleKind;
		position?: string;
		delay?: string;
		class?: string;
	}

	let {
		kind = TriangleKind.A,
		position = 'top-24',
		delay = 'animation-delay-2000',
		class: classname = ''
	}: Props = $props();
	
</script>

<div
	class="absolute animate-blob blur-md filter will-change-transform {position} mix-blend-multiply dark:mix-blend-soft-light {delay} {classname}">
	{#if kind == TriangleKind.A}
		<svg class="h-32 w-32" viewBox="0 0 3832 3861"
			><path
				d="m.062-.467.875-.012a.062.062 0 0 1 .055.093l-.45.812A.062.062 0 0 1 .433.425l-.426-.8a.076.076 0 0 1-.006-.02.062.062 0 0 1 .061-.072Z"
				style="fill:url(#a);fill-rule:nonzero"
				transform="scale(3897.55813 -3897.55813) rotate(-80.702 .264 -.233)" />
			<defs id="triangle-a">
				<linearGradient
					id="a"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="matrix(1 0 0 -1 0 -.01)"
					gradientUnits="userSpaceOnUse"
					><stop offset="0" style="stop-color:#bbfeff;stop-opacity:1" /><stop
						offset="1"
						style="stop-color:#34a9ff;stop-opacity:1" /></linearGradient>
			</defs>
		</svg>
	{:else}
		<svg
			class="h-32 w-32"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
			viewBox="0 0 897 934">
			<path
				d="M861.356 335.663 81.169 4.711C40.963-12.344-3.045 19.179.166 62.735l60.175 816.376c3.296 44.707 53.669 69.165 90.838 44.105l720.012-485.423c38.4-25.889 32.8-84.044-9.835-102.13Z"
				style="fill:url(#a);fill-rule:nonzero" />
			<defs>
				<linearGradient
					id="a"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="scale(935.4134) rotate(84.997 .243 .228)"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" style="stop-color:#4ac3ff;stop-opacity:1" />
					<stop offset="1" style="stop-color:#35e3ff;stop-opacity:1" />
				</linearGradient>
			</defs>
		</svg>
	{/if}
</div>
