function getEnvOrFail(key: string): string {
  const value: string | undefined = process.env[key];

  if (value === undefined) {
    throw new Error(`ENV Variable ${key} is missing`);
  }

  return value;
}

// Database
export const databaseHost: string = getEnvOrFail('DATABASE_HOST');
export const databaseUser: string = getEnvOrFail('DATABASE_USER');
export const databasePass: string = getEnvOrFail('DATABASE_PASS');
export const databaseName: string = getEnvOrFail('DATABASE_NAME');
