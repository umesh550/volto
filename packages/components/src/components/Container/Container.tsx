import React, { ReactNode } from 'react';
import { getElementType } from '../helpers';
import cx from 'clsx';

type ContainerProps = {
  /** Primary content. */
  children: ReactNode;
  /** An element type to render as (string or function). */
  as: ReactNode;
  /** Additional classes. */
  className: string;
  /** Layout size */
  layout: boolean;
  /** Narrow size. */
  narrow: boolean;
};

export const Container = (props: ContainerProps) => {
  const { children, className, layout, narrow, ...rest } = props;
  const classes = cx('a', 'container', className, { layout, narrow });

  const Component = getElementType(Container, props);
  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
