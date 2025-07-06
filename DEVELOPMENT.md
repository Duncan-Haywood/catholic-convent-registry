# Development Guide

This guide will help you get started with developing the Catholic Convent Registry application.

## Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **PostgreSQL** (v12 or higher)
- **Redis** (v6 or higher)
- **Docker** and **Docker Compose** (optional, for containerized development)

## Quick Start

### Option 1: Docker Development (Recommended)

1. **Clone and navigate to the project:**
   ```bash
   cd projects/catholic-convent-registry
   ```

2. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Start all services:**
   ```bash
   docker-compose up -d
   ```

4. **Access the applications:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Database Admin: http://localhost:8080
   - API Health Check: http://localhost:3001/health

### Option 2: Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

3. **Start PostgreSQL and Redis:**
   ```bash
   # Install and start PostgreSQL
   brew install postgresql
   brew services start postgresql
   
   # Install and start Redis
   brew install redis
   brew services start redis
   ```

4. **Create database:**
   ```bash
   createdb catholic_convent_registry
   ```

5. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

6. **Seed the database:**
   ```bash
   npm run db:seed
   ```

7. **Start development servers:**
   ```bash
   npm run dev
   ```

## Project Structure

```
catholic-convent-registry/
├── frontend/              # Next.js React application
│   ├── src/
│   │   ├── app/          # Next.js App Router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utility libraries
│   │   └── hooks/        # Custom React hooks
│   ├── public/           # Static assets
│   └── package.json
├── backend/               # Express.js API server
│   ├── src/
│   │   ├── routes/       # API route handlers
│   │   ├── middleware/   # Express middleware
│   │   ├── services/     # Business logic
│   │   ├── models/       # Database models
│   │   └── utils/        # Utility functions
│   ├── prisma/           # Database schema and migrations
│   └── package.json
├── shared/                # Shared TypeScript types
│   ├── src/types/        # Common type definitions
│   └── package.json
├── docker-compose.yml     # Docker services configuration
├── .env.example          # Environment variables template
└── README.md             # Project documentation
```

## Development Workflow

### Working with the Database

1. **Create a new migration:**
   ```bash
   cd backend
   npx prisma migrate dev --name your-migration-name
   ```

2. **Generate Prisma client:**
   ```bash
   npm run db:generate
   ```

3. **Reset database:**
   ```bash
   npm run db:reset
   ```

4. **View database:**
   ```bash
   npm run db:studio
   ```

### Frontend Development

1. **Start frontend in development mode:**
   ```bash
   npm run dev:frontend
   ```

2. **Build frontend:**
   ```bash
   npm run build:frontend
   ```

3. **Run tests:**
   ```bash
   npm run test:frontend
   ```

### Backend Development

1. **Start backend in development mode:**
   ```bash
   npm run dev:backend
   ```

2. **Build backend:**
   ```bash
   npm run build:backend
   ```

3. **Run tests:**
   ```bash
   npm run test:backend
   ```

## Environment Variables

Key environment variables you need to configure:

### Database
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string

### Authentication
- `JWT_SECRET`: Secret key for JWT tokens
- `BCRYPT_ROUNDS`: Number of bcrypt rounds (default: 12)

### Payment Processing
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret

### Email
- `SENDGRID_API_KEY`: SendGrid API key for email sending
- `FROM_EMAIL`: Default sender email address

### File Storage
- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `AWS_S3_BUCKET`: S3 bucket name

## API Documentation

Once the backend is running, you can access:

- **API Overview**: http://localhost:3001/api
- **Health Check**: http://localhost:3001/health

### Key API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

#### Communities
- `GET /api/communities` - List communities
- `GET /api/communities/:id` - Get community details
- `GET /api/communities/search` - Search communities

#### Donations
- `POST /api/donations` - Create donation
- `GET /api/donations` - List user donations
- `GET /api/donations/stats` - Donation statistics

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run frontend tests
npm run test:frontend

# Run backend tests
npm run test:backend

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- **Frontend Tests**: Located in `frontend/src/__tests__/`
- **Backend Tests**: Located in `backend/src/__tests__/`
- **Integration Tests**: Located in `backend/tests/integration/`

## Deployment

### Production Build

```bash
# Build all packages
npm run build

# Build frontend only
npm run build:frontend

# Build backend only
npm run build:backend
```

### Docker Production

```bash
# Build and start production services
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Code Quality

### Linting

```bash
# Lint all code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Formatting

```bash
# Format all code
npm run format
```

### Type Checking

```bash
# Check types
npm run type-check
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Verify database exists

2. **Redis Connection Issues**
   - Ensure Redis is running
   - Check REDIS_URL in .env file

3. **Port Already in Use**
   - Change PORT in .env file
   - Kill existing processes: `lsof -ti:3001 | xargs kill`

4. **Module Not Found Errors**
   - Run `npm install` in project root
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Docker Issues

1. **Container Build Failures**
   ```bash
   # Rebuild containers
   docker-compose build --no-cache
   ```

2. **Database Initialization Issues**
   ```bash
   # Reset database volume
   docker-compose down -v
   docker-compose up -d
   ```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

## Support

- **Documentation**: Check the README.md file
- **Issues**: Create an issue on GitHub
- **Email**: support@catholicconventregistry.org

## License

This project is licensed under the MIT License. See the LICENSE file for details. 