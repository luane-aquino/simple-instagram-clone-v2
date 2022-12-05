import { Button, Image, ImageWrapper } from "./styles"

interface Props {
  name: string
  imageUrl: string
  seen: boolean
}

const UserImage = ({name, imageUrl, seen}: Props) => {
  return (
    <>
      <Button aria-label={`Story by ${name}, ${seen ? 'seen' : 'not seen'}`}>
        <ImageWrapper>
          <Image aria-disabled={true} src={imageUrl} alt="user profile" width="60" height="60" />
        </ImageWrapper>
      </Button>
    </>
  )
}

export default UserImage