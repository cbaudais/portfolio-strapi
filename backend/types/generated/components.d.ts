import type { Schema, Struct } from '@strapi/strapi';

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Media: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.gallery': SharedGallery;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
    }
  }
}
