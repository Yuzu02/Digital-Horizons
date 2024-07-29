interface BannerProps {
  title: string;
  subtitle: string;
  logoColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  logoColor = "text-yellow-400",
  backgroundColor = "bg-gray-900",
  textColor = "text-white",
}) => {
  return (
    <div className={`${backgroundColor} ${textColor} flex items-center p-6`}>
      <div className={`${logoColor} mr-6`}>
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5a7.5 7.5 0 107.5 7.5h-7.5v-7.5zM12 24a12 12 0 110-24 12 12 0 010 24z" />
        </svg>
      </div>
      <div>
        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
