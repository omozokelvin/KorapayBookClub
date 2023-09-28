import { CSSProperties } from 'react';

type Props = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
};

export default function SearchIcon(props: Props) {
  const { width = '16px', height = '16px' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M7.28179 13.7779C8.8124 13.7779 10.2253 13.2598 11.3556 12.4121L14.1578 15.2143L15.5 13.8721L12.6978 11.0699C13.5455 9.93956 14.0636 8.52669 14.0636 6.99608C14.0636 3.25196 11.0259 0.214287 7.28179 0.214287C3.53768 0.214287 0.5 3.25196 0.5 6.99608C0.5 10.7402 3.53768 13.7779 7.28179 13.7779ZM7.28179 2.09812C9.9898 2.09812 12.1797 4.28807 12.1797 6.99608C12.1797 9.70408 9.9898 11.894 7.28179 11.894C4.57378 11.894 2.38383 9.70408 2.38383 6.99608C2.38383 4.28807 4.57378 2.09812 7.28179 2.09812Z"
        fill="black"
      />
    </svg>
  );
}
