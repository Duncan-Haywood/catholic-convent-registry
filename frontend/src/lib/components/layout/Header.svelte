<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let isMenuOpen = false;
	
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	
	onMount(() => {
		// Close menu when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
				isMenuOpen = false;
			}
		};
		
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<header class="bg-white shadow-sm border-b border-gray-200">
	<div class="container">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-2">
					<div class="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
						</svg>
					</div>
					<span class="text-xl font-bold text-gray-900">Catholic Convent Registry</span>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center space-x-8">
				<a href="/" class="text-gray-700 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/'}>
					Home
				</a>
				<a href="/communities" class="text-gray-700 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/communities'}>
					Communities
				</a>
				<a href="/about" class="text-gray-700 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/about'}>
					About
				</a>
				<a href="/contact" class="text-gray-700 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/contact'}>
					Contact
				</a>
			</nav>
			
			<!-- Desktop Actions -->
			<div class="hidden md:flex items-center space-x-4">
				<button class="btn btn-ghost">
					Sign In
				</button>
				<button class="btn btn-primary">
					Get Started
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<button class="md:hidden menu-button" on:click={toggleMenu}>
				<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>
	
	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="md:hidden mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
				<a href="/" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/'}>
					Home
				</a>
				<a href="/communities" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/communities'}>
					Communities
				</a>
				<a href="/about" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/about'}>
					About
				</a>
				<a href="/contact" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200" class:text-primary-600={$page.url.pathname === '/contact'}>
					Contact
				</a>
				<div class="px-3 py-2 space-y-2">
					<button class="btn btn-ghost w-full">
						Sign In
					</button>
					<button class="btn btn-primary w-full">
						Get Started
					</button>
				</div>
			</div>
		</div>
	{/if}
</header>