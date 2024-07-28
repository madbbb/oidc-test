import { Provider } from 'oidc-provider';

const PORT = process.env.PORT || 3000;

const clients = [
  {
    client_id: 'test-client',
    client_secret: 'test-secret',
    grant_types: ['authorization_code'],
    redirect_uris: ['http://localhost/auth/nhs-callback'],
  },
  // Add more clients if needed
];

const oidc = new Provider(`http://localhost:${PORT}`, {
  clients,
  formats: {
    AccessToken: 'jwt', // Optional, for different token formats
  },
  features: {
    introspection: { enabled: true }, // Enable introspection if needed
    revocation: { enabled: true },    // Enable revocation if needed
  },
});

oidc.listen(PORT, () => {
  console.log(`OIDC provider listening on port ${PORT}`);
});