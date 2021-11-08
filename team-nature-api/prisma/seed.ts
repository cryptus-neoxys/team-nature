import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const ajay = await prisma.donation.create({
    data: {
      count: 5,
      displayName: 'Ajay',
      email: 'ajay@email.com',
    },
  });
  console.log(ajay);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
