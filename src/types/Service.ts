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