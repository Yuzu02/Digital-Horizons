// AlertIcon.ts
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const icons: Record<string, IconType> = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
  error: FaTimesCircle,
};

export type AlertIconType = keyof typeof icons;
