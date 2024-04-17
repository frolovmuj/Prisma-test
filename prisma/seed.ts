import { Prisma, PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  // {
  //   name: 'John',
  //   email: 'John@prisma.io',
  //   posts: {
  //     create: [
  //       {
  //         title: 'Join the Prisma Slack',
  //         published: true,
  //         categories: {
  //           create: [
  //             {
  //               name: 'Data Base',
  //             },
  //             {
  //               name: 'Big Data',
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         title: 'Follow Prisma on Twitter',
  //         categories: {
  //           connect: [
  //             {
  //               id: 1,
  //             },
  //           ],
  //         },
  //         published: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   name: 'Jack',
  //   email: 'jack@prisma.io',
  //   posts: {
  //     create: [
  //       {
  //         title: 'Follow Prisma on Twitter',
  //         categories: {
  //           connect: [
  //             {
  //               id: 1,
  //             },
  //           ],
  //         },
  //         published: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   name: 'sara',
  //   email: 'sara@prisma.io',
  //   posts: {
  //     create: [
  //       {
  //         title: 'Ask a question about Prisma on GitHub',
  //         published: true,
  //         categories: {
  //           connect: [
  //             {
  //               id: 2,
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         title: 'Prisma on YouTube',
  //         categories: {
  //           connect: [
  //             {
  //               id: 1,
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  // },
];
for (let i = 0; i < 60; i++) {
  const fakeUser = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    posts: {
      create: [
        {
          title: faker.lorem.sentence(),
          published: faker.datatype.boolean(),
          categories: {
            create: [
              {
                name: faker.random.word(),
              },
              {
                name: faker.random.word(),
              },
            ],
          },
        },
        {
          title: faker.lorem.sentence(),
          published: faker.datatype.boolean(),
          categories: {
            create: [
              {
                name: faker.random.word(),
              },
            ],
          },
        },
      ],
    },
  };
  userData.push(fakeUser);
}

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
