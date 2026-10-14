# My Portfolio (MERN)

Personal portfolio of **Hariprasad K H** - Full Stack Developer (MERN + AI Integrations).

Built with **MongoDB, Express, React and Node.js**.

## Folder structure

```
portfolio-app/
├── server/                  # Express + MongoDB API
│   ├── config/db.js         # database connection
│   ├── data/portfolioData.js  <-- edit your content here
│   ├── models/              # mongoose schemas
│   ├── controllers/         # logic for each route
│   ├── routes/              # API routes
│   ├── seed.js              # pushes portfolioData.js into MongoDB
│   └── server.js            # app entry point
│
└── client/                  # React (Vite) frontend
    └── src/
        ├── api/axios.js     # axios instance
        ├── hooks/useFetch.js
        ├── components/      # Navbar, Footer, cards etc.
        ├── pages/           # one file per page
        └── styles/          # css files
```

## How to run

You need **Node.js** and **MongoDB** (local install or a free MongoDB Atlas cluster).

### 1. Backend

```bash
cd server
npm install
cp .env.example .env     # then put your MongoDB URL in .env
npm run seed             # loads the data into MongoDB
npm run dev              # starts the API on http://localhost:5050
```

### 2. Frontend (in a new terminal)

```bash
cd client
npm install
cp .env.example .env
npm run dev              # opens on http://localhost:5173
```

## Updating the content

1. Open `server/data/portfolioData.js`
2. Change whatever you want (projects, skills, experience...)
3. Run `npm run seed` inside the `server` folder
4. Refresh the browser

Things still to fill in are marked with `// TODO` in that file.
To add a photo or resume, put `profile.jpg` / `resume.pdf` in `client/public/`
and update `photoUrl` / `resumeUrl`.

## API

| Method | Route             | Description          |
| ------ | ----------------- | -------------------- |
| GET    | `/api/profile`    | basic info and links |
| GET    | `/api/skills`     | skills by category   |
| GET    | `/api/projects`   | all projects         |
| GET    | `/api/experience` | work experience      |
| GET    | `/api/education`  | education            |
| POST   | `/api/messages`   | save a contact message |

Contact messages are stored in the `messages` collection in MongoDB.
