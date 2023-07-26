import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameLoading = () => {
  return (
    <Card width={500} borderRadius={20} overflow={"hidden"}>
        <Skeleton height={500}  ></Skeleton >
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameLoading