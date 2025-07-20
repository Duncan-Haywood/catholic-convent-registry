# Security Policy

## Reporting Security Vulnerabilities

We take the security of the Catholic Convent Donation Registry seriously. If you believe you have found a security vulnerability, please report it to us as described below.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to the project maintainers. You can find maintainer contact information in the repository's CONTRIBUTING.md file.

Please include the following information:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Response Timeline

- We will acknowledge receipt of your vulnerability report within 48 hours
- We will provide a more detailed response within 7 days
- We will work on fixing the vulnerability and will keep you informed of our progress
- Once the vulnerability is fixed, we will publicly disclose it (crediting you, unless you prefer to remain anonymous)

## Supported Versions

We will address security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| < 1.0   | :x:                |

## Security Best Practices

When contributing to this project, please follow these security best practices:

1. **Never commit sensitive data** such as passwords, API keys, or tokens
2. **Use environment variables** for configuration
3. **Validate all input** from users and external systems
4. **Use parameterized queries** to prevent SQL injection
5. **Implement proper authentication and authorization** checks
6. **Keep dependencies up to date** and regularly check for vulnerabilities
7. **Follow the principle of least privilege** for all system components

## Security Features

This project implements several security measures:

- JWT-based authentication
- Rate limiting on API endpoints
- Input validation and sanitization
- Secure password hashing with bcrypt
- HTTPS enforcement in production
- Content Security Policy headers
- SQL injection prevention through Prisma ORM
- XSS protection through React's built-in escaping

## Dependencies

We regularly update our dependencies to patch known vulnerabilities. You can check for vulnerabilities by running:

```bash
npm audit
```

## Contact

For security concerns, please contact the maintainers directly rather than using public communication channels.