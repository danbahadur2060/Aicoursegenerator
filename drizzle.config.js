import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./configs/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION || 'postgresql://aicontent_owner:mNTZWg6nu5Cx@ep-mute-glitter-a4g6i2yb.us-east-1.aws.neon.tech/aigen?sslmode=require'
  },
  verbose: true,
  strict: true,
})