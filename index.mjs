import { Provider } from 'oidc-provider';

const clients = [
  {
    client_id: 'test-client',
    client_secret: 'test-secret',
    grant_types: ['authorization_code'],
    redirect_uris: ['http://localhost:3000/callback'],
  },
];

const oidc = new Provider('http://localhost:3000', { clients });

oidc.listen(3000, () => {
  console.log('OIDC provider listening on port 3000');
});