import db from "../db";
import DatabaseError from "../models/errors/database.error.model";
import User from "../models/user.model";

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `
        SELECT uuid, usename
        FROM application_user
    `;

    const { rows } = await db.query<User>(query);
    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    try {
      const query = `
            SELECT uuid, usename
            FROM application_user
            WHERE uuid = $1
          `;
      const values = [uuid];
      const { rows } = await db.query<User>(query, values);
      const [user] = rows;
      return user;
    } catch (error) {
      throw new DatabaseError("Erro na consulta por ID", error);
    }
  }

  async findByUsernameAndPassword(
    usename: String,
    password: String
  ): Promise<User | null> {
    try {
      const query = `
      SELECT uuid, usename
      FROM application_user
      WHERE usename = $1
      AND password = crypt($2, 'my_salt')
      `;
      const values = [usename, password];
      const { rows } = await db.query<User>(query, values);
      const [user] = rows;
      return user || null;
    } catch (error) {
      throw new DatabaseError("Erro na consulta por user e password", error);
    }
  }

  async create(user: User): Promise<string> {
    const script = `
        INSERT INTO application_user (
            usename,
            password
        )
        VALUES ($1, crypt($2, 'my_salt'))
        RETURNING uuid
    `;

    const values = [user.usename, user.password];

    const { rows } = await db.query<{ uuid: string }>(script, values);
    const [newUser] = rows;
    return newUser.uuid;
  }

  async update(user: User): Promise<void> {
    const script = `
        UPDATE application_user
        SET
            usename = $1,
            password = crypt($2, 'my_salt')
        WHERE uuid = $3
    `;

    const values = [user.usename, user.password, user.uuid];

    await db.query(script, values);
  }

  async remove(uuid: string): Promise<void> {
    const script = `
        DELETE FROM application_user
        WHERE uuid = $1
    `;
    const values = [uuid];

    await db.query(script, values);
  }
}

export default new UserRepository();
