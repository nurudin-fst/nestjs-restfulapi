export class RegisterUserRequest {
    username: string;
    password: string;
    name: string;
}
export class UserRespone {
    username: string;
    name: string;
    token?: string;
}