const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'tabler:smart-home'
    },
    {
      sectionTitle: 'Student & Fees pay'
    },
    {
      title: 'Student',
      icon: 'tabler:mail',
      children: [
        {
          title: 'List',
          path: '/student'
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
