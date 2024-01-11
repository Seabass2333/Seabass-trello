// 'use client'

import { OrganizationList, UserButton } from '@clerk/nextjs'
// import

const CreateOrganizationPage = () => {
  // const { userId } = auth()
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl='/organization/:id'
      afterCreateOrganizationUrl='/organization/:id'
    />
    // <div>
    //   <UserButton afterSignOutUrl='/'></UserButton>
    // </div>
  )
}

export default CreateOrganizationPage
