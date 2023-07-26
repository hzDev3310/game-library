import { Card, CardBody, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import GameIcons from './GameIcons';
import GameScore from './GameScore';


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow={'hidden'}  >
      <Image src={game.background_image} />
      <CardBody  padding={5} >
        <Heading fontSize={20}>{game.name}</Heading>
        <SimpleGrid justifyContent={'space-between'} display={'flex'}>
        <GameIcons platforms={game.parent_platforms.map(p=>p.platform)} />
        <GameScore score={game.metacritic} />
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default GameCard;
