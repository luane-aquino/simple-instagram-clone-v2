import { Image, ImageWrapper } from "./styles"

interface Props {
  imageUrl: string
}

const PictureCircle = ({imageUrl}: Props) => {
  return (
    <>
      <ImageWrapper>
        <Image src={imageUrl} alt="user profile" width="60" height="60" />
      </ImageWrapper>
    </>
  )
}

export default PictureCircle