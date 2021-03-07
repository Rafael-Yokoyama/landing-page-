import Testimony from "../../components/Testimony";
import Title from "../title";

import { Container } from "./styles";

const TestimonyCarrousel = () => {
  return (
    <Container>
      <Title font={"40px"} width={"640px"} Color={""} text={"Testimonials."} />
      <div className="content">
        <Testimony />
      </div>
    </Container>
  );
};

export default TestimonyCarrousel;
