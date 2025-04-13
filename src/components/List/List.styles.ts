import styled from "styled-components";
import { theme } from "../../theme";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  max-width: 450px;
  background-color: ${theme.colors.background.white};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.small};
  margin: 0 auto;
`;

export const ListHeader = styled.div`
  padding: 14px 16px;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.text.textLighter};
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: calc(100% - 46px);
  padding: 0px 0px 0px 28px;
  border: none;
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.sm};
  line-height: 20px;
  outline: none;
  color: ${theme.colors.text.textDark};

  &:focus {
    border-color: ${theme.colors.primary.primary500};
  }

  &::placeholder {
    color: ${theme.colors.text.textLighter};
  }
`;

export const SectionHeader = styled.div<{
  $collapsed?: boolean;
  $isFirstSection?: boolean;
  $noSearch?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: solid;
  border-width: ${(props) =>
    props.$isFirstSection && props.$noSearch
      ? "0px 0px 1px 0px"
      : "1px 0px 1px 0px"};
  border-color: ${theme.colors.border.light};
  cursor: pointer;
  user-select: none;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.text.textLight};
`;

export const SectionIcon = styled.div<{ $collapsed?: boolean }>`
  transform: ${({ $collapsed }) =>
    $collapsed ? "rotate(90deg)" : "rotate(180deg)"};
  transition: transform 0.2s ease;
`;

export const SectionContent = styled.div<{ $collapsed?: boolean }>`
  display: ${({ $collapsed }) => ($collapsed ? "none" : "block")};
`;

export const ListItem = styled.div<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  margin: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm};
  cursor: pointer;
  background-color: ${({ $selected }) =>
    $selected ? theme.colors.primary.primary200 : "transparent"};
  color: ${({ $selected }) =>
    $selected ? theme.colors.text.textPrimary : theme.colors.text.textDark};

  &:hover {
    background-color: ${({ $selected }) =>
      $selected
        ? theme.colors.primary.primary100
        : theme.colors.background.secondaryHover};
  }
`;

export const Avatar = styled.div`
  width: ${theme.spacing.xxl};
  height: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;
  margin-right: ${theme.spacing.md};
  background-color: ${theme.colors.avatar.background};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
`;

export const ItemEmail = styled.div`
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.text.textLighter};
  margin-top: ${theme.spacing.xs};
`;
