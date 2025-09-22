import { setGlobalOptions } from "firebase-functions/v2";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// Initialize Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Limit function instances
setGlobalOptions({ maxInstances: 10 });

/**
 * Cloud Function: addToWaitlist
 * Callable from the client using Firebase SDK
 */
export const addToWaitlist = onCall(async (request) => {
  const { name, email } = request.data;

  if (!name || !email) {
    throw new HttpsError("invalid-argument", "Missing required fields: name and email");
  }

  try {
    const docRef = await db.collection("waitlist").add({
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info(`✅ New waitlist entry: ${docRef.id}`);
    return { success: true, id: docRef.id };
  } catch (error) {
    logger.error("❌ Error adding to waitlist:", error);
    throw new Error("Failed to add user to waitlist");
  }
});
