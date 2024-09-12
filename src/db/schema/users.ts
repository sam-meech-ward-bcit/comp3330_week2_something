import { pgTable, serial, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const zodiacSignEnum = pgEnum('zodiac_sign', [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: varchar('email', { length: 255 }).notNull().unique(),
	name: varchar('name', { length: 255 }),
	favoriteColor: varchar('favorite_color', { length: 255 }),
	zodiacSign: zodiacSignEnum('zodiac_sign').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export type User = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
