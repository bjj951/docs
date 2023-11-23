import * as t from '../primitives'

export const contentCardDefault = {
  backgroundColor: 'white',
  mobileNavigationBreakpoint: 940,
  placeholder: '/placeholder.png',
  icon: '/card-icon.svg',
  navItemColor: t.gray['800'],
  navItemHoverColor: t.indigo[600],

  mobileMenuButtonColor: t.gray['800'],
  mobileLinkDividerColor: t.gray['300'],
}

export const contentCardDark: typeof contentCardDefault = {
  backgroundColor: t.black,
  mobileNavigationBreakpoint: 940,
  placeholder: '/placeholder.png',
  icon: '/card-icon.svg',
  navItemColor: 'white',
  navItemHoverColor: t.indigo[300],

  mobileLinkDividerColor: t.gray['700'],
  mobileMenuButtonColor: 'white',
}
