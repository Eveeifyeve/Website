import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const navbar = () => (
<div className='bg-blue-500 p-4'>
<NavigationMenu.Root orientation="horizontal">
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item 1</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item one content</NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
</div>
);

export default navbar;