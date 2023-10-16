import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 4000)
  }, [navigate])
  return (
    <div>Recordar, Poner un mensaje de Error </div>
  )
}

export default Error