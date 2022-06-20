import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()
const collectionRef = collection(db, 'students')
const getStudents = async (): Promise<any> => {
  try {
    const studentDocs = await getDocs(collectionRef)
    const studentObjs = studentDocs.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
    return studentObjs
  } catch (err) {
    return { error: err }
  }
}
const addStudent = async (studentObj: { fullName: String, phone: String, notes: String }): Promise<any> => {
  try {
    await addDoc(collectionRef, studentObj)
  } catch (err) {
    return { error: err }
  }
}

const deleteStudent = async (id:string): Promise<any> => {
  try {
    await deleteDoc(doc(db, 'students', id))
  }catch(err){
    return {error: err}
  }
}

const loginUser = async (password: string):Promise<any> => {
  try {
    const user = await signInWithEmailAndPassword(auth, 
      `${process.env.REACT_APP_ADMIN_EMAIL}`,
      password
    )
    return { success: true }
  }catch(err){
    return {error: err}
  }
}

const logOut = async ():Promise<any> => {
  try {
    await signOut(auth)
  } catch(err){
    console.log((err as Error).message)
  }
}

export { addStudent, getStudents, deleteStudent, loginUser, logOut }

