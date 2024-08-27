// import { DefaultProvider, bsv } from "scrypt-ts";
// import { Root } from "../../contract/root";
// import { NeucronSigner } from "neucron-signer";

export const actions = {
    bounty: async ({ request }) => {
        // Simple log to see if this part is executed
        console.log('bounty action started');

        // Commenting out the rest of the code to isolate the issue
        // Uncomment incrementally to identify the problematic line

        // const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
        // const signer = new NeucronSigner(provider);
        // await signer.login("sales@timechainlabs.io", "password_or_token");

        // await Root.loadArtifact();

        // const data = await request.formData();
        // const bigintSquare = BigInt(data.get('square'));
        // const instance = new Root(bigintSquare);

        // await instance.connect(signer);
        // const deployTx = await instance.deploy(data.get('amount'));

        // console.log(
        //     "Smart lock deployed: https://whatsonchain.com/tx/" + deployTx.id,
        // );

        // return {
        //     success: true,
        //     tx: deployTx
        // };
    }
};
