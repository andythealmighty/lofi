# Platform for Foreigners in Korea

A comprehensive platform designed to help foreigners in Korea with currency exchange, marketing consulting, and community support.

## Project Overview

This platform aims to provide a safe and reliable service for foreigners in Korea, focusing on:
- Fair currency exchange rates
- Marketing consulting services
- Community support and networking
- Multi-language support (English, Korean, Chinese, Japanese, Vietnamese)

## Tech Stack

### Frontend
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Radix UI Components
- Next Themes (Dark/Light mode)
- Lucide Icons

### Backend
- Python (FastAPI)
- PostgreSQL
- Docker

## Project Structure

```
Platform for Foreigner/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages and layouts
│   │   ├── ui/             # Base UI components
│   │   └── ...             # Feature-specific components
│   ├── lib/                # Utility functions and helpers
│   └── public/             # Static assets
├── backend/                 # FastAPI backend application
│   ├── app/                # Main application code
│   │   ├── api/           # API endpoints
│   │   ├── core/          # Core functionality
│   │   ├── models/        # Database models
│   │   └── schemas/       # Pydantic schemas
│   └── tests/             # Backend tests
└── docker-compose.yml      # Docker configuration
```

## Key Features

### Frontend Features
1. **Modern UI/UX**
   - Clean, responsive design
   - Dark/Light mode support
   - Multi-language interface
   - Accessible components

2. **Navigation**
   - Sticky header with language selector
   - Theme toggle
   - Responsive menu
   - Clear call-to-action buttons

3. **Home Page Sections**
   - Hero section with value proposition
   - Feature highlights with icons
   - Community benefits
   - Call-to-action sections

4. **Components**
   - Reusable UI components (Button, Dropdown, etc.)
   - Theme provider for dark/light mode
   - Language selector
   - Navigation components

### Backend Features
1. **API Endpoints**
   - User authentication
   - Currency exchange services
   - Marketing consulting
   - Community features

2. **Database Models**
   - User management
   - Service tracking
   - Community interactions

## Current Implementation Status

### Completed
- Basic project structure
- Frontend UI components setup
- Theme configuration
- Multi-language support structure
- Docker configuration

### In Progress
- Frontend component implementation
- Backend API development
- Database schema design

### Pending
- Authentication system
- Currency exchange integration
- Marketing consulting features
- Community features
- Testing implementation

## Development Setup

1. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```

3. **Docker Setup**
   ```bash
   docker-compose up --build
   ```

## Configuration Files

### Frontend
- `next.config.js`: Next.js configuration with path aliases
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `components/ui/`: Base UI components
- `components/theme-provider.tsx`: Theme management
- `components/Navbar.tsx`: Navigation component
- `components/Footer.tsx`: Footer component

### Backend
- `requirements.txt`: Python dependencies
- `Dockerfile`: Backend container configuration
- `app/core/config.py`: Application settings
- `app/models/`: Database models
- `app/schemas/`: Pydantic schemas

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 