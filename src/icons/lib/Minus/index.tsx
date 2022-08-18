import { forwardRef } from 'react';

import { IconsProps } from '../../types/IconsProps';

export const Minus = forwardRef<SVGPathElement, IconsProps>(
  ({ color, size, weight }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 256 256'
      >
        <path
          d='M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z'
          fill={color}
          strokeWidth={weight}
          ref={ref}
          transform-origin='0px 0px'
        />
      </svg>
    );
  }
);
