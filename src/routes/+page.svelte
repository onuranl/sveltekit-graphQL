<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';
	import Login from './Login.svelte';
	import Register from './Register.svelte';

	let tabs = ['login', 'register'];
	let activeTab: 'login' | 'register' = 'login';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-row h-screen">
	<div class="md:basis-1/3 bg-[url('../lib/images/img2.jpg')] bg-cover bg-center"></div>

	<div class="flex-1 bg-[#23394A]">
		<div class="h-full w-full flex justify-center items-center">
			<div class="max-w-xs">
				<p class="text-2xl font-black text-white text-left mb-2.5">
					Get more things done with Loggin platform.
				</p>
				<p class="text-lg font-light leading-5 text-white text-left mb-8">
					Access to the most powerfull tool in the entire design and web industry.
				</p>
				<div class="flex flex-row gap-5 mb-5">
					{#each tabs as tab}
						<div
							class={`cursor-pointer group ${activeTab === tab ? 'text-white' : 'text-white/50'}`}
							on:click={() => (activeTab = tab)}
						>
							<p
								class={`capitalize text-[15px] transition-all duration-[0.3s] ease-[ease] inline-block no-underline bg-transparent ${
									activeTab === tab ? 'font-bold ' : 'font-light'
								}  `}
							>
								{tab}
							</p>
							<div
								class={`h-px mt-2 group-hover:bg-white ${
									activeTab === tab ? 'bg-white' : 'bg-white/50'
								}`}
							/>
						</div>
					{/each}
				</div>
				<div>
					{#if activeTab === 'login'}
						<Login />
					{:else}
						<Register />
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
