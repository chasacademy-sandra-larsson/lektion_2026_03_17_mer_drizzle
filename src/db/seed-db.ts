import 'dotenv/config'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { db } from '../db'
import { users, posts, comments, profile, categories, postCategories } from './schema'

async function main() {

  console.log('Seeding users...')

  const hashedPassword = await bcrypt.hash('password123', 10)

  const createdUsers = await db
    .insert(users)
    .values(
      Array.from({ length: 10 }, () => ({
        email: faker.internet.email(),
        password: hashedPassword,
      }))
    )
    .returning()

  console.log(`Created ${createdUsers.length} users`)

  // Seeding posts...


  // Seeding comments..


  // Seeding profile..

  // Seeding categories..

 

  console.log('Done!')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
