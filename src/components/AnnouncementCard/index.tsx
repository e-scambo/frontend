import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MdFavoriteBorder} from 'pages/Announcement/styles';
import {MdOutlineChat} from './styles';
import {Localization} from './styles';
import {Paper} from './styles';
import {Grid} from './styles';
import {Picture} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {CardActions} from './styles';
import {MdOutlinePlace} from 'react-icons/md';
import Button from 'components/Button';
import useUsers from 'hooks/useUsers';
import useAuth from 'hooks/useAuth';

interface CardProps {
  id: string
  title: string
  description: string
  image: string
  localization: string
  owner: any
}


const AnnouncementCard: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();
  const {addFavorite} = useUsers();
  const img = 'https://15.228.234.208/images/'+props.image;
  const {auth} = useAuth();
  const favoritar = ()=>{
    addFavorite(auth.user, {announcement: props.id, owner: props.owner.id});
  };
  const negociar = ()=>{
    const phone = props.owner.phone.replace('(', '').replace(')', '')
        .replace(' ', '').replace('-', '');
    console.log(phone);
    window.location.replace(`https://api.whatsapp.com/send?phone=55${phone}&text=ass`);
  };
  return (
    <Paper>
      <Grid>
        <Picture src={img} onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}>
        </Picture>
        <Title onClick={() => {
          navigate(`/announcement/${props.id}`);
        }}> {props.title} </Title>
        <Localization>
          <MdOutlinePlace style={{fill: '#C6C6C6'}} fontSize={20}/>
          {props.localization}
        </Localization>
        <Description>
          {props.description}
        </Description>
        <CardActions>
          <Button Icon={<MdFavoriteBorder />}
            onClick={ () => favoritar() } > Favoritar </Button>
          <Button Icon={<MdOutlineChat />}
            onClick={ () => negociar() } > Negociar </Button>
        </CardActions>
      </Grid>
    </Paper>
  );
};

export default AnnouncementCard;
