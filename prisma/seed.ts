import { PrismaClient } from "../lib/generated/prisma";
import bcrypt from "bcryptjs";

// Create a new PrismaClient instance
const prisma = new PrismaClient();

async function seedRolesAndUsers() {
  console.log("🔄 Starting to seed admin user...");

  try {
    const hashedPassword = await bcrypt.hash("admin1234", 10);

    const existingAdmin = await prisma.user.findFirst({
      where: { role: "Admin" },
    });

    if (!existingAdmin) {
      await prisma.user.create({
        data: {
          name: "Admin",
          email: "admin@gmail.com",
          password: hashedPassword,
          role: "Admin",
        },
      });
      console.log("🟢 Admin user created with email: admin@gmail.com");
    } else {
      console.log("⚪ Admin user already exists.");
    }
  } catch (error) {
    console.error("🔴 Error seeding admin user:", error);
    throw error;
  }
}

async function main() {
  console.log("📊 Starting database seeding...");

  try {
    await seedRolesAndUsers();
    console.log("✅ All seeding completed successfully.");
  } catch (error) {
    console.error("🔴 Seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Disconnected from database.");
  }
}

main();
