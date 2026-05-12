import 'dotenv/config'
import prisma from './src/config/db.js'

async function main() {
  console.log('Fetching ships and users to assign to drills...');
  
  const ships = await prisma.ship.findMany();
  let users = await prisma.user.findMany({
    where: { role: 'admin' } // Drills are typically created by admins
  });

  // Fallback to any user if no admin exists
  if (users.length === 0) {
    users = await prisma.user.findMany();
  }

  if (ships.length === 0 || users.length === 0) {
    console.error('⚠️ You need at least one ship and one user in the database to seed drills!');
    return;
  }

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Define some standard maritime drills
  const drillsData = [
    {
      title: 'Fire and Evacuation Drill',
      drillType: 'Safety',
      scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
    {
      title: 'Lifeboat Launch Drill',
      drillType: 'Emergency',
      scheduledDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    },
    {
      title: 'Man Overboard Drill',
      drillType: 'Rescue',
      scheduledDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    },
    {
      title: 'Spill Containment Drill',
      drillType: 'Environmental',
      scheduledDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
    {
      title: 'Piracy and Security Drill',
      drillType: 'Security',
      scheduledDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    }
  ].map(drill => ({
    ...drill,
    shipId: getRandomItem(ships).id,
    createdById: getRandomItem(users).id,
  }));

  console.log('Starting to seed drills...');

  const result = await prisma.drill.createMany({
    data: drillsData,
    skipDuplicates: true,
  });

  console.log(`✅ Successfully added ${result.count} drills to the database!`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  });