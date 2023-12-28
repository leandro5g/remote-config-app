
import { useEffect } from 'react';
import { setRemoteConfigfetchValues } from '../../services/firebase';
import { getRemoteFeatureValue } from '../../utils/remote-config';

import { CardGoals } from './components/card-goals/card-goals.component';

import { Container, Content, TitleContent } from './home.styles';

const Home: React.FC = () => {

  useEffect(() => {
    setRemoteConfigfetchValues()
  }, [])

  const feature_1 = getRemoteFeatureValue("feature_1")
  const feature_2 = getRemoteFeatureValue("feature_2")
  const feature_3 = getRemoteFeatureValue("feature_3")
  const feature_4 = getRemoteFeatureValue("feature_4")
  const feature_5 = getRemoteFeatureValue("feature_5")
  const feature_6 = getRemoteFeatureValue("feature_6")

  return (
    <Container colors={["#41295a", "#2F0743"]}>
      <Content style={{ borderRadius: 20 }} intensity={20}>
        <TitleContent>
        ✨ In 2024 ✨
        </TitleContent>
        <CardGoals text='Face Fears, Overcome Boundaries' value={feature_1} />
        <CardGoals text='Never Give Up, Persevere' value={feature_2} />
        <CardGoals text='Ignoring Feedback, Not Evolving' value={feature_3} />
        <CardGoals text='Always Learn, Never Stagnate' value={feature_4} />
        <CardGoals text='Giving Up Easily, Lack of Persistence' value={feature_5} />
        <CardGoals text='Believe in Yourself, Be Confident' value={feature_6} />
      </Content>
    </Container>
  )
}

export { Home }