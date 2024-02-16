import { ModelStatic } from 'sequelize';
import User from '../database/models/User';
import response from '../utils/response';

class UserService {
  private model: ModelStatic<User> = User;

  async index() {
    const user = await this.model.findAll();

    return response(200, user);
  }
}

export default UserService;
