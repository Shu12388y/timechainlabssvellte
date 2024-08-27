
import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '../../primsa/database.js';

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';

        if (!name || !email) {
            return fail(400, { name, email, error: 'Name and email are required' });
        }

        try {
            await prisma.user.create({
                data: { name, email },
            });
            return { success: true };
        } catch (error) {
            return fail(500, { name, email, error: 'Failed to create user' });
        }
    },

    read: async () => {
        try {
            const users = await prisma.user.findMany();
            return { users };
        } catch (error) {
            return fail(500, { error: 'Failed to fetch users' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get('id'));
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';

        if (!id || !name || !email) {
            return fail(400, { id, name, email, error: 'ID, name, and email are required' });
        }

        try {
            await prisma.user.update({
                where: { id },
                data: { name, email },
            });
            return { success: true };
        } catch (error) {
            return fail(500, { id, name, email, error: 'Failed to update user' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get('id'));

        if (!id) {
            return fail(400, { id, error: 'ID is required' });
        }

        try {
            await prisma.user.delete({
                where: { id },
            });
            return { success: true };
        } catch (error) {
            return fail(500, { id, error: 'Failed to delete user' });
        }
    }
};

export async function load() {
    try {
        const users = await prisma.user.findMany();
        return { users };
    } catch (error) {
        return { error: 'Failed to load users' };
    }
}
