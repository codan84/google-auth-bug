import React, { useState, useEffect } from 'react'
import { GoogleSigninButton,
  GoogleSignin,
  type User
} from '@react-native-google-signin/google-signin'

const tryGetCurrentUser = async (): Promise<User | null> => {
    const { data } = await GoogleSignin.signInSilently();
    return data
}

const signin = async (): Promise<User | null> => {
  try {
    await GoogleSignin.hasPlayServices();
    const { type, data } = await GoogleSignin.signIn();
    if (type === 'success') {
      return data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const LoginButtonGoogle = () => {
  const [ inProgress, setInProgress ] = useState(false)

  useEffect(() => {
    const init = async () => {
      setInProgress(true)
      try {
        GoogleSignin.configure({offlineAccess: false})
        await GoogleSignin.hasPlayServices()

        const hasPreviousSignin = GoogleSignin.hasPreviousSignIn()
        console.log (`>>> (INIT) hasPreviousSignin=${hasPreviousSignin}`)

        const user = await tryGetCurrentUser()
        console.log(`>>> (INIT) Silent signin ${user === null ? 'failed' : 'succeeded'}`)
        if (user !== null) {
          console.log(user)
        }
        setInProgress(false)
      } catch (error) {
        console.log(error)
      }
    }
    init()
  }, [])

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      onPress={async () => {
        setInProgress(true)

        const hasPreviousSignin = GoogleSignin.hasPreviousSignIn()
        console.log (`>>> hasPreviousSignin=${hasPreviousSignin}`)

        const user = await signin()
        console.log(`>>> Signin ${user === null ? 'failed' : 'succeeded'}`)
        if (user !== null) {
          console.log(user)
        }

        setInProgress(false)
      }}
      disabled={inProgress}
    />
  )
}
