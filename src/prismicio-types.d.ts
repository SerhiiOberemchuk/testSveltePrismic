// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = HeaderMainSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
	/**
	 * Slice Zone field in *home*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
	 * Meta Title field in *home*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: home.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *home*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: home.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *home*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<HomeDocumentData>,
	'home',
	Lang
>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *HeaderMain → Default → Primary*
 */
export interface HeaderMainSliceDefaultPrimary {
	/**
	 * label field in *HeaderMain → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: header_main.default.primary.label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;

	/**
	 * Merrd field in *HeaderMain → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: merd
	 * - **API ID Path**: header_main.default.primary.merrd
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	merrd: prismic.RichTextField;
}

/**
 * Default variation for HeaderMain Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderMainSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeaderMainSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *HeaderMain*
 */
type HeaderMainSliceVariation = HeaderMainSliceDefault;

/**
 * HeaderMain Shared Slice
 *
 * - **API ID**: `header_main`
 * - **Description**: HeaderMain
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderMainSlice = prismic.SharedSlice<'header_main', HeaderMainSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			HomeDocument,
			HomeDocumentData,
			HomeDocumentDataSlicesSlice,
			AllDocumentTypes,
			HeaderMainSlice,
			HeaderMainSliceDefaultPrimary,
			HeaderMainSliceVariation,
			HeaderMainSliceDefault
		};
	}
}
