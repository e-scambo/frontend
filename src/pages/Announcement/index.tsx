import React, {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import Footer from 'components/Footer';

// import {AdvertType} from './styles';
import {DataSection} from './styles';
import {Paper} from './styles';
import {Section} from './styles';
import {SectionWrapper} from './styles';
import {ContainerSection} from './styles';
import {ImagesSection} from './styles';
import {SmallSection} from './styles';
import {BigSection} from './styles';
import {ColumnSection} from './styles';
import {DataSectionTitle} from './styles';
import {DataSectionLocalization} from './styles';
import {TitleSection} from './styles';
import {MdFavoriteBorder} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';
import {ContainerButton} from './styles';

import ProductImages from 'components/ProductImages';
import Button from 'components/Button';
import ButtonGhost from 'components/ButtonGhost';
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
                <ImagesSection>
                  <ColumnSection>
                    <SmallSection>
                      <ProductImages
                        pictures={images}
                        disableEditMode={true}
                      />
                    </SmallSection>
                    <SmallSection>
                      <ProductImages
                        pictures={images}
                        disableEditMode={true}
                      />
                    </SmallSection>
                    <SmallSection>
                      <ProductImages
                        pictures={images}
                        disableEditMode={true}
                      />
                    </SmallSection>
                  </ColumnSection>
                  <BigSection>
                    <ProductImages
                      pictures={images}
                      disableEditMode={true}
                    />
                  </BigSection>
                </ImagesSection>
              </ContainerLeft>

              <ContainerRight>
                {/* <AdvertType>
                  { announcement.type === 'product'? 'Produto' : 'Serviço' }
                </AdvertType> */}
                <SectionWrapper>
                  <ContainerSection>
                    <Section>
                      <DataSectionTitle>
                        {announcement.title}
                      </DataSectionTitle>
                    </Section>
                  
                    <Section>
                      <DataSectionLocalization>
                        {announcement.localization}
                      </DataSectionLocalization>
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
                      <TitleSection> Categoria do produto </TitleSection>
                      <DataSection>
                        {announcement.category}
                      </DataSection>
                    </Section>
                  </ContainerSection>
                </SectionWrapper>
                  <ContainerButton>
                    <Button>
                      Negociar
                    </Button>
                    <ButtonGhost
                      Icon={<MdFavoriteBorder/>}
                    > Favoritar
                    </ButtonGhost>
                  </ContainerButton>
              </ContainerRight>
            </Paper>
          )}
        </ContentBox>
      </JustifyContainer>
      <Footer></Footer>
    </PageContainer>
  );
};

export default Announcement;
