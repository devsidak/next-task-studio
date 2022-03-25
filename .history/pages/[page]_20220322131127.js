import { useRouter } from 'next/router';
import React from 'react'

function Page() {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div> - {page}</div>
  )
}

export default Page