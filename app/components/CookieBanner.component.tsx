'use client'

import { getLocalStorage, setLocalStorage } from '@src/utilities'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookieBanner () {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue
    })

    setLocalStorage('cookie_consent', cookieConsent)
  }, [cookieConsent])

  return (
    <div
      className={`my-20 z-50 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-4 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow ${
                           cookieConsent != null ? 'hidden' : 'flex'
                         }`}
    >
      <div className='text-center'>
        <Link href='/info/cookies'>
          <p>
            Nosotros usamos{' '}
            <span className='font-bold text-sky-400'>cookies</span> en nuestra
            web.
          </p>
        </Link>
      </div>

      <div className='flex gap-2'>
        <button
          className='px-5 py-2 text-gray-300 border-gray-900 rounded-md'
          onClick={() => setCookieConsent(false)}
        >
          Denegar
        </button>
        <button
          className='px-5 py-2 text-white bg-gray-900 rounded-lg'
          onClick={() => setCookieConsent(true)}
        >
          Acepto Cookies
        </button>
      </div>
    </div>
  )
}
