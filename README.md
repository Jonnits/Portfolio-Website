# Portfolio Website  

## About This Application  

This application serves as an interactive portfolio showcasing my work as a full-stack developer. It provides users with access to examples of projects I have built, demonstrating my skills in front-end and back-end development. Visitors can explore featured projects, access links to other platforms, and contact me directly through a functional contact form.

## Features  

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Contact Form**: Visitors can send messages directly without exposing personal email
- **Project Showcase**: Detailed examples of my development work
- **Professional Navigation**: Easy access to all sections and external profiles
- **Email Integration**: Contact form submissions are sent directly to my inbox

## How to Navigate This Application  

The homepage presents an overview of my skills and experience, along with a selection of projects I have developed. Users can click on project cards to view more details and access live demos or GitHub repositories in my "Work" page. The "Contact" page features a fully functional contact form that allows visitors to send messages directly to me. The navigation bar allows quick access to different sections, including an "About Me" page and external links to my professional profiles.

## Technical Stack  

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality and form handling
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Email service integration
- **CORS** - Cross-origin resource sharing

### Deployment
- **Vercel** - Full-stack hosting platform
- **GitHub** - Version control and source code management

## Project Dependencies  

### Backend Dependencies
- `express` - Web framework
- `nodemailer` - Email functionality
- `cors` - Cross-origin requests
- `dotenv` - Environment variable management

### Development Dependencies
- `nodemon` - Development server with auto-restart

## Setup Instructions  

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up environment variables**:
   - Copy `env.example` to `.env`
   - Add your Gmail credentials and app password
4. **Start development server**: `npm run dev`
5. **Visit**: `http://localhost:3000`

## Where Can I Access This Application?  

- **Live Portfolio**: [https://jonrubra.vercel.app/](https://jonrubra.vercel.app/)
- **GitHub Repository**: [https://github.com/Jonnits/Portfolio-Website](https://github.com/Jonnits/Portfolio-Website)
- **GitHub Pages** (static version): [https://jonnits.github.io/Portfolio-Website/](https://jonnits.github.io/Portfolio-Website/)

## Contact Form Backend  

The contact form is powered by a Node.js backend that:
- Validates form submissions
- Sends emails using Gmail SMTP
- Provides real-time feedback to users
- Protects personal email addresses
- Handles errors gracefully

## License  

This project is open source and available under the [MIT License](LICENSE).  
