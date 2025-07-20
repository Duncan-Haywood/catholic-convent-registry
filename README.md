# Catholic Convent Donation Registry

A modern platform connecting lay Catholics with consecrated religious communities worldwide, making charitable giving simple, transparent, and spiritually meaningful.

## Problem Statement

Supporting consecrated religious in developing countries faces significant challenges:
- **Invisible ministries**: Many convents labor quietly in teaching, nursing, and caring for the poor, yet remain unknown to potential benefactors
- **High friction giving**: International wire transfers, confusing currency exchanges, and one-off appeals discourage sustained generosity
- **Planning uncertainty**: Communities struggle to budget for essential needs due to unpredictable giving patterns
- **Distraction from vocation**: Religious spend precious time on fundraising instead of prayer, teaching, and service

## Solution

A comprehensive Catholic Convent Donation Registry that transforms how lay faithful encounter, support, and celebrate religious communities through:

### Core Features
- **Searchable Directory**: Discover approved convents by charism, apostolate, and need worldwide
- **One-Click Giving**: Secure, low-fee donations in any major currency with single or recurring options
- **Transparent Wish Lists**: Communities publish specific priorities (medical supplies, scholarships, infrastructure)
- **Digital Stewardship**: Automated thank-you notes, photos, and financial summaries
- **Spiritual Integration**: Link gifts to Mass intentions, feast-day collections, and community milestones

### Key Benefits
- **Scalability**: Equal visibility for small village monasteries and large teaching orders
- **Sustainable Funding**: Recurring gifts enable multi-year budget planning
- **Mission Focus**: More time for prayer and service, less for fundraising logistics
- **Engaged Laity**: Donors become virtual "oblates" with deep community partnerships

## Technology Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form management
- **Radix UI** for accessible components

### Backend
- **Node.js** with Express
- **Prisma ORM** with PostgreSQL
- **JWT** authentication
- **Stripe** for payment processing
- **SendGrid** for email notifications

### Infrastructure
- **Vercel** for frontend deployment
- **Railway** for backend hosting
- **AWS S3** for file storage
- **Redis** for caching

## Project Structure

```
catholic-convent-registry/
├── frontend/          # Next.js application
├── backend/           # Express API server
├── shared/            # Shared types and utilities
├── database/          # Database schema and migrations
├── docs/              # Documentation
└── scripts/           # Deployment and utility scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL 15 or higher
- Redis 7 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/catholic-convent-registry.git
   cd catholic-convent-registry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**
   ```bash
   # Start PostgreSQL and Redis services
   docker-compose up -d postgres redis

   # Run database migrations
   cd backend
   npm run db:migrate
   npm run db:seed  # Optional: seed with sample data
   cd ..
   ```

5. **Start development servers**
   ```bash
   # Start all services
   npm run dev

   # Or start services individually:
   # Terminal 1 - Backend
   npm run dev:backend

   # Terminal 2 - Frontend
   npm run dev:frontend
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Documentation: http://localhost:3001/api-docs

### Using Docker

For a complete development environment with all dependencies:

```bash
# Start all services
docker-compose up

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Configuration

Create a `.env` file based on `.env.example` with the following required variables:

- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `STRIPE_SECRET_KEY`: Stripe API secret key
- `SENDGRID_API_KEY`: SendGrid API key for emails

See `.env.example` for a complete list of configuration options.

## Core Entities

### Religious Communities
- Community profile and charism
- Leadership and contact information
- Apostolate and ministries
- Current needs and wish lists
- Financial transparency reports

### Donors
- Personal profiles and preferences
- Donation history and preferences
- Spiritual commitments (prayer, Mass intentions)
- Community relationships and correspondence

### Donations
- Single and recurring contributions
- Multi-currency support
- Transparent fund allocation
- Impact reporting and updates

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - User profile

### Communities
- `GET /api/communities` - Search communities
- `GET /api/communities/:id` - Community details
- `POST /api/communities` - Create community (admin)
- `PUT /api/communities/:id` - Update community

### Donations
- `POST /api/donations` - Create donation
- `GET /api/donations` - User donation history
- `GET /api/donations/:id` - Donation details
- `POST /api/donations/:id/recurring` - Set up recurring donation

### Payments
- `POST /api/payments/intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/methods` - User payment methods

## Features Roadmap

### Phase 1 (MVP)
- [ ] User authentication and profiles
- [ ] Community directory and search
- [ ] Basic donation processing
- [ ] Payment integration (Stripe)
- [ ] Email notifications

### Phase 2 (Enhanced)
- [ ] Recurring donation management
- [ ] Multi-currency support
- [ ] Community wish lists
- [ ] Impact reporting dashboard
- [ ] Mobile responsive design

### Phase 3 (Advanced)
- [ ] Mass intention integration
- [ ] Community correspondence system
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Mobile app development

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
# Run all tests
npm test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run tests in watch mode
npm run test:watch
```

## Security Considerations

- PCI DSS compliance for payment processing
- GDPR compliance for EU users
- Secure API endpoints with rate limiting
- Data encryption at rest and in transit
- Regular security audits and penetration testing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in this repository.

## Mission Statement

*"By lowering barriers to discoverability and donation, this platform answers the Church's call to charity (Catechism 2447) and supports those who 'follow Christ more strictly in poverty, chastity and obedience' (Catechism 915). It builds a global network of solidarity—uniting lay supporters and religious in a shared mission of prayer, mercy and evangelization."* 