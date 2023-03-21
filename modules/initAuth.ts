// ./initAuth.js
import { init } from 'next-firebase-auth'
import { firebaseConfig } from './firebaseConfig'

const databaseURL = `https://${firebaseConfig.projectId}.firebaseio.com`
const appName = 'supermercado'

export function initAuth() {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    // firebaseAuthEmulatorHost: 'localhost:9099',
    firebaseAdminInitConfig: {
      credential: {
        projectId: "supermercado-21223",
        clientEmail: "firebase-adminsdk-reru4@supermercado-21223.iam.gserviceaccount.com",
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY ?? '',
      },
      databaseURL,
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: firebaseConfig.apiKey, // required
      authDomain: firebaseConfig.authDomain,
      databaseURL,
      projectId: firebaseConfig.projectId,
    },
    cookies: {
      name: appName, // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'development' ? false : true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}
