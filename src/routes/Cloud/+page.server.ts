import NeucronSDK from "neucron-sdk";


export const actions ={
    login:async({request})=>{
        const data = await request.formData();
        let email = data.get('email');
        let password =  data.get('password')
        

        const neucron = new NeucronSDK()
        const authModule = neucron.authentication;
        const walletModule =  neucron.wallet;
        const loginResponse =  await authModule.login({email:email,password:password}) 
        console.log(loginResponse)
        const DefaultWalletBalance =  await walletModule.getWalletBalance({});
        return {success:true,balance:DefaultWalletBalance.data.balance.summary}

    },
    pay:async({request})=>{
        const data = await request.formData();
        let email = data.get('email');
        let password =  data.get('password')
        const amount = data.get('amount')

        const neucron = new NeucronSDK()
        const authModule = neucron.authentication;
        const walletModule =  neucron.wallet;
        const loginResponse =  await authModule.login({email:email,password:password}) 
        const options = {
            outputs: [
              {
                address: data.get('paymail'),
                note: 'gurudakshina',
                amount: parseInt(amount)
              }
            ]
          };

          const payResponse = await neucron.pay.txSpend(options)
            console.log(payResponse)

            return {success:true,payment:payResponse.data.txid}

    }
}