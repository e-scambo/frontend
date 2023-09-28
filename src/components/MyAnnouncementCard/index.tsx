import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Localization} from './styles';
import {Paper} from './styles';
import {Grid} from './styles';
import {Picture} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {MdOutlinePlace} from 'react-icons/md';
import ButtonMyCard from '../ButtonMyCard';
import useUsers from '../../hooks/useUsers';
import useAuth from '../../hooks/useAuth';

interface CardProps {
  id: string
  title: string
  description: string
  image: string
  localization: string
  owner: any
}


const MyAnnouncementCard: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();
  const img = 'https://etrokaapi.herokuapp.com/images/'+props.image;
  
  return (
    <Paper>
      <Grid>
        <Picture src={img} onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}>
        </Picture>
        <Localization>
          <MdOutlinePlace style={{fill: '#C6C6C6'}} fontSize={20}/>
          {props.localization}
        </Localization>
        <Title onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}> {props.title} </Title>
        <Description>
          {props.description}
        </Description>
        <ButtonMyCard onClick={() => {
          navigate(`/editAnnouncement/${props.id}`);
        }}> Editar </ButtonMyCard>
      </Grid>
    </Paper>
  );
};

export default MyAnnouncementCard;
