import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

interface IBody {
  name: string;
  email: string;
}
export async function POST(req: Request, res: Response) {
  const body: IBody = await req.json();

  // const user = await prisma.user.create({
  //   data: {
  //     email: 'user1234@prisma.io',
  //     role: 'USER',
  //     name: 'user',
  //     posts: {
  //       create: [
  //         {
  //           title: 'some title ',
  //           published: true,
  //           categories: {
  //             connect: [{ id: 3 }],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  const user = await prisma.user.create({
    data: {
      ...body,
    },
  });
  return NextResponse.json(user);
}
