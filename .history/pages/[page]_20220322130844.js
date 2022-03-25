import React from 'react'

function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>Page- {name}</div>
  )
}

export default Page