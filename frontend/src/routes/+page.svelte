<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Initialize the home page
	});
</script>

<svelte:head>
	<title>Catholic Convent Registry - Connect with Religious Communities</title>
	<meta name="description" content="Connect with consecrated religious communities worldwide for charitable giving and spiritual support." />
</svelte:head>

<div class="container">
	<div class="section">
		<div class="text-center">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">
				Welcome to Catholic Convent Registry
			</h1>
			<p class="text-xl text-gray-600 mb-8">
				Connect with consecrated religious communities worldwide
			</p>
			<div class="flex justify-center space-x-4">
				<button class="btn btn-primary btn-lg">
					Explore Communities
				</button>
				<button class="btn btn-outline btn-lg">
					Learn More
				</button>
			</div>
		</div>
	</div>
	
	<div class="section">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="card">
				<div class="card-body text-center">
					<div class="mb-4">
						<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Connect</h3>
					<p class="text-gray-600">
						Find and connect with religious communities that align with your spiritual journey.
					</p>
				</div>
			</div>
			
			<div class="card">
				<div class="card-body text-center">
					<div class="mb-4">
						<div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
							<svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</div>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Support</h3>
					<p class="text-gray-600">
						Make meaningful contributions to support the spiritual and material needs of religious communities.
					</p>
				</div>
			</div>
			
			<div class="card">
				<div class="card-body text-center">
					<div class="mb-4">
						<div class="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
							<svg class="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
					<p class="text-gray-600">
						Experience transparent and secure charitable giving with verified religious communities.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>