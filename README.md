Lingo - Interactive platform for language learning.
![img_main](https://github.com/MohamedLachhab089/Lingo/assets/165306415/8d0a5399-efe7-4c69-82fa-63dbadd30c1e)

‼️ Folder Structure
duolingo-clone/
  |- actions/
    |- challenge-progress.ts
    |- user-progress.ts
    |- user-subscription.ts
  |- app/
    |-- (main)/
        |--- courses/
        |--- leaderboard/
        |--- learn/
        |--- quests/
        |--- shop/
        |--- layout.tsx
    |-- (marketing)/
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- admin/
        |--- challenge/
        |--- challengeOption/
        |--- course/
        |--- lesson/
        |--- unit/
        |--- app.tsx
        |--- page.tsx
    |-- api/
        |--- challengeOptions/
        |--- challenges/
        |--- courses/
        |--- lessons/
        |--- units/
        |--- webhooks/stripe/
    |-- lesson/
        |--- [lessonId]/
        |--- card.tsx
        |--- challenge.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
        |--- question-bubble.tsx
        |--- quiz.tsx
        |--- result-card.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- feed-wrapper.tsx
    |-- mobile-wrapper.tsx
    |-- mobile-sidebar.tsx
    |-- promo.tsx
    |-- quests.tsx
    |-- sidebar-item.tsx
    |-- sidebar.tsx
    |-- sticky-wrapper.tsx
    |-- user-progress.tsx
  |- config/
    |-- index.ts
  |- db/
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- canvas.ts
  |- .env
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- constants.ts
  |- drizzle.config.ts
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json

🧰 Getting Started
Make sure Git and NodeJS is installed.
Clone this repository to your local computer.
Create .env file in root directory.
Contents of .env:

# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx"


5. Obtain Clerk Authentication Keys

Source: Clerk Dashboard or Settings Page
Procedure:
Log in to your Clerk account.
Navigate to the dashboard or settings page.
Look for the section related to authentication keys.
Copy the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY provided in that section.

6. Retrieve Neon Database URI

Source: Database Provider (e.g., Neon, PostgreSQL)
Procedure:
Access your database provider's platform or configuration.
Locate the database connection details.
Replace <user>, <password>, <host>, and <port> placeholders in the URI with your actual database credentials.
Ensure to include ?sslmode=require at the end of the URI for SSL mode requirement.

7. Fetch Stripe API Key and Webhook Secret

Source: Stripe Dashboard
Procedure:
Log in to your Stripe account.
Navigate to the dashboard or API settings.
Find the section related to API keys and webhook secrets.
Copy the STRIPE_API_SECRET_KEY and STRIPE_WEBHOOK_SECRET.

8. Specify Public App URL

Procedure:
Replace http://localhost:3000 with the URL of your deployed application.

9. Identify Clerk Admin User IDs

Source: Clerk Dashboard or Settings Page
Procedure:
Log in to your Clerk account.
Navigate to the dashboard or settings page.
Find the section related to admin user IDs.
Copy the user IDs provided, ensuring they are separated by commas and spaces.

10. Save and Secure:

Save the changes to the .env file.

11. Install Project Dependencies using npm install --legacy-peer-deps or yarn install --legacy-peer-deps.

12. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

npm run db:prod
This command uses npm to execute the Typescript file (scripts/prod.ts) and writes challenges data in database.

13. Verify Data in Database:
Once the script completes, check your database to ensure that the challenges data has been successfully seeded.

14. Now app is fully configured 👍 and you can start using this app using either one of npm run dev or yarn dev.
NOTE: Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

📷 Screenshots

<img width="960" alt="image" src="https://github.com/MohamedLachhab089/Lingo/assets/165306415/10d7585b-3d1b-43af-bd4a-ad1b48d13f1a">
<img width="960" alt="image" src="https://github.com/MohamedLachhab089/Lingo/assets/165306415/0521ed19-3b70-4e56-9d11-be07cdb4a427">
<img width="960" alt="image" src="https://github.com/MohamedLachhab089/Lingo/assets/165306415/1aac0af5-c86f-4733-8f4a-9a12c5bed0ff">
<img width="960" alt="image" src="https://github.com/MohamedLachhab089/Lingo/assets/165306415/24d297e3-f2b2-4c33-b286-71185f6ae249">

⚙️ Tech Stack
React JS Next JS Typescript Tailwind CSS Vercel Postgresql
