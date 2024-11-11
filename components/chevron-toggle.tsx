import { ChevronDown, ChevronRight } from 'lucide-react';

type ChevronToggleParams = {
  expanded: boolean;
};

const ChevronToggle = ({ expanded }: ChevronToggleParams) => {
  if (expanded) {
    return <ChevronDown className="w-4 h-4 ml-2 flex-shrink-0" />;
  } else {
    return <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />;
  }
};

export default ChevronToggle;
