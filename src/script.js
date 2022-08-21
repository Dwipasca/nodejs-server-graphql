const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       firstName: "dwi",
  //       lastName: "pasca",
  //       email: "dwipasca@gmail.com",
  //       password: "12345",
  //     },
  //   });

  const allUsers = await prisma.user.findMany();

  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
