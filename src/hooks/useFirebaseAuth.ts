import { useState, useEffect } from 'react'
import {firebaseAuth} from '@utils/firebase';
import {onAuthStateChanged, signOut, getRedirectResult, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {bindActionCreators} from 'redux';
import * as actionCreators from '@actions/actionCreators'
import { useDispatch } from 'react-redux';
import { AppDispatch} from '@redux/store';
import { useHistory } from 'react-router-dom';
import {apiClient} from '../utils/apiClient'

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch: AppDispatch = useDispatch()
const AC = bindActionCreators(actionCreators, dispatch);
const { setUser } = AC
const history=useHistory()


  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    getRedirectResult(firebaseAuth).then(async function (r) {
      if (!authUser) {
        // User not logged in, start login.
        console.log('trying to sign in with popup')
        signInWithPopup(firebaseAuth, provider).then(()=>{setLoading(false)})
      } else {
      }
    }).catch(function (error) {
      // Handle Errors here.
      // ...
    });
  }

    const signOutUser = () =>
      signOut(firebaseAuth).then(clear);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth,async (user) => {
        if (user) {

          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            const name = user.displayName || 'MediVault'
            setUser(name, uid, 'jwt')
            const res = await apiClient.post('/patients', { name, uid })
            console.log(res)
            await setAuthUser(user as any);
            history.push('/')
          setLoading(false);
          // ...
        } else {
          // User is signed out
          setAuthUser(null)
          history.push('/login')
          setLoading(false)
        }
      })
      return () => unsubscribe();
    }, [history, setUser]);

    return {
      authUser,
      loading,
      signOutUser,
      signInWithGoogle
    };

}