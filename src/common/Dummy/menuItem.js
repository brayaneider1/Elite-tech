
export const menuItems = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { to: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
 
  {
    title: 'Forms',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Inputs',
        link: { to: '/forms/inputs' },
      },
      {
        title: 'Layout',
        link: { to: '/forms/form-layout' },
      },
      {
        title: 'Buttons',
        link: { to: '/forms/buttons' },
      },
      {
        title: 'Select',
        link: { to: '/forms/select' },
      },
    ],
  },
  {
    title: 'UI Features',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Grid',
        link: { to: '/ui-features/grid' },
      },
      {
        title: 'Animated Searches',
        link: { to: '/ui-features/search' },
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { to: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { to: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { to: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Editors',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'TinyMCE',
        link: { to: '/editors/tinymce' },
      },
      {
        title: 'CKEditor',
        link: { to: '/editors/ckeditor' },
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { to: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { to: '/auth/login' },
      },
      {
        title: 'Register',
        link: { to: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { to: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { to: '/auth/reset-password' },
      },
    ],
  },
];

