# Quick Start Guide

## 🚀 Getting Started in 2 Minutes

### Step 1: Start the Development Server
```bash
cd "c:\Users\acer\Desktop\Project\System"
npm run dev
```

The app will open at `http://localhost:5173`

### Step 2: Sign Up
1. Click the **"Sign Up"** tab
2. Enter your details:
   - **Full Name**: Your name
   - **Email**: Your email address
   - **Password**: At least 6 characters
3. Select your role: 👨‍🎓 **Student** or 👨‍🏫 **Teacher**
4. Click **Sign Up**

### Step 3: Login
You'll be automatically logged in after signup and redirected to your dashboard.

Or if you want to test login:
1. Go to **Login** tab
2. Use your email and password
3. Click **Login**

---

## 🎯 What You Can Do

### As a Student 👨‍🎓
- 📊 View your dashboard with grades and progress
- 📚 See all your enrolled courses
- ✏️ Check pending and submitted assignments
- 📈 Track your grades and GPA
- 📅 View your class schedule

### As a Teacher 👨‍🏫
- 📊 Manage your classes and students
- 👥 View student information
- ✏️ Create and manage assignments
- 📋 Mark attendance
- 📝 Grade student submissions

---

## 🎨 Features Overview

### Authentication System
- ✅ Sign up with role selection
- ✅ Secure login system
- ✅ Session persistence
- ✅ Protected routes based on user role

### Student Dashboard
- **Overview**: 4 stat cards + activity feed
- **Courses**: Progress tracking with visual bars
- **Assignments**: Status and due date tracking
- **Grades**: Grade history table
- **Schedule**: Weekly class schedule

### Teacher Dashboard
- **Overview**: 4 stat cards + quick actions
- **Classes**: Class management
- **Students**: Student list with attendance
- **Assignments**: Create new assignments
- **Attendance**: Mark attendance per class
- **Grading**: Grade submissions

---

## 📁 Project Files Structure

```
src/
├── components/
│   └── ProtectedRoute.jsx       # Route protection
├── context/
│   └── AuthContext.jsx          # Auth state management
├── pages/
│   ├── AuthPage.jsx             # Login/Signup
│   ├── StudentDashboard.jsx     # Student interface
│   └── TeacherDashboard.jsx     # Teacher interface
├── styles/
│   ├── AuthPage.css             # Auth styling
│   └── Dashboard.css            # Dashboard styling
├── App.jsx                      # Main app with routing
├── main.jsx                     # React entry
└── index.css                    # Global styles
```

---

## 🔑 Key Credentials Info

After you sign up:
- Your email and password are stored in browser's localStorage
- You can logout and log back in with the same credentials
- Each browser/device has its own storage (data is not synced)

---

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Run linter
npm run lint
```

---

## 🎓 Test Scenarios

### Scenario 1: Student Journey
1. Sign up as "John Student" with role "Student"
2. View dashboard overview
3. Check courses (3 courses with progress)
4. View assignments (2 assignments)
5. Check grades (3 grades)
6. View schedule

### Scenario 2: Teacher Journey
1. Sign up as "Prof. Smith" with role "Teacher"
2. View dashboard overview
3. Check your classes (3 classes)
4. View students (3 students)
5. Create an assignment
6. Mark attendance
7. Review grades to submit

---

## 🌟 Highlights

✨ **Modern Design**
- Purple gradient theme
- Smooth animations
- Responsive layout
- Mobile-friendly interface

⚡ **Quick Navigation**
- Sidebar navigation
- Quick stats overview
- Easy role switching

🔒 **Security Features**
- Protected routes
- Role-based access
- Session management

📱 **Responsive Design**
- Desktop: Full layout
- Tablet: Optimized layout
- Mobile: Stacked layout

---

## 📝 Notes

- This is a **frontend demo** with mock data
- Data is stored in **localStorage** only (refreshing page keeps data)
- For production, integrate with a real backend API
- Passwords are stored as plain text (frontend demo only)

---

## 🆘 Need Help?

### Common Issues

**Q: I see a blank page after signup**
- A: Check browser console for errors (F12)
- Refresh the page and try again

**Q: Styling looks weird**
- A: Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (npm run dev)

**Q: Can't login after signup**
- A: Make sure email matches exactly (case-sensitive)
- Password is also case-sensitive

**Q: Want to test with another account?**
- A: Simply sign up again with a different email
- Each email creates a separate account

---

## 🚀 Next Steps

1. ✅ Explore the student and teacher dashboards
2. ✅ Try the different sections
3. ✅ Test the role-based access
4. ✅ Customize colors and styling as needed
5. ✅ Integrate with a backend API when ready

---

**Happy exploring! 🎉**
