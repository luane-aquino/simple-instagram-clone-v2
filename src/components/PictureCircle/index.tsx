import { Button, Image, ImageWrapper } from "./styles"

interface Props {
  name: string
  imageUrl: string
  seen: boolean
}

const PictureCircle = ({name, imageUrl, seen}: Props) => {
  return (
    <>
      <Button aria-label={`Story by ${name}, ${seen ? 'seen' : 'not seen'}`} role='menuitem'>
        <ImageWrapper aria-disabled={true}>
          <Image src={imageUrl} alt="user profile" width="60" height="60" />
        </ImageWrapper>
      </Button>
    </>
  )
}

export default PictureCircle