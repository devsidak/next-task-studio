import React from 'react'

function Page() {
  const router = useRouter();
  const {  } = router.query;
  return (
    <div>Page- {name}</div>
  )
}

export default Page