export type User = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
  accessToken: string;
};

// export type User = Pick<
// GoogleResponse,
// 'email' | 'email_verified' | 'family_name' | 'given_name' | 'name' | 'picture'
// > & {
//   token: string | undefined;
// };

// export type GoogleResponse = {
//   aud: string;
//   azp: string;
//   email: string;
//   email_verified: boolean;
//   exp: number;
//   family_name: string;
//   given_name: string;
//   hd: string;
//   iat: number;
//   iss: string;
//   jti: string;
//   name: string;
//   nbf: number;
//   picture: string;
//   sub: string;
// };
