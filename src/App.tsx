import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const navbar = () => (
  <div className="bg-blue-500 p-4">
    <NavigationMenu.Root orientation="horizontal" className="text-white flex">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:bg-blue-100 p-2 rounded">Item one</NavigationMenu.Trigger>
          <NavigationMenu.Content>Item one content</NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:bg-blue-700 p-2 rounded">Item two</NavigationMenu.Trigger>
          <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </div>
);

export default navbar;