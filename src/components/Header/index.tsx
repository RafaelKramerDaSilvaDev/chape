import { useState } from "react";
import { headerRoutes } from "../../constants/headerRoutes";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { Routes } from "../Routes";
import * as S from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState<string>("");

  return (
    <S.Header>
      <Logo />
      <S.ContainerTabs>
        {headerRoutes.map(({ title, links }) => (
          <Routes
            key={title}
            title={title}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            {links.map(({ title, url }) => (
              <Link key={title} href={url} title={title} />
            ))}
          </Routes>
        ))}
      </S.ContainerTabs>
    </S.Header>
  );
}
