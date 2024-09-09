// src/firestore.js
import { getFirestore, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth } from './firebase'; // Import the Firebase authentication instance

// Initialize Firestore
const db = getFirestore();

// Function to add a movie or TV show to "My List"
export const addToMyList = async (item) => {
  if (!auth.currentUser) {
    return alert('Please sign in first!');
  }

  try {
    await addDoc(collection(db, 'myList'), {
      userId: auth.currentUser.uid,
      ...item, // Spread the item object (e.g., movie or TV show details)
    });
    alert('Added to My List!');
  } catch (error) {
    console.error('Error adding to My List: ', error);
    alert('Error adding to My List.');
  }
};

// Function to remove a movie or TV show from "My List"
export const removeFromMyList = async (itemId) => {
  if (!auth.currentUser) {
    return alert('Please sign in first!');
  }

  try {
    const docRef = doc(db, 'myList', itemId);
    await deleteDoc(docRef);
    alert('Removed from My List!');
  } catch (error) {
    console.error('Error removing from My List: ', error);
    alert('Error removing from My List.');
  }
};

