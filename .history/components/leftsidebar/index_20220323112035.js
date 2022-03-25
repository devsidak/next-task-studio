import Link from 'next/link'
import React from 'react'

function Index() {
  return (
    <div>
        <div>
            <h3>Task Studio 🔥 </h3>
        </div>
        <div>
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
    </div>
  )
}

export default Index