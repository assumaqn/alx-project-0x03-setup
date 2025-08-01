// For Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For Layout component
export interface LayoutProps {
  children: React.ReactNode;
}

// For Home Page (imperative routing)
export interface PageRouteProps {
  pageRoute: string;
}
