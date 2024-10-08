import { gql } from '@apollo/client'

const SEND_NEW_COMMENT_INFO = gql`
  mutation sendNewCommentInfo($slug: String!, $name: String!, $email: String!, $text: String!) {
    createComment(
      data: {name: $name, email: $email, text: $text, post: {connect: {slug: $slug}}}
    ) {
      id
    }
  }
`
export {SEND_NEW_COMMENT_INFO}