import React from 'react'
import {useRouter} from 'next/router'

function blog() {
  const router = useRouter()

  return (
    <div>
        <h1>
        Blog Details  : {}
        </h1>
    </div>
  )
}

export default blog