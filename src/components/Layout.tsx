import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { currentTheme } = useTheme();

  return (
    <div 
      className="min-h-screen transition-colors duration-200"
      style={{ backgroundColor: currentTheme.bg.primary }}
    >
      {children}
    </div>
  );
}; 