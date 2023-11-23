import * as S from "./styles";

type Props = {
  href: string;
  title: string;
};

export function Link({ href, title }: Props) {
  return (
    <S.Link href={href} target="_blank">
      {title}
    </S.Link>
  );
}
