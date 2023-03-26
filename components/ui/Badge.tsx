interface BadgeProps {
  children?: React.ReactNode;
}

export function Badge({ children }: BadgeProps): JSX.Element {
  return (
    <span className="bg-gray-200 text-gray-800 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}
