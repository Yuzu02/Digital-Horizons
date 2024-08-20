import { Like, LikeSchema } from "@/schemas/likes";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// ? Obtiene los likes de un post
export async function getLikesForPost(slug: string): Promise<Like[]> {
  const likesRef = collection(db, "likes");
  const q = query(likesRef, where("postSlug", "==", slug));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => LikeSchema.parse(doc.data()));
}

export async function addLikeToPost(
  slug: string,
  email: string,
  username: string,
): Promise<void> {
  const newLike: Like = {
    id: Math.random().toString(36).substring(2),
    postSlug: slug,
    createdAt: new Date().toISOString(),
    email,
    username,
  };

  const validatedNewLike = LikeSchema.parse(newLike);
  await addDoc(collection(db, "likes"), validatedNewLike);
}

// ? Elimina un like de un post
export async function removeLikeFromPost(
  slug: string,
  username: string,
  email: string,
): Promise<void> {
  const likesRef = collection(db, "likes");
  const q = query(
    likesRef,
    where("postSlug", "==", slug),
    where("username", "==", username),
    where("email", "==", email),
  );
  const querySnapshot = await getDocs(q);

  const batch = writeBatch(db);
  querySnapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
}

// ? Obtiene los likes de un usuario
export async function getLikesForUser(email: string): Promise<Like[]> {
  const likesRef = collection(db, "likes");
  const q = query(likesRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => LikeSchema.parse(doc.data()));
}
