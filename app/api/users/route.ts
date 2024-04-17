import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
    },
  });
  if (!users)
    return new Error('users not found or not provided');
  return NextResponse.json(users);
}
