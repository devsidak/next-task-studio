import React from 'react'
import {useRouter} from 'next/router'

function Blog() {
  const router = useRouter()
  const {blogId} = router.query
  return (
    <div>
        <h1>
        Blog Details  : {}
        </h1>
    </div>
  )
}

export default Blog