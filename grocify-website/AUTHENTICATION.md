# Grocify Authentication System

## Overview
This project now includes a complete authentication system with Register and Login forms. Users can create an account, log in, and access the Grocify website.

## Features

### 1. **Register Page** (`/register`)
- **Fields:**
  - Name (minimum 3 characters)
  - Surname (minimum 3 characters)
  - Email (valid email format)
  - Phone Number (minimum 10 digits)
  - City (minimum 2 characters)
  - Password (minimum 6 characters, must contain letters and numbers)
  - Confirm Password (must match password)

- **Validation:**
  - Real-time error messages as users type
  - Form-level validation on submit
  - Duplicate account prevention (checks name and email)
  - Password strength requirements
  - Phone number format validation

- **Design:**
  - Attractive gradient background (green to blue)
  - Beautiful product images from Unsplash
  - Responsive layout (mobile and desktop)
  - Smooth animations and transitions

### 2. **Login Page** (`/login`)
- **Fields:**
  - Name
  - Password

- **Validation:**
  - Checks credentials against registered users
  - Clear error messages for invalid credentials
  - Redirects to home page on successful login

- **Design:**
  - Similar attractive styling as register page
  - Welcome message and product images
  - Responsive design for all devices

### 3. **Context System** (`AuthContext.jsx`)
- Manages global authentication state
- Handles user registration and login
- Persists user data in localStorage
- Maintains login state across page refreshes
- Provides logout functionality

### 4. **Navbar Integration**
- Shows Login/Register buttons for non-authenticated users
- Shows user name and Logout button for authenticated users
- Mobile-responsive navigation
- Auth buttons on both desktop and mobile menus

## Data Storage

All user data is stored in browser's **localStorage** for demo purposes:
- `users`: Array of registered users
- `currentUser`: Currently logged-in user

## File Structure

```
src/
├── context/
│   ├── AuthContext.jsx          # Authentication context and logic
│   ├── CartContext.jsx
│   └── LikesContext.jsx
├── components/
│   ├── Register/
│   │   └── Register.jsx         # Register page component
│   ├── Login/
│   │   └── Login.jsx            # Login page component
│   ├── Navbar/
│   │   └── Navbar.jsx           # Updated with auth buttons
│   └── ... (other components)
└── App.jsx                      # Updated with auth routes and provider
```

## Usage

### 1. **Register a New Account**
- Navigate to `/register` or click "Register" button in navbar
- Fill in all required fields
- Ensure password contains letters and numbers
- Click "Create Account"
- You'll be redirected to login page

### 2. **Login**
- Navigate to `/login` or click "Login" button in navbar
- Enter the name and password you registered with
- Click "Login to Your Account"
- You'll be redirected to home page if credentials are correct

### 3. **Logout**
- Click "Logout" button in navbar (visible when logged in)
- Session will end and you'll be logged out

## Validation Rules

### Register Form:
| Field | Requirements |
|-------|---|
| Name | Minimum 3 characters |
| Surname | Minimum 3 characters |
| Email | Valid email format (user@example.com) |
| Phone | Minimum 10 digits |
| City | Minimum 2 characters |
| Password | Minimum 6 characters, contains letters and numbers |
| Confirm Password | Must match password exactly |

### Login Form:
| Field | Requirements |
|-------|---|
| Name | Must match registered name |
| Password | Must match registered password |

## Component Props and State

### AuthContext
```javascript
{
  user: Object,              // Current logged-in user
  isLoggedIn: Boolean,       // Is user authenticated
  register: Function,        // Register new user
  login: Function,          // Login user
  logout: Function          // Logout user
}
```

### Register Component
- Uses AuthContext for registration
- Local state for form data and validation errors
- Redirects to login on success

### Login Component
- Uses AuthContext for login
- Local state for form data and validation errors
- Redirects to home on success

## Security Notes

⚠️ **Important**: This implementation stores passwords in localStorage for demo purposes only. 

**For production:**
- Use a backend server for authentication
- Hash passwords with bcrypt or similar
- Use secure session tokens (JWT)
- Use HTTPS only
- Implement proper authentication middleware
- Add CSRF protection
- Never store sensitive data in localStorage

## Styling

The forms use **Tailwind CSS** with custom gradients:
- Primary gradient: `from-green-500 to-blue-500`
- Background: `from-green-50 to-blue-50`
- Responsive grid layout
- Smooth transitions and hover effects
- Beautiful rounded corners and shadows

## Testing

### Test Register:
1. Go to `/register`
2. Try submitting empty form → Should show validation errors
3. Try invalid email → Should show error
4. Try passwords that don't match → Should show error
5. Fill all fields correctly → Should register successfully

### Test Login:
1. Go to `/login`
2. Try invalid credentials → Should show error
3. Use correct credentials → Should login and redirect to home

### Test Persistence:
1. Register and login
2. Refresh the page → Should remain logged in
3. Close browser and reopen → Session persists

## Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social media login
- [ ] Two-factor authentication
- [ ] User profile management
- [ ] Remember me functionality
- [ ] Role-based access control

## Support

For issues or questions, please check the code comments in:
- `src/context/AuthContext.jsx`
- `src/components/Register/Register.jsx`
- `src/components/Login/Login.jsx`
