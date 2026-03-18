# Student Management System - Frontend

A complete React-based student management system with role-based authentication and different dashboards for students and teachers.

## Features

### 🔐 Authentication
- **Sign Up**: Create new accounts with role selection (Student or Teacher)
- **Login**: Secure login with email and password
- **Role-Based Access**: Different dashboards based on user role
- **Local Storage**: User data persistence

### 👨‍🎓 Student Dashboard Features
- **Dashboard Overview**: Quick statistics (courses, pending assignments, GPA, performance)
- **My Courses**: Enrolled courses with progress tracking
- **Assignments**: View pending and submitted assignments
- **Grades**: Track grades and performance metrics
- **Schedule**: Class schedule and timing information
- **Recent Activity**: Track recent academic activities

### 👨‍🏫 Teacher Dashboard Features
- **Dashboard Overview**: Teaching statistics and quick actions
- **My Classes**: Manage taught classes
- **Students Management**: View and manage enrolled students
- **Create Assignments**: Post new assignments to classes
- **Attendance Tracking**: Mark and track student attendance
- **Grading System**: Grade student submissions and assignments

## Project Structure

```
System/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx          # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx             # Authentication context & hooks
│   ├── pages/
│   │   ├── AuthPage.jsx                # Login/Signup page
│   │   ├── StudentDashboard.jsx        # Student dashboard
│   │   └── TeacherDashboard.jsx        # Teacher dashboard
│   ├── styles/
│   │   ├── AuthPage.css                # Auth page styles
│   │   └── Dashboard.css               # Dashboard styles
│   ├── App.jsx                         # Main app with routing
│   ├── main.jsx                        # React entry point
│   ├── index.css                       # Global styles
│   └── App.css                         # App styles
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory**:
   ```bash
   cd "c:\Users\acer\Desktop\Project\System"
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Usage Guide

### Getting Started

1. **Open the application**: The app will start at `http://localhost:5173` (or the port shown in terminal)

2. **Sign Up as a New User**:
   - Click the "Sign Up" tab
   - Enter your full name, email, and password
   - Select your role: **Student** or **Teacher**
   - Click "Sign Up"

3. **Login**:
   - Enter your email and password
   - Click "Login"
   - You'll be redirected to the appropriate dashboard

### Test Credentials

After signing up, use the same email and password to login.

### Student Dashboard Navigation

The sidebar provides access to:
- **Dashboard Overview**: See your statistics and recent activities
- **My Courses**: View enrolled courses with progress bars
- **Assignments**: Check pending and submitted assignments
- **Grades**: Track your grades and performance
- **Schedule**: View your class schedule

### Teacher Dashboard Navigation

The sidebar provides access to:
- **Dashboard Overview**: View teaching statistics
- **My Classes**: Manage your classes
- **Students**: View student information and attendance
- **Create Assignment**: Create new assignments
- **Attendance**: Mark student attendance
- **Grading**: Grade student submissions

## Authentication

### How It Works

1. **User Registration**: 
   - User fills in name, email, password, and selects a role
   - Data is stored in localStorage (for demo purposes)
   - User is automatically logged in after signup

2. **User Login**:
   - Email and password are verified against stored data
   - On successful login, user is redirected to their dashboard
   - Auth context maintains user session

3. **Protected Routes**:
   - Routes check if user is authenticated
   - Routes check if user has the required role
   - Unauthenticated users are redirected to login page

### Security Notes

⚠️ **Important**: This is a frontend demo. In production:
- Passwords should never be stored in localStorage
- Implement backend authentication (JWT tokens)
- Use HTTPS for all communications
- Hash passwords before sending to server
- Implement proper session management

## Styling

The application uses:
- **Modern CSS** with flexbox and CSS Grid
- **Responsive Design**: Mobile, tablet, and desktop support
- **Color Scheme**: Purple gradient (`#667eea` to `#764ba2`)
- **Smooth Animations**: Transitions and hover effects

### Key Design Features

- **Gradient backgrounds**: Modern purple theme
- **Card-based layout**: Organized information display
- **Icon support**: Emojis for user-friendly icons
- **Responsive grid**: Adapts to all screen sizes
- **Shadow effects**: Depth and hierarchy

## Component Details

### AuthPage.jsx
Handles both login and signup:
- Tab switching between login and signup modes
- Form validation
- Role selection during signup
- Error message display

### StudentDashboard.jsx
Student-specific features:
- 5 main sections accessible via sidebar
- Stats cards for quick overview
- Course progress tracking
- Assignment management
- Grade viewing
- Schedule display

### TeacherDashboard.jsx
Teacher-specific features:
- 6 main sections accessible via sidebar
- Student management
- Class administration
- Assignment creation form
- Attendance marking
- Submission grading

### ProtectedRoute.jsx
- Checks user authentication status
- Validates required role
- Shows loading state
- Redirects unauthenticated users to login

### AuthContext.jsx
- Manages user authentication state
- Provides login/signup/logout functions
- Persists user data to localStorage
- Custom `useAuth()` hook for components

## Customization

### Adding More Student Roles

Edit `StudentDashboard.jsx` to add role-based features:

```jsx
// Add student types/roles
const studentRoles = ['Regular', 'Honors', 'Exchange', 'Part-time'];
```

### Adding More Teacher Roles

Edit `TeacherDashboard.jsx` to add role-based features:

```jsx
// Add teacher types/roles
const teacherRoles = ['Assistant', 'Full-time', 'Adjunct'];
```

### Changing Color Theme

Edit CSS files and change the gradient color:

```css
/* Change from purple to blue */
background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
```

## API Integration (Future)

To integrate with a backend:

1. **Update AuthContext.jsx**:
   ```jsx
   const signup = async (userData) => {
     const response = await fetch('/api/auth/signup', {
       method: 'POST',
       body: JSON.stringify(userData)
     });
     const user = await response.json();
     setUser(user);
   };
   ```

2. **Fetch data from backend** in dashboard components instead of using mock data

3. **Implement token-based authentication** (JWT)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Responsive design with CSS Grid
- Lazy loading capabilities
- Efficient re-renders with React hooks
- Optimized CSS animations

## Troubleshooting

### Issue: Blank page after login
- **Solution**: Check browser console for errors, ensure routing is correct

### Issue: Styling looks broken
- **Solution**: Clear browser cache, restart dev server with `npm run dev`

### Issue: Can't login after signup
- **Solution**: Note that passwords are case-sensitive in the localStorage demo

## Future Enhancements

1. ✅ Backend API integration
2. ✅ Real database for user storage
3. ✅ Advanced attendance tracking
4. ✅ File upload for assignments
5. ✅ Email notifications
6. ✅ Real-time notifications
7. ✅ Payment integration for course enrollment
8. ✅ Advanced reporting and analytics

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

---

**Last Updated**: March 2026
**Version**: 1.0.0
