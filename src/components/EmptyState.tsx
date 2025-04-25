
import { Search } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ 
  title = "No NFTs found", 
  message = "We couldn't find any NFTs matching your search criteria. Try adjusting your filters or search terms." 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-gray-800/50 p-4 mb-4">
        <Search size={32} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 max-w-md">
        {message}
      </p>
    </div>
  );
}
