
import { Container, Ball, Text } from './card-goals.styles';

type CardGoalsProps = {
  text: string;
  value: boolean
}

const CardGoals: React.FC<CardGoalsProps> = ({ text, value }) => {
  return (
    <Container>
      <Text>
        {text}
      </Text>

      <Ball value={value}/>
    </Container>
  )
}

export { CardGoals }