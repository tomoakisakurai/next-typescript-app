export interface ArticleResponse {
  article_id: string
  navigator_no: string
  title: string
  read_text: string // DBの定義がread_textになっているので、この定義になっている(本来はleadかもしれない)
  contents_count: number
  contents_xml: string
  thumbnail_no: number
  thumbnail_image: string
  summary_title: string
  summary_text: string
  relation_memo1_title: string
  relation_memo1_url: string
  relation_memo2_title: string
  relation_memo2_url: string
  relation_memo3_title: string
  relation_memo3_url: string
  relation_memo4_title: string
  relation_memo4_url: string
  relation_memo5_title: string
  relation_memo5_url: string
  visit_date_from: Date
  visit_date_to: Date
  region_id: string
  pref_id: string
  area_id: string
  smallarea_id: string
  region_id_world_traveljp: string
  pref_id_world_traveljp: string
  area_id_world_traveljp: string
  hotel_id: string
  hotel_guide_flg: boolean
  region_jp: string
  pref_jp: string
  mid_area_jp: string
  small_area_jp: string
  region_en: string
  pref_en: string
  mid_area_en: string
  small_area_en: string
  approval_date: Date
  rec_date: Date
  upd_date: Date
  del_flg: boolean
  disable_flg: boolean
  num: string
  tieup_article_id?: any
  article_type: string
  navigator_del_flg: boolean
  navigator_type: number
  navigator_recommend_image?: any
  navigator_recommend_title?: any
  navigator_recommend_url?: any
  navigator_recommend_message?: any
  navigator_recommend_show_start_date?: any
  navigator_recommend_show_end_date?: any
  profile_name: string
  profile_image: string
  profile_introduction: string
  profile_title: string
  profile_company_name: string
  profile_mixi_id: string
  profile_twitter_id: string
  profile_facebook_id: string
  profile_googleplus_id: string
  profile_qualification_name: string
  global_title?: any
  is_event_end: boolean
  term: string
  term_detail: string
  term_exists: boolean
  place: string
  place_exists: boolean
  url: string
  url_exists: boolean
  detail: string
  detail_exists: boolean
  close_flg: boolean
  event_guide_flg: boolean
  is_event_exists: boolean
}

// 記事の本文部分がDBからxml形式で返ってくるとき、タグ名がスネーク形式になっているのでこちらに揃えている。
export interface Article {
  article_id: string
  navigator_no: string
  title: string
  read_text: string // DBの定義がread_textになっているので、この定義になっている(本来はleadかもしれない)
  // contents_count: number;
  contents_xml: ContentsData
  // thumbnail_no: number;
  thumbnail_image: string
  // summary_title: string;
  // summary_text: string;
  // relation_memo1_title: string;
  // relation_memo1_url: string;
  // relation_memo2_title: string;
  // relation_memo2_url: string;
  // relation_memo3_title: string;
  // relation_memo3_url: string;
  // relation_memo4_title: string;
  // relation_memo4_url: string;
  // relation_memo5_title: string;
  // relation_memo5_url: string;
  // visit_date_from: Date;
  // visit_date_to: Date;
  region_id: string
  pref_id: string
  area_id: string
  smallarea_id: string
  // region_id_world_traveljp: string;
  // pref_id_world_traveljp: string;
  // area_id_world_traveljp: string;
  // hotel_id: string;
  // hotel_guide_flg: boolean;
  region_jp: string
  pref_jp: string
  mid_area_jp: string
  small_area_jp: string
  region_en: string
  pref_en: string
  mid_area_en: string
  small_area_en: string
  // approval_date: Date;
  rec_date: Date
  upd_date: Date
  // del_flg: boolean;
  // disable_flg: boolean;
  // num: string;
  // tieup_article_id?: any;
  article_type: string
  // navigator_del_flg: boolean;
  // navigator_type: number;
  // navigator_recommend_image?: any;
  // navigator_recommend_title?: any;
  // navigator_recommend_url?: any;
  // navigator_recommend_message?: any;
  // navigator_recommend_show_start_date?: any;
  // navigator_recommend_show_end_date?: any;
  profile_name: string
  profile_image: string
  profile_introduction: string
  profile_title: string
  // profile_company_name: string;
  // profile_mixi_id: string;
  // profile_twitter_id: string;
  // profile_facebook_id: string;
  // profile_googleplus_id: string;
  // profile_qualification_name: string;
  // global_title?: any;
  // is_event_end: boolean;
  // term: string;
  // term_detail: string;
  // term_exists: boolean;
  // place: string;
  // place_exists: boolean;
  // url: string;
  // url_exists: boolean;
  // detail: string;
  // detail_exists: boolean;
  // close_flg: boolean;
  // event_guide_flg: boolean;
  // is_event_exists: boolean;
}

export interface Location {
  nonRegister: string
  $t: string
}

export interface ImageFrame {
  no: string
  media_type: string
  media: Media | MediaObject
  date: string
  location: Location
  camera: string
  text: string
  pos: string
  thumbnail_flg: string
}

export interface Media {
  media: string
}

export interface MediaObject {
  type: string
  $t: string
}

export interface Content {
  media_title: string
  image_frames: ImageFrame[]
}

// contents_xml で定義されているタグ
export interface ContentsData {
  contentsdata: {
    version: string
    contents: Content[]
  }
}
