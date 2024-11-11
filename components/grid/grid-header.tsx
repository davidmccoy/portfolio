type GridHeaderProps = {
  columnNames?: string[];
  columnSizes?: string;
  primaryColumnIndex?: number;
};

const defaultColumnNames = ['Name', 'Last Modified', 'Size', 'Description'];

export const GridHeader = ({
  columnNames = defaultColumnNames,
  columnSizes = 'sm:grid-cols-[1fr_1fr_1fr_1fr]',
  primaryColumnIndex = 0,
}: GridHeaderProps) => {
  return (
    <div
      className={`grid grid-cols-1 ${columnSizes} gap-4 bg-gray-100 font-bold`}
    >
      {columnNames.map((columnName, index) => (
        <div
          key={`header-${index}`}
          className={`p-4 ${
            index !== primaryColumnIndex ? 'hidden sm:block' : ''
          }`}
        >
          {columnName}
        </div>
      ))}
    </div>
  );
};

export default GridHeader;
