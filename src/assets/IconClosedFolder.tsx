interface IconClosedFolderProps {
  width?: number;
  height?: number;
  color?: string;
}

const IconClosedFolder = ({width = 12, height = 12, color = 'white'}: IconClosedFolderProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_37_108)">
        <g clipPath="url(#clip1_37_108)">
          <path d="M8 7.25C8 7.388 7.888 7.5 7.75 7.5H4.25C4.112 7.5 4 7.388 4 7.25C4 7.112 4.112 7 4.25 7H7.75C7.888 7 8 7.112 8 7.25ZM12 3.75V9.25C12 10.4905 10.9905 11.5 9.75 11.5H2.25C1.0095 11.5 0 10.4905 0 9.25V2.75C0 1.5095 1.0095 0.5 2.25 0.5H3.764C3.957 0.5 4.15 0.5455 4.3225 0.632L5.9005 1.421C6.004 1.473 6.1195 1.5 6.2355 1.5H9.7495C10.99 1.5 12 2.5095 12 3.75ZM0.5 2.75V3.5H11.482C11.3605 2.653 10.63 2 9.75 2H6.236C6.043 2 5.85 1.9545 5.6775 1.868L4.0995 1.079C3.996 1.027 3.8805 1 3.7645 1H2.2505C1.2855 1 0.5005 1.785 0.5005 2.75H0.5ZM11.5 9.25V4H0.5V9.25C0.5 10.215 1.285 11 2.25 11H9.75C10.715 11 11.5 10.215 11.5 9.25Z" fill={color}/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_37_108">
          <rect width={width} height={height} fill={color}/>
        </clipPath>
        <clipPath id="clip1_37_108">
          <rect width={width} height={height} fill={color}/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconClosedFolder;