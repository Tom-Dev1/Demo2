import { Container } from "inversify";
import UserService from "../services/UserService";
import { PostClient } from "../api/PostClient";
const container = new Container();

container.bind<UserService>('UserService').toConstantValue(new UserService());
container.bind<PostClient>('PostClient').toConstantValue(new PostClient());

export default container;