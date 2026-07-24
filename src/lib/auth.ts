import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// Request Workspace scopes
provider.addScope('https://www.googleapis.com/auth/calendar.events');
provider.addScope('https://www.googleapis.com/auth/gmail.send');

let isSigningIn = false;
let cachedAccessToken: string | null = null;

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to get access token from Firebase Auth');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

/**
 * Safely converts a UTF-8 string to base64url format for Gmail API
 */
function stringToBase64Url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  const len = bytes.byteLength;
  const chunkSize = 8192;
  for (let i = 0; i < len; i += chunkSize) {
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunkSize)));
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Creates a base64url encoded MIME email string
 */
function createMimeMessage(to: string, subject: string, bodyHtml: string, attachment?: { filename: string, content: string, mimeType: string }): string {
  const boundary = `boundary_${Date.now().toString(16)}`;
  let messageParts: string[] = [];

  if (attachment) {
    const pureBase64 = attachment.content.replace(/^data:.*?;base64,/, '');

    messageParts = [
      `To: ${to}`,
      `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset=utf-8`,
      ``,
      bodyHtml,
      ``,
      `--${boundary}`,
      `Content-Type: ${attachment.mimeType}; name="${attachment.filename}"`,
      `Content-Disposition: attachment; filename="${attachment.filename}"`,
      `Content-Transfer-Encoding: base64`,
      ``,
      pureBase64,
      ``,
      `--${boundary}--`
    ];
  } else {
    messageParts = [
      `To: ${to}`,
      `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
      `Content-Type: text/html; charset=utf-8`,
      `MIME-Version: 1.0`,
      ``,
      bodyHtml
    ];
  }

  const message = messageParts.join('\r\n');
  return stringToBase64Url(message);
}

/**
 * Sends an email via Gmail API using the current user's Google OAuth token
 */
export const sendEmailViaGmail = async (
  to: string,
  subject: string,
  bodyHtml: string,
  attachment?: { filename: string, content: string, mimeType: string },
  existingToken?: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    let token = existingToken || cachedAccessToken;
    if (!token) {
      // Prompt user to sign in with Google
      const authResult = await googleSignIn();
      if (!authResult || !authResult.accessToken) {
        return { success: false, error: 'Google authentication required to send email.' };
      }
      token = authResult.accessToken;
    }

    const rawMessage = createMimeMessage(to, subject, bodyHtml, attachment);

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        raw: rawMessage
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      const msg = errJson.error?.message || `Gmail API returned HTTP ${response.status}`;
      return { success: false, error: msg };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Failed to send email via Gmail:', err);
    return { success: false, error: err.message || 'Failed to send email' };
  }
};

