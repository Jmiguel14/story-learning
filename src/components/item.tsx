import React, {forwardRef} from 'react';

type ItemProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
};

export const Item = forwardRef<HTMLDivElement, ItemProps>(({id, ...props}, ref) => {
  return (
    <div {...props} ref={ref}>{id}</div>
  )
});