<script lang="ts">
	interface InputItemModel {
		type: string;
		name: string;
		placeholder: string;
		required: boolean;
	}

	let inputItems: Array<InputItemModel> = [
		{ type: 'text', name: 'username', placeholder: 'Full Name', required: true },
		{ type: 'email', name: 'email', placeholder: 'E-mail Address', required: true },
		{ type: 'password', name: 'password', placeholder: 'Password', required: true }
	];
</script>

<form method="POST" action="?/register">
	{#each inputItems as item}
		<input
			class="bg-[#445867] text-black w-full text-left text-sm font-light transition-all duration-[0.3s] ease-[ease] leading-normal bg-clip-padding mb-3.5 px-5 py-[9px] rounded-md border-0 outline-none hover:bg-white focus:bg-white"
			type={item.type}
			name={item.name}
			placeholder={item.placeholder}
			required={item.required}
		/>
	{/each}
	<button
		type="submit"
		class="bg-white text-black shadow-[0_0_0_rgba(0,0,0,0.16)] text-sm font-bold no-underline cursor-pointer transition-all duration-[0.3s] ease-[ease] px-7 py-1.5 rounded-md border-0 outline-none"
		>Register</button
	>
</form>
