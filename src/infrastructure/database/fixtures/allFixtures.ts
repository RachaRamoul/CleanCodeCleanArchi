import { closeDatabase, initializeDatabase } from '../config/database.config';
import { createCompaniesFixtures } from './company.fixtures';


async function runAllFixtures() {
  try {
    console.log("Initializing database...");
    await initializeDatabase();

    console.log("Running fixtures...");
    await createCompaniesFixtures();

    console.log("All fixtures were executed successfully!");
  } catch (error) {
    console.error("Error executing fixtures:", error);
    process.exit(1);
  } finally {
    await closeDatabase();
}
}

runAllFixtures();
