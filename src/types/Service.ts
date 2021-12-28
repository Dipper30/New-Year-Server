export interface PostGreeting {
  content: string,
  uid: number,
  visible?: boolean,
  uploadedAt?: number,
}

export interface LikeGreeting {
  uid: number,
  gid: number,
  negative?: boolean,
}

export interface ReportGreeting {
  uid: number,
  gid: number,
  type?: number,
  reason?: string,
  negative?: boolean,
}

export interface PostComment {
  uid: number,
  gid: number,
  content: string,
  root: number,
  visible?: boolean,
  uploadedAt?: number,
}

export interface GetMessage {
  lastCheck?: number,
  uid?: number,
}

export interface PostMessage {
  title_en: string,
  title_zh_cn: string,
  title_ja: string,
  content_en: string,
  content_zh_cn: string,
  content_ja: string,
  to: number,
  uploadedAt?: number,
}

export interface PostFeedback {
  content: string,
  title: string,
  uid?: number,
}