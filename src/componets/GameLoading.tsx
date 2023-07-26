import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameLoading = () => {
  return (
    <Card width={360} borderRadius={20} overflow={"hidden"}>
        <Skeleton height={300}  ></Skeleton >
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameLoading