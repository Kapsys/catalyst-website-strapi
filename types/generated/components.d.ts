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

export interface ElementsFaq extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'Faq';
    icon: 'apps';
  };
  attributes: {
    faqQuestion: Attribute.Text;
    faqAnswer: Attribute.Text;
  };
}

export interface ElementsFeatureElements extends Schema.Component {
  collectionName: 'components_elements_feature_elements';
  info: {
    displayName: 'Feature Elements';
    icon: 'information';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
    image: Attribute.Media;
  };
}

export interface ElementsFeaturesList extends Schema.Component {
  collectionName: 'components_elements_features_lists';
  info: {
    displayName: 'Features List';
    icon: 'repeat';
  };
  attributes: {
    icon: Attribute.Media;
    featureTitle: Attribute.String;
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
    button: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsLanguageNotification extends Schema.Component {
  collectionName: 'components_elements_language_notifications';
  info: {
    displayName: 'Language Notification';
    icon: 'repeat';
  };
  attributes: {
    description: Attribute.Text;
    langKey: Attribute.String;
    title: Attribute.String;
    button: Attribute.Component<'elements.button'>;
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

export interface ElementsPartnerFeaturesList extends Schema.Component {
  collectionName: 'components_elements_partner_features_lists';
  info: {
    displayName: 'Partner Features List';
    icon: 'bulletList';
  };
  attributes: {
    icon: Attribute.Media;
    partnerFeatureTitle: Attribute.String;
    partnerFeatureDescription: Attribute.Text;
  };
}

export interface ElementsPartnerSteps extends Schema.Component {
  collectionName: 'components_elements_partner_steps';
  info: {
    displayName: 'Partner Steps';
    icon: 'layout';
    description: '';
  };
  attributes: {
    numberStep: Attribute.String;
    descriptionStep: Attribute.String;
  };
}

export interface ElementsPricingPlan extends Schema.Component {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'Pricing Plan';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    pricingIcon: Attribute.Media;
    pricingChoicePlan: Attribute.String;
    price: Attribute.String;
    pricingPeriod: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button', true>;
    resourcesList: Attribute.Component<'elements.resources-list', true>;
  };
}

export interface ElementsResourcesList extends Schema.Component {
  collectionName: 'components_elements_resources_lists';
  info: {
    displayName: 'Resources List';
    icon: 'code';
  };
  attributes: {
    title: Attribute.String;
    resources: Attribute.Component<'elements.resources', true>;
    button: Attribute.Component<'elements.button', true>;
  };
}

export interface ElementsResources extends Schema.Component {
  collectionName: 'components_elements_resources';
  info: {
    displayName: 'Resources';
    icon: 'rotate';
  };
  attributes: {
    resourceName: Attribute.String;
  };
}

export interface ElementsSalesboardSection extends Schema.Component {
  collectionName: 'components_elements_salesboard_sections';
  info: {
    displayName: 'Salesboard Section';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
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

export interface ElementsSubscriptionForm extends Schema.Component {
  collectionName: 'components_section_subscription_forms';
  info: {
    displayName: 'Demo Button';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsTestimonials extends Schema.Component {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'picture';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    personPhoto: Attribute.Media;
    name: Attribute.String;
    position: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    headerlogo: Attribute.Media;
    menuItems: Attribute.Component<'elements.menu-items', true>;
    languagesSwitcher: Attribute.Component<'elements.languages-switcher', true>;
    button: Attribute.Component<'elements.button'>;
    languageNotification: Attribute.Component<'elements.language-notification', true>;
  };
}

export interface SectionCtaSection extends Schema.Component {
  collectionName: 'components_section_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    featuresList: Attribute.Component<'elements.features-list', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionEntryPricingSection extends Schema.Component {
  collectionName: 'components_section_entry_pricing_sections';
  info: {
    displayName: 'Entry Pricing Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    monthlyPricingText: Attribute.String;
    yearlyPricingText: Attribute.String;
  };
}

export interface SectionFeaturesSection extends Schema.Component {
  collectionName: 'components_section_features_sections';
  info: {
    displayName: 'Features Section';
    icon: 'clock';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    featureElements: Attribute.Component<'elements.feature-elements', true>;
  };
}

export interface SectionFinalCta extends Schema.Component {
  collectionName: 'components_section_final_ctas';
  info: {
    displayName: 'Final CTA';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_global_footers';
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
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'star';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    backgroundImage: Attribute.Media;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionLandingCta extends Schema.Component {
  collectionName: 'components_section_landing_ctas';
  info: {
    displayName: 'Landing CTA';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SectionManagingPartner extends Schema.Component {
  collectionName: 'components_section_managing_partners';
  info: {
    displayName: 'Managing Partner';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    partnerFeaturesList: Attribute.Component<'elements.partner-features-list', true>;
    partnerSteps: Attribute.Component<'elements.partner-steps', true>;
  };
}

export interface SectionPeopleTestimonials extends Schema.Component {
  collectionName: 'components_section_people_testimonials';
  info: {
    displayName: 'People Testimonials';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Component<'elements.testimonials', true>;
    isLightBackground: Attribute.Boolean;
  };
}

export interface SectionPricing extends Schema.Component {
  collectionName: 'components_section_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    pricingPlan: Attribute.Component<'elements.pricing-plan', true>;
  };
}

export interface SectionSalesboardFeaturesSection extends Schema.Component {
  collectionName: 'components_section_salesboard_features_sections';
  info: {
    displayName: 'Salesboard Features Section';
    icon: 'layer';
  };
  attributes: {
    salesboardSection: Attribute.Component<'elements.salesboard-section', true>;
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
      'elements.faq': ElementsFaq;
      'elements.feature-elements': ElementsFeatureElements;
      'elements.features-list': ElementsFeaturesList;
      'elements.footer-items': ElementsFooterItems;
      'elements.footer-menu-items': ElementsFooterMenuItems;
      'elements.items': ElementsItems;
      'elements.language-notification': ElementsLanguageNotification;
      'elements.languages-switcher': ElementsLanguagesSwitcher;
      'elements.menu-items': ElementsMenuItems;
      'elements.partner-features-list': ElementsPartnerFeaturesList;
      'elements.partner-steps': ElementsPartnerSteps;
      'elements.pricing-plan': ElementsPricingPlan;
      'elements.resources-list': ElementsResourcesList;
      'elements.resources': ElementsResources;
      'elements.salesboard-section': ElementsSalesboardSection;
      'elements.sub-menu-items': ElementsSubMenuItems;
      'elements.subscription-form': ElementsSubscriptionForm;
      'elements.testimonials': ElementsTestimonials;
      'global.header': GlobalHeader;
      'section.cta-section': SectionCtaSection;
      'section.entry-pricing-section': SectionEntryPricingSection;
      'section.features-section': SectionFeaturesSection;
      'section.final-cta': SectionFinalCta;
      'section.footer': SectionFooter;
      'section.hero-section': SectionHeroSection;
      'section.landing-cta': SectionLandingCta;
      'section.managing-partner': SectionManagingPartner;
      'section.people-testimonials': SectionPeopleTestimonials;
      'section.pricing': SectionPricing;
      'section.salesboard-features-section': SectionSalesboardFeaturesSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
