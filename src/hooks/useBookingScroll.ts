import { useNavigate, useLocation } from "react-router-dom";

export function useBookingScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToBooking = () => {
    if (location.pathname !== "/") {
      navigate("/#booking");
    } else {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return goToBooking;
}