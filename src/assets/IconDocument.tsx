interface IconDocumentProps {
  width?: number;
  height?: number;
  color?: string;
}

const IconDocument = ({width = 10, height = 10, color = 'white'}: IconDocumentProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_37_131)">
        <path d="M7.0835 5.625C7.0835 5.74 6.99016 5.83333 6.87516 5.83333H3.12516C3.01016 5.83333 2.91683 5.74 2.91683 5.625C2.91683 5.51 3.01016 5.41667 3.12516 5.41667H6.87516C6.99016 5.41667 7.0835 5.51 7.0835 5.625ZM5.62516 7.08333H3.12516C3.01016 7.08333 2.91683 7.17667 2.91683 7.29167C2.91683 7.40667 3.01016 7.5 3.12516 7.5H5.62516C5.74016 7.5 5.8335 7.40667 5.8335 7.29167C5.8335 7.17667 5.74016 7.08333 5.62516 7.08333ZM9.16683 4.16042V8.125C9.16683 9.15875 8.32558 10 7.29183 10H2.7085C1.67475 10 0.833496 9.15875 0.833496 8.125V1.875C0.833496 0.84125 1.67475 0 2.7085 0H5.00641C5.72933 0 6.40975 0.281667 6.92183 0.793333L8.3735 2.24542C8.88516 2.75667 9.16683 3.43667 9.16683 4.16042ZM6.62683 1.0875C6.39725 0.858333 6.12683 0.687917 5.8335 0.574583V2.70792C5.8335 3.0525 6.11391 3.33292 6.4585 3.33292H8.59225C8.4785 3.03958 8.30808 2.76875 8.07891 2.53958L6.62683 1.0875ZM8.75016 4.16042C8.75016 4.02083 8.73433 3.88417 8.71016 3.75H6.4585C5.88391 3.75 5.41683 3.2825 5.41683 2.70833V0.456667C5.28225 0.4325 5.14558 0.416667 5.00641 0.416667H2.7085C1.90433 0.416667 1.25016 1.07083 1.25016 1.875V8.125C1.25016 8.92917 1.90433 9.58333 2.7085 9.58333H7.29183C8.096 9.58333 8.75016 8.92917 8.75016 8.125V4.16042Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_37_131">
          <rect width={width} height={height} fill={color}/>
        </clipPath>
      </defs>
    </svg>

  );
};

export default IconDocument;