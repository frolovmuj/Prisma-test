import prisma from '@/libs/prisma';

export async function GET() {
  const agg = await prisma.post.aggregate({
    _sum: {
      likeNum: true,
    },
  });

  return new Response(JSON.stringify(agg));
}
