import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export default function BgShadow(props: Props) {
  return (
    <svg
      width="280"
      height="390"
      viewBox="0 0 280 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_9149_5496)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0H250V330H30V0Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9149_5496"
          x="0"
          y="0"
          width="280"
          height="390"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="30" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9149_5496"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9149_5496"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
