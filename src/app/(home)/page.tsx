import { db } from "@/db"
import { eq, desc } from "drizzle-orm"
import { users as usersTable } from "@/db/schema/users"

export default async function Home() {

  const users = await db.select().from(usersTable).where(eq(usersTable.zodiacSign, "Aries")).orderBy(desc(usersTable.createdAt))

  return (
    <div className="bg-white">

      <h1>ALL users:</h1>

      {users.map(user => (
        <div key={user.id} className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-1">Email: {user.email}</p>
          <p className="text-gray-600 mb-1">Zodiac Sign: {user.zodiacSign}</p>
          <p className="text-gray-500 text-sm">
            Created: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}

    </div>
  );
}


