# Security Configuration

This document explains the security measures implemented in this project, including Helmet.js and CORS configurations, with justification and sources.

---

## Helmet.js Configuration

### Configuration Applied

typescript
// Example placeholder for Helmet configuration
import helmet from 'helmet';

app.use(
  helmet({
    contentSecurityPolicy: false,
    hsts: { maxAge: 31536000, includeSubDomains: true },
    frameguard: { action: 'deny' },
    // add your other options here
  })
);

## Helmet.js Configuration

### Configuration Applied

-typescript
import helmet from 'helmet';

app.use(
  helmet({
    contentSecurityPolicy: false, // API only returns JSON, no HTML
    hsts: { maxAge: 31536000, includeSubDomains: true },
    frameguard: { action: 'deny' },
    referrerPolicy: { policy: 'no-referrer' },
    noSniff: true,
  })
);

## API Documentation

Access the live API documentation here: [Swagger Docs](https://kkuldeepsingh-pixel.github.io/Singh_Kuldeep_Assignment_3_Backend/)