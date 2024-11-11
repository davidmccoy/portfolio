import { Role } from './data';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

type RoleDetailsProps = {
  isVisible: boolean;
  role: Role;
  columnSizes: string;
  toggleExpand: (id: string) => void;
};

const RoleDetails = ({
  isVisible,
  role,
  columnSizes,
  toggleExpand,
}: RoleDetailsProps) => {
  if (role.description) {
    return (
      <motion.div
        className={`bg-gray-50 overflow-hidden ${isVisible ? 'border-t' : ''}`}
        initial={{ height: 0 }}
        animate={{
          height: isVisible ? 'auto' : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{ borderTopWidth: isVisible ? '1px' : 0 }}
      >
        <div className={`grid grid-cols-1 ${columnSizes} gap-4`}>
          <div className="hidden sm:block" />
          <div className={`py-2 px-4 text-sm ${columnSizes}`}>
            <div dangerouslySetInnerHTML={{ __html: role.description }} />
          </div>
        </div>
        <div className={`grid grid-cols-1 ${columnSizes} gap-4`}>
          <div></div>
          <div>
            <button
              onClick={() => toggleExpand(role.id)}
              className="flex items-center text-blue-600 hover:underline p-4"
            >
              Collapse <ChevronUp className="w-4 h-4 ml-2 flex-shrink-0" />
            </button>
          </div>
          <div></div>
        </div>
      </motion.div>
    );
  }
  return null;
};

export default RoleDetails;
