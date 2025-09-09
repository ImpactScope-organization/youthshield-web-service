interface Props {
  title: string
  content?: string
}

export const PostRow = ({ title, content }: Props) => {
  return (
    <div>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  )
}
