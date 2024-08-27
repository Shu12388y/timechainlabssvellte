<script lang="ts">
    export let data;
    let name = "";
    let email = "";
    let users: any = data.users;
    let editingUser: any = null;

    async function createUser() {
        const response = await fetch("/create", {
            method: "POST",
            body: new URLSearchParams({ name, email }),
        });

        const result = await response.json();
        if (result.success) {
            // Refresh user list
            users = await loadUsers();
        }
    }

    async function loadUsers() {
        const response = await fetch("?/read");
        const result = await response.json();
        return result.users;
    }

    async function deleteUser(id: any) {
        await fetch("?/delete", {
            method: "POST",
            body: new URLSearchParams({ id }),
        });

        // Refresh user list
        users = await loadUsers();
    }

    async function updateUser() {
        await fetch("?/update", {
            method: "POST",
            body: new URLSearchParams({ id: editingUser.id, name, email }),
        });

        // Refresh user list
        users = await loadUsers();
        editingUser = null;
    }
</script>

<main>
    <h1 class="text-4xl text-center pt-10 font-bold pb-20">Profile Page</h1>
    <div class="flex flex-col items-center justify-end">
        <div class="flex flex-col items-start justify-center">
            <h2 class="text-lg font-semibold">List of Users</h2>
            <span class="text-md font-normal">Fetched Users {users.length}</span
            >
            <div class="flex flex-col items-center justify-center">
                <div
                    class="flex flex-row items-center justify-center gap-16 text-white bg-slate-500 w-[30rem] p-3"
                >
                    <span>Name</span>
                    <span>Email</span>
                    <span>Actions</span>
                </div>
                <ul>
                    {#if users.length > 0}
                        {#each users as user}
                            <li
                                class="flex flex-row justify-between w-[30rem] p-3 bg-slate-200 my-2"
                            >
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <form
                                    on:submit|preventDefault={() =>
                                        deleteUser(user.id)}
                                    method="post"
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={user.id}
                                    />
                                    <button class="bg-red-500 text-white px-2"
                                        >Delete</button
                                    >
                                </form>
                                <form
                                    on:submit|preventDefault={() => {
                                        editingUser = user;
                                        name = user.name;
                                        email = user.email;
                                    }}
                                    method="post"
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={user.id}
                                    />
                                    <button class="bg-blue-500 text-white px-2"
                                        >Update</button
                                    >
                                </form>
                            </li>
                        {/each}
                    {:else}
                        <p>No users available.</p>
                    {/if}
                </ul>
            </div>
        </div>
    </div>

    <!-- Input form -->
    <div>
        <form action="?/create" method="post">
            <div class="flex flex-row items-center justify-center gap-10 pt-10">
                <div class="flex flex-col items-center gap-2">
                    <label for="Name">Name</label>
                    <input
                        name="name"
                        bind:value={name}
                        class="bg-slate-200 focus:bg-white text-black px-8 py-2"
                        type="text"
                        id="Name"
                        placeholder="Enter Name"
                    />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <label for="Email">Email</label>
                    <input
                        name="email"
                        bind:value={email}
                        class="bg-slate-200 focus:bg-white text-black px-8 py-2"
                        type="text"
                        id="Email"
                        placeholder="Enter Email"
                    />
                </div>
                <div class="mt-[2rem]">
                    <button class="bg-yellow-400 px-6 py-2 text-white"
                        >{editingUser ? "Update User" : "Create User"}</button
                    >
                </div>
            </div>
        </form>
    </div>
</main>
