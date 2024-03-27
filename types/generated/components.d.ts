import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'filter';
  };
  attributes: {
    buttonName: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface ElementsFooterItems extends Schema.Component {
  collectionName: 'components_elements_footer_items';
  info: {
    displayName: 'Footer Items';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    footerMenuItems: Attribute.Component<'elements.footer-menu-items', true>;
  };
}

export interface ElementsFooterMenuItems extends Schema.Component {
  collectionName: 'components_elements_footer_menu_items';
  info: {
    displayName: 'Footer Menu Items';
    icon: 'layer';
  };
  attributes: {
    itemName: Attribute.String;
    itemLink: Attribute.String;
  };
}

export interface ElementsItems extends Schema.Component {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'Items';
    icon: 'server';
  };
  attributes: {
    image: Attribute.Media;
    shortTitle: Attribute.String;
    hoverTitle: Attribute.String;
    hoverDescription: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsLanguagesSwitcher extends Schema.Component {
  collectionName: 'components_elements_languages_switchers';
  info: {
    displayName: 'Languages Switcher';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String;
    key: Attribute.String;
  };
}

export interface ElementsMenuItems extends Schema.Component {
  collectionName: 'components_elements_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'cube';
  };
  attributes: {
    itemName: Attribute.String;
    itemLink: Attribute.String;
  };
}

export interface ElementsSubMenuItems extends Schema.Component {
  collectionName: 'components_elements_sub_menu_items';
  info: {
    displayName: 'Sub Menu Items';
    icon: 'grid';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    items: Attribute.Component<'elements.items', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'database';
  };
  attributes: {
    footerLogo: Attribute.Media;
    description: Attribute.Text;
    footerItems: Attribute.Component<'elements.footer-items', true>;
    copyrightText: Attribute.String;
    beforeLogoText: Attribute.String;
    copyrightLogo: Attribute.Media;
    footerMenuItems: Attribute.Component<'elements.footer-menu-items', true>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    headerlogo: Attribute.Media;
    menuItems: Attribute.Component<'elements.menu-items', true>;
    languagesSwitcher: Attribute.Component<'elements.languages-switcher', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button': ElementsButton;
      'elements.footer-items': ElementsFooterItems;
      'elements.footer-menu-items': ElementsFooterMenuItems;
      'elements.items': ElementsItems;
      'elements.languages-switcher': ElementsLanguagesSwitcher;
      'elements.menu-items': ElementsMenuItems;
      'elements.sub-menu-items': ElementsSubMenuItems;
      'section.footer': SectionFooter;
      'section.header': SectionHeader;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
