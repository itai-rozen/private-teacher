import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB9YezeGANZ-kIgoPIMHImddQJbqXmrn8g",
  authDomain: "private-teacher-f6eaa.firebaseapp.com",
  projectId: "private-teacher-f6eaa",
  storageBucket: "private-teacher-f6eaa.appspot.com",
  messagingSenderId: "806552303029",
  appId: "1:806552303029:web:d944a997537ec3c695d5fc"
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
      'oria.feue@gmail.com',
      password
    )
    return { success: true }
  }catch(err){
    return {error: err}
  }
}

export { addStudent, getStudents, deleteStudent, loginUser }

