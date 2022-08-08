import React, {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';

import {AdvertType} from './styles';
import {DataSection} from './styles';
import {Paper} from './styles';
import {Section} from './styles';
import {TitleSection} from './styles';
import {MdFavoriteBorder} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';

import ProductImages from 'components/ProductImages';
import Button from 'components/Button';
import useAnnouncements from 'hooks/useAnnouncements';

type key = 0 | 1 | 2 | 3 | 4;

const Announcement: React.FC = () => {
  const {id} = useParams();
  const {announcement, fetchAnnouncementById} = useAnnouncements();
  useEffect(() => {
    if (id) {
      fetchAnnouncementById(id);
    }
  }, []);

  const images: Map<key, string> = useMemo(() => {
    /* Adapter Images*/
    const result: Map<key, string> = new Map();

    announcement?.images.forEach((element, index) => {
      result.set(index as key, element);
    });

    return result;
  }, [announcement]);

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          {announcement && (
            <Paper>
              <ContainerLeft>

                <AdvertType>
                  { announcement.type === 'product'? 'Produto' : 'Serviço' }
                </AdvertType>

                <Section>
                  <TitleSection> Título do anúncio </TitleSection>
                  <DataSection>
                    {announcement.title}
                  </DataSection>
                </Section>

                <Section>
                  <TitleSection> Descrição </TitleSection>
                  <DataSection>
                    {announcement.description}
                  </DataSection>
                </Section>

                <Section>
                  <TitleSection> Tempo de uso </TitleSection>
                  <DataSection>
                    { announcement.usage_time ?
                      announcement.usage_time :
                      'Indefinido'
                    }
                  </DataSection>
                </Section>

                <Section>
                  <TitleSection> Localização </TitleSection>
                  <DataSection>
                    {announcement.localization}
                  </DataSection>
                </Section>

                <Section>
                  <TitleSection> Categoria do produto </TitleSection>
                  <DataSection>
                    {announcement.category}
                  </DataSection>
                </Section>

              </ContainerLeft>

              <ContainerRight>
                <Section>
                  <ProductImages
                    pictures={images}
                    disableEditMode={true}
                  />
                </Section>
                <Section>
                  <Button
                    Icon={<MdFavoriteBorder/>}
                  > Favoritar
                  </Button>
                </Section>
              </ContainerRight>
            </Paper>
          )}
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default Announcement;
