import { Pool } from "pg";

const connectionString =
  "postgres://ycxhnlvr:z7Rnvf6Rz88rAfR_Mx7Yc0KQ5etRPEAp@kesavan.db.elephantsql.com/ycxhnlvr";
const db = new Pool({ connectionString });

export default db;
