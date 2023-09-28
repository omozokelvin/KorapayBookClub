import { CSSProperties } from 'react';

type Props = {
  fill?: CSSProperties['color'];
};

export default function HeartIcon(props: Props) {
  const { fill = 'black' } = props;
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M4.99811 9L9.13183 5.04131C9.68733 4.48902 10 3.73577 10 2.94978C10 2.16379 9.68733 1.41054 9.13183 0.85825C7.98818 -0.271677 6.16141 -0.287922 4.99811 0.82149C3.83279 -0.285828 2.00601 -0.266222 0.864401 0.865856C0.309892 1.41916 -0.00141469 2.17299 4.83342e-06 2.95897C0.00142436 3.74496 0.315452 4.49764 0.871956 5.04891L4.99811 9ZM1.57329 1.58205C1.98776 1.16659 2.5651 0.959575 3.14713 1.01773C3.72915 1.07588 4.25482 1.3931 4.58008 1.88247L4.99811 2.51626L5.41614 1.88247C5.48987 1.77408 5.57423 1.67343 5.66797 1.58205C6.43291 0.826396 7.658 0.826396 8.42294 1.58205C8.78603 1.94257 8.99106 2.43415 8.99248 2.94756C8.9939 3.46097 8.79159 3.95369 8.43049 4.31624L4.99811 7.60058L1.57329 4.32005C1.21003 3.95836 1.00562 3.46539 1.00562 2.95105C1.00562 2.4367 1.21003 1.94373 1.57329 1.58205Z"
        fill={fill}
      />
    </svg>
  );
}