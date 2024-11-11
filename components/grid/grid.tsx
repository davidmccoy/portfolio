import GridHeader from './grid-header';

type GridProps = {
  children: React.ReactNode;
  columnNames?: string[];
  columnSizes?: string;
  primaryColumnIndex?: number;
};

export const Grid = ({
  children,
  columnNames,
  columnSizes,
  primaryColumnIndex,
}: GridProps) => {
  return (
    <div className="w-full">
      <GridHeader
        columnNames={columnNames}
        columnSizes={columnSizes}
        primaryColumnIndex={primaryColumnIndex}
      />
      <div className="divide-y">{children}</div>
    </div>
  );
};

export default Grid;
