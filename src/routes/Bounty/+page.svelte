<!-- <script lang="ts">
    import { DefaultProvider, bsv } from "scrypt-ts";
    import { Root } from "../../contract/root";
    import { NeucronSigner } from "neucron-signer";

    export let form;

    let amount = 0;
    let square = 0;
    let root = 0;
    let deployResult = '';
    let unlockResult = '';

    const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
    const signer = new NeucronSigner(provider);

    async function handleDeploy() {
        try {
            await signer.login("sales@timechainlabs.io", "string");
            await Root.loadArtifact();

            const { instance, deployTx } = await lock(amount, square);

            deployResult = `Smart lock deployed: https://whatsonchain.com/tx/${deployTx.id}`;
        } catch (error) {
            console.error("Error during deployment:", error);
            // deployResult = `Deployment failed: ${error.message}`;
        }
    }

    async function handleUnlock() {
        try {
            const { instance } = await lock(amount, square);
            const unlockid = await unlock(instance, root);

            unlockResult = `Contract unlocked successfully: https://whatsonchain.com/tx/${unlockid}`;
        } catch (error) {
            console.error("Error during unlocking:", error);
            // unlockResult = `Unlock failed: ${error.message}`;
        }
    }

    async function lock(amount: number, square: number) {
        const bigintSquare = BigInt(square);
        const instance = new Root(bigintSquare);
        await instance.connect(signer);

        const deployTx = await instance.deploy(amount);
        return { instance, deployTx };
    }

    async function unlock(instance: Root, root: number) {
        const bigintRoot = BigInt(root);
        const { tx: callTx } = await instance.methods.unlock(bigintRoot);

        return callTx.id;
    }
</script> -->

<main class="flex flex-col items-center justify-center pt-20">
    <div>
        <div class="flex flex-row items-center gap-10">
            <form>
                <div class="flex flex-col w-[30rem] py-10 shadow-md px-3">
                    <div class="flex flex-col items-start gap-1">
                        <label for="amount">Bounty</label>
                        <input
                            class="bg-slate-300 focus:bg-white px-3 py-1 w-full"
                            type="number"
                            placeholder="Enter bounty amount"
                            name="amount"
                        />
                    </div>
                    <div class="flex flex-col items-start gap-1">
                        <label for="square">Enter the square</label>
                        <input
                            class="bg-slate-300 focus:bg-white px-3 py-1 w-full"
                            type="number"
                            placeholder="Enter Square Number"
                            name="square"
                        />
                    </div>
                    <div>
                        <button class="bg-yellow-400 px-5 py-2 text-white mt-2">
                            Deploy
                        </button>
                    </div>
                </div>
            </form>

            <form>
                <div class="flex flex-col items-center w-[30rem] shadow-md px-1 py-10">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col items-start gap-1">
                            <label for="root">Enter the Root</label>
                            <input
                                class="px-3 py-1 border border-1-black"
                                type="number"
                                placeholder="Enter root answer"
                                name="root"
                            />
                        </div>
                        <div>
                            <button class="bg-red-500 py-1 px-8 text-white">
                                Unlock Bounty
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>
