import { useNavigate } from "react-router-dom";
function ContactPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contac</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default ContactPage