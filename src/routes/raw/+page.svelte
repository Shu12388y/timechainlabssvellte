<script lang="ts">
	// import Header from '../../Components/Header.svelte';
    import { PrivateKey } from '@bsv/sdk';

	let WIF: string;
	let address: string;

	async function createKey() {
		const privateKey = PrivateKey.fromRandom();
		WIF = privateKey.toWif();
		console.log('WIF:', WIF);
		address = privateKey.toAddress();
		console.log('Address:', address);
	}
</script>

<!-- <Header /> -->

<main class="flex flex-col pl-10 pt-10">
	<div class="flex flex-col items-start">
		<button on:click={createKey} class="bg-black text-white px-8 py-2"
			>Generate New Wallet Keys</button
		>
		<div class="flex flex-col mt-6">
			<span>Private Key WIF formate is: {WIF}</span>
			<span>Your Bitcoin address is: {address}</span>
		</div>
	</div>
</main>
