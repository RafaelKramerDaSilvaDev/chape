import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import * as S from "./styles";

type Props = {
  title: string;
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<string>>;
  isOpen: string;
};

export function Routes({ title, children, isOpen, setIsOpen }: Props) {
  const heightRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen === title) {
      setHeight(heightRef.current?.scrollHeight ?? 0);
      setIsSelected(true);
    } else {
      setHeight(0);
      setIsSelected(false);
    }
  }, [isOpen, title]);

  const handleTitleClick = () => {
    if (isOpen === title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };

  return (
    <S.Routes>
      <S.Title $isSelected={isSelected} onClick={handleTitleClick}>
        {title}
        <S.Arrow $isSelected={isSelected}>
          <MdOutlineKeyboardArrowDown size={24} color="white" />
        </S.Arrow>
      </S.Title>
      <S.ContainerLinks ref={heightRef} $isOpen={isSelected} $height={height}>
        {children}
      </S.ContainerLinks>
    </S.Routes>
  );
}
