# Portfolio Contact Form Backend Setup

This guide will help you set up the backend for your portfolio contact form.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A Gmail account (or other email service)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```

### 3. Gmail App Password Setup

For Gmail, you'll need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, select "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password in your `.env` file (not your regular password)

### 4. Start the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start on `http://localhost:3000`

### 5. Test the Contact Form

1. Open your portfolio website in a browser
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email for the message

## How It Works

- The contact form sends data to `/api/contact` endpoint
- The backend validates the data and sends an email to you
- The sender's email is set as the reply-to address
- Users get immediate feedback on form submission
- Your email address is never exposed to visitors

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of your main email password
- Consider adding rate limiting for production use
- Validate and sanitize all input data

## Troubleshooting

- **Email not sending**: Check your email credentials and app password
- **CORS errors**: Make sure the server is running and accessible
- **Form not submitting**: Check browser console for JavaScript errors

## Production Deployment

For production deployment, consider:
- Using a service like Heroku, Vercel, or Railway
- Setting up proper environment variables
- Adding rate limiting and spam protection
- Using a professional email service like SendGrid or Mailgun
