import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBundleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToCartOutput = {
   __typename?: 'AddBundleProductsToCartOutput';
  cart: Cart;
};

export type AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToCartOutput = {
   __typename?: 'AddConfigurableProductsToCartOutput';
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartOutput = {
   __typename?: 'AddDownloadableProductsToCartOutput';
  cart: Cart;
};

export type AddSimpleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToCartOutput = {
   __typename?: 'AddSimpleProductsToCartOutput';
  cart: Cart;
};

export type AddVirtualProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToCartOutput = {
   __typename?: 'AddVirtualProductsToCartOutput';
  cart: Cart;
};

export type Aggregation = {
   __typename?: 'Aggregation';
  attribute_code: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<AggregationOption>>>;
};

export type AggregationOption = AggregationOptionInterface & {
   __typename?: 'AggregationOption';
  count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type AggregationOptionInterface = {
  count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type AppliedCoupon = {
   __typename?: 'AppliedCoupon';
  code: Scalars['String'];
};

export type ApplyCouponToCartInput = {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
   __typename?: 'ApplyCouponToCartOutput';
  cart: Cart;
};

export type Attribute = {
   __typename?: 'Attribute';
  attribute_code?: Maybe<Scalars['String']>;
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  attribute_type?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
  input_type?: Maybe<Scalars['String']>;
};

export type AttributeInput = {
  attribute_code?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
};

export type AttributeOption = {
   __typename?: 'AttributeOption';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AvailablePaymentMethod = {
   __typename?: 'AvailablePaymentMethod';
  code: Scalars['String'];
  title: Scalars['String'];
};

export type AvailableShippingMethod = {
   __typename?: 'AvailableShippingMethod';
  amount: Money;
  available: Scalars['Boolean'];
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  method_code?: Maybe<Scalars['String']>;
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Money;
  price_incl_tax: Money;
};

export type BillingAddressInput = {
  address?: Maybe<CartAddressInput>;
  customer_address_id?: Maybe<Scalars['Int']>;
  same_as_shipping?: Maybe<Scalars['Boolean']>;
  use_for_shipping?: Maybe<Scalars['Boolean']>;
};

export type BillingCartAddress = CartAddressInterface & {
   __typename?: 'BillingCartAddress';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type Breadcrumb = {
   __typename?: 'Breadcrumb';
  category_id?: Maybe<Scalars['Int']>;
  category_level?: Maybe<Scalars['Int']>;
  category_name?: Maybe<Scalars['String']>;
  category_url_key?: Maybe<Scalars['String']>;
  category_url_path?: Maybe<Scalars['String']>;
};

export type BundleCartItem = CartItemInterface & {
   __typename?: 'BundleCartItem';
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type BundleItem = {
   __typename?: 'BundleItem';
  option_id?: Maybe<Scalars['Int']>;
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BundleItemOption = {
   __typename?: 'BundleItemOption';
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  is_default?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  product?: Maybe<ProductInterface>;
  qty?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BundleOptionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<Maybe<Scalars['String']>>;
};

export type BundleProduct = ProductInterface & PhysicalProductInterface & CustomizableProductInterface & {
   __typename?: 'BundleProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  dynamic_price?: Maybe<Scalars['Boolean']>;
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  items?: Maybe<Array<Maybe<BundleItem>>>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  price_view?: Maybe<PriceViewEnum>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type BundleProductCartItemInput = {
  bundle_options: Array<Maybe<BundleOptionInput>>;
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export type Cart = {
   __typename?: 'Cart';
  applied_coupon?: Maybe<AppliedCoupon>;
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  billing_address?: Maybe<BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  prices?: Maybe<CartPrices>;
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
};

export type CartAddressCountry = {
   __typename?: 'CartAddressCountry';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type CartAddressInput = {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country_code: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  save_in_address_book?: Maybe<Scalars['Boolean']>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressInterface = {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressRegion = {
   __typename?: 'CartAddressRegion';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type CartDiscount = {
   __typename?: 'CartDiscount';
  amount: Money;
  label: Array<Maybe<Scalars['String']>>;
};

export type CartItemInput = {
  quantity: Scalars['Float'];
  sku: Scalars['String'];
};

export type CartItemInterface = {
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type CartItemPrices = {
   __typename?: 'CartItemPrices';
  discounts?: Maybe<Array<Maybe<Discount>>>;
  price: Money;
  row_total: Money;
  row_total_including_tax: Money;
  total_item_discount?: Maybe<Money>;
};

export type CartItemQuantity = {
   __typename?: 'CartItemQuantity';
  cart_item_id: Scalars['Int'];
  quantity: Scalars['Float'];
};

export type CartItemSelectedOptionValuePrice = {
   __typename?: 'CartItemSelectedOptionValuePrice';
  type: PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
};

export type CartItemUpdateInput = {
  cart_item_id: Scalars['Int'];
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartPrices = {
   __typename?: 'CartPrices';
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  discount?: Maybe<CartDiscount>;
  discounts?: Maybe<Array<Maybe<Discount>>>;
  grand_total?: Maybe<Money>;
  subtotal_excluding_tax?: Maybe<Money>;
  subtotal_including_tax?: Maybe<Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
   __typename?: 'CartTaxItem';
  amount: Money;
  label: Scalars['String'];
};

export type CategoryFilterInput = {
  ids?: Maybe<FilterEqualTypeInput>;
  name?: Maybe<FilterMatchTypeInput>;
  url_key?: Maybe<FilterEqualTypeInput>;
};

export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  cms_block?: Maybe<CmsBlock>;
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  default_sort_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  path_in_store?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  product_count?: Maybe<Scalars['Int']>;
  products?: Maybe<CategoryProducts>;
  updated_at?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_suffix?: Maybe<Scalars['String']>;
};


export type CategoryInterfaceProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
};

export type CategoryProducts = {
   __typename?: 'CategoryProducts';
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<Scalars['Int']>;
};

export type CategoryTree = CategoryInterface & {
   __typename?: 'CategoryTree';
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  canonical_url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  cms_block?: Maybe<CmsBlock>;
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  default_sort_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  path_in_store?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  product_count?: Maybe<Scalars['Int']>;
  products?: Maybe<CategoryProducts>;
  updated_at?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_suffix?: Maybe<Scalars['String']>;
};


export type CategoryTreeProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
};

export type CheckoutAgreement = {
   __typename?: 'CheckoutAgreement';
  agreement_id: Scalars['Int'];
  checkbox_text: Scalars['String'];
  content: Scalars['String'];
  content_height?: Maybe<Scalars['String']>;
  is_html: Scalars['Boolean'];
  mode: CheckoutAgreementMode;
  name: Scalars['String'];
};

export enum CheckoutAgreementMode {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

export type CmsBlock = {
   __typename?: 'CmsBlock';
  content?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CmsBlocks = {
   __typename?: 'CmsBlocks';
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

export type CmsPage = {
   __typename?: 'CmsPage';
  content?: Maybe<Scalars['String']>;
  content_heading?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  page_layout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
};

export type ComplexTextValue = {
   __typename?: 'ComplexTextValue';
  html: Scalars['String'];
};

export type ConfigurableAttributeOption = {
   __typename?: 'ConfigurableAttributeOption';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
   __typename?: 'ConfigurableCartItem';
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type ConfigurableProduct = ProductInterface & PhysicalProductInterface & CustomizableProductInterface & {
   __typename?: 'ConfigurableProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  websites?: Maybe<Array<Maybe<Website>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type ConfigurableProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  parent_sku?: Maybe<Scalars['String']>;
  variant_sku?: Maybe<Scalars['String']>;
};

export type ConfigurableProductOptions = {
   __typename?: 'ConfigurableProductOptions';
  attribute_code?: Maybe<Scalars['String']>;
  attribute_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  use_default?: Maybe<Scalars['Boolean']>;
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

export type ConfigurableProductOptionsValues = {
   __typename?: 'ConfigurableProductOptionsValues';
  default_label?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  store_label?: Maybe<Scalars['String']>;
  use_default_value?: Maybe<Scalars['Boolean']>;
  value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableVariant = {
   __typename?: 'ConfigurableVariant';
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  product?: Maybe<SimpleProduct>;
};

export type Country = {
   __typename?: 'Country';
  available_regions?: Maybe<Array<Maybe<Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

export enum CountryCodeEnum {
  Af = 'AF',
  Ax = 'AX',
  Al = 'AL',
  Dz = 'DZ',
  As = 'AS',
  Ad = 'AD',
  Ao = 'AO',
  Ai = 'AI',
  Aq = 'AQ',
  Ag = 'AG',
  Ar = 'AR',
  Am = 'AM',
  Aw = 'AW',
  Au = 'AU',
  At = 'AT',
  Az = 'AZ',
  Bs = 'BS',
  Bh = 'BH',
  Bd = 'BD',
  Bb = 'BB',
  By = 'BY',
  Be = 'BE',
  Bz = 'BZ',
  Bj = 'BJ',
  Bm = 'BM',
  Bt = 'BT',
  Bo = 'BO',
  Ba = 'BA',
  Bw = 'BW',
  Bv = 'BV',
  Br = 'BR',
  Io = 'IO',
  Vg = 'VG',
  Bn = 'BN',
  Bg = 'BG',
  Bf = 'BF',
  Bi = 'BI',
  Kh = 'KH',
  Cm = 'CM',
  Ca = 'CA',
  Cv = 'CV',
  Ky = 'KY',
  Cf = 'CF',
  Td = 'TD',
  Cl = 'CL',
  Cn = 'CN',
  Cx = 'CX',
  Cc = 'CC',
  Co = 'CO',
  Km = 'KM',
  Cg = 'CG',
  Cd = 'CD',
  Ck = 'CK',
  Cr = 'CR',
  Ci = 'CI',
  Hr = 'HR',
  Cu = 'CU',
  Cy = 'CY',
  Cz = 'CZ',
  Dk = 'DK',
  Dj = 'DJ',
  Dm = 'DM',
  Do = 'DO',
  Ec = 'EC',
  Eg = 'EG',
  Sv = 'SV',
  Gq = 'GQ',
  Er = 'ER',
  Ee = 'EE',
  Et = 'ET',
  Fk = 'FK',
  Fo = 'FO',
  Fj = 'FJ',
  Fi = 'FI',
  Fr = 'FR',
  Gf = 'GF',
  Pf = 'PF',
  Tf = 'TF',
  Ga = 'GA',
  Gm = 'GM',
  Ge = 'GE',
  De = 'DE',
  Gh = 'GH',
  Gi = 'GI',
  Gr = 'GR',
  Gl = 'GL',
  Gd = 'GD',
  Gp = 'GP',
  Gu = 'GU',
  Gt = 'GT',
  Gg = 'GG',
  Gn = 'GN',
  Gw = 'GW',
  Gy = 'GY',
  Ht = 'HT',
  Hm = 'HM',
  Hn = 'HN',
  Hk = 'HK',
  Hu = 'HU',
  Is = 'IS',
  In = 'IN',
  Id = 'ID',
  Ir = 'IR',
  Iq = 'IQ',
  Ie = 'IE',
  Im = 'IM',
  Il = 'IL',
  It = 'IT',
  Jm = 'JM',
  Jp = 'JP',
  Je = 'JE',
  Jo = 'JO',
  Kz = 'KZ',
  Ke = 'KE',
  Ki = 'KI',
  Kw = 'KW',
  Kg = 'KG',
  La = 'LA',
  Lv = 'LV',
  Lb = 'LB',
  Ls = 'LS',
  Lr = 'LR',
  Ly = 'LY',
  Li = 'LI',
  Lt = 'LT',
  Lu = 'LU',
  Mo = 'MO',
  Mk = 'MK',
  Mg = 'MG',
  Mw = 'MW',
  My = 'MY',
  Mv = 'MV',
  Ml = 'ML',
  Mt = 'MT',
  Mh = 'MH',
  Mq = 'MQ',
  Mr = 'MR',
  Mu = 'MU',
  Yt = 'YT',
  Mx = 'MX',
  Fm = 'FM',
  Md = 'MD',
  Mc = 'MC',
  Mn = 'MN',
  Me = 'ME',
  Ms = 'MS',
  Ma = 'MA',
  Mz = 'MZ',
  Mm = 'MM',
  Na = 'NA',
  Nr = 'NR',
  Np = 'NP',
  Nl = 'NL',
  An = 'AN',
  Nc = 'NC',
  Nz = 'NZ',
  Ni = 'NI',
  Ne = 'NE',
  Ng = 'NG',
  Nu = 'NU',
  Nf = 'NF',
  Mp = 'MP',
  Kp = 'KP',
  No = 'NO',
  Om = 'OM',
  Pk = 'PK',
  Pw = 'PW',
  Ps = 'PS',
  Pa = 'PA',
  Pg = 'PG',
  Py = 'PY',
  Pe = 'PE',
  Ph = 'PH',
  Pn = 'PN',
  Pl = 'PL',
  Pt = 'PT',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Ru = 'RU',
  Rw = 'RW',
  Ws = 'WS',
  Sm = 'SM',
  St = 'ST',
  Sa = 'SA',
  Sn = 'SN',
  Rs = 'RS',
  Sc = 'SC',
  Sl = 'SL',
  Sg = 'SG',
  Sk = 'SK',
  Si = 'SI',
  Sb = 'SB',
  So = 'SO',
  Za = 'ZA',
  Gs = 'GS',
  Kr = 'KR',
  Es = 'ES',
  Lk = 'LK',
  Bl = 'BL',
  Sh = 'SH',
  Kn = 'KN',
  Lc = 'LC',
  Mf = 'MF',
  Pm = 'PM',
  Vc = 'VC',
  Sd = 'SD',
  Sr = 'SR',
  Sj = 'SJ',
  Sz = 'SZ',
  Se = 'SE',
  Ch = 'CH',
  Sy = 'SY',
  Tw = 'TW',
  Tj = 'TJ',
  Tz = 'TZ',
  Th = 'TH',
  Tl = 'TL',
  Tg = 'TG',
  Tk = 'TK',
  To = 'TO',
  Tt = 'TT',
  Tn = 'TN',
  Tr = 'TR',
  Tm = 'TM',
  Tc = 'TC',
  Tv = 'TV',
  Ug = 'UG',
  Ua = 'UA',
  Ae = 'AE',
  Gb = 'GB',
  Us = 'US',
  Uy = 'UY',
  Um = 'UM',
  Vi = 'VI',
  Uz = 'UZ',
  Vu = 'VU',
  Va = 'VA',
  Ve = 'VE',
  Vn = 'VN',
  Wf = 'WF',
  Eh = 'EH',
  Ye = 'YE',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CreateEmptyCartInput = {
  cart_id?: Maybe<Scalars['String']>;
};

export type CreatePayflowProTokenOutput = {
   __typename?: 'CreatePayflowProTokenOutput';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type CreditCardDetailsInput = {
  cc_exp_month: Scalars['Int'];
  cc_exp_year: Scalars['Int'];
  cc_last_4: Scalars['Int'];
  cc_type: Scalars['String'];
};

export type Currency = {
   __typename?: 'Currency';
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_currency_symbol?: Maybe<Scalars['String']>;
  default_display_currecy_code?: Maybe<Scalars['String']>;
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

export enum CurrencyEnum {
  Afn = 'AFN',
  All = 'ALL',
  Azn = 'AZN',
  Dzd = 'DZD',
  Aoa = 'AOA',
  Ars = 'ARS',
  Amd = 'AMD',
  Awg = 'AWG',
  Aud = 'AUD',
  Bsd = 'BSD',
  Bhd = 'BHD',
  Bdt = 'BDT',
  Bbd = 'BBD',
  Byr = 'BYR',
  Bzd = 'BZD',
  Bmd = 'BMD',
  Btn = 'BTN',
  Bob = 'BOB',
  Bam = 'BAM',
  Bwp = 'BWP',
  Brl = 'BRL',
  Gbp = 'GBP',
  Bnd = 'BND',
  Bgn = 'BGN',
  Buk = 'BUK',
  Bif = 'BIF',
  Khr = 'KHR',
  Cad = 'CAD',
  Cve = 'CVE',
  Czk = 'CZK',
  Kyd = 'KYD',
  Gqe = 'GQE',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Kmf = 'KMF',
  Cdf = 'CDF',
  Crc = 'CRC',
  Hrk = 'HRK',
  Cup = 'CUP',
  Dkk = 'DKK',
  Djf = 'DJF',
  Dop = 'DOP',
  Xcd = 'XCD',
  Egp = 'EGP',
  Svc = 'SVC',
  Ern = 'ERN',
  Eek = 'EEK',
  Etb = 'ETB',
  Eur = 'EUR',
  Fkp = 'FKP',
  Fjd = 'FJD',
  Gmd = 'GMD',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gtq = 'GTQ',
  Gnf = 'GNF',
  Gyd = 'GYD',
  Htg = 'HTG',
  Hnl = 'HNL',
  Hkd = 'HKD',
  Huf = 'HUF',
  Isk = 'ISK',
  Inr = 'INR',
  Idr = 'IDR',
  Irr = 'IRR',
  Iqd = 'IQD',
  Ils = 'ILS',
  Jmd = 'JMD',
  Jpy = 'JPY',
  Jod = 'JOD',
  Kzt = 'KZT',
  Kes = 'KES',
  Kwd = 'KWD',
  Kgs = 'KGS',
  Lak = 'LAK',
  Lvl = 'LVL',
  Lbp = 'LBP',
  Lsl = 'LSL',
  Lrd = 'LRD',
  Lyd = 'LYD',
  Ltl = 'LTL',
  Mop = 'MOP',
  Mkd = 'MKD',
  Mga = 'MGA',
  Mwk = 'MWK',
  Myr = 'MYR',
  Mvr = 'MVR',
  Lsm = 'LSM',
  Mro = 'MRO',
  Mur = 'MUR',
  Mxn = 'MXN',
  Mdl = 'MDL',
  Mnt = 'MNT',
  Mad = 'MAD',
  Mzn = 'MZN',
  Mmk = 'MMK',
  Nad = 'NAD',
  Npr = 'NPR',
  Ang = 'ANG',
  Ytl = 'YTL',
  Nzd = 'NZD',
  Nic = 'NIC',
  Ngn = 'NGN',
  Kpw = 'KPW',
  Nok = 'NOK',
  Omr = 'OMR',
  Pkr = 'PKR',
  Pab = 'PAB',
  Pgk = 'PGK',
  Pyg = 'PYG',
  Pen = 'PEN',
  Php = 'PHP',
  Pln = 'PLN',
  Qar = 'QAR',
  Rhd = 'RHD',
  Ron = 'RON',
  Rub = 'RUB',
  Rwf = 'RWF',
  Shp = 'SHP',
  Std = 'STD',
  Sar = 'SAR',
  Rsd = 'RSD',
  Scr = 'SCR',
  Sll = 'SLL',
  Sgd = 'SGD',
  Skk = 'SKK',
  Sbd = 'SBD',
  Sos = 'SOS',
  Zar = 'ZAR',
  Krw = 'KRW',
  Lkr = 'LKR',
  Sdg = 'SDG',
  Srd = 'SRD',
  Szl = 'SZL',
  Sek = 'SEK',
  Chf = 'CHF',
  Syp = 'SYP',
  Twd = 'TWD',
  Tjs = 'TJS',
  Tzs = 'TZS',
  Thb = 'THB',
  Top = 'TOP',
  Ttd = 'TTD',
  Tnd = 'TND',
  Tmm = 'TMM',
  Usd = 'USD',
  Ugx = 'UGX',
  Uah = 'UAH',
  Aed = 'AED',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vuv = 'VUV',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Che = 'CHE',
  Chw = 'CHW',
  Xof = 'XOF',
  Wst = 'WST',
  Yer = 'YER',
  Zmk = 'ZMK',
  Zwd = 'ZWD',
  Try = 'TRY',
  Azm = 'AZM',
  Rol = 'ROL',
  Trl = 'TRL',
  Xpf = 'XPF'
}

export type CustomAttributeMetadata = {
   __typename?: 'CustomAttributeMetadata';
  items?: Maybe<Array<Maybe<Attribute>>>;
};

export type Customer = {
   __typename?: 'Customer';
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  created_at?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['String']>;
  default_billing?: Maybe<Scalars['String']>;
  default_shipping?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_subscribed?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  middlename?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  taxvat?: Maybe<Scalars['String']>;
  wishlist: Wishlist;
};

export type CustomerAddress = {
   __typename?: 'CustomerAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country_code?: Maybe<CountryCodeEnum>;
  country_id?: Maybe<Scalars['String']>;
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  customer_id?: Maybe<Scalars['Int']>;
  default_billing?: Maybe<Scalars['Boolean']>;
  default_shipping?: Maybe<Scalars['Boolean']>;
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  fax?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  middlename?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  region?: Maybe<CustomerAddressRegion>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttribute = {
   __typename?: 'CustomerAddressAttribute';
  attribute_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
  attribute_code: Scalars['String'];
  value: Scalars['String'];
};

export type CustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country_code?: Maybe<CountryCodeEnum>;
  country_id?: Maybe<CountryCodeEnum>;
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttributeInput>>>;
  default_billing?: Maybe<Scalars['Boolean']>;
  default_shipping?: Maybe<Scalars['Boolean']>;
  fax?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  middlename?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  region?: Maybe<CustomerAddressRegionInput>;
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  suffix?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressRegion = {
   __typename?: 'CustomerAddressRegion';
  region?: Maybe<Scalars['String']>;
  region_code?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type CustomerAddressRegionInput = {
  region?: Maybe<Scalars['String']>;
  region_code?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type CustomerDownloadableProduct = {
   __typename?: 'CustomerDownloadableProduct';
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CustomerDownloadableProducts = {
   __typename?: 'CustomerDownloadableProducts';
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerInput = {
  date_of_birth?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  is_subscribed?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  middlename?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  taxvat?: Maybe<Scalars['String']>;
};

export type CustomerOrder = {
   __typename?: 'CustomerOrder';
  created_at?: Maybe<Scalars['String']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  increment_id?: Maybe<Scalars['String']>;
  order_number: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type CustomerOrders = {
   __typename?: 'CustomerOrders';
  items?: Maybe<Array<Maybe<CustomerOrder>>>;
};

export type CustomerOutput = {
   __typename?: 'CustomerOutput';
  customer: Customer;
};

export type CustomerPaymentTokens = {
   __typename?: 'CustomerPaymentTokens';
  items: Array<Maybe<PaymentToken>>;
};

export type CustomerToken = {
   __typename?: 'CustomerToken';
  token?: Maybe<Scalars['String']>;
};

export type CustomizableAreaOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableAreaOption';
  option_id?: Maybe<Scalars['Int']>;
  product_sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<CustomizableAreaValue>;
};

export type CustomizableAreaValue = {
   __typename?: 'CustomizableAreaValue';
  max_characters?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
};

export type CustomizableCheckboxOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableCheckboxOption';
  option_id?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

export type CustomizableCheckboxValue = {
   __typename?: 'CustomizableCheckboxValue';
  option_type_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CustomizableDateOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableDateOption';
  option_id?: Maybe<Scalars['Int']>;
  product_sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<CustomizableDateValue>;
};

export type CustomizableDateValue = {
   __typename?: 'CustomizableDateValue';
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
};

export type CustomizableDropDownOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableDropDownOption';
  option_id?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

export type CustomizableDropDownValue = {
   __typename?: 'CustomizableDropDownValue';
  option_type_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CustomizableFieldOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableFieldOption';
  option_id?: Maybe<Scalars['Int']>;
  product_sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<CustomizableFieldValue>;
};

export type CustomizableFieldValue = {
   __typename?: 'CustomizableFieldValue';
  max_characters?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
};

export type CustomizableFileOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableFileOption';
  option_id?: Maybe<Scalars['Int']>;
  product_sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<CustomizableFileValue>;
};

export type CustomizableFileValue = {
   __typename?: 'CustomizableFileValue';
  file_extension?: Maybe<Scalars['String']>;
  image_size_x?: Maybe<Scalars['Int']>;
  image_size_y?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
};

export type CustomizableMultipleOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableMultipleOption';
  option_id?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

export type CustomizableMultipleValue = {
   __typename?: 'CustomizableMultipleValue';
  option_type_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CustomizableOptionInput = {
  id: Scalars['Int'];
  value_string: Scalars['String'];
};

export type CustomizableOptionInterface = {
  option_id?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CustomizableProductInterface = {
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

export type CustomizableRadioOption = CustomizableOptionInterface & {
   __typename?: 'CustomizableRadioOption';
  option_id?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

export type CustomizableRadioValue = {
   __typename?: 'CustomizableRadioValue';
  option_type_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypeEnum>;
  sku?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type DeletePaymentTokenOutput = {
   __typename?: 'DeletePaymentTokenOutput';
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  result: Scalars['Boolean'];
};

export type Discount = {
   __typename?: 'Discount';
  amount: Money;
  label: Scalars['String'];
};

export type DownloadableCartItem = CartItemInterface & {
   __typename?: 'DownloadableCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  id: Scalars['String'];
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

export enum DownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL'
}

export type DownloadableProduct = ProductInterface & CustomizableProductInterface & {
   __typename?: 'DownloadableProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  links_purchased_separately?: Maybe<Scalars['Int']>;
  links_title?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
};

export type DownloadableProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinksInput>>>;
};

export type DownloadableProductLinks = {
   __typename?: 'DownloadableProductLinks';
  id?: Maybe<Scalars['Int']>;
  is_shareable?: Maybe<Scalars['Boolean']>;
  link_type?: Maybe<DownloadableFileTypeEnum>;
  number_of_downloads?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  sample_file?: Maybe<Scalars['String']>;
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  sample_url?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type DownloadableProductLinksInput = {
  link_id: Scalars['Int'];
};

export type DownloadableProductSamples = {
   __typename?: 'DownloadableProductSamples';
  id?: Maybe<Scalars['Int']>;
  sample_file?: Maybe<Scalars['String']>;
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  sample_url?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type EntityUrl = {
   __typename?: 'EntityUrl';
  canonical_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  redirectCode?: Maybe<Scalars['Int']>;
  relative_url?: Maybe<Scalars['String']>;
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ExchangeRate = {
   __typename?: 'ExchangeRate';
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type FilterEqualTypeInput = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterMatchTypeInput = {
  match?: Maybe<Scalars['String']>;
};

export type FilterRangeTypeInput = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type FilterTypeInput = {
  eq?: Maybe<Scalars['String']>;
  finset?: Maybe<Array<Maybe<Scalars['String']>>>;
  from?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gteq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lteq?: Maybe<Scalars['String']>;
  moreq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  notnull?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type FixedProductTax = {
   __typename?: 'FixedProductTax';
  amount?: Maybe<Money>;
  label?: Maybe<Scalars['String']>;
};

export enum FixedProductTaxDisplaySettings {
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS',
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  FptDisabled = 'FPT_DISABLED'
}

export type GroupedProduct = ProductInterface & PhysicalProductInterface & {
   __typename?: 'GroupedProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type GroupedProductItem = {
   __typename?: 'GroupedProductItem';
  position?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  qty?: Maybe<Scalars['Float']>;
};

export type HostedProInput = {
  cancel_url: Scalars['String'];
  return_url: Scalars['String'];
};

export type HostedProUrl = {
   __typename?: 'HostedProUrl';
  secure_form_url?: Maybe<Scalars['String']>;
};

export type HostedProUrlInput = {
  cart_id: Scalars['String'];
};

export type HttpQueryParameter = {
   __typename?: 'HttpQueryParameter';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IsEmailAvailableOutput = {
   __typename?: 'IsEmailAvailableOutput';
  is_email_available?: Maybe<Scalars['Boolean']>;
};

export type LayerFilter = {
   __typename?: 'LayerFilter';
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  filter_items_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
   __typename?: 'LayerFilterItem';
  items_count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
  items_count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  value_string?: Maybe<Scalars['String']>;
};

export type MediaGalleryEntry = {
   __typename?: 'MediaGalleryEntry';
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  disabled?: Maybe<Scalars['Boolean']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

export type MediaGalleryInterface = {
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Money = {
   __typename?: 'Money';
  currency?: Maybe<CurrencyEnum>;
  value?: Maybe<Scalars['Float']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  changeCustomerPassword?: Maybe<Customer>;
  createCustomer?: Maybe<CustomerOutput>;
  createCustomerAddress?: Maybe<CustomerAddress>;
  createEmptyCart?: Maybe<Scalars['String']>;
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  generateCustomerToken?: Maybe<CustomerToken>;
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  mergeCarts: Cart;
  placeOrder?: Maybe<PlaceOrderOutput>;
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  updateCustomer?: Maybe<CustomerOutput>;
  updateCustomerAddress?: Maybe<CustomerAddress>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: Maybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: Maybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: Maybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: Maybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: Maybe<AddVirtualProductsToCartInput>;
};


export type MutationApplyCouponToCartArgs = {
  input?: Maybe<ApplyCouponToCartInput>;
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: Maybe<CreateEmptyCartInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  source_cart_id: Scalars['String'];
  destination_cart_id: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  input?: Maybe<PlaceOrderInput>;
};


export type MutationRemoveCouponFromCartArgs = {
  input?: Maybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: Maybe<RemoveItemFromCartInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: Maybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: Maybe<SetGuestEmailOnCartInput>;
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: Maybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: Maybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: Maybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: Maybe<SetShippingMethodsOnCartInput>;
};


export type MutationUpdateCartItemsArgs = {
  input?: Maybe<UpdateCartItemsInput>;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: Maybe<CustomerAddressInput>;
};

export type Order = {
   __typename?: 'Order';
  order_id?: Maybe<Scalars['String']>;
  order_number: Scalars['String'];
};

export type PayflowExpressInput = {
  payer_id: Scalars['String'];
  token: Scalars['String'];
};

export type PayflowLinkInput = {
  cancel_url: Scalars['String'];
  error_url: Scalars['String'];
  return_url: Scalars['String'];
};

export enum PayflowLinkMode {
  Test = 'TEST',
  Live = 'LIVE'
}

export type PayflowLinkToken = {
   __typename?: 'PayflowLinkToken';
  mode?: Maybe<PayflowLinkMode>;
  paypal_url?: Maybe<Scalars['String']>;
  secure_token?: Maybe<Scalars['String']>;
  secure_token_id?: Maybe<Scalars['String']>;
};

export type PayflowLinkTokenInput = {
  cart_id: Scalars['String'];
};

export type PayflowProInput = {
  cc_details: CreditCardDetailsInput;
};

export type PayflowProResponseInput = {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
   __typename?: 'PayflowProResponseOutput';
  cart: Cart;
};

export type PayflowProToken = {
   __typename?: 'PayflowProToken';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type PayflowProTokenInput = {
  cart_id: Scalars['String'];
  urls: PayflowProUrlInput;
};

export type PayflowProUrlInput = {
  cancel_url: Scalars['String'];
  error_url: Scalars['String'];
  return_url: Scalars['String'];
};

export type PaymentMethodInput = {
  code: Scalars['String'];
  hosted_pro?: Maybe<HostedProInput>;
  payflow_express?: Maybe<PayflowExpressInput>;
  payflow_link?: Maybe<PayflowLinkInput>;
  payflowpro?: Maybe<PayflowProInput>;
  paypal_express?: Maybe<PaypalExpressInput>;
  purchase_order_number?: Maybe<Scalars['String']>;
};

export type PaymentToken = {
   __typename?: 'PaymentToken';
  details?: Maybe<Scalars['String']>;
  payment_method_code: Scalars['String'];
  public_hash: Scalars['String'];
  type: PaymentTokenTypeEnum;
};

export enum PaymentTokenTypeEnum {
  Card = 'card',
  Account = 'account'
}

export type PaypalExpressInput = {
  payer_id: Scalars['String'];
  token: Scalars['String'];
};

export type PaypalExpressToken = {
   __typename?: 'PaypalExpressToken';
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  token?: Maybe<Scalars['String']>;
};

export type PaypalExpressTokenInput = {
  cart_id: Scalars['String'];
  code: Scalars['String'];
  express_button?: Maybe<Scalars['Boolean']>;
  urls: PaypalExpressUrlsInput;
  use_paypal_credit?: Maybe<Scalars['Boolean']>;
};

export type PaypalExpressTokenOutput = {
   __typename?: 'PaypalExpressTokenOutput';
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  token?: Maybe<Scalars['String']>;
};

export type PaypalExpressUrlList = {
   __typename?: 'PaypalExpressUrlList';
  edit?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};

export type PaypalExpressUrlsInput = {
  cancel_url: Scalars['String'];
  pending_url?: Maybe<Scalars['String']>;
  return_url: Scalars['String'];
  success_url?: Maybe<Scalars['String']>;
};

export type PhysicalProductInterface = {
  weight?: Maybe<Scalars['Float']>;
};

export type PlaceOrderInput = {
  cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
   __typename?: 'PlaceOrderOutput';
  order: Order;
};

export type Price = {
   __typename?: 'Price';
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  amount?: Maybe<Money>;
};

export type PriceAdjustment = {
   __typename?: 'PriceAdjustment';
  amount?: Maybe<Money>;
  code?: Maybe<PriceAdjustmentCodesEnum>;
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

export enum PriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX'
}

export enum PriceAdjustmentDescriptionEnum {
  Included = 'INCLUDED',
  Excluded = 'EXCLUDED'
}

export type PriceRange = {
   __typename?: 'PriceRange';
  maximum_price?: Maybe<ProductPrice>;
  minimum_price: ProductPrice;
};

export enum PriceTypeEnum {
  Fixed = 'FIXED',
  Percent = 'PERCENT',
  Dynamic = 'DYNAMIC'
}

export enum PriceViewEnum {
  PriceRange = 'PRICE_RANGE',
  AsLowAs = 'AS_LOW_AS'
}

export type ProductAttributeFilterInput = {
  category_id?: Maybe<FilterEqualTypeInput>;
  description?: Maybe<FilterMatchTypeInput>;
  name?: Maybe<FilterMatchTypeInput>;
  price?: Maybe<FilterRangeTypeInput>;
  short_description?: Maybe<FilterMatchTypeInput>;
  sku?: Maybe<FilterEqualTypeInput>;
  url_key?: Maybe<FilterEqualTypeInput>;
};

export type ProductAttributeSortInput = {
  name?: Maybe<SortEnum>;
  position?: Maybe<SortEnum>;
  price?: Maybe<SortEnum>;
  relevance?: Maybe<SortEnum>;
};

export type ProductDiscount = {
   __typename?: 'ProductDiscount';
  amount_off?: Maybe<Scalars['Float']>;
  percent_off?: Maybe<Scalars['Float']>;
};

export type ProductFilterInput = {
  category_id?: Maybe<FilterTypeInput>;
  country_of_manufacture?: Maybe<FilterTypeInput>;
  created_at?: Maybe<FilterTypeInput>;
  custom_layout?: Maybe<FilterTypeInput>;
  custom_layout_update?: Maybe<FilterTypeInput>;
  description?: Maybe<FilterTypeInput>;
  gift_message_available?: Maybe<FilterTypeInput>;
  has_options?: Maybe<FilterTypeInput>;
  image?: Maybe<FilterTypeInput>;
  image_label?: Maybe<FilterTypeInput>;
  manufacturer?: Maybe<FilterTypeInput>;
  max_price?: Maybe<FilterTypeInput>;
  meta_description?: Maybe<FilterTypeInput>;
  meta_keyword?: Maybe<FilterTypeInput>;
  meta_title?: Maybe<FilterTypeInput>;
  min_price?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
  news_from_date?: Maybe<FilterTypeInput>;
  news_to_date?: Maybe<FilterTypeInput>;
  options_container?: Maybe<FilterTypeInput>;
  or?: Maybe<ProductFilterInput>;
  price?: Maybe<FilterTypeInput>;
  required_options?: Maybe<FilterTypeInput>;
  short_description?: Maybe<FilterTypeInput>;
  sku?: Maybe<FilterTypeInput>;
  small_image?: Maybe<FilterTypeInput>;
  small_image_label?: Maybe<FilterTypeInput>;
  special_from_date?: Maybe<FilterTypeInput>;
  special_price?: Maybe<FilterTypeInput>;
  special_to_date?: Maybe<FilterTypeInput>;
  swatch_image?: Maybe<FilterTypeInput>;
  thumbnail?: Maybe<FilterTypeInput>;
  thumbnail_label?: Maybe<FilterTypeInput>;
  tier_price?: Maybe<FilterTypeInput>;
  updated_at?: Maybe<FilterTypeInput>;
  url_key?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
  weight?: Maybe<FilterTypeInput>;
};

export type ProductImage = MediaGalleryInterface & {
   __typename?: 'ProductImage';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProductInterface = {
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
};

export type ProductLinks = ProductLinksInterface & {
   __typename?: 'ProductLinks';
  link_type?: Maybe<Scalars['String']>;
  linked_product_sku?: Maybe<Scalars['String']>;
  linked_product_type?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductLinksInterface = {
  link_type?: Maybe<Scalars['String']>;
  linked_product_sku?: Maybe<Scalars['String']>;
  linked_product_type?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductMediaGalleryEntriesContent = {
   __typename?: 'ProductMediaGalleryEntriesContent';
  base64_encoded_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductMediaGalleryEntriesVideoContent = {
   __typename?: 'ProductMediaGalleryEntriesVideoContent';
  media_type?: Maybe<Scalars['String']>;
  video_description?: Maybe<Scalars['String']>;
  video_metadata?: Maybe<Scalars['String']>;
  video_provider?: Maybe<Scalars['String']>;
  video_title?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

export type ProductPrice = {
   __typename?: 'ProductPrice';
  discount?: Maybe<ProductDiscount>;
  final_price: Money;
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  regular_price: Money;
};

export type ProductPrices = {
   __typename?: 'ProductPrices';
  maximalPrice?: Maybe<Price>;
  minimalPrice?: Maybe<Price>;
  regularPrice?: Maybe<Price>;
};

export type Products = {
   __typename?: 'Products';
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  sort_fields?: Maybe<SortFields>;
  total_count?: Maybe<Scalars['Int']>;
};

export type ProductSortInput = {
  country_of_manufacture?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  custom_layout?: Maybe<SortEnum>;
  custom_layout_update?: Maybe<SortEnum>;
  description?: Maybe<SortEnum>;
  gift_message_available?: Maybe<SortEnum>;
  has_options?: Maybe<SortEnum>;
  image?: Maybe<SortEnum>;
  image_label?: Maybe<SortEnum>;
  manufacturer?: Maybe<SortEnum>;
  meta_description?: Maybe<SortEnum>;
  meta_keyword?: Maybe<SortEnum>;
  meta_title?: Maybe<SortEnum>;
  name?: Maybe<SortEnum>;
  news_from_date?: Maybe<SortEnum>;
  news_to_date?: Maybe<SortEnum>;
  options_container?: Maybe<SortEnum>;
  price?: Maybe<SortEnum>;
  required_options?: Maybe<SortEnum>;
  short_description?: Maybe<SortEnum>;
  sku?: Maybe<SortEnum>;
  small_image?: Maybe<SortEnum>;
  small_image_label?: Maybe<SortEnum>;
  special_from_date?: Maybe<SortEnum>;
  special_price?: Maybe<SortEnum>;
  special_to_date?: Maybe<SortEnum>;
  swatch_image?: Maybe<SortEnum>;
  thumbnail?: Maybe<SortEnum>;
  thumbnail_label?: Maybe<SortEnum>;
  tier_price?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
  url_key?: Maybe<SortEnum>;
  url_path?: Maybe<SortEnum>;
  weight?: Maybe<SortEnum>;
};

export enum ProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type ProductTierPrices = {
   __typename?: 'ProductTierPrices';
  customer_group_id?: Maybe<Scalars['String']>;
  percentage_value?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  website_id?: Maybe<Scalars['Float']>;
};

export type ProductVideo = MediaGalleryInterface & {
   __typename?: 'ProductVideo';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

export type Query = {
   __typename?: 'Query';
  cart?: Maybe<Cart>;
  category?: Maybe<CategoryTree>;
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  cmsBlocks?: Maybe<CmsBlocks>;
  cmsPage?: Maybe<CmsPage>;
  countries?: Maybe<Array<Maybe<Country>>>;
  country?: Maybe<Country>;
  currency?: Maybe<Currency>;
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  customer?: Maybe<Customer>;
  customerCart: Cart;
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  customerOrders?: Maybe<CustomerOrders>;
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  getHostedProUrl?: Maybe<HostedProUrl>;
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  products?: Maybe<Products>;
  storeConfig?: Maybe<StoreConfig>;
  urlResolver?: Maybe<EntityUrl>;
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryCategoryListArgs = {
  filters?: Maybe<CategoryFilterInput>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCmsPageArgs = {
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
};


export type QueryCountryArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryProductsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};

export type Region = {
   __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RemoveCouponFromCartInput = {
  cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
   __typename?: 'RemoveCouponFromCartOutput';
  cart?: Maybe<Cart>;
};

export type RemoveItemFromCartInput = {
  cart_id: Scalars['String'];
  cart_item_id: Scalars['Int'];
};

export type RemoveItemFromCartOutput = {
   __typename?: 'RemoveItemFromCartOutput';
  cart: Cart;
};

export type RevokeCustomerTokenOutput = {
   __typename?: 'RevokeCustomerTokenOutput';
  result: Scalars['Boolean'];
};

export type SearchResultPageInfo = {
   __typename?: 'SearchResultPageInfo';
  current_page?: Maybe<Scalars['Int']>;
  page_size?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type SelectedBundleOption = {
   __typename?: 'SelectedBundleOption';
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
   __typename?: 'SelectedBundleOptionValue';
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type SelectedConfigurableOption = {
   __typename?: 'SelectedConfigurableOption';
  id: Scalars['Int'];
  option_label: Scalars['String'];
  value_id: Scalars['Int'];
  value_label: Scalars['String'];
};

export type SelectedCustomizableOption = {
   __typename?: 'SelectedCustomizableOption';
  id: Scalars['Int'];
  is_required: Scalars['Boolean'];
  label: Scalars['String'];
  sort_order: Scalars['Int'];
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
   __typename?: 'SelectedCustomizableOptionValue';
  id: Scalars['Int'];
  label: Scalars['String'];
  price: CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
};

export type SelectedPaymentMethod = {
   __typename?: 'SelectedPaymentMethod';
  code: Scalars['String'];
  purchase_order_number?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SelectedShippingMethod = {
   __typename?: 'SelectedShippingMethod';
  amount: Money;
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
};

export type SetBillingAddressOnCartInput = {
  billing_address: BillingAddressInput;
  cart_id: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
   __typename?: 'SetBillingAddressOnCartOutput';
  cart: Cart;
};

export type SetGuestEmailOnCartInput = {
  cart_id: Scalars['String'];
  email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
   __typename?: 'SetGuestEmailOnCartOutput';
  cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
   __typename?: 'SetPaymentMethodOnCartOutput';
  cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String'];
  shipping_addresses: Array<Maybe<ShippingAddressInput>>;
};

export type SetShippingAddressesOnCartOutput = {
   __typename?: 'SetShippingAddressesOnCartOutput';
  cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String'];
  shipping_methods: Array<Maybe<ShippingMethodInput>>;
};

export type SetShippingMethodsOnCartOutput = {
   __typename?: 'SetShippingMethodsOnCartOutput';
  cart: Cart;
};

export enum ShipBundleItemsEnum {
  Together = 'TOGETHER',
  Separately = 'SEPARATELY'
}

export type ShippingAddressInput = {
  address?: Maybe<CartAddressInput>;
  customer_address_id?: Maybe<Scalars['Int']>;
  customer_notes?: Maybe<Scalars['String']>;
};

export type ShippingCartAddress = CartAddressInterface & {
   __typename?: 'ShippingCartAddress';
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type ShippingMethodInput = {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
};

export type SimpleCartItem = CartItemInterface & {
   __typename?: 'SimpleCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type SimpleProduct = ProductInterface & PhysicalProductInterface & CustomizableProductInterface & {
   __typename?: 'SimpleProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
  weight?: Maybe<Scalars['Float']>;
};

export type SimpleProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortField = {
   __typename?: 'SortField';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SortFields = {
   __typename?: 'SortFields';
  default?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SortField>>>;
};

export type StoreConfig = {
   __typename?: 'StoreConfig';
  absolute_footer?: Maybe<Scalars['String']>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_link_url?: Maybe<Scalars['String']>;
  base_media_url?: Maybe<Scalars['String']>;
  base_static_url?: Maybe<Scalars['String']>;
  base_url?: Maybe<Scalars['String']>;
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  category_url_suffix?: Maybe<Scalars['String']>;
  cms_home_page?: Maybe<Scalars['String']>;
  cms_no_cookies?: Maybe<Scalars['String']>;
  cms_no_route?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  default_description?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_keywords?: Maybe<Scalars['String']>;
  default_title?: Maybe<Scalars['String']>;
  demonotice?: Maybe<Scalars['Int']>;
  front?: Maybe<Scalars['String']>;
  grid_per_page?: Maybe<Scalars['Int']>;
  grid_per_page_values?: Maybe<Scalars['String']>;
  head_includes?: Maybe<Scalars['String']>;
  head_shortcut_icon?: Maybe<Scalars['String']>;
  header_logo_src?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  list_mode?: Maybe<Scalars['String']>;
  list_per_page?: Maybe<Scalars['Int']>;
  list_per_page_values?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  logo_alt?: Maybe<Scalars['String']>;
  logo_height?: Maybe<Scalars['Int']>;
  logo_width?: Maybe<Scalars['Int']>;
  no_route?: Maybe<Scalars['String']>;
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  product_url_suffix?: Maybe<Scalars['String']>;
  root_category_id?: Maybe<Scalars['Int']>;
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  secure_base_link_url?: Maybe<Scalars['String']>;
  secure_base_media_url?: Maybe<Scalars['String']>;
  secure_base_static_url?: Maybe<Scalars['String']>;
  secure_base_url?: Maybe<Scalars['String']>;
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  store_name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  title_prefix?: Maybe<Scalars['String']>;
  title_separator?: Maybe<Scalars['String']>;
  title_suffix?: Maybe<Scalars['String']>;
  website_id?: Maybe<Scalars['Int']>;
  weight_unit?: Maybe<Scalars['String']>;
  welcome?: Maybe<Scalars['String']>;
};

export type SwatchData = {
   __typename?: 'SwatchData';
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
   __typename?: 'SwatchLayerFilterItem';
  items_count?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  swatch_data?: Maybe<SwatchData>;
  value_string?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItemInterface = {
  swatch_data?: Maybe<SwatchData>;
};

export type TierPrice = {
   __typename?: 'TierPrice';
  discount?: Maybe<ProductDiscount>;
  final_price?: Maybe<Money>;
  quantity?: Maybe<Scalars['Float']>;
};

export type UpdateCartItemsInput = {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<CartItemUpdateInput>>;
};

export type UpdateCartItemsOutput = {
   __typename?: 'UpdateCartItemsOutput';
  cart: Cart;
};

export type UrlRewrite = {
   __typename?: 'UrlRewrite';
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  url?: Maybe<Scalars['String']>;
};

export enum UrlRewriteEntityTypeEnum {
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT',
  Category = 'CATEGORY'
}

export type VirtualCartItem = CartItemInterface & {
   __typename?: 'VirtualCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type VirtualProduct = ProductInterface & CustomizableProductInterface & {
   __typename?: 'VirtualProduct';
  activity?: Maybe<Scalars['String']>;
  attribute_set_id?: Maybe<Scalars['Int']>;
  canonical_url?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<ProductImage>;
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  new_from_date?: Maybe<Scalars['String']>;
  new_to_date?: Maybe<Scalars['String']>;
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrices>;
  price_range: PriceRange;
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  sale?: Maybe<Scalars['Int']>;
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  small_image?: Maybe<ProductImage>;
  special_from_date?: Maybe<Scalars['String']>;
  special_price?: Maybe<Scalars['Float']>;
  special_to_date?: Maybe<Scalars['String']>;
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  swatch_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<ProductImage>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  url_suffix?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<Maybe<Website>>>;
};

export type VirtualProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export type Website = {
   __typename?: 'Website';
  code?: Maybe<Scalars['String']>;
  default_group_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_default?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type Wishlist = {
   __typename?: 'Wishlist';
  id?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  items_count?: Maybe<Scalars['Int']>;
  sharing_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type WishlistItem = {
   __typename?: 'WishlistItem';
  added_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  qty?: Maybe<Scalars['Float']>;
};

export type WishlistOutput = {
   __typename?: 'WishlistOutput';
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  items_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sharing_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type CartQueryVariables = {
  cartId: Scalars['String']
};


export type CartQuery = (
  { __typename?: 'Query' }
  & { cart: Maybe<(
    { __typename?: 'Cart' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'SimpleCartItem' }
      & Pick<SimpleCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'VirtualCartItem' }
      & Pick<VirtualCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'DownloadableCartItem' }
      & Pick<DownloadableCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'BundleCartItem' }
      & Pick<BundleCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'ConfigurableCartItem' }
      & Pick<ConfigurableCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    )>>>, prices: Maybe<(
      { __typename?: 'CartPrices' }
      & { applied_taxes: Maybe<Array<Maybe<(
        { __typename?: 'CartTaxItem' }
        & Pick<CartTaxItem, 'label'>
        & { amount: (
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        ) }
      )>>>, grand_total: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_excluding_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_including_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_with_discount_excluding_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )> }
    )> }
  )> }
);

export type CartFullQueryVariables = {
  cartId: Scalars['String']
};


export type CartFullQuery = (
  { __typename?: 'Query' }
  & { cart: Maybe<(
    { __typename?: 'Cart' }
    & Pick<Cart, 'email'>
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'SimpleCartItem' }
      & Pick<SimpleCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'VirtualCartItem' }
      & Pick<VirtualCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'DownloadableCartItem' }
      & Pick<DownloadableCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'BundleCartItem' }
      & Pick<BundleCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    ) | (
      { __typename?: 'ConfigurableCartItem' }
      & Pick<ConfigurableCartItem, 'id' | 'quantity'>
      & { product: (
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'url_key' | 'id' | 'sku' | 'name'>
      ) }
    )>>>, billing_address: Maybe<(
      { __typename?: 'BillingCartAddress' }
      & Pick<BillingCartAddress, 'city' | 'company' | 'customer_notes' | 'firstname' | 'lastname' | 'postcode' | 'street' | 'telephone'>
      & { country: (
        { __typename?: 'CartAddressCountry' }
        & Pick<CartAddressCountry, 'code' | 'label'>
      ), region: Maybe<(
        { __typename?: 'CartAddressRegion' }
        & Pick<CartAddressRegion, 'code' | 'label'>
      )> }
    )>, prices: Maybe<(
      { __typename?: 'CartPrices' }
      & { applied_taxes: Maybe<Array<Maybe<(
        { __typename?: 'CartTaxItem' }
        & Pick<CartTaxItem, 'label'>
        & { amount: (
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        ) }
      )>>>, grand_total: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_excluding_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_including_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )>, subtotal_with_discount_excluding_tax: Maybe<(
        { __typename?: 'Money' }
        & Pick<Money, 'currency' | 'value'>
      )> }
    )>, applied_coupon: Maybe<(
      { __typename?: 'AppliedCoupon' }
      & Pick<AppliedCoupon, 'code'>
    )>, selected_payment_method: Maybe<(
      { __typename?: 'SelectedPaymentMethod' }
      & Pick<SelectedPaymentMethod, 'code'>
    )>, shipping_addresses: Array<Maybe<(
      { __typename?: 'ShippingCartAddress' }
      & Pick<ShippingCartAddress, 'city' | 'company' | 'customer_notes' | 'firstname' | 'items_weight' | 'lastname' | 'telephone' | 'street' | 'postcode'>
      & { available_shipping_methods: Maybe<Array<Maybe<(
        { __typename?: 'AvailableShippingMethod' }
        & Pick<AvailableShippingMethod, 'available' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title'>
        & { amount: (
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        ), base_amount: Maybe<(
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        )>, price_excl_tax: (
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        ), price_incl_tax: (
          { __typename?: 'Money' }
          & Pick<Money, 'currency' | 'value'>
        ) }
      )>>>, cart_items: Maybe<Array<Maybe<(
        { __typename?: 'CartItemQuantity' }
        & Pick<CartItemQuantity, 'cart_item_id' | 'quantity'>
      )>>>, country: (
        { __typename?: 'CartAddressCountry' }
        & Pick<CartAddressCountry, 'code' | 'label'>
      ), region: Maybe<(
        { __typename?: 'CartAddressRegion' }
        & Pick<CartAddressRegion, 'code' | 'label'>
      )> }
    )>> }
  )> }
);

export type CategoryPageQueryVariables = {
  id?: Maybe<Scalars['Int']>
};


export type CategoryPageQuery = (
  { __typename?: 'Query' }
  & { category: Maybe<(
    { __typename?: 'CategoryTree' }
    & Pick<CategoryTree, 'name' | 'image' | 'description'>
    & { products: Maybe<(
      { __typename?: 'CategoryProducts' }
      & Pick<CategoryProducts, 'total_count'>
      & { items: Maybe<Array<Maybe<(
        { __typename?: 'VirtualProduct' }
        & Pick<VirtualProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      ) | (
        { __typename?: 'BundleProduct' }
        & Pick<BundleProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<GroupedProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'id' | 'sku' | 'name' | 'stock_status' | 'url_key'>
        & { small_image: Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'label' | 'url'>
        )>, price: Maybe<(
          { __typename?: 'ProductPrices' }
          & { regularPrice: Maybe<(
            { __typename?: 'Price' }
            & { amount: Maybe<(
              { __typename?: 'Money' }
              & Pick<Money, 'currency' | 'value'>
            )> }
          )> }
        )>, short_description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )>, description: Maybe<(
          { __typename?: 'ComplexTextValue' }
          & { __html: ComplexTextValue['html'] }
        )> }
      )>>>, page_info: Maybe<(
        { __typename?: 'SearchResultPageInfo' }
        & Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'>
      )> }
    )> }
  )> }
);

export type CmsBlockQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type CmsBlockQuery = (
  { __typename?: 'Query' }
  & { cmsBlocks: Maybe<(
    { __typename?: 'CmsBlocks' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'CmsBlock' }
      & Pick<CmsBlock, 'content' | 'identifier' | 'title'>
    )>>> }
  )> }
);

export type CmsPageQueryVariables = {
  id?: Maybe<Scalars['Int']>
};


export type CmsPageQuery = (
  { __typename?: 'Query' }
  & { cmsPage: Maybe<(
    { __typename?: 'CmsPage' }
    & Pick<CmsPage, 'content' | 'title' | 'content_heading'>
  )> }
);

export type CustomProductAttributeQueryVariables = {
  attribute_code?: Maybe<Scalars['String']>
};


export type CustomProductAttributeQuery = (
  { __typename?: 'Query' }
  & { customAttributeMetadata: Maybe<(
    { __typename?: 'CustomAttributeMetadata' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'Attribute' }
      & Pick<Attribute, 'attribute_code' | 'attribute_type'>
      & { attribute_options: Maybe<Array<Maybe<(
        { __typename?: 'AttributeOption' }
        & Pick<AttributeOption, 'label' | 'value'>
      )>>> }
    )>>> }
  )> }
);

export type CustomerQueryVariables = {};


export type CustomerQuery = (
  { __typename?: 'Query' }
  & { customer: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'firstname' | 'middlename' | 'lastname' | 'email' | 'dob' | 'taxvat' | 'gender' | 'group_id' | 'is_subscribed'>
    & { addresses: Maybe<Array<Maybe<(
      { __typename?: 'CustomerAddress' }
      & Pick<CustomerAddress, 'id' | 'city' | 'company' | 'country_id' | 'default_billing' | 'default_shipping' | 'vat_id' | 'telephone' | 'suffix' | 'street' | 'region_id' | 'prefix' | 'postcode' | 'fax'>
      & { region: Maybe<(
        { __typename?: 'CustomerAddressRegion' }
        & Pick<CustomerAddressRegion, 'region' | 'region_code' | 'region_id'>
      )> }
    )>>> }
  )> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { customerOrders: Maybe<(
    { __typename?: 'CustomerOrders' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'CustomerOrder' }
      & Pick<CustomerOrder, 'created_at' | 'grand_total' | 'id' | 'increment_id' | 'status'>
    )>>> }
  )> }
);

export type ProductPageQueryVariables = {
  url_key?: Maybe<Scalars['String']>
};


export type ProductPageQuery = (
  { __typename?: 'Query' }
  & { products: Maybe<(
    { __typename?: 'Products' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'VirtualProduct' }
      & Pick<VirtualProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: VirtualProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: SimpleProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
      & SimpleProductDetailsFragment
    ) | (
      { __typename?: 'DownloadableProduct' }
      & Pick<DownloadableProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: DownloadableProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'BundleProduct' }
      & Pick<BundleProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: BundleProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'GroupedProduct' }
      & Pick<GroupedProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: GroupedProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'ConfigurableProduct' }
      & Pick<ConfigurableProduct, 'id' | 'name' | 'sku' | 'url_key' | 'created_at' | 'stock_status' | 'type_id'>
      & { manufacturer: ConfigurableProduct['country_of_manufacture'] }
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    )>>> }
  )> }
);

export type SimpleProductDetailsFragment = (
  { __typename?: 'SimpleProduct' }
  & { options: Maybe<Array<Maybe<(
    { __typename?: 'CustomizableAreaOption' }
    & Pick<CustomizableAreaOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableDateOption' }
    & Pick<CustomizableDateOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableDropDownOption' }
    & Pick<CustomizableDropDownOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableMultipleOption' }
    & Pick<CustomizableMultipleOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableFieldOption' }
    & Pick<CustomizableFieldOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableFileOption' }
    & Pick<CustomizableFileOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableRadioOption' }
    & Pick<CustomizableRadioOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  ) | (
    { __typename?: 'CustomizableCheckboxOption' }
    & Pick<CustomizableCheckboxOption, 'option_id' | 'required' | 'sort_order' | 'title'>
  )>>> }
);

export type ResolveQueryVariables = {
  url: Scalars['String']
};


export type ResolveQuery = (
  { __typename?: 'Query' }
  & { urlResolver: Maybe<(
    { __typename?: 'EntityUrl' }
    & Pick<EntityUrl, 'id' | 'type'>
  )> }
);

export type SearchQueryVariables = {
  search?: Maybe<Scalars['String']>
};


export type SearchQuery = (
  { __typename?: 'Query' }
  & { products: Maybe<(
    { __typename?: 'Products' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'VirtualProduct' }
      & Pick<VirtualProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'DownloadableProduct' }
      & Pick<DownloadableProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'BundleProduct' }
      & Pick<BundleProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'GroupedProduct' }
      & Pick<GroupedProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    ) | (
      { __typename?: 'ConfigurableProduct' }
      & Pick<ConfigurableProduct, 'id' | 'name' | 'url_key' | 'sku' | 'created_at' | 'stock_status' | 'country_of_manufacture'>
      & { description: Maybe<(
        { __typename?: 'ComplexTextValue' }
        & { __html: ComplexTextValue['html'] }
      )>, image: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'label' | 'url'>
      )>, media_gallery_entries: Maybe<Array<Maybe<(
        { __typename?: 'MediaGalleryEntry' }
        & { content: Maybe<(
          { __typename?: 'ProductMediaGalleryEntriesContent' }
          & Pick<ProductMediaGalleryEntriesContent, 'base64_encoded_data'>
        )> }
      )>>>, price: Maybe<(
        { __typename?: 'ProductPrices' }
        & { regularPrice: Maybe<(
          { __typename?: 'Price' }
          & { amount: Maybe<(
            { __typename?: 'Money' }
            & Pick<Money, 'currency' | 'value'>
          )> }
        )> }
      )> }
    )>>> }
  )> }
);

export type TopLevelCategoriesQueryVariables = {};


export type TopLevelCategoriesQuery = (
  { __typename?: 'Query' }
  & { category: Maybe<(
    { __typename?: 'CategoryTree' }
    & { children: Maybe<Array<Maybe<(
      { __typename?: 'CategoryTree' }
      & Pick<CategoryTree, 'url_path' | 'id' | 'name'>
      & { children: Maybe<Array<Maybe<(
        { __typename?: 'CategoryTree' }
        & Pick<CategoryTree, 'url_path' | 'id' | 'name'>
      )>>> }
    )>>> }
  )> }
);

export const SimpleProductDetailsFragmentDoc = gql`
    fragment SimpleProductDetails on SimpleProduct {
  options {
    option_id
    required
    sort_order
    title
  }
}
    `;
export const CartDocument = gql`
    query cart($cartId: String!) {
  cart(cart_id: $cartId) {
    items {
      id
      product {
        url_key
        id
        sku
        name
      }
      quantity
    }
    prices {
      applied_taxes {
        amount {
          currency
          value
        }
        label
      }
      grand_total {
        currency
        value
      }
      subtotal_excluding_tax {
        currency
        value
      }
      subtotal_including_tax {
        currency
        value
      }
      subtotal_with_discount_excluding_tax {
        currency
        value
      }
    }
  }
}
    `;
export type CartComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CartQuery, CartQueryVariables>, 'query'> & ({ variables: CartQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CartComponent = (props: CartComponentProps) => (
      <ApolloReactComponents.Query<CartQuery, CartQueryVariables> query={CartDocument} {...props} />
    );
    
export type CartProps<TChildProps = {}> = ApolloReactHoc.DataProps<CartQuery, CartQueryVariables> & TChildProps;
export function withCart<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CartQuery,
  CartQueryVariables,
  CartProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CartQuery, CartQueryVariables, CartProps<TChildProps>>(CartDocument, {
      alias: 'cart',
      ...operationOptions
    });
};
export type CartQueryResult = ApolloReactCommon.QueryResult<CartQuery, CartQueryVariables>;
export const CartFullDocument = gql`
    query cartFull($cartId: String!) {
  cart(cart_id: $cartId) {
    items {
      id
      product {
        url_key
        id
        sku
        name
      }
      quantity
    }
    billing_address {
      city
      company
      country {
        code
        label
      }
      customer_notes
      firstname
      lastname
      postcode
      region {
        code
        label
      }
      street
      telephone
    }
    email
    prices {
      applied_taxes {
        amount {
          currency
          value
        }
        label
      }
      grand_total {
        currency
        value
      }
      subtotal_excluding_tax {
        currency
        value
      }
      subtotal_including_tax {
        currency
        value
      }
      subtotal_with_discount_excluding_tax {
        currency
        value
      }
    }
    applied_coupon {
      code
    }
    selected_payment_method {
      code
    }
    shipping_addresses {
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        base_amount {
          currency
          value
        }
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          currency
          value
        }
        price_incl_tax {
          currency
          value
        }
      }
      cart_items {
        cart_item_id
        quantity
      }
      city
      company
      country {
        code
        label
      }
      customer_notes
      firstname
      items_weight
      lastname
      telephone
      street
      region {
        code
        label
      }
      postcode
    }
  }
}
    `;
export type CartFullComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CartFullQuery, CartFullQueryVariables>, 'query'> & ({ variables: CartFullQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CartFullComponent = (props: CartFullComponentProps) => (
      <ApolloReactComponents.Query<CartFullQuery, CartFullQueryVariables> query={CartFullDocument} {...props} />
    );
    
export type CartFullProps<TChildProps = {}> = ApolloReactHoc.DataProps<CartFullQuery, CartFullQueryVariables> & TChildProps;
export function withCartFull<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CartFullQuery,
  CartFullQueryVariables,
  CartFullProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CartFullQuery, CartFullQueryVariables, CartFullProps<TChildProps>>(CartFullDocument, {
      alias: 'cartFull',
      ...operationOptions
    });
};
export type CartFullQueryResult = ApolloReactCommon.QueryResult<CartFullQuery, CartFullQueryVariables>;
export const CategoryPageDocument = gql`
    query CategoryPage($id: Int) {
  category(id: $id) {
    name
    image
    description
    products {
      items {
        id
        sku
        name
        stock_status
        small_image {
          label
          url
        }
        url_key
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        short_description {
          __html: html
        }
        description {
          __html: html
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }
}
    `;
export type CategoryPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryPageQuery, CategoryPageQueryVariables>, 'query'>;

    export const CategoryPageComponent = (props: CategoryPageComponentProps) => (
      <ApolloReactComponents.Query<CategoryPageQuery, CategoryPageQueryVariables> query={CategoryPageDocument} {...props} />
    );
    
export type CategoryPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<CategoryPageQuery, CategoryPageQueryVariables> & TChildProps;
export function withCategoryPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryPageQuery,
  CategoryPageQueryVariables,
  CategoryPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryPageQuery, CategoryPageQueryVariables, CategoryPageProps<TChildProps>>(CategoryPageDocument, {
      alias: 'categoryPage',
      ...operationOptions
    });
};
export type CategoryPageQueryResult = ApolloReactCommon.QueryResult<CategoryPageQuery, CategoryPageQueryVariables>;
export const CmsBlockDocument = gql`
    query cmsBlock($id: String) {
  cmsBlocks(identifiers: [$id]) {
    items {
      content
      identifier
      title
    }
  }
}
    `;
export type CmsBlockComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CmsBlockQuery, CmsBlockQueryVariables>, 'query'>;

    export const CmsBlockComponent = (props: CmsBlockComponentProps) => (
      <ApolloReactComponents.Query<CmsBlockQuery, CmsBlockQueryVariables> query={CmsBlockDocument} {...props} />
    );
    
export type CmsBlockProps<TChildProps = {}> = ApolloReactHoc.DataProps<CmsBlockQuery, CmsBlockQueryVariables> & TChildProps;
export function withCmsBlock<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CmsBlockQuery,
  CmsBlockQueryVariables,
  CmsBlockProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CmsBlockQuery, CmsBlockQueryVariables, CmsBlockProps<TChildProps>>(CmsBlockDocument, {
      alias: 'cmsBlock',
      ...operationOptions
    });
};
export type CmsBlockQueryResult = ApolloReactCommon.QueryResult<CmsBlockQuery, CmsBlockQueryVariables>;
export const CmsPageDocument = gql`
    query cmsPage($id: Int) {
  cmsPage(id: $id) {
    content
    title
    content_heading
  }
}
    `;
export type CmsPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CmsPageQuery, CmsPageQueryVariables>, 'query'>;

    export const CmsPageComponent = (props: CmsPageComponentProps) => (
      <ApolloReactComponents.Query<CmsPageQuery, CmsPageQueryVariables> query={CmsPageDocument} {...props} />
    );
    
export type CmsPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<CmsPageQuery, CmsPageQueryVariables> & TChildProps;
export function withCmsPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CmsPageQuery,
  CmsPageQueryVariables,
  CmsPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CmsPageQuery, CmsPageQueryVariables, CmsPageProps<TChildProps>>(CmsPageDocument, {
      alias: 'cmsPage',
      ...operationOptions
    });
};
export type CmsPageQueryResult = ApolloReactCommon.QueryResult<CmsPageQuery, CmsPageQueryVariables>;
export const CustomProductAttributeDocument = gql`
    query customProductAttribute($attribute_code: String) {
  customAttributeMetadata(attributes: {entity_type: "4", attribute_code: $attribute_code}) {
    items {
      attribute_code
      attribute_options {
        label
        value
      }
      attribute_type
    }
  }
}
    `;
export type CustomProductAttributeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CustomProductAttributeQuery, CustomProductAttributeQueryVariables>, 'query'>;

    export const CustomProductAttributeComponent = (props: CustomProductAttributeComponentProps) => (
      <ApolloReactComponents.Query<CustomProductAttributeQuery, CustomProductAttributeQueryVariables> query={CustomProductAttributeDocument} {...props} />
    );
    
export type CustomProductAttributeProps<TChildProps = {}> = ApolloReactHoc.DataProps<CustomProductAttributeQuery, CustomProductAttributeQueryVariables> & TChildProps;
export function withCustomProductAttribute<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CustomProductAttributeQuery,
  CustomProductAttributeQueryVariables,
  CustomProductAttributeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CustomProductAttributeQuery, CustomProductAttributeQueryVariables, CustomProductAttributeProps<TChildProps>>(CustomProductAttributeDocument, {
      alias: 'customProductAttribute',
      ...operationOptions
    });
};
export type CustomProductAttributeQueryResult = ApolloReactCommon.QueryResult<CustomProductAttributeQuery, CustomProductAttributeQueryVariables>;
export const CustomerDocument = gql`
    query customer {
  customer {
    firstname
    middlename
    lastname
    email
    addresses {
      id
      city
      company
      country_id
      default_billing
      default_shipping
      vat_id
      telephone
      suffix
      street
      region_id
      region {
        region
        region_code
        region_id
      }
      prefix
      postcode
      fax
    }
    dob
    taxvat
    gender
    group_id
    is_subscribed
  }
}
    `;
export type CustomerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CustomerQuery, CustomerQueryVariables>, 'query'>;

    export const CustomerComponent = (props: CustomerComponentProps) => (
      <ApolloReactComponents.Query<CustomerQuery, CustomerQueryVariables> query={CustomerDocument} {...props} />
    );
    
export type CustomerProps<TChildProps = {}> = ApolloReactHoc.DataProps<CustomerQuery, CustomerQueryVariables> & TChildProps;
export function withCustomer<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CustomerQuery,
  CustomerQueryVariables,
  CustomerProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CustomerQuery, CustomerQueryVariables, CustomerProps<TChildProps>>(CustomerDocument, {
      alias: 'customer',
      ...operationOptions
    });
};
export type CustomerQueryResult = ApolloReactCommon.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const ProductPageDocument = gql`
    query ProductPage($url_key: String) {
  products(filter: {url_key: {eq: $url_key}}) {
    items {
      id
      name
      sku
      url_key
      created_at
      stock_status
      description {
        __html: html
      }
      manufacturer: country_of_manufacture
      image {
        label
        url
      }
      media_gallery_entries {
        content {
          base64_encoded_data
        }
      }
      stock_status
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
      type_id
      ...SimpleProductDetails
    }
  }
}
    ${SimpleProductDetailsFragmentDoc}`;
export type ProductPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductPageQuery, ProductPageQueryVariables>, 'query'>;

    export const ProductPageComponent = (props: ProductPageComponentProps) => (
      <ApolloReactComponents.Query<ProductPageQuery, ProductPageQueryVariables> query={ProductPageDocument} {...props} />
    );
    
export type ProductPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProductPageQuery, ProductPageQueryVariables> & TChildProps;
export function withProductPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductPageQuery,
  ProductPageQueryVariables,
  ProductPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProductPageQuery, ProductPageQueryVariables, ProductPageProps<TChildProps>>(ProductPageDocument, {
      alias: 'productPage',
      ...operationOptions
    });
};
export type ProductPageQueryResult = ApolloReactCommon.QueryResult<ProductPageQuery, ProductPageQueryVariables>;
export const ResolveDocument = gql`
    query resolve($url: String!) {
  urlResolver(url: $url) {
    id
    type
  }
}
    `;
export type ResolveComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ResolveQuery, ResolveQueryVariables>, 'query'> & ({ variables: ResolveQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ResolveComponent = (props: ResolveComponentProps) => (
      <ApolloReactComponents.Query<ResolveQuery, ResolveQueryVariables> query={ResolveDocument} {...props} />
    );
    
export type ResolveProps<TChildProps = {}> = ApolloReactHoc.DataProps<ResolveQuery, ResolveQueryVariables> & TChildProps;
export function withResolve<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ResolveQuery,
  ResolveQueryVariables,
  ResolveProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ResolveQuery, ResolveQueryVariables, ResolveProps<TChildProps>>(ResolveDocument, {
      alias: 'resolve',
      ...operationOptions
    });
};
export type ResolveQueryResult = ApolloReactCommon.QueryResult<ResolveQuery, ResolveQueryVariables>;
export const SearchDocument = gql`
    query Search($search: String) {
  products(search: $search) {
    items {
      id
      name
      url_key
      sku
      created_at
      stock_status
      description {
        __html: html
      }
      country_of_manufacture
      image {
        label
        url
      }
      media_gallery_entries {
        content {
          base64_encoded_data
        }
      }
      stock_status
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
    }
  }
}
    `;
export type SearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchQuery, SearchQueryVariables>, 'query'>;

    export const SearchComponent = (props: SearchComponentProps) => (
      <ApolloReactComponents.Query<SearchQuery, SearchQueryVariables> query={SearchDocument} {...props} />
    );
    
export type SearchProps<TChildProps = {}> = ApolloReactHoc.DataProps<SearchQuery, SearchQueryVariables> & TChildProps;
export function withSearch<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchQuery,
  SearchQueryVariables,
  SearchProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SearchQuery, SearchQueryVariables, SearchProps<TChildProps>>(SearchDocument, {
      alias: 'search',
      ...operationOptions
    });
};
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export const TopLevelCategoriesDocument = gql`
    query topLevelCategories {
  category(id: 2) {
    children {
      url_path
      id
      name
      children {
        url_path
        id
        name
      }
    }
  }
}
    `;
export type TopLevelCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TopLevelCategoriesQuery, TopLevelCategoriesQueryVariables>, 'query'>;

    export const TopLevelCategoriesComponent = (props: TopLevelCategoriesComponentProps) => (
      <ApolloReactComponents.Query<TopLevelCategoriesQuery, TopLevelCategoriesQueryVariables> query={TopLevelCategoriesDocument} {...props} />
    );
    
export type TopLevelCategoriesProps<TChildProps = {}> = ApolloReactHoc.DataProps<TopLevelCategoriesQuery, TopLevelCategoriesQueryVariables> & TChildProps;
export function withTopLevelCategories<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TopLevelCategoriesQuery,
  TopLevelCategoriesQueryVariables,
  TopLevelCategoriesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TopLevelCategoriesQuery, TopLevelCategoriesQueryVariables, TopLevelCategoriesProps<TChildProps>>(TopLevelCategoriesDocument, {
      alias: 'topLevelCategories',
      ...operationOptions
    });
};
export type TopLevelCategoriesQueryResult = ApolloReactCommon.QueryResult<TopLevelCategoriesQuery, TopLevelCategoriesQueryVariables>;