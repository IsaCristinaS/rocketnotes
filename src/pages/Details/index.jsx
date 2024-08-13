import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Hic, magnam placeat nostrum ducimus ad quae maiores excepturi dolorum natus odio 
            adipisci laudantium nemo, ea, eum est. Aspernatur minus repellendus accusantium?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Hic, magnam placeat nostrum ducimus ad quae maiores excepturi dolorum natus odio 
            adipisci laudantium nemo, ea, eum est. Aspernatur minus repellendus accusantium?
          </p>

          <Section title="links úteis">
            <Links>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>{" "}
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
