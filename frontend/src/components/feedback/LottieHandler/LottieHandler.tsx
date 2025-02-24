import Lottie from "lottie-react";
import notFound from "../../../assets/lottie/notFound.json";
import error from "../../../assets/lottie/error.json";
import loading from "../../../assets/lottie/loading.json";
import empty from "../../../assets/lottie/empty.json";
import success from "../../../assets/lottie/success.json";
import about from "../../../assets/lottie/about.json";

const lottieTypes = {
  notFound,
  error,
  empty,
  loading,
  success,
  about,
};

type TLottieProps = {
  type: keyof typeof lottieTypes;
  message?: string;
};

const LottieHandler = ({ type, message }: TLottieProps) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-0">
      <Lottie animationData={lottieTypes[type]} style={{ width: 400 }} />
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
