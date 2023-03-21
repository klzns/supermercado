const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// The Firebase Admin SDK is used here to verify the ID token.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function getIdToken(authorizationHeader = '') {
  const components = authorizationHeader.split(' ');
  return components.length > 1 ? components[1] : '';
}

export async function checkIfSignedIn(req: Request) {
  const idToken = getIdToken(req.headers.get('authorization') ?? '');
  // Verify the ID token using the Firebase Admin SDK.
  // User already logged in. Redirect to profile page.
  try {
    const decodedClaims = admin.auth().verifyIdToken(idToken)
    // User is authenticated, user claims can be retrieved from
    // decodedClaims.
    // In this sample code, authenticated users are always redirected to
    // the profile page.
  } catch(error) {
  }
}