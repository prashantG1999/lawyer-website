import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase.ts';
import { blogPosts as defaultBlogPosts, type BlogPost } from '../data/blogData.ts';

const POSTS_COLLECTION = 'posts';

/**
 * Fetches all blog posts from Firestore.
 * Falls back gracefully to default static posts if Firestore is unconfigured or empty.
 */
export const fetchAllPosts = async (): Promise<BlogPost[]> => {
  if (!isFirebaseConfigured() || !db) {
    return defaultBlogPosts;
  }

  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const snapshot = await getDocs(postsRef);
    
    if (snapshot.empty) {
      return defaultBlogPosts;
    }

    const posts: BlogPost[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      posts.push({
        id: docSnap.id,
        title: data.title || '',
        slug: data.slug || docSnap.id,
        date: data.date || '',
        author: data.author || 'Adv. Nishant Giri',
        category: data.category || 'Civil Law',
        readTime: data.readTime || '5 min read',
        summary: data.summary || '',
        content: data.content || '',
        keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured)
      });
    });

    return posts;
  } catch (error) {
    console.warn('Error fetching posts from Firestore, falling back to static posts:', error);
    return defaultBlogPosts;
  }
};

/**
 * Fetches a single post by slug or ID.
 */
export const fetchPostBySlug = async (slugOrId: string): Promise<BlogPost | null> => {
  if (!isFirebaseConfigured() || !db) {
    return defaultBlogPosts.find(p => p.slug === slugOrId || p.id === slugOrId) || null;
  }

  try {
    // 1. Try finding by document ID
    const docRef = doc(db, POSTS_COLLECTION, slugOrId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title || '',
        slug: data.slug || docSnap.id,
        date: data.date || '',
        author: data.author || 'Adv. Nishant Giri',
        category: data.category || 'Civil Law',
        readTime: data.readTime || '5 min read',
        summary: data.summary || '',
        content: data.content || '',
        keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured)
      };
    }

    // 2. Query by slug field
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(postsRef, where('slug', '==', slugOrId));
    const querySnap = await getDocs(q);

    if (!querySnap.empty) {
      const docItem = querySnap.docs[0];
      const data = docItem.data();
      return {
        id: docItem.id,
        title: data.title || '',
        slug: data.slug || docItem.id,
        date: data.date || '',
        author: data.author || 'Adv. Nishant Giri',
        category: data.category || 'Civil Law',
        readTime: data.readTime || '5 min read',
        summary: data.summary || '',
        content: data.content || '',
        keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured)
      };
    }

    // 3. Fallback to default posts
    return defaultBlogPosts.find(p => p.slug === slugOrId || p.id === slugOrId) || null;
  } catch (error) {
    console.warn('Error fetching post by slug from Firestore:', error);
    return defaultBlogPosts.find(p => p.slug === slugOrId || p.id === slugOrId) || null;
  }
};

/**
 * Creates a new blog post in Firestore.
 */
export const createBlogPost = async (post: Omit<BlogPost, 'id'> & { id?: string }): Promise<string> => {
  if (!db) {
    throw new Error('Firebase is not configured. Please set up your .env file with Firebase keys.');
  }

  const postId = post.id || post.slug || generateSlug(post.title);
  const docRef = doc(db, POSTS_COLLECTION, postId);

  await setDoc(docRef, {
    ...post,
    id: postId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  return postId;
};

/**
 * Updates an existing blog post in Firestore.
 */
export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<void> => {
  if (!db) {
    throw new Error('Firebase is not configured. Please set up your .env file with Firebase keys.');
  }

  const docRef = doc(db, POSTS_COLLECTION, id);
  await updateDoc(docRef, {
    ...post,
    updatedAt: serverTimestamp()
  });
};

/**
 * Deletes a blog post from Firestore.
 */
export const deleteBlogPost = async (id: string): Promise<void> => {
  if (!db) {
    throw new Error('Firebase is not configured. Please set up your .env file with Firebase keys.');
  }

  const docRef = doc(db, POSTS_COLLECTION, id);
  await deleteDoc(docRef);
};

/**
 * Seeds initial static posts from blogData.ts into Firestore with 1-click.
 */
export const seedInitialPostsToFirestore = async (): Promise<number> => {
  if (!db) {
    throw new Error('Firebase is not configured. Please set up your .env file with Firebase keys.');
  }

  let count = 0;
  for (const post of defaultBlogPosts) {
    const docRef = doc(db, POSTS_COLLECTION, post.id);
    await setDoc(docRef, {
      ...post,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }, { merge: true });
    count++;
  }

  return count;
};

/**
 * Helper to generate URL-friendly slug from title.
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
