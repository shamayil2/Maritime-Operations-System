import 'dotenv/config'
import prisma from './src/config/db.js'


async function main() {
  const shipsData = [
    { name: 'Ever Given', imoNumber: '9811000' },
    { name: 'Emma Maersk', imoNumber: '9321483' },
    { name: 'MSC Oscar', imoNumber: '9736555' },
    { name: 'CMA CGM Benjamin Franklin', imoNumber: '9706891' },
    { name: 'OOCL Hong Kong', imoNumber: '9776171' },
    { name: 'COSCO Shipping Universe', imoNumber: '9795610' },
    { name: 'HMM Algeciras', imoNumber: '9863297' },
    { name: 'Madrid Maersk', imoNumber: '9778791' },
    { name: 'MOL Triumph', imoNumber: '9769271' },
    { name: 'MSC Gülsün', imoNumber: '9839430' }
  ];

  console.log('Starting to seed ships...');

  const result = await prisma.ship.createMany({
    data: shipsData,
    skipDuplicates: true, // Prevents errors if ships with the same IMO number already exist
  });

  console.log(`Successfully added ${result.count} ships to the database!`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  });