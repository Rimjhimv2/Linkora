
# **🔗 Linkora – Full Stack URL Shortener**

Linkora is a modern full-stack URL shortener built with React JS, Tailwind CSS, Shadcn UI, and Supabase.
It allows users to create short, shareable links with a clean UI and real-time backend support.
🚀 Features
🔗 Shorten long URLs instantly
📊 Track link details with analytics
🔐 Secure authentication (Supabase Auth)
🎨 Clean & responsive UI (Tailwind + Shadcn)
⚡ Fast & scalable backend (Supabase)
🛡️ URL validation & error handling
🧩 Reusable UI components
🛠️ Tech Stack
Frontend
React JS
Tailwind CSS
Shadcn UI
Vite
Backend
Supabase (Database + Auth + API)
PostgreSQL
📂 Project Structure
Copy code

linkora/
│
├── public/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Supabase configuration
│   ├── utils/             # Helper functions
│   ├── App.jsx
│   └── main.jsx
│
├── supabase/
├── .env
├── package.json
└── README.md
🗄️ Database Schema
Table: links
Column Name
Type
Description
id
uuid
Primary Key
original_url
text
Long URL
short_code
text
Generated short identifier
user_id
uuid
Authenticated user
created_at
timestamp
Creation time
⚙️ Installation & Setup
1️⃣ Clone the repository
Bash
Copy code
git clone https://github.com/your-username/linkora.git
cd linkora
2️⃣ Install dependencies
Bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a .env file:
Copy code

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
4️⃣ Run the project
Bash
Copy code
npm run dev
🚀 Deployment
Frontend deployed on Vercel
Backend powered by Supabase Cloud
👩‍💻 Author
Rimjhim Verma
Full Stack Developer | DSA Enthusiast
