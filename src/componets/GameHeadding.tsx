
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'
interface Props  {
    gameQuery : GameQuery
}
const GameHeadding = ({gameQuery} : Props) => {
  return (
   <Heading>
    {gameQuery.genre?.name || ''}
    {' '}
    {gameQuery.platfrom?.name || ''}
    {" "}
    Games
   </Heading>
  )
}

export default GameHeadding