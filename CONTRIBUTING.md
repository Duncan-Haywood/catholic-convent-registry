# Contributing to Catholic Convent Donation Registry

Thank you for your interest in contributing to the Catholic Convent Donation Registry! This project aims to connect lay Catholics with consecrated religious communities worldwide, and we welcome contributions that align with this mission.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please be respectful, inclusive, and considerate in all interactions.

### Our Standards

- Be respectful of different viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment following the README instructions
4. Create a new branch for your feature or bugfix
5. Make your changes
6. Test your changes thoroughly
7. Submit a pull request

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment details (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- A clear and descriptive title
- A detailed description of the proposed feature
- Any possible implementation approaches
- Why this enhancement would be useful

### Code Contributions

1. **Find an Issue**: Look for issues labeled `good first issue` or `help wanted`
2. **Claim an Issue**: Comment on the issue to let others know you're working on it
3. **Ask Questions**: If anything is unclear, ask in the issue comments
4. **Submit a PR**: Once ready, submit a pull request referencing the issue

## Development Process

### Setting Up Your Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/catholic-convent-registry.git
cd catholic-convent-registry

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/catholic-convent-registry.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your local configuration

# Start development servers
npm run dev
```

### Running Tests

Always ensure tests pass before submitting a PR:

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:backend
npm run test:frontend

# Run tests in watch mode
npm run test:watch
```

### Code Quality Checks

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format
```

## Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### React/Frontend

- Use functional components with hooks
- Follow React best practices
- Keep components small and reusable
- Use proper prop types/interfaces
- Implement proper error boundaries

### Backend/API

- Follow RESTful conventions
- Implement proper error handling
- Add appropriate logging
- Write comprehensive API documentation
- Ensure proper input validation

### Database

- Write clear, optimized queries
- Always use migrations for schema changes
- Document schema changes
- Consider performance implications

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(auth): add two-factor authentication

Implement TOTP-based 2FA for enhanced security.
Users can now enable 2FA in their account settings.

Closes #123
```

```
fix(donations): correct currency conversion bug

The currency conversion was using outdated exchange rates.
Now fetches real-time rates from the configured provider.

Fixes #456
```

## Pull Request Process

1. **Update Documentation**: Update the README.md with details of changes if needed
2. **Add Tests**: Include tests for new functionality
3. **Pass All Checks**: Ensure all tests and linting pass
4. **Update CHANGELOG**: Add your changes to the CHANGELOG.md
5. **Request Review**: Request review from maintainers
6. **Address Feedback**: Respond to review comments promptly
7. **Squash Commits**: Squash commits if requested

### PR Title Format

Use the same format as commit messages:
- `feat: add donation analytics dashboard`
- `fix: resolve payment processing timeout`
- `docs: update API documentation`

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Related Issue
Fixes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] My code follows the project style guidelines
- [ ] I have performed a self-review
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally
- [ ] I have updated the documentation
```

## Reporting Issues

### Security Issues

For security vulnerabilities, please do NOT create a public issue. Instead, email the maintainers directly at security@[project-domain].

### Bug Reports

When reporting bugs, include:

1. **Environment**: OS, Node version, browser (if frontend)
2. **Steps to Reproduce**: Clear, numbered steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots/Logs**: If applicable
6. **Possible Solution**: If you have ideas

### Feature Requests

For feature requests, provide:

1. **Use Case**: Why is this needed?
2. **Proposed Solution**: How might it work?
3. **Alternatives**: Other approaches considered
4. **Additional Context**: Mockups, examples, etc.

## Questions?

If you have questions about contributing, feel free to:

1. Open an issue with the `question` label
2. Start a discussion in the GitHub Discussions tab
3. Reach out to the maintainers

Thank you for contributing to the Catholic Convent Donation Registry! Your efforts help support religious communities worldwide. 🙏