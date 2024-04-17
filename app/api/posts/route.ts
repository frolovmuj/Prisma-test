import type { NextApiRequest, NextApiResponse } from 'next';

import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET() {
  // const posts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: 'github',
  //           mode: 'insensitive',
  //         },
  //       },
  //       {
  //         title: {
  //           contains: 'Twitter',
  //         },
  //       },
  //     ],
  //   }, 
  // });
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains:
          'Aer congregatio volup cicuta cerno coepi.',
      },
    },

    select: {
      title: true,
    },
  });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  if (!title) return NextResponse.error();
  return NextResponse.json(title);
}
