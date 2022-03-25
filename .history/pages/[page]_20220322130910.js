import React from 'react'

function Page() {
  const router = useRouter();
  const name = "";
  console.log("router", router);
  return (
    <div>Page- {name}</div>
  )
}

export default Page