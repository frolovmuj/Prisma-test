import prisma from '@/libs/prisma';

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);

  const pgnum = +(searchParams.get('pgnum') ?? 0);
  const pgsize = +(searchParams.get('pgsize') ?? 10);
  const posts = await prisma.post.findMany({
    skip: pgnum * pgsize,
    take: pgsize,
  });
  return new Response(JSON.stringify(posts));
}
