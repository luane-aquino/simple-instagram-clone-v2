import styled from 'styled-components'

export const ImageWrapper = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  border-color: white;
  border-width: 1px;
  border-style: solid;
`