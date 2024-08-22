import { FiAlertCircle } from "react-icons/fi";
import ShimmerButton from "../magicui/shimmer-button";

interface ErrorLoadingProps {
  message: string;
}

const ErrorLoading: React.FC<ErrorLoadingProps> = ({ message }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <FiAlertCircle size={24} color="red" />
      <p>{message}</p>
      <ShimmerButton onClick={handleReload}>Reload</ShimmerButton>
    </div>
  );
};

export default ErrorLoading;
