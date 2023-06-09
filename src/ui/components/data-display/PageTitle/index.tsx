import { PageSubTitleStyled, PageTitleContainer, PageTitleStyled } from "./style";


export interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export const PageTitle:React.FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <PageTitleContainer>
        <PageTitleStyled color="primary">{title}</PageTitleStyled>
        <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
    </PageTitleContainer>
  )
}
