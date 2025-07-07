<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	// Font loading will be handled via CSS
	onMount(() => {
		// Any client-side initialization can go here
	});
</script>

<svelte:head>
	<title>
		{$page.data.title ? `${$page.data.title} | Catholic Convent Registry` : 'Catholic Convent Registry - Connect with Religious Communities'}
	</title>
	<meta name="description" content="A platform connecting lay Catholics with consecrated religious communities worldwide, making charitable giving simple, transparent, and spiritually meaningful." />
	<meta name="keywords" content="catholic, convent, monastery, religious community, donations, charity, consecrated life, religious order, spiritual giving, catholic charity" />
	<meta name="author" content="Catholic Convent Registry Team" />
	<meta name="creator" content="Catholic Convent Registry" />
	<meta name="publisher" content="Catholic Convent Registry" />
	<meta name="format-detection" content="telephone=no, address=no, email=no" />
	<link rel="canonical" href="https://catholicconventregistry.org{$page.url.pathname}" />
	
	<!-- Open Graph -->
	<meta property="og:title" content="Catholic Convent Registry" />
	<meta property="og:description" content="Connect with consecrated religious communities worldwide" />
	<meta property="og:url" content="https://catholicconventregistry.org{$page.url.pathname}" />
	<meta property="og:site_name" content="Catholic Convent Registry" />
	<meta property="og:image" content="https://catholicconventregistry.org/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Catholic Convent Registry - Connect with Religious Communities" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Catholic Convent Registry" />
	<meta name="twitter:description" content="Connect with consecrated religious communities worldwide" />
	<meta name="twitter:image" content="https://catholicconventregistry.org/og-image.jpg" />
	
	<!-- Robots -->
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
	
	<!-- Verification -->
	<meta name="google-site-verification" content="your-google-verification-code" />
	
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-gray-50 text-gray-900 antialiased font-inter">
	<div class="flex min-h-screen flex-col">
		<Header />
		<main class="flex-1">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
	:global(html) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--font-crimson: 'Crimson Text', serif;
	}
	
	:global(.font-inter) {
		font-family: var(--font-inter);
	}
	
	:global(.font-crimson) {
		font-family: var(--font-crimson);
	}
</style>