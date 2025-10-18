export type ContactsHeader = {
  phoneNumber: string;
  email: string;
};

export type NavItem = {
  id: string;
  label: string;
};

export const navigationData: NavItem[] = [
  { id: "about", label: "О нас" },
  { id: "assortment", label: "Ассортимент" },
  { id: "trusted", label: "Нам доверяют" },
  { id: "contacts", label: "Контакты" },
];

export const CONTACTS_HEADER: ContactsHeader = {
  phoneNumber: "+7-953-537-11-99",
  email: "snab@tool-company67.ru",
};
