<script>
    // @ts-nocheck

    export let form;
</script>

<main class="flex flex-col items-center justify-center pt-20">
    <div>
        <div class="flex flex-row items-center gap-10">
            <div class="flex flex-col w-[30rem] py-10 shadow-md px-3">
                <span class="font-bold">Login</span>
                <form action="?/login" method="post">
                    <div class="flex flex-col items-start gap-1">
                        <label for="Email">Email</label>
                        <input
                            class="bg-slate-300 focus:bg-white px-3 py-1 w-full"
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                        />
                    </div>
                    <div class="flex flex-col items-start gap-1">
                        <label for="Password">Password</label>
                        <input
                            class="bg-slate-300 focus:bg-white px-3 py-1 w-full"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="bg-yellow-400 px-5 py-2 text-white mt-2"
                            >Login</button
                        >
                    </div>
                </form>
                {#if form?.success}
                    <p class="pt-2">
                        Logged In ypur balance is {form?.balance}
                    </p>
                {/if}
            </div>

            <div class="flex flex-col items-center w-[30rem] shadow px-3 py-10">
                <div>
                    <span class="font-bold">Pay</span>
                    <div class="flex flex-row flex-wrap gap-3">
                        <form action="?/pay" method="post">
                            <div class="flex flex-col items-start gap-1">
                                <label for="Email">Email</label>
                                <input
                                    class="bg-slate-300 focus:bg-white px-3 py-1"
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-1">
                                <label for="Password">Password</label>
                                <input
                                    class="bg-slate-300 focus:bg-white px-3 py-1"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-1">
                                <label for="PayMail">PayMail</label>
                                <input
                                    class="bg-slate-300 focus:bg-white px-3 py-1"
                                    type="text"
                                    placeholder="Enter Paymail"
                                    name="paymail"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-1">
                                <label for="amount">Amount</label>
                                <input
                                    class="px-2 py-1"
                                    type="number"
                                    placeholder="Enter Amount"
                                    name="amount"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="bg-red-500 py-1 px-8 text-white"
                                    >Pay</button
                                >
                            </div>
                        </form>
                        {#if form?.success}
                            <p>Your payment is successful {form?.payment}</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
